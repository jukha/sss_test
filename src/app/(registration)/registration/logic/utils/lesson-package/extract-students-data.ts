import { RegistrationForm } from '@/entities/registration-form.entity';
import { StudentsAges } from '@/enum/student-ages.enum';

export const extractStudentNames = (registrationForm?: RegistrationForm | null): string[] => {
  return [
    registrationForm?.studentName1,
    registrationForm?.studentName2,
    registrationForm?.studentName3,
    registrationForm?.studentName4,
    registrationForm?.studentName5,
    registrationForm?.studentName6,
  ].filter(Boolean) as string[];
};

export const extractStudentAges = (registrationForm?: RegistrationForm | null): StudentsAges[] => {
  return [
    registrationForm?.studentAge1,
    registrationForm?.studentAge2,
    registrationForm?.studentAge3,
    registrationForm?.studentAge4,
    registrationForm?.studentAge5,
    registrationForm?.studentAge6,
  ].filter(Boolean) as StudentsAges[];
};
