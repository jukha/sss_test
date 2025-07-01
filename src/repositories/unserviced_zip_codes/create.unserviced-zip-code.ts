import { prismaClient } from '@/prisma';

type Options = {
  zipCode: string;
  state?: string;
}

export const createUnservicedZipCode = async ({zipCode, state}: Options) => {
  const existing = await prismaClient.locationZipCodeUnserviced.findUnique({ where: { zip: zipCode } })

  return prismaClient.locationZipCodeUnserviced.upsert({
    where: { zip: zipCode },
    create: { zip: zipCode, count: 1, state },
    update: { count: (existing?.count || 0) + 1 }
  })
}
