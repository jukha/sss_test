export const extractRequiredFieldsFromObject = (
  fullObject: Record<string, unknown>,
  requiredFields: Record<string, unknown>
) => {
  const result: Record<string, unknown> = {};

  for (const key in requiredFields) {
    if (key in fullObject) {
      result[key] = fullObject[key];
    }
  }

  return result;
};
