'use client';

import { localAdultSunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: {city: string}) => ({
  heading1: 'For total beginners or advanced swimmers!',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4', // Example video URL
  posterImage: localAdultSunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: (
    <>
      <span>Sunsational Swim School offers adult swim lessons at home or in your community pool in {options.city}. Whether you&#39;re an adult beginner dipping your toe into the pool for the first time, working to overcome a fear of water, or seeking advanced swim training to complete the 1500-meter swimming split of a triathlon, we’ll be with you every stroke of the way to get you to your goals!</span>
      <span> Our </span>
      <a href='#' className='text-off-black font-bold md:font-medium underline'>expert swim instructors</a>
      <span> provide personalized, 1-on-1 adult </span>
      <a href='#' className='text-off-black font-bold md:font-medium underline'>private swim lessons</a>
      <span> to help you reach your goals. Learn to swim at your own pace with America’s #1 swim school.</span>
    </>
  ),
});

const ForTotalBeginnersSection = () => {
  const { cityName } = useCityPageContext();
  return <GeneralFirstSection {...generateGeneralFirstSectionData({ city: cityName })} />;
};

export default ForTotalBeginnersSection;
