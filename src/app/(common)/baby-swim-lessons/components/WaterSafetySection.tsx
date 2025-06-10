import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Water safety is always the number one priority',
  buttonText: "Book Now",
  buttonLink: "/registration",
  descriptionTop:
    'Even the most comprehensive and successful water training program isn’t enough to drown-proof your child. Babies should always be within arm’s reach in the water, and children should never swim unsupervised. The goal of baby swimming lessons is to reduce the chance of accidental drowning, but it can’t guarantee to prevent it completely.',
  descriptionsBottom: [
    'Even if your little one was the star of the class, you should still be vigilant in your supervision to ensure that the water provides positive experiences for years to come.',
  ],
};

const WaterSafetySection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default WaterSafetySection;
