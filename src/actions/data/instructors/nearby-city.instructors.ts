'use server';

import { prismaClient } from '@/prisma';
import { getNearestInstructors } from '@/actions/data/instructors/helpers/get-nearest-instructors';
import { InstructorEntity } from '@/entities/instructor.entity';

type Options = {
  cityId: number;
  distance: number;
  shouldBePublic?: boolean | null;
  category: string;
}

type ReturnType = Promise<InstructorEntity[]>

const getInstructorsNearbyCity = async ({cityId, distance, shouldBePublic = null, category}: Options): ReturnType => {
  const clientLocation = await prismaClient.locationCityPage.findUnique({
    where: {
      id: cityId,
    },
    select: {
      lat: true,
      lng: true,
    },
  });

  if (!clientLocation || !clientLocation.lat || !clientLocation.lng) {
    return [];
  }

  return await getNearestInstructors({
    lat: clientLocation.lat,
    lng: clientLocation.lng,
    shouldBePublic,
    category,
    distance,
  });
}

export default getInstructorsNearbyCity;
