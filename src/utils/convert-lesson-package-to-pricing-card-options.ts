import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { LessonPackage } from '@/types/lesson.types';
import { calculateLessonPackageDiscount } from '@/utils/calculate-lesson-package-discount';

const lessonQtyToCardColorMapping: Record<number, string> = {
  6: 'var(--color-iceBlue)',
  12: 'var(--color-lightPeach)',
  18: 'var(--color-lightYellow)',
}

const lessonQtyToRibbonColorMapping: Record<number, string | undefined> = {
  6: undefined,
  12: 'var(--color-red)',
  18: 'var(--color-orange)',
}

const lessonQtyToRibbonTextMapping: Record<number, string | undefined> = {
  6: undefined,
  12: 'MOST POPULAR',
  18: 'BEST VALUE'
}

const lessonDurationToRate = (duration: number) => {
  if (duration === 60) return 'HOUR';
  return `${duration} minutes`;
}

type Options = {
  rateOverride?: (duration: number) => string;
}

const QUANTITIES = [6, 12, 18];

export const convertLessonPackagesToPricingCardOptions = (lessonPackages: LessonPackageEntity[], options?: Options) => {
  const uniqueDurations = [...new Set(lessonPackages.map(p => p.lessonDurationMinutes))];
  const rateConverter = options?.rateOverride || lessonDurationToRate;
  const result: LessonPackage[] = [];

  const createCardOptionsForQuantity = (quantity: number) => {
    const packagesForThisQuantity = lessonPackages.filter(p => p.lessonQty === quantity);

    if (uniqueDurations.some(d => !packagesForThisQuantity.find(p => p.lessonDurationMinutes === d))) {
      return null;
    }

    return {
      id: quantity,
      noOfLessons: quantity,
      cardColor: lessonQtyToCardColorMapping[quantity],
      ribbonColor: lessonQtyToRibbonColorMapping[quantity],
      ribbonText: lessonQtyToRibbonTextMapping[quantity],
      blurPrice: false,
      options: uniqueDurations.map((dur) => {
        const lessonPackage = packagesForThisQuantity.find(p => p.lessonDurationMinutes === dur)!;
        const basePackage = lessonPackages.find(p => p.lessonQty === 6 && p.lessonDurationMinutes === dur)!;

        const discount = calculateLessonPackageDiscount({givenPackage: lessonPackage, basePackage});

        return {
          price: lessonPackage.price || 0,
          discount: discount || undefined,
          rate: rateConverter(dur)
        }
      }),
    }
  }

  for (let i = 0; i < 3; i++) {
    const qty = QUANTITIES[i];

    const cardOptions = createCardOptionsForQuantity(qty);
    if (!cardOptions) continue;

    result.push(cardOptions);
  }

  return result;
}
