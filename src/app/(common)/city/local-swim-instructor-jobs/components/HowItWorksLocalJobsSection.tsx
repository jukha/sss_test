import React from 'react';
import HowItWorksCitiesSection from '../../common/HowItWorksCitiesSection';
import { HowItWorksType } from '@/types/city-how-it-works.type';
import {
  howItWorksLocalPrivateImg2,
  howItWorksLocalPrivateImg3,
  howItWorksSectionImage1,
} from '@/assets';

const content: HowItWorksType = {
  sectionHeader: 'How does Sunsational Swim School work?',
  sectionDescription: 'Start America’s #1 rated swimming lessons at your home pool as easy as 1,2,3',
  steps: [
    {
      title: 'Register Online',
      titleMaxWidth: 'max-w-[200px]',
      description:
        "Students sign up for at-home swimming lessons with Sunsational Swim School",
      image: howItWorksSectionImage1,
      parentCardClasses: 'pb-20',
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      statText: '1,500+',
      statCaption: 'Cities Served',
    },
    {
      title: 'You Choose Your Students',
      description:
        "Choose the students that you want to teach based upon their location, age and desired schedule. Enjoy the flexibility of being able to work around another job, school, etc.",
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
        'Choose from a variety of swim lesson requests based on rates, location and scheduling availability.  Lesson rates vary between $35-60 per hour depending upon your area.',
      image: howItWorksLocalPrivateImg3,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      statText: '100,000+',
      statCaption: 'Swimmers since 2009',
    },
  ],
};

const HowItWorksLocalJobsSection = () => {
  return <HowItWorksCitiesSection {...content} />;
};

export default HowItWorksLocalJobsSection;
