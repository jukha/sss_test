import {
  StudentsAges,
  Weight30StudentsAges,
  Weight45StudentsAges,
  Weight60StudentsAges,
} from '@/enum/student-ages.enum';

export const generateWeightFromStudentsAge = (studentsAges: StudentsAges[]) => {
  if (!studentsAges.length) {
    return 0;
  }

  const ageWeightMapping: Record<string, number> = {
    ...Object.fromEntries(Weight30StudentsAges.map((age) => [age, 30])),
    ...Object.fromEntries(Weight45StudentsAges.map((age) => [age, 45])),
    ...Object.fromEntries(Weight60StudentsAges.map((age) => [age, 60])),
  };

  return studentsAges.reduce((weight, studentAge) => {
    weight += ageWeightMapping[studentAge];
    return weight;
  }, 0);
};
