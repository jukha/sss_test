import { lessonsForWaterSafetyImg } from '@/assets';
import {
  HomeIconBlack,
  StandingManIcon,
  SwimmingPoolIcon,
  TimerIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle:
    'Private swim lessons to build water safety, confidence, and skills',
  sectionDescription:
    'While group lessons can introduce water skills, private lessons provide the focused attention children need to build confidence, improve safety, and learn faster.',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: lessonsForWaterSafetyImg,
  arrowButtonProps: {
    text: 'Buy a gift certificate today',
    link: '/registration',
    iconColor: 'white',
    buttonClasses:
      'bg-yellow text-black font-primary min-w-[300px] gap-12 mx-auto',
    IconClasses: 'bg-offBlack',
    shadow: true,
    shadowClasses: 'bg-orange',
  },
  sellingReasons: [
    {
      title: '',
      description: (
        <>
          With Sunsational Swim School’s{' '}
          <a href='#' className='underline'>
            Learn-to-Swim Guarantee
          </a>{' '}
          and flexible scheduling, private lessons offer:
        </>
      ),
      icon: null,
      iconFrameColor: '',
      iconRotateDeg: '',
    },
    {
      title: 'Faster Progress',
      description:
        'One-on-one instruction helps kids overcome their fear of the water and master skills quickly.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Personalized Safety Training',
      description:
        'Lessons are tailored to your child’s needs, teaching vital survival skills like floating, safe exits, and self-rescue.',
      icon: <StandingManIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Fewer Distractions',
      description:
        'Focused attention ensures immediate feedback, accelerating learning.',
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '',
    },
    {
      title: 'Familiar, Safe Environment',
      description:
        'Lessons take place at your home pool, where kids feel most comfortable and confident.',
      icon: <HomeIconBlack />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '',
    },
  ],
};

const LessonsForWaterSafetySection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default LessonsForWaterSafetySection;
