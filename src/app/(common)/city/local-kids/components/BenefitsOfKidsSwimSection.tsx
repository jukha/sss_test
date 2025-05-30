import { benefitofPrivateswimLesson } from '@/assets';
import {
  PositiveDynamicIcon,
  ProtectIcon,
  SwimmingPoolIcon,
  TimerIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Benefits of kids swimming lessons in [city]',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitofPrivateswimLesson,
  arrowButtonProps: {
    text: 'Get Started',
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
      title: 'Water safety starts early',
      description:
        'Our kids swimming lessons in [city] teach essential water safety skills from day one. Our Sunsational Swim School instructors focus on helping swimmers learn to swim confidently to recover from unexpected falls into the water. The “Sunsational Swim Sequence” teaches students to turn around, find the wall, and swim to safety.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-black)',
      iconRotateDeg: '',
    },
    {
      title: 'Flexible scheduling for busy [city] families',
      description:
        'You may have to squeeze into your swimsuit, but you don’t have to squeeze our lessons into your calendar! If your Tuesdays and Thursdays are just too hectic, you can schedule lessons for a lazy Saturday morning or a peaceful Friday afternoon. Your Sunsational swimming class fits your schedule, not the other way around.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Personalized instruction for faster progress',
      description:
        'ur experienced teachers make lesson plans guided by each swimmer’s needs and strengths, because every student learns to swim differently. Sunsational’s classes in [city] utilize gentle, encouraging techniques so that kids and adults can conquer fears and learn to swim more quickly.',
      icon: <PositiveDynamicIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Home or community pool: your choice!',
      description:
        'You save time and money when you can choose the location that works best for your family. Sunsational Swim Instructors teach lessons at the [city]-area pool you choose—in your neighborhood or your backyard!',
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
  ],
};

const BenefitsOfKidsSwimSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default BenefitsOfKidsSwimSection;
