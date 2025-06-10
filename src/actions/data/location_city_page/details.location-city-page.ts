'use server';

import { LocationCityPageEntity } from '@/entities/location-city-page.entity';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

type Options = {
  cityId: number;
};

type ReturnType = Promise<LocationCityPageEntity | null>;

const getLocationCityPageDetails = async ({ cityId }: Options): ReturnType => {
  const cityDetails = await prismaClient.locationCityPage.findUnique({
    where: {
      id: cityId,
    },
  });

  return cityDetails ? convertPrismaTypesToNumber(cityDetails) : null;
};

export default getLocationCityPageDetails;
