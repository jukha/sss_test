import { AgeAdultsEnum, StudentsAges } from '@/enum/student-ages.enum';

export const isEveryoneAdults = (studentAges: StudentsAges[]) => {
  return studentAges.every((studentAge) => studentAge === AgeAdultsEnum['18+ Years']);
};
