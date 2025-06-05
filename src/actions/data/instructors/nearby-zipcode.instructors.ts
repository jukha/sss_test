'use server';

import { prismaClient } from '@/prisma';
import { getNearestInstructors } from '@/actions/data/instructors/helpers/get-nearest-instructors';
import { InstructorEntity } from '@/entities/instructor.entity';

type Options = {
  zipCode: string;
  distance: number;
  shouldBePublic?: boolean | null;
  category: string;
}

type ReturnType = Promise<InstructorEntity[]>

const getInstructorsNearbyZipcode = async ({zipCode, distance, shouldBePublic = null, category}: Options): ReturnType => {
  const clientLocation = await prismaClient.locationZipCodeServiced.findUnique({
    where: {
      zip: zipCode,
    },
    include: {
      location_metro_area: {
        select: {
          lat: true,
          lng: true,
        },
      },
    },
  });

  if (!clientLocation) {
    return [];
  }

  return await getNearestInstructors({
    lat: clientLocation!.location_metro_area.lat!,
    lng: clientLocation!.location_metro_area.lng!,
    shouldBePublic,
    category,
    distance,
  });
}

export default getInstructorsNearbyZipcode;
