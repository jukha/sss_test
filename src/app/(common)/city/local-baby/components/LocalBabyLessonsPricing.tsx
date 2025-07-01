import { localBabyLessonsPricingImg } from '@/assets';
import LessonPricingSection from '@/components/sections/LessonPricingSection';
import { LessonPricingSectionType } from '@/types/lesson.types';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { convertLessonPackagesToPricingCardOptions } from '@/utils/convert-lesson-package-to-pricing-card-options';

const data: Omit<LessonPricingSectionType, 'lessonsPackages'> = {
  title: 'Baby lessons',
  image: localBabyLessonsPricingImg,
  description: 'The more lessons you buy, the more you save!',
  noOfStudent: '1+ Student',
  lessonType: '30+ Minute private Lessons',
  headerLessonSplitInfo:'(1Hr+ Can be divided by multiple students)',
  footerLessonSplitInfo: '*60+ minute lessons can be divided into back to back lessons for multiple children',
  showHelpText: true,
};

type Props = {
  lessonPackages: LessonPackageEntity[]
}

const LocalBabyLessonsPricing = ({ lessonPackages }: Props) => {
  return <LessonPricingSection {...data} lessonsPackages={convertLessonPackagesToPricingCardOptions(lessonPackages)} />;
};

export default LocalBabyLessonsPricing;
