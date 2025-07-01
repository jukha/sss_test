'use client';

import { localBabyGeneralImage } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: { cityName: string }): GeneralFirstSectionType => ({
  heading1: `Fun, safe & effective baby swim lessons in ${options.cityName}!`,
  media: localBabyGeneralImage,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: `Our ${options.cityName} swim lessons help your little one progress from their first splashes to advanced safety skills using gentle, proven techniques like songs, games, and guided movements, our instructors teach your baby to:`,
  descriptionsBottom: [
    'We call this the Sunsational Safety Sequence. We even offer parent-and-baby lessons to ease you both into the water together.',
    'Studies show that formal swim lessons can reduce the risk of drowning by 88%, making our swim school a crucial part of family safety. This is especially true if you have a home pool, as over 72% of pool drownings occur at home.',
    'Give your baby a head start on safety and building confidence in the water!',
  ],
  buttonType: 'black',
  buttonLink: '/registration',
  buttonText: 'Get Started',
});

const FunSafeEffectiveLessonsSection = () => {
  const {cityName} = useCityPageContext();

  return <GeneralFirstSection {...generateGeneralFirstSectionData({ cityName })} />;
};

export default FunSafeEffectiveLessonsSection;
