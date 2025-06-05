import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';
import { StudentsAges } from '@/enum/student-ages.enum';
import { isInfantOrToddlerAge } from './is-infant-or-toddler';

type GenerateAvailableLessonTypesParams = {
  studentAges: StudentsAges[];
  packages?: LessonPackageEntity[];
};

export const generateAvailableLessonTypes = ({ studentAges }: GenerateAvailableLessonTypesParams): LessonType[] => {
  if (!studentAges || studentAges?.length == 0) {
    return [];
  }

  const availableTypes: LessonType[] = ['private'];

  const allowBabyAndMeType =
    studentAges.length >= 3 &&
    studentAges.every((studentAge) => {
      return isInfantOrToddlerAge(studentAge);
    });

  if (allowBabyAndMeType) {
    availableTypes.push('baby');
  }

  return availableTypes;
};

const readableLessonType: Record<LessonType, string> = {
  baby: 'Baby & Me Lessons',
  private: 'Private Swim Lessons',
};

export const generateLessonTypesForSelect = (lessonTypes: LessonType[]) => {
  return lessonTypes.map((lessonType) => {
    return {
      text: readableLessonType[lessonType],
      value: lessonType,
    };
  });
};
