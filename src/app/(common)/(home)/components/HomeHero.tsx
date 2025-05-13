import { homeHero } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const heroSection = {
  title: 'Bring the swim school to',
  titleHighlight: 'your pool!™',
  // title: "Bring the swim school to your pool!™",
  desc: 'Book swim lessons at your home or community pool—fast progress and guaranteed results!',
};

const HomeHero = () => {
  return (
    <Hero bgImage={homeHero}>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        {heroSection.title}
        <span className='text-orange relative inline-flex justify-center items-center lg:p-4'>
          &nbsp;{heroSection.titleHighlight}
          {/* White highlight bubble behind the text */}
          <span className='bg-white w-full h-full left-1 -z-10 rounded-full opacity-90 inline-block -rotate-[0.5deg] absolute'></span>
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[457px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
      <ArrowButton
        text={'Book Swimming Lessons'}
        buttonClasses='bg-[#FDD733]'
        IconClasses='bg-darkBlue'
        shadow={true}
        shadowClasses='bg-orange'
      />
    </Hero>
  );
};

export default HomeHero;
