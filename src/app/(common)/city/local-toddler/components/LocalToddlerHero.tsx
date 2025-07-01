'use client';

import { localToddlerHero, localToddlerHeroMobile } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';
import { useCityPageContext } from '@/app/(common)/city/context';

const LocalToddlerHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localToddlerHero}
      mobileBgImage={localToddlerHeroMobile}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Toddler swimming'}/>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[670px] mb-8'
      >
        Toddler swim lessons in
        <span className='text-yellow inline-block text-start'>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[726px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        Looking for the best private toddler swimming lessons near me? It’s always a Sunsational time to learn to swim in {cityName}! Our private swim lessons ensure rapid progress in essential water safety skills.
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

export default LocalToddlerHero;
