import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { registrationSchemas } from '@/app/api/registration/step/schemas/step.schemas';
import { extractZodErrors } from '@/utils/extract-zod-errors';


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


type FieldData = {
  fieldName: string,
  fieldValue: unknown
}

function convertFieldDataToRecord ({ fieldName, fieldValue }: FieldData): Record<string, unknown> {
  return {
    [fieldName]: fieldValue
  };
}

function validateRecord (record: Partial<RegistrationForm>, registrationStep: RegistrationStepEnum) {
  const schema = registrationSchemas[registrationStep];
  if (!schema) {
    return {};
  }

  const validationResults = schema.safeParse(record);
  return extractZodErrors(validationResults);
};


export function validateFormStep (formData: Partial<RegistrationForm> | null, registrationStep: RegistrationStepEnum) {
  const record = convertFormDataToRecord(formData);
  const zodErrors = validateRecord(record, registrationStep);

  if (!zodErrors) {
    return null;
  }

  if (Object.keys(zodErrors).length === 0) {
    return null;
  }

  return zodErrors;
}


export type ValidateFormFieldParameters = {
  fieldName: string,
  fieldValue: unknown,
  registrationStep: RegistrationStepEnum
}

export function validateFormField ({ fieldName, fieldValue, registrationStep } : ValidateFormFieldParameters) {
  const record = convertFieldDataToRecord({ fieldName, fieldValue });
  const zodErrors = validateRecord(record, registrationStep);

  const fieldError = zodErrors?.[fieldName];
  if (fieldError) {
    return { [fieldName]: fieldError };
  }

  return {};
}
