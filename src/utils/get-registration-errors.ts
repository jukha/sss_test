import { registrationSchemas } from '@/app/api/registration/step/schemas/step.schemas';
import { extractZodErrors } from './extract-zod-errors';
import { RegistrationForm } from '@/entities/registration-form.entity';

export const getRegistrationErrors = (
  data: Partial<RegistrationForm>,
  step: number
) => {
  const schema = registrationSchemas[step];
  const validationResults = schema.safeParse(data);
  return extractZodErrors(validationResults);
};
