export type LessonType = 'private' | 'baby';

export type LessonPackageEntity = {
  id: number;
  packagePriceTierId: number;
  lessonType: LessonType;
  lessonQty: number;
  lessonDurationMinutes: number;
  price: number | null;
  priceUpsell: number | null;
  basePay: number | null;
};
