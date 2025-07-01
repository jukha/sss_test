import { prismaClient } from '@/prisma';

const getCityPageByNameAndStateAbbr = (name: string, stateAbbr: string) => {
  return prismaClient.locationCityPage.findFirst({
    where: {
      AND: {
        name,
        state_abbreviation: stateAbbr,
      },
    },
  });
};

export default getCityPageByNameAndStateAbbr;
