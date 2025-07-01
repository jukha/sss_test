import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'When can babies start swim lessons?',
  media: "https://www.youtube.com/embed/8b1d2a3c5f4", // Example video URL
  posterImage: sunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: 'From backyard pools to sun-drenched beach days, water is everywhere, but is your baby ready? The American Academy of Pediatrics recommends reducing the risk of accidental drowning by starting swim lessons as early as six months to start building essential water safety skills.',
  descriptionsBottom: [
    'A lifetime of water adventures is such a precious gift for your child. But the foundation of that gift needs to be child water safety skills. Start early, stay safe!',
  ],
  buttonType: 'black',
  buttonLink: '/registration',
  buttonText: 'Get Started',
};

const WhenBabiesStartSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default WhenBabiesStartSection;
