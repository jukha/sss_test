import { prismaClient } from '@/prisma';

const getCitiesPagesByStateId = (stateId: number) => {
  return prismaClient.locationCityPage.findMany({
    where: {
      state_id: stateId,
    },
  });
};

export default getCitiesPagesByStateId;
