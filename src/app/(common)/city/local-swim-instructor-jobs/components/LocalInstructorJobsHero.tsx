'use client';

import { Breadcrumbs } from '@/app/(common)/city/common/widgets/Breadcrumbs';
import { useCityPageContext } from '@/app/(common)/city/context';
import {
  localInstructorJobsHeroDesktop
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const LocalInstructorJobsHero = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <Hero
      desktopBgImage={localInstructorJobsHeroDesktop}
      heroBottomVariant='citypage'
    >
      <Breadcrumbs city={cityName} state={metroArea.stateAbbreviation} program={'Instructor jobs'} />
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[700px] mb-8'
      >
        Swim Instructor Jobs in
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {cityName}
        </span>
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[348px] md:max-w-[621px] ml-[30px] mb-[26px] font-secondary leading-[120%]'
      >
        Partner with Sunsational Swim School to connect with local clients, teach on your terms, and make a meaningful impact in your community—all while earning extra income by selecting the lessons and rates that work best for you.
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
