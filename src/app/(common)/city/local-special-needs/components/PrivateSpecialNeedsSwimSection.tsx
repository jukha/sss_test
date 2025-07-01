'use client';

import { privateSpecialNeedsImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: { cityName: string, state: string }): GeneralFirstSectionType => ({
  heading1: `Private special needs swim lessons in ${options.cityName}, ${options.state}!`,
  media: privateSpecialNeedsImg,
  buttonLink: '/registration',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop: `When raising a child with special needs, learning to swim can feel like another hurdle – but it’s one that can be overcome. At Sunsational Swim School, we’re proud to offer special needs swim lessons near you in ${options.cityName}. Our experienced instructors teach one-on-one lessons for children with Autism, ADHD, sensory challenges, physical disabilities, and more. Our goal is to help our special needs students build water confidence, improve fitness and learn essential water safety skills.`,
  descriptionsBottom: [
    'We make special needs swim lessons near me convenient by letting you choose the schedule and location – whether it’s in the comfort of your home pool or a community pool. Our patient, caring instructors adapt lessons to your child’s unique needs, ensuring a positive and supportive experience that helps them thrive as safer, happier swimmers.',
  ],
});

const PrivateSpecialNeedsSwimSection = () => {
  const { cityName, metroArea } = useCityPageContext()

  return (
    <GeneralFirstSection
      {...generateGeneralFirstSectionData({ cityName, state: metroArea.stateAbbreviation })}
    />
  )
};

export default PrivateSpecialNeedsSwimSection;
