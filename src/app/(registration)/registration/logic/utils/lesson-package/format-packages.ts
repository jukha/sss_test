import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { byPriceDesc } from './sort-packages';
import { calculatePercentageDiff } from '@/helpers/calculate-percentage-diff';
import { PackageForDisplay } from '../../../components/steps/step4/components/LessonPackageSelector';

type LessonPackageWithDiscountPercent = LessonPackageEntity & {
  discountPercent?: number;
};

export const populatePackageDiscountValues = (packages: LessonPackageEntity[]): LessonPackageWithDiscountPercent[] => {
  const mostExpensivePackage = packages?.toSorted(byPriceDesc)?.[0];

  const attachDiscountValue = (pack: LessonPackageEntity) => {
    if (!mostExpensivePackage) {
      return { ...pack };
    }

    if (pack.id === mostExpensivePackage?.id) {
      return { ...pack };
    }

    return {
      ...pack,
      discountPercent: calculatePercentageDiff(mostExpensivePackage.price || 0, pack.price || 0),
    };
  };

  const packagesWithDiscountValues = packages?.map(attachDiscountValue);
  return packagesWithDiscountValues;
};

const displayLessonPackagesTextByIndex = {
  badge: ['Best value', 'Most popular', 'Introduction'],
  description: ['Champ', 'Essentials', 'Starters'],
};

export const generatePackagesForDisplay = (packages: LessonPackageWithDiscountPercent[]): PackageForDisplay[] => {
  return packages.map((pack, idx) => {
    const badgeIdx = idx % displayLessonPackagesTextByIndex.badge.length;
    const descriptionIdx = idx % displayLessonPackagesTextByIndex.description.length;

    return {
      id: pack.id,
      badgeText: displayLessonPackagesTextByIndex.badge[badgeIdx] ?? '',
      lessonsCount: pack.lessonQty,
      description: displayLessonPackagesTextByIndex.description[descriptionIdx] ?? '',
      price: pack.price || 0,
      salePercent: pack.discountPercent,
      learnGuaranteed: pack.lessonQty >= 12,
    };
  });
};
