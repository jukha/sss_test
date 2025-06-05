import { RegistrationForm } from '@/entities/registration-form.entity';
import { sendgrid } from '@/sendgrid';

const validateParentGuardiansEmails = async (registrationForm: RegistrationForm | null) => {
  if (!registrationForm) {
    return;
  }

  const studentsCount = registrationForm.studentsCount;

  if (!studentsCount) {
    return;
  }

  const fieldsErrors: Record<string, string> = {};
  const parentGuardiansEmailKeyPrefix = 'parentGuardianEmail';
  const parentGuardiansEmailsKeysForValidation = new Array(studentsCount)
    .fill(0)
    .map((_, i) => `${parentGuardiansEmailKeyPrefix}${i + 1}`);

  const emailsValidationsPromisesResult = await Promise.allSettled(
    parentGuardiansEmailsKeysForValidation.map((key) => {
      const email = (registrationForm[key as keyof RegistrationForm] ?? '') as string;

      if (!email) {
        return Promise.reject('Required');
      }

      return sendgrid.validateEmail(email);
    })
  );

  emailsValidationsPromisesResult.forEach((promise, i) => {
    const invalid = promise.status === 'rejected' || promise.value === false;
    const errorMessage = promise.status === 'rejected' ? promise.reason : 'Invalid email';

    if (invalid) {
      fieldsErrors[parentGuardiansEmailsKeysForValidation[i]] = errorMessage;
    }
  });

  return fieldsErrors;
};

export const validateUserAndGuardiansEmails = async (registrationForm: RegistrationForm | null) => {
  const errors: Partial<Record<keyof RegistrationForm, string>> = {};

  if (!registrationForm) {
    return null;
  }

  const { email } = registrationForm;

  if (email) {
    const isCurrentUserEmailValid = await sendgrid.validateEmail(email);

    if (!isCurrentUserEmailValid) {
      errors.email = 'Invalid email';
    }
  }

  const parentGuardiansEmailsErrors = await validateParentGuardiansEmails(registrationForm);

  if (parentGuardiansEmailsErrors && Object.values(parentGuardiansEmailsErrors).some(Boolean)) {
    Object.entries(parentGuardiansEmailsErrors).forEach(([fieldName, errorMessage]) => {
      errors[fieldName as keyof RegistrationForm] = errorMessage;
    });
  }

  return errors;
};
