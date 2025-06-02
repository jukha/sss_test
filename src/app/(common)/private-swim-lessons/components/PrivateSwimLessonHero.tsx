import {
  privateSwimLessonHeroDesktop,
  privateSwimLessonHeroMobile,
} from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import React from 'react';

const heroSection = {
  title: 'Private Swim Lessons Program',
  titleHighlight: '',
  desc: 'Sunsational Swim School is America’s largest mobile swim school, offering private, at-home swim lessons for all ages (from ages 6 Mo. - Adult).',
};

const PrivateSwimLessonHero = () => {
  return (
    <Hero
      desktopBgImage={privateSwimLessonHeroDesktop}
      mobileBgImage={privateSwimLessonHeroMobile}
      hasBottomBar={false}
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[666px] mb-8'
      >
        {heroSection.title}
        <span className='text-yellow inline-block text-start'>
          {heroSection.titleHighlight}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[575px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>

      <div className='flex justify-start items-center mb-2 gap-4'>
        <CustomInputForm placeholder='Your Zip Code' submitText='Search' />
      </div>
      <Typography
        variant='body2'
        className='text-white font-semibold md:font-bold max-w-[495px] pl-[20px] mb-[26px] font-secondary leading-[120%]'
      >
        <span className='text-yellow'>Enter your zip code</span> to view local
        pricing
      </Typography>
    </Hero>
  );
};

export default PrivateSwimLessonHero;
