export type RegistrationForm = {
  id: number;
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

  lessonType: string | null;
  lessonTime: number | null;
  packageSize: number | null;

  orderTotal: number | null;
  lessonCostBeforeDiscount: number | null;
  packageDiscount: number | null;

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
  maxTravelDistance?: string | null;

  policiesAgreement?: boolean;
  youngstersPoliciesAgreement?: boolean;
  haveCustomerBeenHelpedBy?: string | null;
  additionalPoolAccessDetails?: string;
  version: number;

  validatedPromoCode: string | null;
  freeLessons: number | null;
  paidLessons: number | null;
  promoDiscount: number | null;
  upsell_from: number | null;

  hasStudentsAboveThreeYearsOld: boolean | null;

  eligibleLsg: boolean | null;

  basePay: number | null;
  totalBasePay: number | null;

  doWeHaveSIWithPool: boolean | null;
  canWeServe: boolean | null;
  additionalPayForSI: number | null;
  premiumAreaFee: number | null;

  registrationDate: string | null;

  stripeToken: string | null;

  canWeServeText: string | null;

  lg1Signed: boolean | null;
  lg1SigningDate: string | null;

  ad_call: string | null;
};
