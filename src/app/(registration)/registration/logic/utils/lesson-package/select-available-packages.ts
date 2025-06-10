import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';

type SelectAvailablePackagesParams = {
  selectedLessonType?: LessonType | null;
  selectedLessonLength?: number | null;
  packages?: LessonPackageEntity[];
  include25LessonsPackages?: boolean;
};

export const selectAvailablePackages = ({
  selectedLessonType,
  selectedLessonLength,
  packages,
  include25LessonsPackages,
}: SelectAvailablePackagesParams): LessonPackageEntity[] => {
  if (!selectedLessonType || !selectedLessonLength || !packages) {
    return [];
  }

  return packages.filter((pack) => {
    if (!include25LessonsPackages && pack.lessonQty === 25) return;
    return pack.lessonType === selectedLessonType && pack.lessonDurationMinutes === selectedLessonLength;
  });
};
