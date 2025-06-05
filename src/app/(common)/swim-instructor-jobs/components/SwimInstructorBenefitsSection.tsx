import {  swimInstructorBenefitImg } from '@/assets';
import {
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
  image: swimInstructorBenefitImg,
  arrowButtonProps: {
    text: 'Apply Now',
    link: '/registration',
    iconColor: 'black',
    buttonClasses:
      'bg-offBlack text-white text-xl font-primary min-w-[300px] gap-12 mx-auto',
    IconClasses: 'bg-yellow',
    shadow: true,
    shadowClasses: 'bg-blue',
  },
  sellingReasons: [
    {
      title: 'Set your own schedule',
      description:
        'Choose students based upon location, age and schedule. Enjoy the flexibility to work around another job, school, or other swim clients.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Independent contractor',
      description:
        'Spend more time teaching swim lessons you love. As an independent Sunsational instructor, browse and accept lesson requests that fit your schedule. You decide how many to teach and when',
      icon: <StandingManIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Competitive pay',
      description:
        'Earn $38-$60/hr based upon each lesson package and location in addition to bonuses and other incentives. Also enjoy easy payments with direct deposit',
      icon: <StandingManIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Focus on teaching',
      description:
        "We'll look after finding students for you. Teach on your terms–work part-time, full-time, or just the hours you want",
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-offBlack)',
      iconRotateDeg: '',
    },
  ],
};

const SwimInstructorBenefitsSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default SwimInstructorBenefitsSection;
