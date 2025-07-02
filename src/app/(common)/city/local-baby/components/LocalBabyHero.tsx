'use client';

import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';
import { useCityPageContext } from '@/app/(common)/city/context';
import {
  localBabyHero
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const LocalBabyHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localBabyHero}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Baby swimming'}/>
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[537px] mb-8'
      >
        Baby swim lessons in
        <span className='text-yellow inline-block text-start'>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[726px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        Your baby’s first splash should be fun – not stressful. But with drowning being the leading cause of death for young children under the age of five, including babies, water safety isn’t optional – it’s essential. That’s where our top-rated, experienced instructors come in.
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

export default LocalBabyHero;
