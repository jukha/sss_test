'use client';

import React from 'react';
import WhySwimLessonsSection from '../../common/WhySwimLessonsSection';
import { SwimLessonFact } from '@/types/swim-lesson.types';
import { whySnapSwimLessonsImportantImg } from '@/assets';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateData = (options: { cityName: string }) => ({
  heading: `Why are ${options.cityName} SNAP swim lessons so important?`,
  descriptionTop:
    'Drowning is the second leading cause of accidental death in the US for children under 14, and in most cases, it happens in just minutes – even when a caregiver is nearby. In fact:',
  descriptionBottom:
    'Enrolling your child in swimming lessons is one of the best ways to prevent drowning by teaching them essential water safety skills',
  image: whySnapSwimLessonsImportantImg,
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
});

const WhySnapSwimLessonsImportantSection = () => {
  const { cityName } = useCityPageContext();
  return <WhySwimLessonsSection {...generateData({ cityName })} />;
};

export default WhySnapSwimLessonsImportantSection;
