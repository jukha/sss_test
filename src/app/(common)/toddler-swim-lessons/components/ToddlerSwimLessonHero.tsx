import {
  toddlerSwimLessonHeroDesktop,
  toddlerSwimLessonHeroMobile,
} from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import React from 'react';

const ToddlerSwimLessonHero = () => {
  const content = {
    title: 'Toddler Swim Lessons Program',
    description:
      'Sunsational Swim School is the leading provider of private swimming lessons for toddlers. Unlike traditional swim schools, we bring expert instructors to your home or community pool. (from ages 1 - 3yrs+)',
  };
  return (
    <Hero
      desktopBgImage={toddlerSwimLessonHeroDesktop}
      mobileBgImage={toddlerSwimLessonHeroMobile}
      hasBottomBar={false}
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        {content.title}
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[348px] md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        {content.description}
      </Typography>

      <div className='flex justify-start items-center gap-4 mb-3'>
        <CustomInputForm placeholder='Your Zip Code' submitText='Search' />
      </div>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-semibold md:font-bold font-secondary leading-[120%] md:pl-[25px]'
      >
        <span className='text-yellow'>Enter your zip code</span> to view local
        pricing
      </Typography>
    </Hero>
  );
};

export default ToddlerSwimLessonHero;
