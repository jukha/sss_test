import { LessonType } from '@/entities/lesson-package.entity';
import {
  AgeAdultsEnum,
  AgePreschoolersEnum,
  AgeSchoolAgeEnum,
  AgeTeensEnum,
  StudentsAges,
} from '@/enum/student-ages.enum';

type StudentAgeForLTSG = AgePreschoolersEnum | AgeSchoolAgeEnum | AgeTeensEnum | AgeAdultsEnum;

const studentAgesForLTSG = [
  ...Object.values(AgePreschoolersEnum),
  ...Object.values(AgeSchoolAgeEnum),
  ...Object.values(AgeTeensEnum),
  ...Object.values(AgeAdultsEnum),
];

type GenerateLearnToSwimGuaranteedParams = {
  studentAges: StudentsAges[];
  lessonType?: LessonType | null;
};

export const generateLearnToSwimGuaranteed = ({ studentAges, lessonType }: GenerateLearnToSwimGuaranteedParams) => {
  if (lessonType !== 'private') {
    return false;
  }

  return studentAges.some((studentAge) => studentAgesForLTSG.includes(studentAge as StudentAgeForLTSG));
};
