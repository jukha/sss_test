import {
  howItWorksLocalPrivateImg2,
  howItWorksLocalPrivateImg3,
  howItWorksSectionImage1,
} from '@/assets';
import { HowItWorksType } from '@/types/city-how-it-works.type';
import HowItWorksCitiesSection from '../../common/HowItWorksCitiesSection';

const content: HowItWorksType = {
  sectionHeader: 'How does Sunsational Swim School work?',
  steps: [
    {
      title: 'Register Online',
      titleMaxWidth: 'max-w-[200px]',
      description:
        "Tell us what you're looking for in your private swim lessons in [city name] and we'll match you with the perfect Sunsational instructor.",
      image: howItWorksSectionImage1,
      parentCardClasses: 'pb-20',
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      statText: '1,500+',
      statCaption: 'Cities Served',
    },
    {
      title: 'Get Matched',
      description:
        "Shortly after registering, we'll introduce you to your hand-selected instructor, who will contact you to schedule lessons at a time and place that suits you.",
      image: howItWorksLocalPrivateImg2,
      parentCardClasses: 'pb-10 lg:pb-52',
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:left-0',
      statText: '2,000+',
      statCaption: 'Sunsational Swim Instructors',
    },
    {
      title: 'Start Lessons',
      titleMaxWidth: 'max-w-[200px]',
      description:
        'Dive in and start making waves! Our private swim lessons in [city] are designed to help you or your child gain confidence and reach your swimming goals quickly.',
      image: howItWorksLocalPrivateImg3,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      statText: '100,000+',
      statCaption: 'Swimmers since 2009',
    },
  ],
};

const HowItWorksLocalTeenSection = () => {
  return <HowItWorksCitiesSection {...content} />;
};

export default HowItWorksLocalTeenSection;
