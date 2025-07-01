'use client';

import { localTeenWhyChooseUs } from '@/assets';
import {
  PositiveDynamicIcon,
  ProtectIcon,
  SwimmingPoolIcon,
  TimerIcon
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateSellingPointsSectionData = (options: { cityName: string }): SellingPointsSectionType => ({
  sectionTitle: `Why choose Sunsational Swim School for your teen swim lessons in ${options.cityName}`,
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: localTeenWhyChooseUs,
  arrowButtonProps: {
    text: 'Get Started',
    buttonClasses: 'bg-offBlack text-white min-w-[300px] mx-auto',
  },
  sellingReasons: [
    {
      title: 'Water safety starts early',
      description: `Our private swimming lessons in ${options.cityName} teach essential water safety skills from day one. The “Sunsational Swim Sequence” teaches students to turn around, find the wall, and swim to safety.`,
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-offBlack)',
      iconRotateDeg: '28deg',
    },
    {
      title: `Flexible scheduling for busy ${options.cityName} families`,
      description: 'You may have to squeeze into your swimsuit, but you don’t have to squeeze our lessons into your calendar! Your Sunsational swimming class fits your schedule, not the other way around.',
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Personalized instruction for faster progress',
      description: `Our instructors make lesson plans guided by each swimmer’s needs and strengths. Sunsational’s teen classes in ${options.cityName} utilize gentle, encouraging techniques so teens can conquer fears and learn to swim more quickly.`,
      icon: <PositiveDynamicIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Home or community pool: your choice!',
      description: `You save time and money when you can choose the location that works best for your family. Sunsational Swim Instructors teach teen lessons at the ${options.cityName}-area pool you choose—in your neighborhood or your backyard!`,
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
  ],
});

const WhyChooseUsForTeenSection = () => {
  const { cityName } = useCityPageContext();
  return <SellingPointsSection {...generateSellingPointsSectionData({ cityName })} />;
};

export default WhyChooseUsForTeenSection;
