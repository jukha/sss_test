import { registrationSchemas } from '@/app/api/registration/step/schemas/step.schemas';
import { extractZodErrors } from './extract-zod-errors';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';


export const getRegistrationErrors = (
  record: Partial<RegistrationForm>,
  registrationStep: RegistrationStepEnum
) => {
  const schema = registrationSchemas[registrationStep];
  if (!schema) {
    return {};
  }

  const validationResults = schema.safeParse(record);
  return extractZodErrors(validationResults);
};
