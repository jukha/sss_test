import { whyTeenSwimLessonsImportantImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Why are teen swimming lessons so important?',
  media: whyTeenSwimLessonsImportantImg,
  buttonLink: '/',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop:
    'Some teens may feel embarrassed about learning to swim. That’s why private swim lessons are so effective—no audience, no pressure, just one-on-one guidance from a skilled instructor focused on helping your teen succeed.',
  descriptionsBottom: [
    <>
      And yet, <a href='#' className='underline'>Water safety</a> is a life skill that should not be delayed.
      The sooner they start with a <a href='#' className='underline'>private swim instructor</a>, the better
      prepared they’ll be for pool parties, beach trips, or water parks.
    </>,
  ],
};

const WhyTeensSwimLessonsImportantSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default WhyTeensSwimLessonsImportantSection;
