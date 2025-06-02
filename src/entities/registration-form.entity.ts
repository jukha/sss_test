export type RegistrationForm = {
  id: bigint;
  isRegistrationComplete: boolean | null;
  registrationFormType: string | null;
  secret: string | null;

  zip: string | null;
  customerHasAccessToPool: boolean | null;

  studentsCount: number | null;
  isCustomerAParentGuardianOfAll: boolean | null;
  questionsOfInformationWeShouldNowAboutTheStudents: string | null;
  studentName1: string | null;
  studentName2: string | null;
  studentName3: string | null;
  studentName4: string | null;
  studentName5: string | null;
  studentName6: string | null;
  studentAge1: string | null;
  studentAge2: string | null;
  studentAge3: string | null;
  studentAge4: string | null;
  studentAge5: string | null;
  studentAge6: string | null;

  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  parentGuardianName1: string | null;
  parentGuardianName2: string | null;
  parentGuardianName3: string | null;
  parentGuardianName4: string | null;
  parentGuardianName5: string | null;
  parentGuardianName6: string | null;
  parentGuardianEmail1: string | null;
  parentGuardianEmail2: string | null;
  parentGuardianEmail3: string | null;
  parentGuardianEmail4: string | null;
  parentGuardianEmail5: string | null;
  parentGuardianEmail6: string | null;

  lessonFrequency: number | null;
  customerWouldLikeToBegin: string | null;
  preferredLessonBeginDate: string | null;
  selectedDays: string | null;
  selectedWeekdayTimes: string | null;
  selectedWeekendTimes: string | null;
  flexibleSchedule: boolean | null;
  additionalSchedulingInformation: string | null;

  poolAddress: string | null;
  poolType?: string | null;

  policiesAgreement?: boolean;
  version: number;
};
