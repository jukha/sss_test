import React from 'react';
import HowItWorksCitiesSection from '../../city/common/HowItWorksCitiesSection';
import {
  howItWorksSectionImage1,
  howItWorksSectionImage2,
  howItWorksSectionImage3,
} from '@/assets';

const content = {
  steps: [
    {
      title: 'Register online',
      titleMaxWidth: 'max-w-[200px]',
      description:
        'Tell us your baby’s needs and skills, and we’ll match you with the perfect Sunsational instructor.',
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
        'Shortly after registering, we’ll introduce you to your hand-selected instructor who will schedule lessons at a time and place that suits you.',
      image: howItWorksSectionImage2,
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
        'Dive in and start making waves! Lessons help your child gain confidence and reach swimming goals quickly.',
      image: howItWorksSectionImage3,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      statText: '100,000+',
      statCaption: 'Swimmers Since 2009',
    },
  ],
};

const HowDoesSunsationalSwimSchoolWork = () => {
  return <HowItWorksCitiesSection {...content} />;
};

export default HowDoesSunsationalSwimSchoolWork;
