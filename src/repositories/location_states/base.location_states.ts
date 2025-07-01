import { Prisma } from '@/__generated__/prisma';
import { LocationStateEntityBuilder } from '@/entity_builders/location-state.entity-builder';
import { prismaClient } from '@/prisma';
import { LocationStateEntity } from '@/entities/location-state.entity';

export type LocationStateWithRelations = Prisma.LocationStateGetPayload<{
  include: {
    location_city_page: true;
    location_metro_area: true;
  };
}>;

const getLocationStates = async (): Promise<LocationStateEntity[]> => {
  const states = await prismaClient.locationState.findMany({
    include: {
      location_city_page: true,
      location_metro_area: true,
    },
  });

  return new LocationStateEntityBuilder().buildMany(states);
};

export default getLocationStates;
