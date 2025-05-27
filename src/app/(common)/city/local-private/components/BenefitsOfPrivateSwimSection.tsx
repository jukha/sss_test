import { benefitofPrivateswimLesson } from '@/assets';
import { PositiveDynamicIcon, ProtectIcon, SwimmingPoolIcon, TimerIcon } from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Benefits of private swimming lessons in [City]',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitofPrivateswimLesson,
  arrowButtonProps: {
    text: 'Book Now',
    link: '/registration',
    iconColor: 'white',
    buttonClasses: 'bg-yellow text-black font-primary min-w-[300px] gap-12 mx-auto',
    IconClasses: 'bg-offBlack',
    shadow: true,
    shadowClasses: 'bg-orange',
  },
  sellingReasons: [
    {
      title: 'Water safety comes first',
      description:
        'Our private swimming lessons in [city] teach essential water safety skills from day one. Our Sunsational Swim School instructors focus on helping swimmers learn how to swim confidently to recover from unexpected falls into the water. The “Sunsational Swim Sequence” teaches students to turn around, find the wall, and swim to safety.',
      icon: <ProtectIcon hasWhiteBg={true}/>,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '',
    },
    {
      title: 'Personalized instruction for faster progress',
      description:
        'Our experienced teachers make lesson plans guided by each swimmer’s needs and strengths, because every student learns to swim differently. Sunsational’s classes in [city] utilize gentle, encouraging techniques so that kids and adults can conquer fears and learn to swim more quickly.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '',
    },
    {
      title: 'Top-rated Instructors',
      description:
        'All Sunsational instructors are CPR/First Aid certified w/ minimum 2 years experience teaching baby lessons',
      icon: <PositiveDynamicIcon />,
      iconFrameColor: 'var(--color-yellow)',
      iconRotateDeg: '',
    },
    {
      title: 'Home or community pool: your choice!',
      description:
        'You save time and money when you can choose the location that works best for your family. Sunsational Swim Instructors teach lessons at the [city]-area pool you choose—in your neighborhood or your backyard!',
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-off-white)',
      iconRotateDeg: '',
    },
  ],
};

const BenefitsOfPrivateSwimSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default BenefitsOfPrivateSwimSection;
