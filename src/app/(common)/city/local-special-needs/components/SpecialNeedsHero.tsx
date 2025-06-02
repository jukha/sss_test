import { localSpecialNeedsHero, localSpecialNeedsHeroMobile } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const SpecialNeedsHero = () => {
  const content = {
    title: 'Special Needs Swim Lessons in',
    titleHighlight: 'Honolulu',
    description:
      'Private, at-home special needs swim lessons. One-on-one instruction for Autism, ADHD, Down Syndrome, and more – in your home pool.',
  };
  return (
    <Hero
      desktopBgImage={localSpecialNeedsHero}
      mobileBgImage={localSpecialNeedsHeroMobile}
      heroBottomVariant='citypage'
    >
      <div className='flex gap-2 justify-start ml-[30px] items-center mb-4 text-lightBlue text-[14px] font-bold font-secondary md:text-base'>
        <span>Swim School</span>
        <span className='text-xl'>{'>'}</span>
        <span>State</span>
        <span>{'>'}</span>
        <span>City</span>
        <span>{'>'}</span>
        <span>Program</span>
      </div>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        {content.title}&nbsp;
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {content.titleHighlight}
          {/* White highlight bubble behind the text */}
        </span>
      </Typography>
      <Typography
        variant='body2'
        className='text-off-white md:text-white max-w-[348px] font-bold md:font-medium md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        {content.description}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swim Lessons Now'}
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

export default SpecialNeedsHero;
