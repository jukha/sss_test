'use client';

import { localTeenLessonPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';
import { useLocalPhoneNumber } from '@/context/phone.context';

const generateData = (options: { localPhone: string }): Omit<LessonPricingSectionType, 'lessonsPackages'> => ({
  title: 'Teen lessons',
  image: localTeenLessonPricingImg,
  description: 'The more lessons you buy, the more you save!',
  noOfStudent: '1+ Student',
  lessonType: '30+ Minute private Lessons',
  headerLessonSplitInfo: '(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo: `*60+ minute lessons can be divided into back-to-back lessons for multiple children \n\n Need help? Call ${options.localPhone}`,
  showHelpText: true,
});

type Props = {
  lessonPackages: LessonPackageEntity[];
}

const LocalTeensLessonsPricing = ({lessonPackages}: Props) => {
  const localPhone = useLocalPhoneNumber();

  return (
    <LessonPricingSection
      {...generateData({ localPhone: localPhone.formatted })}
      lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages)}
    />
  );
};

export default LocalTeensLessonsPricing;
