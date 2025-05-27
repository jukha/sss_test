import { PrismaClient } from '@/__generated__/prisma';

//Fix BigInts being non JSON stringifyable.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const prismaClient = new PrismaClient()
