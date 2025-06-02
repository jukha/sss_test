import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Adult swim lessons that come to you!',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4', // Example video URL
  posterImage: sunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: [
    "Sunsational Swim School offers adult swim lessons at home or in your community pool. Whether you're an adult beginner dipping your toe into the pool for the first time, working to overcome a fear of water, or are seeking advanced swim training to complete the 1500-meter swimming split of a triathlon, we’ll be with you every stroke of the way to get you to your goals!",
  ],
};

const AdultLessonsToYouSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default AdultLessonsToYouSection;
