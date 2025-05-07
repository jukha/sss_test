export type RegistrationForm = {
  id: number;
  zipCode: number | null;
  poolAccess: boolean | null;
  lastCompletedStep: number;
  completed: boolean;
  anonUserSecret?: string
};
