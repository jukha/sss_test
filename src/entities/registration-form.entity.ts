export type RegistrationForm = {
  id: bigint;
  isRegistrationComplete: boolean;
  registrationFormType: string;
  secret?: string;

  zip: string | null;
  customerHasAccessToPool: boolean | null;

  students?: Student[];

  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  parentGuardians?: ParentGuardian[] | null;
};

export type Student = { name: string; age: string };
export type ParentGuardian = { name: string; email: string };

export type Step3Fields = Pick<
  RegistrationForm,
  'firstName' | 'lastName' | 'email' | 'phone' | 'parentGuardians'
>;
