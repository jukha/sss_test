import {
  brainIcon,
  electricityIcon,
  eyeIcon,
  hearingIcon,
  helpingHandIcon,
  learningIcon,
  mommyAndMeIcon,
  plusMathIcon,
} from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import SpecialNeedsCard from '@/components/shapes/SpecialNeedsCard';
import React from 'react';

const content = {
  heading: 'We cater to many needs',
  description:
    'We love bringing swimming to the lives of children with special needs, and Sunsational Swim School is always accepting grants from third party organizations to support the continuation of swim lessons for special needs students.',
  conditions: [
    {
      title: 'Autism, Asperger’s or related syndromes',
      icon: learningIcon, // Replace with actual icon or asset reference if available
    },
    {
      title: 'Cerebral Palsy',
      icon: brainIcon,
    },
    {
      title: 'Down Syndrome',
      icon: mommyAndMeIcon,
    },
    {
      title: 'Sensory Integration Disorder',
      icon: hearingIcon,
    },
    {
      title: 'ADHD',
      icon: electricityIcon,
    },
    {
      title: 'Physical difficulties',
      icon: helpingHandIcon,
    },
    {
      title: 'Sensory challenges',
      icon: eyeIcon,
    },
    {
      title: 'And many others',
      icon: plusMathIcon,
    },
  ],
};

const SpecialLessonsCaterManyNeedsSection = () => {
  return (
    <Container className='flex flex-col justify-start items-center gap-8'>
      <Typography variant='h3' className='font-primary text-center'>
        {content.heading}
      </Typography>
      <Typography variant='body2' className='font-primary text-center'>
        {content.heading}
      </Typography>
      <div className='flex flex-wrap gap-6 justify-center items-center'>
        {content.conditions.map((el, index) => (
          <SpecialNeedsCard key={index} title={el.title} icon={el.icon} />
        ))}
      </div>
    </Container>
  );
};

export default SpecialLessonsCaterManyNeedsSection;
