import { localAdultSunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'For total beginners or advanced swimmers!',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4', // Example video URL
  posterImage: localAdultSunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: [
    "Sunsational Swim School offers adult swim lessons at home or in your community pool in [city]. Whether you're an adult beginner dipping your toe into the pool for the first time, working to overcome a fear of water, or seeking advanced swim training to complete the 1500-meter swimming split of a triathlon, we’ll be with you every stroke of the way to get you to your goals!",
    <>
      Our
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        expert swim instructors&nbsp;
      </a>
      provide personalized, 1-on-1 adult
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        private swim lessons
      </a>
      to help you reach your goals. Learn to swim at your own pace with
      America’s #1 swim school.
    </>,
  ],
};

const ForTotalBeginnersSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default ForTotalBeginnersSection;
