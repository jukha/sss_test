import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { populatePackageDiscountValues } from './format-packages';
import { calculatePercentageDiff } from '@/helpers/calculate-percentage-diff';
import { extractPackageForUpgrade } from './extract-package-for-upgrade';

type GenerateLessonPackageSummaryParams = {
  studentsCount: number;
  lessonPrice: number | null;
  registrationFee: number | null;
  availableLessonsPackages?: LessonPackageEntity[];
  selectedLessonPackage?: LessonPackageEntity;
  promocodeSalePrice?: number | null;
  freeLessons?: number | null;
  upgradedFromPackageSize?: number | null;
};

export type LessonPackageSummary = {
  costPerLessonPerStudent: number;

  lessonPrice: number;
  totalLessonsPrice: number;
  packageSize: number;
  lessonTime: number;
  lessonDiscountPercent: number;

  totalRegistrationFee: number;
  registrationFee: number;

  orderTotal: number;
  freeLessons: number | null;
  totalDiscountPercent: number;
  isUpgraded: boolean;

  basePay: number;
  totalBasePay: number;
};

export const generateLessonPackageSummary = ({
  studentsCount,
  lessonPrice,
  registrationFee,
  availableLessonsPackages,
  selectedLessonPackage,
  promocodeSalePrice,
  freeLessons,
  upgradedFromPackageSize,
}: GenerateLessonPackageSummaryParams): LessonPackageSummary => {
  const lessonPriceForCalculations = lessonPrice ?? 0;
  const registrationFeeForCalculations = registrationFee ?? 0;
  const lessonsQty = selectedLessonPackage?.lessonQty ?? 0;
  const savedUSDFromPromocode = promocodeSalePrice ?? 0;
  const basePay = selectedLessonPackage?.basePay ?? 0;

  const totalLessonsPrice = lessonPriceForCalculations * lessonsQty;
  const totalRegistrationFee = registrationFeeForCalculations * studentsCount;

  const populatedPackageDiscountValues = populatePackageDiscountValues(availableLessonsPackages ?? []);

  const packageWithDiscount = populatedPackageDiscountValues.find((pack) => pack.id === selectedLessonPackage?.id);

  const lessonDiscountPercent = packageWithDiscount?.discountPercent ?? 0;
  const orderTotal = totalLessonsPrice + totalRegistrationFee;

  const savedPercentWithPromocode = calculatePercentageDiff(orderTotal, orderTotal - savedUSDFromPromocode);
  const packageForUpgrade = extractPackageForUpgrade({
    initialPackageSize: upgradedFromPackageSize,
    availablePackages: availableLessonsPackages,
  });
  
  return {
    costPerLessonPerStudent: +(lessonPriceForCalculations / studentsCount).toFixed(2),

    lessonPrice: lessonPriceForCalculations,
    totalLessonsPrice: totalLessonsPrice,
    packageSize: selectedLessonPackage?.lessonQty ?? 0,
    lessonTime: selectedLessonPackage?.lessonDurationMinutes ?? 0,

    lessonDiscountPercent: +lessonDiscountPercent.toFixed(1),
    freeLessons: freeLessons ?? null,
    totalDiscountPercent: +(lessonDiscountPercent + savedPercentWithPromocode).toFixed(1),

    totalRegistrationFee,
    registrationFee: registrationFeeForCalculations,

    orderTotal: orderTotal - savedUSDFromPromocode,
    isUpgraded: Boolean(upgradedFromPackageSize && selectedLessonPackage?.lessonQty === packageForUpgrade?.lessonQty),

    basePay,
    totalBasePay: basePay * ((selectedLessonPackage?.lessonQty ?? 0) + (freeLessons ?? 0)),
  };
};

export type ContactDetails = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

export const extractContactDetails = (registrationForm?: RegistrationForm | null): ContactDetails => {
  const { firstName, lastName, email, phone, poolAddress } = registrationForm ?? {};

  return {
    fullName: `${firstName} ${lastName}`,
    email: email ?? '',
    phone: phone ?? '',
    address: poolAddress ?? '',
  };
};
