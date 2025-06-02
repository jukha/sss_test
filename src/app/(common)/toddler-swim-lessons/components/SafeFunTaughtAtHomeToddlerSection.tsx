import { safeFunTaughtAtHomeToddlerImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Safe, fun, and taught at home!',
  media: safeFunTaughtAtHomeToddlerImg,
  buttonLink: '/',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop: "Our instructors have years of experience developing kids' abilities over a short time, and will tailor the lesson pace to your toddler. Gradual development of skills is reinforced with positive feedback and encouragement.",
  descriptionsBottom: [
    'Without the noise and distractions of group lessons, and with competitively priced toddler swimming lessons, Sunsational Swim School is the easy choice. Every child receives a certificate upon completion and a skill chart to track and celebrate their swimming achievements!f',
  ],
};

const SafeFunTaughtAtHomeToddlerSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default SafeFunTaughtAtHomeToddlerSection;
