'use client';

import { localBabyLessonsNearMeImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const InfantSwimLessonsNearMe = () => {
  const { cityName } = useCityPageContext();

  return (
    <FeatureSection
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue)'
    >
      <Container className='relative z-[2] overflow-hidden'>
        {/* Background Circles Top Left */}
        <div className='hidden lg:block absolute w-full h-1/2 -left-[20%] scale-[1.35] z-[-1]'>
          <BackgroundCircles />
        </div>
        {/* Background Circles Bottom Right */}
        <div className='hidden lg:block absolute w-full h-1/2 -right-[30%] top-[40%] scale-[1.35] z-[-1]'>
          <BackgroundCircles />
        </div>
        <Typography
          variant='h2'
          className='max-w-[800px] mx-auto text-center mb-14'
        >
          Infant swim lessons near me made easy for parents
        </Typography>
        <Typography
          variant='custom'
          className='text-xl font-medium leading-[120%] mt-10 font-secondary text-black max-w-[820px] mx-auto'
        >
          Getting to swim classes in {cityName} can be tough – that’s why we bring the lessons to you! We want your baby to be comfortable in the water, so we offer private parent and baby lessons or the option to create a small baby group (3 to 6 babies) with your friends. Our instructors make it easy for everyone to have fun while learning key water safety skills together.
        </Typography>
        <Typography
          variant='custom'
          className='text-xl font-medium leading-[120%] mt-10 font-secondary text-black max-w-[820px] mx-auto'
        >
          Babies will receive a certificate after completing their lessons. What’s more fun than your baby earning a certificate with their friends?
        </Typography>
        <div className='flex justify-center'>
          <Image src={localBabyLessonsNearMeImg} alt='' />
        </div>
        <div className='flex justify-center items-center gap-4 ml-[30px] mt-[88px] mb-[20px]'>
          <ArrowButton
            text={'Book Now'}
            buttonClasses='bg-offBlack text-white'
            iconColor='var(--color-black)'
            IconClasses='bg-yellow'
            shadow={true}
            shadowClasses='bg-blue'
            link='/registration'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default InfantSwimLessonsNearMe;
