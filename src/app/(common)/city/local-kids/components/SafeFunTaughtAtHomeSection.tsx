import { safeFunTaughtAtHome } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Safe, fun, and taught at home!',
  media: safeFunTaughtAtHome,
  buttonLink: '/',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop:
    'Looking for the best private kids swim lessons near me? It’s always a Sunsational time to learn to swim in [city or area]! Our private swim lessons in [city] ensure rapid progress in essential water safety skills.',
  descriptionsBottom: [
    'With our Learn-to-Swim Guarantee, if your child can’t demonstrate the “Sunsational Swim Sequence” by the twelfth lesson, we’ll give you up to four additional classes for free! Lessons are available for all ages: infants, toddlers, older children, and adults, helping swimmers gain confidence, safety and skills in weeks, whether at your home pool or a local community pool in the [city] area.',
    'Sunsational Swim School brings essential swim skills to you, helping everyone enjoy the water more safely across the [city nickname or city].',
  ],
};

const SafeFunTaughtAtHomeSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData}/>;
};

export default SafeFunTaughtAtHomeSection;
