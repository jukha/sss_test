import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'What are survival float lessons?',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4', // Example video URL
  posterImage: sunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop:
    '[City] parents often ask if we teach survival float, self-rescue techniques or Infant Swimming Resource (ISR) lessons. We share the same fundamental goal as ISR - ensuring water safety - but our teaching methods differ. \n\n ISR often uses a method called “forced back floating”, where toddlers are repeatedly submerged to trigger a floating reflex. While learning to float is valuable, this method can cause negative associations with water.',
  descriptionsBottom: [
    'At Sunsational Swim School, we focus on teaching both floating and essential swimming strokes. This ensures toddlers can stay afloat as well as move to safety confidently.',
    'Our experienced instructors in [city] use gentle encouragement and positive reinforcement, which helps toddlers develop water skills in a fun, nurturing environment. We’re committed to building a foundation of water confidence.',
  ],
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Book Now',
};

const WhatAreSurvivalLessonsSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default WhatAreSurvivalLessonsSection;
