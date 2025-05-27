import {
  localBabyHero,
  localBabyHeroMobile,
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const heroSection = {
  title: 'Baby swim lessons in',
  titleHighlight: 'Chicago',
  desc: 'Your baby’s first splash should be fun – not stressful. But with drowning being the leading cause of death for young children under the age of five, including babies, water safety isn’t optional – it’s essential. That’s where our top-rated, experienced instructors come in.',
};

const LocalBabyHero = () => {
  return (
    <Hero
      desktopBgImage={localBabyHero}
      mobileBgImage={localBabyHeroMobile}
      heroBottomVariant='citypage'
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[537px] mb-8'
      >
        {heroSection.title}
        <span className='text-yellow inline-block text-start'>
          {heroSection.titleHighlight}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[726px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-brightYellow text-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
          link='/registration'
        />
      </div>
    </Hero>
  );
};

export default LocalBabyHero;
