export type RegistrationForm = {
  id: bigint;
  zip: string | null;
  customerHasAccessToPool: boolean | null;
  isRegistrationComplete: boolean;
  registrationFormType: string;
  secret?: string
};
