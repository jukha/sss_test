import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';

type SelectAvailablePackagesParams = {
  selectedLessonType?: LessonType | null;
  selectedLessonLength?: number | null;
  packages?: LessonPackageEntity[];
};

export const selectAvailablePackages = ({
  selectedLessonType,
  selectedLessonLength,
  packages,
}: SelectAvailablePackagesParams): LessonPackageEntity[] => {
  if (!selectedLessonType || !selectedLessonLength || !packages) {
    return [];
  }

  return packages.filter((pack) => {
    return pack.lessonType === selectedLessonType && pack.lessonDurationMinutes === selectedLessonLength;
  });
};
