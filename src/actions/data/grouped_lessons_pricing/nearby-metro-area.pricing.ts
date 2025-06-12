'use server';

import { prismaClient } from '@/prisma';
import { GroupedLessonsPricingEntityBuilder } from '@/entity_builders/grouped-lessons-pricing.entity-builder';
import { GroupedLessonsPricingEntity } from '@/entities/grouped-lessons-pricing.entity';

type Options = {
  metroAreaId: number;
};

type ReturnType = Promise<GroupedLessonsPricingEntity | null>;

const getNearbyMetroAreaPricing = async ({
  metroAreaId,
}: Options): ReturnType => {
  const metroArea = await prismaClient.locationMetroArea.findUnique({
    where: {
      id: metroAreaId,
    },
  });

  if (!metroArea || !metroArea.package_price_tier_id) {
    return null;
  }

  const pricing = await prismaClient.packagePriceMatrix.findMany({
    where: {
      package_price_tier_id: metroArea.package_price_tier_id,
    },
  });

  const result = new GroupedLessonsPricingEntityBuilder().build(pricing);

  return result;
};

export default getNearbyMetroAreaPricing;
