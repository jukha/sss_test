import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Why are teen swimming lessons so important?',
  media: '/', // later will be replaced with video url
  posterImage: sunsationalInstructorImg,
  descriptionTop: (
    <>
      For teens who already have a grasp of swimming basics, formal swimming
      lessons can provide a perfect way to go from a beginner swimmer to swim
      team-ready. <br />
      <br /> Intermediate private lessons will usually include developing the
      &nbsp;
      <a href='#' className='underline'>
        mechanics of the various competitive strokes
      </a>
      ; freestyle (or front crawl), backstroke,{' '}
      <a href='#' className='underline'>
        butterfly
      </a>
      ,{' '}
      <a href='#' className='underline'>
        and breaststroke
      </a>
      . For a teen looking to join a swim team, a working knowledge of these
      strokes is a must.
      <br />
      <br /> While a teen will learn how to do these swimming strokes from a
      swim team coach, private swim lessons ensure that a swimmer has a strong
      grasp on proper stroke form. Intermediate lessons for teens can also
      include introductions to other competitive swim skills, such as diving,
      flip turns, breathing technique, treading water and underwater streamline
      work.
    </>
  ),
};

const IntermediateSwimLessonsForTeenSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default IntermediateSwimLessonsForTeenSection;
