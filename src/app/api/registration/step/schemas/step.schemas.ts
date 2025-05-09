import { z } from 'zod';


const step1Schema = z
  .object({
    zip: z
      .string({
        required_error: "Required",
        invalid_type_error: "Must be 5 digits",
      })
      .length(5, 'Must be exactly 5 digits')
      .regex(new RegExp(/^\d{5}$/), 'Must be exactly 5 digits'),

    customerHasAccessToPool: z.boolean(),
  })
  .strict();


export const registrationSchemas: Record<number, z.ZodType> = {
  1: step1Schema,
};
