import { LessonPackageEntity } from '@/entities/lesson-package.entity';

type Options = {
  givenPackage: LessonPackageEntity;
  basePackage: LessonPackageEntity;
}

export const calculateLessonPackageDiscount = ({ givenPackage, basePackage }: Options) => {
  if (!givenPackage.price || !basePackage.price) {
    console.error(`Unable to calculate package discount. No package price. Ids: ${givenPackage.id}, ${basePackage.id}`);
    return null;
  }

  if (givenPackage.price > basePackage.price) {
    console.error(`Unable to calculate package discount. Given package price is more than base package price. Ids: ${givenPackage.id}, ${basePackage.id}`);
    return null;
  }

  return Number(((1 - givenPackage.price / basePackage.price) * 100).toFixed(0));
}
