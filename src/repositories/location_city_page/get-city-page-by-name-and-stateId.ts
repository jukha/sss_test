import { prismaClient } from '@/prisma';

const getCityPageByNameAndStateId = (name: string, stateId: number) => {
  return prismaClient.locationCityPage.findFirst({
    where: {
      AND: {
        name,
        state_id: stateId,
      },
    },
  });
};

export default getCityPageByNameAndStateId;
