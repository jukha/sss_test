import { PackagePriceMatrix } from '@/__generated__/prisma';
import { GroupedLessonsPricingEntity } from '@/entities/grouped-lessons-pricing.entity';
import { LessonType } from '@/entities/lesson-package.entity';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

export class GroupedLessonsPricingEntityBuilder {
  build(plainEntities: PackagePriceMatrix[], customMapper?: (x: PackagePriceMatrix[], y: GroupedLessonsPricingEntity) => void): GroupedLessonsPricingEntity {
    const dto = plainEntities.reduce<GroupedLessonsPricingEntity>((acc, item) => {
      const primitiveItem = convertPrismaTypesToNumber(item);

      const { lesson_type, lesson_duration_minutes, lesson_qty } = primitiveItem;

      if (!acc[lesson_type]) {
        acc[lesson_type] = {};
      }

      if (!acc[lesson_type][lesson_duration_minutes]) {
        acc[lesson_type][lesson_duration_minutes] = {};
      }

      acc[lesson_type][lesson_duration_minutes][lesson_qty] = {
        id: primitiveItem.id,
        packagePriceTierId: primitiveItem.package_price_tier_id,
        lessonType: primitiveItem.lesson_type as LessonType,
        lessonQty: primitiveItem.lesson_qty,
        lessonDurationMinutes: primitiveItem.lesson_duration_minutes,
        basePay: primitiveItem.base_pay,
        price: primitiveItem.price,
        priceUpsell: primitiveItem.price_upsell,
        discount: primitiveItem.price && primitiveItem.base_pay ? (primitiveItem.base_pay - primitiveItem.price) / primitiveItem.base_pay : null,
        discountUpsell:
          primitiveItem.price_upsell && primitiveItem.base_pay ? (primitiveItem.base_pay - primitiveItem.price_upsell) / primitiveItem.base_pay : null,
      };

      return acc;
    }, {});

    if (customMapper) {
      customMapper(plainEntities, dto);
    }

    return dto;
  }
}
