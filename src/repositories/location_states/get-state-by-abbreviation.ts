import { prismaClient } from '@/prisma';

const getStateByAbbreviation = (abbr: string) => {
  return prismaClient.locationState.findFirst({
    where: {
      abbreviation: abbr
    },
  });
};

export default getStateByAbbreviation;
