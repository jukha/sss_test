import {
  nearbyInstructorHeroImg,
  nearbyInstructorHeroMobileImg,
} from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import React from 'react';

const HeroNearbyInstructors = () => {
  return (
    <Hero
      desktopBgImage={nearbyInstructorHeroImg}
      mobileBgImage={nearbyInstructorHeroMobileImg}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1'>Nearby</Typography>
      <Typography variant='h1'>Swim</Typography>
      <Typography variant='h1'>Instructors</Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-secondary leading-[120%]'
      >
        Meet Sunsational Swim School’s private swim instructors offering
        personalized lessons for all ages at home or community pools.
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <CustomInputForm
          outlineColor='transparent'
          placeholder='Your Zip Code'
          submitText='Search'
        />
      </div>
    </Hero>
  );
};

export default HeroNearbyInstructors;
