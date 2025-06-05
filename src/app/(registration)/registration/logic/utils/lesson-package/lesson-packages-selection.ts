import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';
import { StudentsAges } from '@/enum/student-ages.enum';
import { generateRecommendedLessonLength } from './generate-recommended-lesson-length';
import { generateAvailableLessonTypes } from './lesson-types';
import { generateAvailableLessonLengths } from './generate-available-lesson-lengths';
import { selectAvailablePackages } from './select-available-packages';
import { populatePackageDiscountValues } from './format-packages';

type GenerateLessonPackageSelectionOptionsParams = {
  packages?: LessonPackageEntity[];
  studentAges?: StudentsAges[];
  selectedLessonType?: LessonType | null;
  selectedLessonLength?: number | null;
};

export type LessonPackageSelectionOptions = {
  recommendedLessonLength: number;
  lessonTypes: LessonType[];
  lessonLengths: number[];
  packages: LessonPackageEntity[];
};

export const generateLessonPackageSelectionOptions = ({
  packages,
  studentAges = [],
  selectedLessonType,
  selectedLessonLength,
}: GenerateLessonPackageSelectionOptionsParams): LessonPackageSelectionOptions => {
  const recommendedLessonLength = generateRecommendedLessonLength(studentAges);
  const lessonTypes = generateAvailableLessonTypes({ studentAges, packages });
  const lessonLengths = selectedLessonType === 'baby' ? [30] : generateAvailableLessonLengths(studentAges);

  const availablePackages = selectAvailablePackages({ selectedLessonType, selectedLessonLength, packages });
  const packagesWithDiscountValues = populatePackageDiscountValues(availablePackages);

  return {
    recommendedLessonLength,
    lessonTypes,
    lessonLengths,
    packages: packagesWithDiscountValues,
  };
};
