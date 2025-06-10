import { validateOneEmail, validateEmails, validateEmailsMap } from '@/utils/email-validation';

export type { ValidationRecord } from '@/utils/email-validation';

const validateEmailApi = {
  validateOneEmail,
  validateEmails,
  validateEmailsMap,
};

export default validateEmailApi;
