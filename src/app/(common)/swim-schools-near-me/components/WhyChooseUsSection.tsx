import React from 'react';
import { swimSchoolsNearMeWhyUs } from '@/assets';
import {
  FastForwardIcon,
  LearningIcon,
  MapMarkerIcon,
  PlannerV2Icon,
  SwimmingPoolIcon,
  UserMaleIcon,
  PoolIconV2,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';

const generateSellingPointsSectionData = (city: string, state: string): SellingPointsSectionType => {
  return {
    sectionTitle: `Why Choose Sunsational Swim School in ${city}, ${state}`,
    sectionTitleMaxWidth: 'max-w-[760px]',
    sectionDescription:
      'If you have your own pool, informed families say Sunsational Swim School is the best choice for convenience, safety, and results.',
    image: swimSchoolsNearMeWhyUs,

    sellingReasons: [
      {
        title: 'Learn Super Fast',
        description: 'One-on-one private lessons help swimmers progress more quickly than group classes.',
        icon: <FastForwardIcon />,
        iconFrameColor: 'var(--color-offBlack)',
        iconRotateDeg: '28deg',
      },
      {
        title: 'Guaranteed Results',
        description:
          'Our Learn to Swim Guarantee ensures water safety skills in 12 lessons or we provide extra lessons for free.',
        icon: <SwimmingPoolIcon />,
        iconFrameColor: 'var(--color-darkBlue)',
        iconRotateDeg: '',
      },
      {
        title: 'Your Pool, Your Schedule',
        description: 'No driving, no waiting—just personalized lessons at your convenience.',
        icon: <PlannerV2Icon />,
        iconFrameColor: 'var(--color-blue)',
        iconRotateDeg: '',
      },
      {
        title: `Top-Rated Instructors in ${city}, ${state}`,
        description: 'Background-checked, experienced, and CPR-certified professionals.',
        icon: <UserMaleIcon />,
        iconFrameColor: 'var(--color-lightBlue)',
        iconRotateDeg: '',
      },
      {
        title: 'All Ages & Skill Levels',
        description: 'From babies to adults, beginners to advanced swimmers.',
        icon: <LearningIcon />,
        iconFrameColor: 'var(--color-yellow)',
        iconRotateDeg: '',
      },
      {
        title: 'Learn where it matters most',
        description:
          'your home pool! Traditional swim schools teach in a different environment, but 87% of drownings happen in home pools. Learning in your own pool ensures that safety skills translate to real-life situations.',
        icon: <PoolIconV2 />,
        iconFrameColor: 'var(--color-orange)',
        iconRotateDeg: '',
      },
      {
        title: `Serving Families Across ${city}, ${state} and Nearby Areas`,
        description: 'Enter your zip code to find an instructor near you!',
        icon: <MapMarkerIcon />,
        iconFrameColor: 'var(--color-red)',
        iconRotateDeg: '',
      },
    ],
  };
};

type Props = {
  city: string;
  state: string;
};

const WhyChooseUsSection: React.FC<Props> = ({ city, state }) => {
  return <SellingPointsSection {...generateSellingPointsSectionData(city, state)} />;
};

export default WhyChooseUsSection;
