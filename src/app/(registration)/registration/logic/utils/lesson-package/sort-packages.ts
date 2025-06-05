import { LessonPackageEntity } from '@/entities/lesson-package.entity';

export const byPriceDesc = (a: LessonPackageEntity, b: LessonPackageEntity) => {
  return (a.price || 0) > (b.price || 0) ? -1 : 1;
};

export const byLessonQtyDesc = (a: LessonPackageEntity, b: LessonPackageEntity) => {
  return a.lessonQty > b.lessonQty ? -1 : 1;
};
