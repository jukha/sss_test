import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { getRegistrationErrors } from '@/utils/get-registration-errors';


function convertFormDataToRecord (formData: Partial<RegistrationForm> | null): Record<string, unknown> {
  const record: Record<string, unknown> = {};

  if (!formData) {
    return record;
  }

  for (const [k, v] of Object.entries(formData)) {
    if (v !== null || (typeof v === 'string' && v !== '')) {
      record[k] = v;
    }
  }

  return record;
}


export function validateFormStep (formData: Partial<RegistrationForm> | null, registrationStep: RegistrationStepEnum) {
  const record = convertFormDataToRecord(formData);

  const zodErrors = getRegistrationErrors(record, registrationStep);

  if (!zodErrors) {
    return null;
  }

  if (Object.keys(zodErrors).length === 0) {
    return null;
  }

  return zodErrors;
}


type ValidateFieldParameters = {
  fieldName: string,
  fieldValue: unknown,
  registrationStep: RegistrationStepEnum
}


export function validateFormField ({ fieldName, fieldValue, registrationStep } : ValidateFieldParameters) {
  const record: Record<string, unknown> = {
    [fieldName]: fieldValue
  };

  const zodErrors = getRegistrationErrors(record, registrationStep);

  const fieldError = zodErrors?.[fieldName];
  if (fieldError) {
    return {
      [fieldName]: fieldError
    };
  }

  return {};
}
