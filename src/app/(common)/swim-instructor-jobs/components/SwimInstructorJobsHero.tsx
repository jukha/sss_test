import {
  swimInstructorJobsHeroDesktop,
  swimInstructorJobsHeroMobile,
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const SwimInstructorJobsHero = () => {
  return (
    <Hero
      desktopBgImage={swimInstructorJobsHeroDesktop}
      mobileBgImage={swimInstructorJobsHeroMobile}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1' className='max-w-[340px] md:max-w-[600px] mb-4'>
        Swim Instructor Jobs
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[577px] mb-8 font-secondary leading-[120%]'
      >
        Partner with Sunsational Swim School to connect with local clients,
        teach on your terms, and make a meaningful impact in your community—all
        while earning extra income by selecting the lessons and rates that work
        best for you.
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <ArrowButton
          text={'Get Started'}
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

export default SwimInstructorJobsHero;
