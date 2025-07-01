'use client';

import { localKidPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';
import { useLocalPhoneNumber } from '@/context/phone.context';

const generateData = (options: { phoneNumber: string }): Omit<LessonPricingSectionType, 'lessonsPackages'> => ({
  title: 'Child lessons',
  image: localKidPricingImg,
  description: 'The more lessons you buy, the more you save!',
  noOfStudent: '1 Student',
  lessonType: '30 - 45 Minute private Lessons',
  footerLessonSplitInfo: `*60+ minute lessons can be divided into back-to-back lessons for multiple children\n\nNeed help? Call ${options.phoneNumber}`,
  showHelpText: true,
})

type Props = {
  lessonPackages: LessonPackageEntity[]
}

const LocalKidsLessonsPricing = ({ lessonPackages }: Props) => {
  const localPhone = useLocalPhoneNumber();

  return (
    <LessonPricingSection
      {...generateData({ phoneNumber: localPhone.formatted })}
      lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages)}
    />
  )
};

export default LocalKidsLessonsPricing;
