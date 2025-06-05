'use server';

import { prismaClient } from '@/prisma';
import { InstructorEntityBuilder } from '@/entity_builders/instructor.entity-builder';
import { Instructor } from '@/__generated__/prisma';

type Options = {
  lat: string | number;
  lng: string | number;
  radius?: number;
}

const getInstructorsNearbyLatLng = async ({lat, lng, radius = 25}: Options) => {
  const result = await prismaClient.$queryRaw<unknown[]>`
    SELECT *,
    ROUND((3959 * acos(cos(radians(${lat}))* cos( radians(lat)) *
    cos(radians(lng) - radians(${lng}) ) + sin ( radians(${lat}))
    * sin(radians(lat))))) AS distance, zip
    FROM instructor WHERE lat IS NOT NULL AND lng IS NOT NULL
    AND is_public = 1 AND activity_status = 'Active'
    HAVING distance < ${radius} ORDER BY distance ASC, ISNULL(profile_pic_sm) ASC
  `

  const builder = new InstructorEntityBuilder();
  return builder.buildMany(result as Instructor[])
}

export default getInstructorsNearbyLatLng;
