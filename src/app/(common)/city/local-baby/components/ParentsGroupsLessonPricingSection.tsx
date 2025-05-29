import { parentsGroupLessonImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';

const data: LessonPricingSectionType = {
  title: 'Parents & Tots Group Lessons',
  image: parentsGroupLessonImg,
  description:
    'Parents are in the water with their baby/toddler (Aged 6 months- 2.5 years) in a group lesson format.\n* Must organize your own group of 3-6 parent/tot pairs\n* Lesson cost is divided between entire group (as low as $12/lesson/parent)',
  noOfStudent: 'Own group of 3 - 6 Parent Tot/Pairs',
  lessonType: '30 Minute Group Lessons',
  footerLessonSplitInfo:
    'Need help? Call 1-888-788-2140',
  showHelpText: true,
  lessonsPackages: [
    {
      id: 1,
      noOfLessons: 6,
      options: [
        { rate: 'Group', price: 140 },
      ],
      cardColor: 'var(--color-iceBlue)',
      blurPrice: false,
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [
        { rate: 'Group', price: 130, discount: 7 },
      ],
      ribbonText: 'MOST POPULAR',
      ribbonColor: 'var(--color-red)',
      cardColor: 'var(--color-lightPeach)',
      blurPrice: false,
    },
    {
      id: 3,
      noOfLessons: 18,
      options: [
        { rate: 'Group', price: 120, discount: 14 },
      ],
      ribbonText: 'BEST VALUE',
      ribbonColor: 'var(--color-orange)',
      cardColor: 'var(--color-lightYellow)',
      blurPrice: false,
    },
  ],
};

const ParentsGroupsLessonPricingSection = () => {
  return <LessonPricingSection {...data} />;
};

export default ParentsGroupsLessonPricingSection;
