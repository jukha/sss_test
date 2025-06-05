import { Prisma } from '@/__generated__/prisma';

type Primitive<T> = {
  [K in keyof T]:
    T[K] extends Prisma.Decimal | null ? number :
        T[K] extends bigint | null ? number :
          T[K]
};

export function convertPrismaTypesToNumber<T extends object>(obj: T): Primitive<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newObj: any = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (value instanceof Prisma.Decimal) {
        newObj[key] = value.toNumber();
      } else if (typeof value === 'bigint') {
        newObj[key] = Number(value);
      } else {
        newObj[key] = value;
      }
    }
  }

  return newObj as Primitive<T>;
}

