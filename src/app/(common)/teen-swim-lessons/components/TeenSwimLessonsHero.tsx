import {
  teenSwimLessonsHeroDesktop,
  teenSwimLessonsHeroMobile,
} from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import React from 'react';

const TeenSwimLessonsHero = () => {
  const content = {
    title: 'Teen Swim Lessons Program',
    description:
      'Sunsational Swim School offers private teen swim lessons for beginner, intermediate, and competitive swimmers. If your teen hasn’t learned to swim yet, private swim lessons are the best way to help them build this essential life skill quickly and confidently. (from ages 12yrs+)',
  };
  return (
    <Hero
      desktopBgImage={teenSwimLessonsHeroDesktop}
      mobileBgImage={teenSwimLessonsHeroMobile}
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
        className='text-white max-w-[495px] mb-[26px] font-bold lg:pl-[25px] font-secondary leading-[120%]'
      >
        <span className='text-yellow'>Enter your zip code</span> to view local
        pricing
      </Typography>
    </Hero>
  );
};

export default TeenSwimLessonsHero;
