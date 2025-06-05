import { teachSwimChangeImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Teach swimming, change lives, and earn great pay!',
  media: teachSwimChangeImg,
  descriptionTop:
    'Looking for aquatic jobs or swim instructor jobs near me? Join our team, teach local swimmers, and make a real impact in your community – all while earning $38-$60 per hour with flexible hours.',
};

const TeachSwimChangeSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default TeachSwimChangeSection;
