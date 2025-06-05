import {
  localInstructorJobsHeroDesktop,
  localInstructorJobsHeroMobile,
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const LocalInstructorJobsHero = () => {
  const content = {
    title: 'Swim Instructor Jobs in San Diego',
    titleHighlight: 'San Diego',
    description:
      'Partner with Sunsational Swim School to connect with local clients, teach on your terms, and make a meaningful impact in your community—all while earning extra income by selecting the lessons and rates that work best for you.',
  };
  return (
    <Hero
      desktopBgImage={localInstructorJobsHeroDesktop}
      mobileBgImage={localInstructorJobsHeroMobile}
      heroBottomVariant='citypage'
    >
      <div className='flex gap-2 justify-start ml-[30px] items-center mb-4 text-lightBlue text-[14px] font-bold font-secondary md:text-base'>
        <span>Swim School</span>
        <span className='text-xl'>{'>'}</span>
        <span>State</span>
        <span>{'>'}</span>
        <span>City</span>
        <span>{'>'}</span>
        <span>Instructor Jobs</span>
      </div>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[700px] mb-8'
      >
        {content.title}&nbsp;
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {content.titleHighlight}
          {/* White highlight bubble behind the text */}
        </span>
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[348px] md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        {content.description}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Apply to job opening'}
          buttonClasses='bg-brightYellow text-offBlack'
          IconClasses='bg-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
          link='/registration'
        />
      </div>
    </Hero>
  );
};

export default LocalInstructorJobsHero;
