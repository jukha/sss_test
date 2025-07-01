'use client';

import { localTeenGeneralImage1 } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: { cityName: string }): GeneralFirstSectionType => ({
  heading1: 'Bring your private swim lessons home with Sunsational Swim School',
  media: localTeenGeneralImage1,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: (
    <>
      Sunsational Swim School offers private teen swim lessons in {options.cityName}{' '}
      for beginner, intermediate, and competitive swimmers. If your teen hasn’t
      learned to swim yet,&nbsp;
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        private swim lessons&nbsp;
      </a>
      are the best way to help them build this essential life skill quickly and
      confidently.
    </>
  ),
  descriptionsBottom: [
    <>
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        Water safety&nbsp;
      </a>
      is a skill that should not be delayed. The sooner they start with a&nbsp;
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        private swim instructor
      </a>
      , the better prepared they’ll be for pool parties, beach trips, or water
      parks.
    </>,
    'Some teens may feel embarrassed about learning to swim. That’s why private swim lessons are so effective—no audience, no pressure, just one-on-one guidance from a skilled instructor focused on helping your teen succeed.',
  ],
  buttonType: 'black',
  buttonLink: '/registration',
  buttonText: 'Get Started',
});

const BringYourPrivateSection = () => {
  const { cityName } = useCityPageContext();
  return <GeneralFirstSection {...generateGeneralFirstSectionData({ cityName })} />;
};

export default BringYourPrivateSection;
