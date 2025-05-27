import { localBabySellingPointsImg } from '@/assets';
import { PlannerV2Icon, RefundIcon, SnorkelIcon, ToDoListIcon } from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Why parents love Sunsational baby swim lessons',
  sectionTitleMaxWidth: 'max-w-[960px]',
  image: localBabySellingPointsImg,
  sellingReasons: [
    {
      title: 'Quick Results',
      description:
        'One-on-one instruction means every lesson is tailored for your baby to get the most out of each session',
      icon: <ToDoListIcon />,
      iconFrameColor: 'var(--color-offBlack)',
      iconRotateDeg: '28deg',
    },
    {
      title: 'Built in Convenience',
      description:
        'Sunsational swim instructors travel to you & work around your schedule',
      icon: <PlannerV2Icon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Top-rated Instructors',
      description:
        'All Sunsational instructors are CPR/First Aid certified w/ minimum 2 years experience teaching baby lessons',
      icon: <SnorkelIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Satisfaction Guaranteed',
      description:
        'Love your lessons or choose a new instructor or refund your unused lesson time',
      icon: <RefundIcon />,
      iconFrameColor: 'var(--color-teal)',
      iconRotateDeg: '',
    },
  ],
};

const WhyParentsLoveSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default WhyParentsLoveSection;
