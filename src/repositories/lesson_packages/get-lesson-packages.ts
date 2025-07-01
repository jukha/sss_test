import { prismaClient } from '@/prisma';
import { LessonPackageEntityBuilder } from '@/entity_builders/lesson-package.entity-builder';
import catchable from '@/utils/catchable';

type Options = {
  metroAreaId: number;
  type?: 'baby' | 'private';
  durations?: number[];
}

const getLessonPackages = async ({ type, metroAreaId, durations }: Options) => {
  const packagePriceTier = (await prismaClient.locationMetroArea.findUnique({
    where: {
      id: metroAreaId,
    },
    include: {
      package_price_tier: true
    }
  }))!.package_price_tier!

  const matrices = await prismaClient.packagePriceMatrix.findMany({
    where: {
      package_price_tier_id: packagePriceTier.id,
      ...(type ? { lesson_type: type } : {}),
      ...(durations ? { lesson_duration_minutes: { in: durations } } : {})
    }
  });

  return new LessonPackageEntityBuilder().buildMany(matrices);
}

export default catchable(getLessonPackages);
