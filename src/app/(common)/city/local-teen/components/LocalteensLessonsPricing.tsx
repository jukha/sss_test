import { localTeenLessonPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';

const data: LessonPricingSectionType = {
  title: 'Teen lessons',
  image: localTeenLessonPricingImg,
  description: 'The more lessons you buy, the more you save!',
  noOfStudent: '1+ Student',
  lessonType: '30+ Minute private Lessons',
  headerLessonSplitInfo: '(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo:
    '*60+ minute lessons can be divided into back-to-back lessons for multiple children \n\n Need help? Call 1-888-788-2140',
  showHelpText: true,
  lessonsPackages: [
    {
      id: 1,
      noOfLessons: 6,
      options: [
        { rate: '30 minutes', price: 100 },
        { rate: '60 minutes', price: 120 },
      ],
      cardColor: 'var(--color-iceBlue)',
      blurPrice: false,
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [
        { rate: '30 minutes', price: 95, discount: 5 },
        { rate: '60 minutes', price: 115, discount: 7 },
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
        { rate: '30 minutes', price: 90, discount: 10 },
        { rate: '60 minutes', price: 110, discount: 15 },
      ],
      ribbonText: 'BEST VALUE',
      ribbonColor: 'var(--color-orange)',
      cardColor: 'var(--color-lightYellow)',
      blurPrice: false,
    },
  ],
};

const LocalTeensLessonsPricing = () => {
  return <LessonPricingSection {...data} />;
};

export default LocalTeensLessonsPricing;
