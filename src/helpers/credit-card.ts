export const formatCardNumber = (value: string) => {
  const v = value.replace(/\D/g, '').substring(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substring(i, i + 4));
  }

  return parts.join(' ');
};

export const formatExpiryDate = (value: string) => {
  let input = value.replace(/\D/g, '');
  if (input.length > 4) input = input.substring(0, 4);

  if (input.length > 2) {
    input = input.replace(/^(\d{2})/, '$1/');
  }

  if (input.length === 1 && +input > 1) {
    input = `0${input}`;
  }

  return input;
};

export const formatCvv = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 4);
};
