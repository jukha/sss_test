import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Is your baby safe around water?',
  buttonLink: '/',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop:
    'Your baby’s first splash should be fun – not stressful. But with drowning being the leading cause of death for young children under the age of four, including babies, water safety isn’t optional – it’s essential. That’s where our top-rated, experienced instructors come in.',
  descriptionsBottom: [
    'Our lessons help your baby progress from their first splashes in the water to advanced safety skills. Our swim instructors teach with gentle, proven techniques like songs, games, and repeated guided movements. Your baby will learn to float, kick, fall into the water, and find the pool edge. We call this skillset the Sunsational Safety Sequence. We even offer parent-and-baby lessons to ease you both into the water together.',
    'Studies show that formal swim lessons can reduce the risk of drowning by 88%, making our infant swim lessons a really important part of family safety. This is especially true if you have a pool in your own backyard, as over 72% of pool drownings occur at home.',
    'Give your baby a head start on safety and building confidence in the water!',
  ],
};

const IsYourBabySafeSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default IsYourBabySafeSection;
