import { benefitsOfSwimLessonsForToddlersImg } from '@/assets';
import {
  HappyIcon,
  LearningIcon,
  MessagingIcon,
  MuscleIcon,
  ProtectIcon,
  TrustIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import React from 'react';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Benefits of swim lessons for toddlers',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitsOfSwimLessonsForToddlersImg,
  arrowButtonProps: {
    text: 'Book Now',
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
      title: 'Toddler swimming lessons reduce the risk of drowning',
      description:
        'A 2009 study found that children who take swimming lessons have a significantly 88% lower risk of accidental drowning. Learning to swim is essential for your kid’s safety and confidence in the water.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-yellow)',
      iconRotateDeg: '',
    },
    {
      title: 'Swimming is a lifelong activity',
      description:
        'Unlike many sports, swimming is something children can start at any age, and continue throughout their lives. Swim classes introduce young swimmers to a skill that is best developed early.',
      icon: <LearningIcon />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '',
    },
    {
      title: 'Swimming builds strength and endurance',
      description:
        'Obesity is a rising problem in America, and swimming lessons for toddlers might just be the answer. Swimming is a great full-body workout that improves cardiovascular health and builds muscle strength.',
      icon: <MuscleIcon />,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '',
    },
    {
      title: 'Important skill for fun and safety',
      description:
        'Swimming isn’t just about safety, it’s about enjoying the time in the water with confidence. Swim lessons teach children lifesaving skills while also helping toddlers learn to enjoy swimming for the rest of their lives.',
      icon: <HappyIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Toddlers who swim do better in school',
      description:
        'This might surprise parents, but studies have shown children who undertake swim lessons at an early age develop stronger cognitive and motor skills, which can help them succeed in school. This means they might do better!',
      icon: <MessagingIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'A fun way to stay active and healthy',
      description:
        "Swimming isn't just a fun activity and an important life skill, it's also a fantastic form of exercise. Non-weight bearing and able to work out every single muscle group, starting swim lessons will keep them fit until they're grown!",
      icon: <TrustIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
  ],
};

const BenefitsOfSwimLessonsForToddlers = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default BenefitsOfSwimLessonsForToddlers;
