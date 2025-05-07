export const validateNumberInput = (value: string) => {
  return Number(value.replace(/\D/g, ''));
};
