import { PackagePriceMatrix } from '@/__generated__/prisma';
import { LessonType, LessonPackageEntity } from '@/entities/lesson-package.entity';

export class LessonPackageEntityBuilder {
  build(plainEntity: PackagePriceMatrix, customMapper?: (x: PackagePriceMatrix, y: LessonPackageEntity) => void): LessonPackageEntity {
    const dto: LessonPackageEntity = {
      id: plainEntity.id,
      packagePriceTierId: plainEntity.package_price_tier_id,
      lessonType: plainEntity.lesson_type as LessonType,
      lessonQty: plainEntity.lesson_qty,
      lessonDurationMinutes: plainEntity.lesson_duration_minutes,
      price: plainEntity.price ? Number(plainEntity.price) : null,
      priceUpsell: plainEntity.price_upsell ? Number(plainEntity.price_upsell) : null,
      basePay: plainEntity.base_pay ? Number(plainEntity.base_pay) : null,
    }

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: PackagePriceMatrix[], customMapper?: (x: PackagePriceMatrix, y: LessonPackageEntity) => void): LessonPackageEntity[] {
    return plainEntities.map((entity: PackagePriceMatrix) => {
      return this.build(entity, customMapper);
    });
  }
}
