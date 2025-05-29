import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const content: GeneralFirstSectionType = {
  heading1: 'Water safety is always the number one priority',
  descriptionTop:
    'Even the most comprehensive and successful water training program isn’t enough to drown-proof your child. Babies should always be within arm’s reach in the water, and children should never swim unsupervised. The goal of baby swimming lessons is to reduce the chance of accidental drowning, but it can’t guarantee to prevent it completely.\n\nEven if your little one was the star of the class, you should still be vigilant in your supervision to ensure that the water provides positive experiences for years to come.',
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Book Now',
};

const WaterSafeyPrioritySection = () => {
  return <GeneralFirstSection {...content} />;
};

export default WaterSafeyPrioritySection;
