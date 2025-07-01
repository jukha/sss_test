import { LocationCompetitor } from '@/__generated__/prisma';
import { LocationCompetitorEntityBuilder } from '@/entity_builders/local-competitor.entity-builder';
import { prismaClient } from '@/prisma';

type Options = {
  metroAreaId: number;
  lat: string | number;
  lng: string | number;
  limit?: number;
};

const getNearbySchools = async ({ lat, lng, metroAreaId, limit }: Options) => {
  const result = await prismaClient.$queryRaw<unknown[]>`
    SELECT *,
    ROUND((3959 * acos(cos(radians(${lat}))* cos( radians(lat)) *
    cos(radians(lng) - radians(${lng}) ) + sin ( radians(${lat}))
    * sin(radians(lat))))) AS distance
    FROM location_competitor WHERE lat IS NOT NULL AND lng IS NOT NULL
    AND use_in_comparison = 1
    AND metro_area_id = ${metroAreaId}
    ORDER BY distance ASC
    LIMIT ${limit || Number.MAX_SAFE_INTEGER}
  `;

  const competitors = new LocationCompetitorEntityBuilder().buildMany(result as LocationCompetitor[])
  
  return competitors
};

export default getNearbySchools
