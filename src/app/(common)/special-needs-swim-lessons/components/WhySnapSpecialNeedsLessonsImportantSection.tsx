import React from 'react';
import { SwimLessonFact } from '@/types/swim-lesson.types';
import { whySnapSpecialNeedsLessonsImg } from '@/assets';
import WhySwimLessonsSection from '../../city/common/WhySwimLessonsSection';

const data = {
  heading: 'Why are Special Needs (SNAP) swimming lessons so important?',
  descriptionTop:
    'Drowning is the second leading cause of accidental death in the US for children under 14, and in most cases, it happens in just minutes – even when a caregiver is nearby. In fact:',
  descriptionBottom:
    'Enrolling your child in swimming lessons is one of the best ways to prevent drowning by teaching them essential water safety skills',
  image: whySnapSpecialNeedsLessonsImg,
  imageAlt: 'Why Swim lessons important image',
  facts: [
    {
      title: '75%',
      text: 'of children who drown were out of sight for five minutes or less',
      position: 'top-right',
    },
    {
      title: '9 out of 10',
      text: 'drowning deaths occur while an adult is present',
      position: 'bottom-left',
    },
  ] as SwimLessonFact[],
};

const WhySpecialLessonsImportantSection = () => {
  return <WhySwimLessonsSection {...data} />;
};

export default WhySpecialLessonsImportantSection;
