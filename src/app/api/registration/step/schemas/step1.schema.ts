import { z } from 'zod';

const step1Schema = z
  .object({
    zipCode: z
      .number()
      .int()
      .refine((v) => v !== 0, { message: 'Required' })
      .refine((v) => v.toString().length === 5, {
        message: 'Zip code must be 5 symbols long',
      }),
    poolAccess: z.boolean(),
  })
  .strict();

export const registrationSchemas: Record<number, z.ZodType> = {
  1: step1Schema,
};
