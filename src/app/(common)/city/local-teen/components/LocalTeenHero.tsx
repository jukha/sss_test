'use client';

import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';
import { useCityPageContext } from '@/app/(common)/city/context';
import {
  localTeenHero
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const LocalTeenHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localTeenHero}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Teen swimming'} />
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[670px] mb-8'
      >
        Teen Swim Lessons in
        <span className='text-yellow inline-block text-start'>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[726px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        Looking for the best private swim lessons near me? It’s always a Sunsational time to learn to swim in {cityName}! Our private swim lessons in {cityName} ensure rapid progress in essential water safety skills.
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swimming Lessons'}
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

export default LocalTeenHero;
