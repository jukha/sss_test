import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'When can babies start swim lessons?',
  media: '/',
  posterImage: sunsationalInstructorImg,
  descriptionTop:
    'From backyard pools to sun-drenched beach days, water is everywhere, but is your baby ready? The American Academy of Pediatrics recommends reducing the risk of accidental drowning by starting swim lessons as early as six months to start building essential water safety skills.\n\n A lifetime of water adventures is such a precious gift for your child. But the foundation of that gift needs to be child water safety skills. Start early, stay safe!',
};

const WhenCanBabyStartSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default WhenCanBabyStartSection;
