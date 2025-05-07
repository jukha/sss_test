import {Registration} from '@/__generated__/prisma';

export const sanitizeRegistration = (registration: Registration) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {anonUserSecret, ...rest} = registration;
  return rest;
}
