import {CustomerRegistration} from '@/__generated__/prisma';


//Fix BigInts being non JSON stringifyable.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};


export const sanitizeRegistration = (registration: CustomerRegistration): Partial<CustomerRegistration> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {secret, ...rest} = registration;
  return rest;
};
