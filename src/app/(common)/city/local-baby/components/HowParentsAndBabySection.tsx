import React from 'react';
import LessonFactsSection from '../../common/LessonFactsSection';
import { LessonFact } from '@/types/lesson.types';
import { howParentsAndBabySwimImg } from '@/assets';

const data = {
  heading: 'How parent and baby swim lessons help build confidence around the water',
  descriptionTop: 'Babies as young as six months old benefit from pool time in the arms of a trusted adult. Infant swim lessons allow your child to enjoy the water before they have a chance to learn fear. Positive pool experiences help babies remain calm so they can progress to learn effective water navigation skills such as kicking and back floats.',
  descriptionBottom: 'The benefits of swim lessons extend beyond the pool. The sensory and motor stimulation resulting from pool time creates new neurons that positively impact confidence and even intelligence.\n\nBilateral movements, or using both sides of the body, help increase the connections between the two hemispheres of the brain, which will later help with skills like language development, spatial awareness and reading.',
  image: howParentsAndBabySwimImg,
  imageAlt: 'How parent and baby swim lessons help image',
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
  ] as LessonFact[],
};
const HowParentsAndBabySection = () => {
  return <LessonFactsSection {...data} />;
};

export default HowParentsAndBabySection;
