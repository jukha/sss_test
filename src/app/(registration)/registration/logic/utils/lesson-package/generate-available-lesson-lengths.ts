import { StudentsAges } from '@/enum/student-ages.enum';

export const generateAvailableLessonLengths = (studentAges: StudentsAges[]): number[] => {
  if (!studentAges || studentAges?.length == 0) {
    return [];
  }

  const minutes = [
    [30, 45, 60],
    [60, 90, 120],
    [90, 120, 150],
  ];

  if (studentAges.length === 1) {
    return minutes[0];
  }

  if (studentAges.length === 2) {
    return minutes[1];
  }

  if (studentAges.length >= 3) {
    return minutes[2];
  }

  return [];
};
