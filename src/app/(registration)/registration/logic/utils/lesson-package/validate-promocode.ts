import { LessonType } from '@/entities/lesson-package.entity';
import { PromocodeEntity } from '@/entities/promocode.entity';

type ValidatePromocodeParams = {
  promocode: string;
  promocodes: PromocodeEntity[];
  lessonTime?: number | null;
  packageSize?: number | null;
  lessonType?: LessonType;
};

export const validatePromocode = ({
  promocode,
  promocodes,
  lessonTime,
  packageSize,
  lessonType,
}: ValidatePromocodeParams) => {
  if (lessonType === 'baby' || !lessonTime || !packageSize) {
    return null;
  }

  const foundPromocode = promocodes.find((promocodeData) => {
    return promocodeData.promo === promocode;
  });

  if (!foundPromocode) {
    return null;
  }

  const salePrice = foundPromocode[`off${packageSize}x${lessonTime}`];
  const freeLessons = foundPromocode[`free${packageSize}x${lessonTime}`];

  return {
    salePrice,
    freeLessons,
  };
};
