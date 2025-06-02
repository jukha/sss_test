import { adultLessonsPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';

const data: LessonPricingSectionType = {
  title: 'Adult Lessons',
  image: adultLessonsPricingImg,
  description:
    '1 Hr or longer (add in 30 minute increments). Each hour can be divided by up to 4 students (max of 2 beginners at one time; both beginners must be age 4 yrs or older). 30 minutes private lesson per student to qualify for the guarantee.',
  noOfStudent: '1 - 4 Student',
  lessonType: '60 Minute private or semi-private lessons',
  headerLessonSplitInfo: '(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo:
    'Need help? Call 1-888-788-2140',
  showHelpText: true,
  lessonsPackages: [
    {
      id: 1,
      noOfLessons: 6,
      options: [
        { rate: 'Hour', price: 145 },
      ],
      cardColor: 'var(--color-iceBlue)',
      blurPrice: false,
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [
        { rate: 'Hour', price: 135, discount: 7 },
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
        { rate: 'Hour', price: 130, discount: 10 },
      ],
      ribbonText: 'BEST VALUE',
      ribbonColor: 'var(--color-orange)',
      cardColor: 'var(--color-lightYellow)',
      blurPrice: false,
    },
  ],
};

const LocalAdultLessonsPricing = () => {
  return <LessonPricingSection {...data} />;
};

export default LocalAdultLessonsPricing;
