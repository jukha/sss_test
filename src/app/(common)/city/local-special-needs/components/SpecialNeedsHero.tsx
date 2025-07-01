'use client';

import { localSpecialNeedsHero, localSpecialNeedsHeroMobile } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';
import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';

const SpecialNeedsHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localSpecialNeedsHero}
      mobileBgImage={localSpecialNeedsHeroMobile}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Special needs swimming'}/>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        Special Needs Swim Lessons in&nbsp;
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body2'
        className='text-off-white md:text-white max-w-[348px] font-bold md:font-medium md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        Private, at-home special needs swim lessons. One-on-one instruction for Autism, ADHD, Down Syndrome, and more – in your home pool.
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
