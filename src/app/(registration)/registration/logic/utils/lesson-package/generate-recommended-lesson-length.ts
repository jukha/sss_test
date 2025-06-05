import { StudentsAges } from '@/enum/student-ages.enum';
import { generateWeightFromStudentsAge } from './generate-weight-from-students-age';

export const generateRecommendedLessonLength = (studentsAges: StudentsAges[]): number => {
  const timeRanges = [
    { min: 130, time: 150 },
    { min: 100, time: 120 },
    { min: 65, time: 90 },
    { min: 46, time: 60 },
    { min: 40, time: 45 },
  ];
  const weight = generateWeightFromStudentsAge(studentsAges);

  for (const range of timeRanges) {
    if (weight >= range.min) {
      return range.time;
    }
  }

  return weight > 0 ? 30 : 0;
};
