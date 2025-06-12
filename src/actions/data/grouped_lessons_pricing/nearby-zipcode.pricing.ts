'use server';

import { prismaClient } from '@/prisma';
import { GroupedLessonsPricingEntityBuilder } from '@/entity_builders/grouped-lessons-pricing.entity-builder';
import { GroupedLessonsPricingEntity } from '@/entities/grouped-lessons-pricing.entity';

type Options = {
  zipCode: string;
};

type ReturnType = Promise<GroupedLessonsPricingEntity | null>;

const getNearbyZipcodePricing = async ({ zipCode }: Options): ReturnType => {
  const location = await prismaClient.locationZipCodeServiced.findUnique({
    where: {
      zip: zipCode,
    },
    include: {
      location_metro_area: {
        select: {
          lat: true,
          lng: true,
          package_price_tier_id: true,
        },
      },
    },
  });

  if (!location || !location.location_metro_area.package_price_tier_id) {
    return null;
  }

  const pricing = await prismaClient.packagePriceMatrix.findMany({
    where: {
      package_price_tier_id: location.location_metro_area.package_price_tier_id,
    },
  });

  const result = new GroupedLessonsPricingEntityBuilder().build(pricing);

  return result;
};

export default getNearbyZipcodePricing;
