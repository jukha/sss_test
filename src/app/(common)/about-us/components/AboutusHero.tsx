import { aboutHero } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const AboutusHero = () => {
  const content = {
    title: 'About us',
    description:
      'Sunsational Swim School is America’s largest mobile swim school, offering private, at-home swim lessons for all ages.',
  };
  return (
    <Hero
      desktopBgImage={aboutHero}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1'>{content.title}</Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-secondary leading-[120%]'
      >
        {content.description}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-brightYellow text-offBlack'
          IconClasses='bg-orange'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
          link='/registration'
        />
      </div>
    </Hero>
  );
};

export default AboutusHero;
