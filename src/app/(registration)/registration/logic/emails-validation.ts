import { RegistrationForm } from '@/entities/registration-form.entity';
import validateEmailApi, { ValidationRecord } from '@/actions/email_validation/client-data-api';


const extractValidationErrors = (validationResults: ValidationRecord[]) => {
  const errors = {};

  validationResults.forEach((result) => {
    if (result.serviceFailure) {
      return;
    }

    if (result.isValid) {
      return;
    }

    if (!result?.record?.fieldName) {
      return;
    }

    // @ts-expect-error Dynamic field name construction
    errors[result.record.fieldName] = result.errorMessage;
  });

  return errors;
};


export const validateUserAndGuardiansEmails = async (registrationForm: RegistrationForm | null) => {
  if (!registrationForm) {
    return null;
  }

  const emailsByField = {
    email: registrationForm.email
  };

  const { isCustomerAParentGuardianOfAll, studentsCount } = registrationForm;
  if (!isCustomerAParentGuardianOfAll && studentsCount) {
    for (let i = 1; i <= studentsCount; i++) {
      const fieldName = `parentGuardianEmail${i}`;
      // @ts-expect-error Dynamic field name construction
      emailsByField[fieldName] = registrationForm[fieldName];
    }
  }

  const validationResults = await validateEmailApi.validateEmailsMap(emailsByField);
  // console.log('validationResults', validationResults);

  const errors = extractValidationErrors(validationResults);
  // console.log('errors', errors);

  return errors;
};
