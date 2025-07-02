'use client';

import { nearbyInstructorHeroImg } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import { ZipCodeInput } from '@/components/ZipCodeInput';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

const HeroNearbyInstructors = () => {
  return (
    <Hero
      desktopBgImage={nearbyInstructorHeroImg}
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
        <ZipCodeInput autoNavigate={true} />
      </div>
    </Hero>
  );
};

export default withClientErrorBoundary(HeroNearbyInstructors);
