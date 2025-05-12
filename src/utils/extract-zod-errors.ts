import { z } from 'zod';

export const extractZodErrors = <S>(
  validationResult: z.SafeParseReturnType<S, S>
) => {
  if (!validationResult.error?.errors) return null;

  const validationErrors: Partial<Record<keyof z.infer<z.ZodType<S>>, string>> =
    {};

  for (const error of validationResult.error.errors) {
    if (error.code === 'unrecognized_keys') {
      for (const key of error.keys) {
        validationErrors[key as keyof typeof validationErrors] =
          'Unrecognized key';
      }

      continue;
    }

    validationErrors[error.path[0] as keyof typeof validationErrors] =
      error.message;
  }

  return validationErrors;
};
