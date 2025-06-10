import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';
import { StudentsAges } from '@/enum/student-ages.enum';
import { generateRecommendedLessonLength } from './generate-recommended-lesson-length';
import { generateAvailableLessonTypes } from './lesson-types';
import { generateAvailableLessonLengths } from './generate-available-lesson-lengths';
import { selectAvailablePackages } from './select-available-packages';
import {
  PopulatedLessonPackage,
  populatePackageDiscountValues,
  populatePackageLearntToSwimGuaranteed,
} from './format-packages';

type GenerateLessonPackageSelectionOptionsParams = {
  packages?: LessonPackageEntity[];
  studentAges?: StudentsAges[];
  selectedLessonType?: LessonType | null;
  selectedLessonLength?: number | null;
  include25LessonsPackages?: boolean;
};

export type LessonPackageSelectionOptions = {
  recommendedLessonLength: number;
  lessonTypes: LessonType[];
  lessonLengths: number[];
  packages: PopulatedLessonPackage[];
};

export const generateLessonPackageSelectionOptions = ({
  packages,
  studentAges = [],
  selectedLessonType,
  selectedLessonLength,
  include25LessonsPackages,
}: GenerateLessonPackageSelectionOptionsParams): LessonPackageSelectionOptions => {
  const recommendedLessonLength = generateRecommendedLessonLength(studentAges);
  const lessonTypes = generateAvailableLessonTypes({ studentAges, packages });
  const lessonLengths = selectedLessonType === 'baby' ? [30] : generateAvailableLessonLengths(studentAges);

  const availablePackages = selectAvailablePackages({
    selectedLessonType,
    selectedLessonLength,
    packages,
    include25LessonsPackages,
  });
  const packagesWithDiscountValues = populatePackageDiscountValues(availablePackages);
  const packagesWithLTSGValues = populatePackageLearntToSwimGuaranteed(packagesWithDiscountValues, studentAges, selectedLessonType);

  return {
    recommendedLessonLength,
    lessonTypes,
    lessonLengths,
    packages: packagesWithLTSGValues as PopulatedLessonPackage[],
  };
};
