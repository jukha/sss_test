import { LocationCompetitorEntity } from '@/entities/location-competitor.entity';
import { LocationCompetitorEntityBuilder } from '@/entity_builders/local-competitor.entity-builder';
import { prismaClient } from '@/prisma';

const getLocationCompetitors = async (): Promise<
  LocationCompetitorEntity[]
> => {
  const locationCompetitors = await prismaClient.locationCompetitor.findMany({
    where: {
      use_in_comparison: {
        not: false,
      },
    },
  });

  return new LocationCompetitorEntityBuilder().buildMany(locationCompetitors);
};

export default getLocationCompetitors;
