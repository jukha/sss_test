import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1:
    'Are private swim lessons better than group lessons for your child?',
  buttonLink: '/',
  buttonText: 'Get Started',
  buttonType: 'black',
  descriptionTop:
    'You signed your child up for group swim lessons, hoping they’d gain confidence in the water – but instead, they’re stuck at the back of the class, waiting for their turn. There are too many kids for the instructor to focus on, and after group lessons only once or twice a week, it is unlikely to see much progress even after several weeks.',
  descriptionsBottom: [
    'With private swim lessons, your child gets the instructor’s full attention, personalized skill development, and lessons tailored to their unique learning style. Private swim lessons are the most effective way to develop water safety skills, learn how to swim and become confident in the water for a lifetime. Start lessons today and see progress in your child’s ability at an impressive pace.',
  ],
};

const ArePrivateLessonsBetterSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData}/>;
};

export default ArePrivateLessonsBetterSection;
