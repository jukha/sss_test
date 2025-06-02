import React from 'react';
import { SwimLessonFact } from '@/types/swim-lesson.types';
import LessonFactsSection from '../../city/common/LessonFactsSection';
import { whySwimLessonImportantForToddlersImg } from '@/assets';

const data = {
  heading: 'Why are swimming lessons so important for toddlers?',
  descriptionTop:
    'Drowning is the #1 leading cause of accidental death in the U.S. among children under 5, and in most cases, it happens in just minutes – even when a caregiver is nearby. In fact:',
  descriptionBottom:
    'Swimming lessons can save lives. Give your toddler the gift of swimming which lasts a lifetime!',
  image: whySwimLessonImportantForToddlersImg,
  imageAlt: 'Why Swim lessons important image',
  facts: [
    {
      title: 'Drowning',
      text: 'is the #1 leading cause of accidental death in the U.S. among children under 5 years old',
      position: 'top-right',
    },
    {
      title: '9 out of 10',
      text: 'drowning deaths occur while an adult is present',
      position: 'left-center',
    },
    {
      title: '75%',
      text: 'of children who drown were out of sight for five minutes or less',
      position: 'bottom-right',
    },
  ] as SwimLessonFact[],
};

const WhySwimLessonImportantForToddlersSection = () => {
  return <LessonFactsSection {...data} />;
};

export default WhySwimLessonImportantForToddlersSection;
