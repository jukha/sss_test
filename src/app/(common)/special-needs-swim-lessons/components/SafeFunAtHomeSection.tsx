import {
  specialSwimLessonGeneralFeatureImg,
  specialSwimLessonGeneralFeatureImg2,
} from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const firstSectionContent: GeneralFirstSectionType = {
  heading1: 'Safe, Fun & taught at home special needs swim lessons!',
  descriptionTop:
    'When raising a child with special needs, learning to swim can feel like another hurdle – but it’s one that can be overcome. At Sunsational Swim School, we’re proud to offer special needs swim lessons near you. Our experienced instructors teach one-on-one lessons for children with Autism, ADHD, sensory challenges, physical disabilities, and more. Our goal is to help our special needs students build water confidence, improve fitness and learn essential water safety skills.',
  descriptionsBottom: [
    'We make special needs swim lessons near me convenient by letting you choose the schedule and location – whether it’s in the comfort of your home pool or a community pool. Our patient, caring instructors adapt lessons to your child’s unique needs, ensuring a positive and supportive experience that helps them thrive as safer, happier swimmers.',
  ],
  media: specialSwimLessonGeneralFeatureImg,
};

const secondSectionContent: GeneralFirstSectionType = {
  descriptionsBottom: [
    'We make special needs swim lessons near me convenient by letting you choose the schedule and location – whether it’s in the comfort of your home pool or a community pool. Our patient, caring instructors adapt lessons to your child’s unique needs, ensuring a positive and supportive experience that helps them thrive as safer, happier swimmers.',
  ],
  media: specialSwimLessonGeneralFeatureImg2,
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Get Started',
};

const SafeFunAtHomeSection = () => {
  return (
    <>
      <GeneralFirstSection {...firstSectionContent} />;
      <GeneralFirstSection {...secondSectionContent} />;
    </>
  );
};

export default SafeFunAtHomeSection;
