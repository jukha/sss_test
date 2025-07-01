'use client';

import { parentsGroupLessonImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';
import { useLocalPhoneNumber } from '@/context/phone.context';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';

const generateData = (options: { localPhone: string }): Omit<LessonPricingSectionType, 'lessonsPackages'> => {
  return {
    title: 'Parents & Tots Group Lessons',
    image: parentsGroupLessonImg,
    description: 'Parents are in the water with their baby/toddler (Aged 6 months-2.5 years) in a group lesson format.\n*Must organize your own group of 3-6 parent/tot pairs\n*Lesson cost is divided between entire group (as low as $12/lesson/parent)',
    noOfStudent: 'Own group of 3 - 6 Parent Tot/Pairs',
    lessonType: '30 Minute Group Lessons',
    footerLessonSplitInfo: `Need help? Call ${options.localPhone}`,
    showHelpText: true,
  }
};

type Props = {
  lessonPackages: LessonPackageEntity[]
}

const ParentsGroupsLessonPricingSection = ({ lessonPackages }: Props) => {
  const localPhone = useLocalPhoneNumber();

  return (
    <LessonPricingSection
      {...generateData({ localPhone: localPhone.formatted })}
      lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages, {rateOverride: () => 'GROUP'})}
    />
  );
};

export default ParentsGroupsLessonPricingSection;
