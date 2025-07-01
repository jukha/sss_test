'use client';

import { adultLessonsPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';
import { useLocalPhoneNumber } from '@/context/phone.context';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';

const generateData = (options: { localPhone: string }): Omit<LessonPricingSectionType, 'lessonsPackages'> => ({
  title: 'Adult Lessons',
  image: adultLessonsPricingImg,
  description: '1 Hr or longer (add in 30 minute increments). Each hour can be divided by up to 4 students (max of 2 beginners at one time; both beginners must be age 4 yrs or older). 30 minutes private lesson per student to qualify for the guarantee.',
  noOfStudent: '1 - 4 Student',
  lessonType: '60 Minute private or semi-private lessons',
  headerLessonSplitInfo: '(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo: `Need help? Call ${options.localPhone}`,
  showHelpText: true,
});

type Props = {
  lessonPackages: LessonPackageEntity[]
}

const LocalAdultLessonsPricing = ({ lessonPackages }: Props) => {
  const localPhone = useLocalPhoneNumber();
  return (
    <LessonPricingSection
      {...generateData({ localPhone: localPhone.formatted })}
      lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages)}
    />
  );
};

export default LocalAdultLessonsPricing;
