import { specialNeedsAndAbilitiesPricingSectionImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import React from 'react';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';

const content = {
  title: 'Special Needs And Abilities/ SNAP Swim Lesson Pricing',
  description:
    'The more you buy, the more you save! Have special funding? We accept grants from third-party organizations to support swim lessons for special needs students.',
  noOfStudent: '1 Student',
  lessonType: '30+ Minute Private Lessons',
  headerLessonSplitInfo: '(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo:
    '*60+ minute lessons can be divided into back-to-back lessons for multiple children',
  image: specialNeedsAndAbilitiesPricingSectionImg,
  showHelpText: true,
};

type Props = {
  lessonPackages: LessonPackageEntity[]
}

const SpecialNeedsAndAbilitiesPricingSection = ({ lessonPackages }: Props) => {
  return (
    <LessonPricingSection {...content} lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages)}/>
  )
};

export default SpecialNeedsAndAbilitiesPricingSection;
