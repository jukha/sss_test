'use client';

import { localKidsHeroDesktop, localKidsHeroMobile } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';
import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';

const LocalKidsHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localKidsHeroDesktop}
      mobileBgImage={localKidsHeroMobile}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Kids swimming'}/>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        Kid Swim Lessons in
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[348px] md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        Looking for the best private swim lessons near me? It’s always a Sunsational time to learn to swim in {cityName}! Our private swim lessons in {cityName} ensure rapid progress in essential water safety skills
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

export default LocalKidsHero;
