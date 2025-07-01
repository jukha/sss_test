import { benefitsOfSwimSpecialNeedsimg } from '@/assets';
import {
  HandWithHeartIcon,
  MuscleIcon,
  ProtectIcon,
  TrackAndFieldIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Benefits of swimming lessons for special needs students',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitsOfSwimSpecialNeedsimg,
  arrowButtonProps: {
    text: 'Book Now',
    link: '/registration',
    iconColor: 'black',
    buttonClasses: 'bg-offBlack text-white min-w-[300px] mx-auto',
    IconClasses: 'bg-yellow',
    shadow: true,
    shadowClasses: 'bg-blue',
  },
  sellingReasons: [
    {
      title: 'It could save their lives',
      description:
        'Often it is simply a lack of awareness that causes danger among children with special needs. Our special needs swim lessons educate kids on all aspects of water safety, and the skills they need to survive in a water environment.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '30deg',
    },
    {
      title: 'Help boost confidence & self-esteem',
      description:
        'Many children with special needs have problems with confidence, but successfully learning a new skill like swimming with the help of a special needs swim instructor can make all the difference.',
      icon: <HandWithHeartIcon />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '30deg',
    },
    {
      title: 'It improves their fitness & strength',
      description:
        'Special needs children can benefit from the improvement of strength and fitness that comes with our swim lessons, making them healthier and more capable.',
      icon: <MuscleIcon />,
      iconFrameColor: 'var(--color-yellow)',
      iconRotateDeg: '',
    },
    {
      title: 'Improve coordination & range of motion',
      description:
        'Swimming is an activity that improves balance, coordination and range of motion, all things that many special needs children struggle with. Our talented special needs swim instructors can help your child improve their skills in each area as they learn to swim.',
      icon: <TrackAndFieldIcon />,
      iconFrameColor: 'var(--color-lightYellow)',
      iconRotateDeg: '',
    },
  ],
};

const BenefitsOfSwimLessonsSpecialNeedsSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default BenefitsOfSwimLessonsSpecialNeedsSection;
