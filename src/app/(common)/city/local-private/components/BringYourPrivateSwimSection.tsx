'use client';

import { bringYourPrivateSwimImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: { cityName: string }): GeneralFirstSectionType => ({
  heading1: 'Bring your private swim lessons home with Sunsational Swim School',
  media: bringYourPrivateSwimImg,
  buttonLink: '/registration',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop: (
    <>
      With our <a href='#' className='text-off-black font-bold md:font-medium md:text-red underline'>Learn-to-Swim Guarantee</a>, if your child can’t demonstrate the
      “Sunsational Swim Sequence” by the twelfth lesson, we’ll give you up to
      four additional classes for free! Lessons are available for all ages:
      infants, toddlers, older children, and adults, helping swimmers gain
      confidence, safety and skills in weeks, whether at your home pool or a
      local community pool in the {options.cityName} area.
    </>
  ),
  descriptionsBottom: [
    `Sunsational Swim School brings essential swim skills to you, helping everyone enjoy the water more safely across ${options.cityName}.`,
  ],
});

const BringYourPrivateSwimSection = () => {
  const { cityName } = useCityPageContext();
  return <GeneralFirstSection {...generateGeneralFirstSectionData({ cityName })} />;
};

export default BringYourPrivateSwimSection;
