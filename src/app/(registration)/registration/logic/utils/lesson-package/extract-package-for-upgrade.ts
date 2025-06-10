import { LessonPackageEntity } from '@/entities/lesson-package.entity';

type ExtractPackageForUpgrade = {
  initialPackageSize?: number | null;
  availablePackages?: LessonPackageEntity[];
};

export const extractPackageForUpgrade = ({ initialPackageSize, availablePackages }: ExtractPackageForUpgrade) => {
  if (!initialPackageSize || !availablePackages?.length) {
    return null;
  }

  const fromPackageSizeToPackageSize: Record<number, number> = {
    6: 12,
    12: 18,
    18: 25,
  };
  const nextPackageSize = fromPackageSizeToPackageSize[initialPackageSize];

  return availablePackages.find((pack) => pack.lessonQty === nextPackageSize);
};
