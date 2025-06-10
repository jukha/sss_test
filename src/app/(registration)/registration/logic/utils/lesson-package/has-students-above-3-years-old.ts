import { AgeInfantsEnum, AgeToddlersEnum, StudentsAges } from '@/enum/student-ages.enum';

const youngerThreeYearsOld = [...Object.values(AgeInfantsEnum), ...Object.values(AgeToddlersEnum)];

export const hasStudentsAboveThreeYearsOld = (studentsAges: StudentsAges[]) => {
  return studentsAges.some(
    (studentAge) => !youngerThreeYearsOld.includes(studentAge as AgeInfantsEnum | AgeToddlersEnum)
  );
};
