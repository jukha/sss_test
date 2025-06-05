import { benefitsOfSwimInstructorImg } from '@/assets';
import {
  DollarBagIcon,
  StandingManIcon,
  SwimmingPoolIcon,
  TimerIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Sunsational Swim Instructor benefits',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitsOfSwimInstructorImg,
  arrowButtonProps: {
    text: 'Apply Now',
    link: '/registration',
    iconColor: 'black',
    buttonClasses:
      'bg-offBlack text-white font-primary min-w-[300px] gap-12 mx-auto',
    IconClasses: 'bg-yellow',
    shadow: true,
    shadowClasses: 'bg-blue',
  },
  sellingReasons: [
    {
      title: 'Set your own schedule',
      description:
        'Choose the students that you wish to teach based upon their location, age and desired schedule. Enjoy the flexibility of being able to work around another job, school, etc.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-offBlack)',
      iconRotateDeg: '30deg',
    },
    {
      title: 'Independent contractor',
      description:
        "As an independent contractor, you work the days and times you want. We handle all your students' customer service needs, billing, and pay you directly.",
      icon: <StandingManIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Competitive pay',
      description:
        'Earn $38-$60/hr based upon each lesson package and location in addition to bonuses and other incentives. Also enjoy easy payments with direct deposit',
      icon: <DollarBagIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '30deg',
    },
    {
      title: 'Focus on teaching',
      description:
        "We'll look after finding students for you. Work part-time, full-time, or just the hours you want.",
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '30deg',
    },
  ],
};

const BenefitsOfSwimInstructorSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default BenefitsOfSwimInstructorSection;
