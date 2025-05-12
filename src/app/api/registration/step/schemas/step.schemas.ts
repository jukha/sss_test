import { Step3Fields } from '@/entities/registration-form.entity';
import { z } from 'zod';

const ERROR_MESSAGES = {
  required: 'Required',
  invalidEmail: 'Invalid email',
  invalidPhone: 'Invalid phone',
};

export const nameSchema = z.string().min(1, ERROR_MESSAGES.required);
export const emailSchema = z
  .string()
  .min(1, ERROR_MESSAGES.required)
  .email(ERROR_MESSAGES.invalidEmail);

const step1Schema = z
  .object({
    zip: z
      .string({
        required_error: ERROR_MESSAGES.required,
        invalid_type_error: 'Must be 5 digits',
      })
      .length(5, 'Must be exactly 5 digits')
      .regex(new RegExp(/^\d{5}$/), 'Must be exactly 5 digits'),

    customerHasAccessToPool: z.boolean(),
  })
  .strict();

export const step3Schema: z.ZodType<Step3Fields> = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    phone: z
      .string()
      .min(1, ERROR_MESSAGES.required)
      .regex(/^\(\d{3}\) \d{3}-\d{4}$/g, ERROR_MESSAGES.invalidPhone),
    parentGuardians: z.array(
      z.object({
        name: nameSchema,
        email: emailSchema,
      })
    ),
  })
  .strict();

export const registrationSchemas: Record<number, z.ZodType> = {
  1: step1Schema,
  3: step3Schema,
};
