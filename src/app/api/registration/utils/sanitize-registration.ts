import {CustomerRegistration} from '@/__generated__/prisma';

export const sanitizeRegistration = (registration: CustomerRegistration): Partial<CustomerRegistration> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {secret, ...rest} = registration;
  return rest;
};
