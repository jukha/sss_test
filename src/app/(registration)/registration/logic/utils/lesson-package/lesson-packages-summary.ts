import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { populatePackageDiscountValues } from './format-packages';

type GenerateLessonPackageSummaryParams = {
  studentsCount: number;
  lessonPrice: number | null;
  registrationFee: number | null;
  availableLessonsPackages?: LessonPackageEntity[];
  selectedLessonPackage?: LessonPackageEntity;
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
};

export const generateLessonPackageSummary = ({
  studentsCount,
  lessonPrice,
  registrationFee,
  availableLessonsPackages,
  selectedLessonPackage,
}: GenerateLessonPackageSummaryParams): LessonPackageSummary => {
  lessonPrice = lessonPrice && !Number.isNaN(+lessonPrice) ? +lessonPrice : 0;
  registrationFee = registrationFee && !Number.isNaN(+registrationFee) ? +registrationFee : 0;
  const lessonsQty = selectedLessonPackage?.lessonQty ?? 0;

  const totalLessonsPrice = lessonPrice * lessonsQty;
  const totalRegistrationFee = registrationFee * studentsCount;

  const populatedPackageDiscountValues = populatePackageDiscountValues(availableLessonsPackages ?? []);

  const packageWithDiscount = populatedPackageDiscountValues.find((pack) => pack.id === selectedLessonPackage?.id);

  const lessonDiscountPercent = packageWithDiscount?.discountPercent ?? 0;

  return {
    costPerLessonPerStudent: +(lessonPrice / studentsCount).toFixed(2),

    lessonPrice: lessonPrice,
    totalLessonsPrice,
    packageSize: selectedLessonPackage?.lessonQty ?? 0,
    lessonTime: selectedLessonPackage?.lessonDurationMinutes ?? 0,
    lessonDiscountPercent,

    totalRegistrationFee: totalRegistrationFee,
    registrationFee: registrationFee,

    orderTotal: totalLessonsPrice + totalRegistrationFee,
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
