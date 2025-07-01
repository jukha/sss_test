import { prismaClient } from '@/prisma';
import { InstructorEntityBuilder } from '@/entity_builders/instructor.entity-builder';
import { Instructor } from '@/__generated__/prisma';

type Options = {
  lat: string | number;
  lng: string | number;
  radius?: number;
  limit?: number;
  offset?: number;
  coordinatesOnly?: boolean;
}

const getInstructorsNearbyLatLng = async ({lat, lng, radius = 25, offset, limit, coordinatesOnly}: Options) => {
  const result = await prismaClient.$queryRaw<unknown[]>`
    SELECT *,
    ROUND((3959 * acos(cos(radians(${lat}))* cos( radians(lat)) *
    cos(radians(lng) - radians(${lng}) ) + sin ( radians(${lat}))
    * sin(radians(lat))))) AS distance, zip
    FROM instructor WHERE lat IS NOT NULL AND lng IS NOT NULL
    AND is_public = 1 AND activity_status = 'Active'
    HAVING distance < ${radius} ORDER BY distance ASC, instructor_score DESC, ISNULL(profile_pic_sm) ASC
    LIMIT ${limit || Number.MAX_SAFE_INTEGER} OFFSET ${offset || 0}
  `

  const builder = new InstructorEntityBuilder();
  const builtEntities = builder.buildMany(result as Instructor[]);

  if (coordinatesOnly) {
    return builtEntities.map((e) => ({ id: e.id, lat: e.lat, lng: e.lng, name: e.name }));
  }

  return builtEntities;
}

export default getInstructorsNearbyLatLng;
