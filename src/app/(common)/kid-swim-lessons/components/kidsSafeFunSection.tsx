import { kidsSwimLessonGeneralFeatureImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const content: GeneralFirstSectionType = {
  heading1: 'Safe, fun, and taught at home!',
  descriptionTop:
    "Our goal is to get your child swimming as soon as possible.  Lessons move at a pace that suits your child and our instructors have years of experience in developing kids' abilities over a short period of time.",
  descriptionsBottom: [
    'Without the noise and distractions of group lessons, and with competitively priced child swimming lessons, Sunsational Swim School is the easy choice. Every child receives a certificate upon completion and a skill chart to track and celebrate their swimming achievements!',
  ],
  media: kidsSwimLessonGeneralFeatureImg,
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Get Started',
};

const KidsSafeFunSection = () => {
  return <GeneralFirstSection {...content} />;
};

export default KidsSafeFunSection;
