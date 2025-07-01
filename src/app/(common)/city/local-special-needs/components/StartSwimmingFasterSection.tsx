'use client';

import { startSwimmingFasterImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import Image from 'next/image';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const StartSwimmingFasterSection = () => {
  const { cityName } = useCityPageContext();

  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
      className='relative z-0'
    >
      <Container className='flex flex-col-reverse lg:flex-row justify-center items-center overflow-x-clip'>
        <GeneralFirstSection
          descriptionTop={`At Sunsational Swim School, we believe special needs swim lessons are essential, and we make them convenient for families in ${cityName}. With flexible scheduling and lessons at your home pool, your loved one can learn in a safe and supportive environment.`}
          descriptionsBottom={["Our instructors tailor each one-on-one session to your child's unique needs, ensuring personalized lessons that help them build confidence, improve skills, and achieve meaningful progress."]}
          heading1={`Start swimming faster with personalized special needs swim lessons in ${cityName}`}
          buttonText={'Book Swim Lessons'}
          buttonLink={'/registration'}
        />
        <div className='relative translate-y-8 lg:translate-y-0'>
          <Image
            src={startSwimmingFasterImg}
            alt='start swimming faster img'
            className='shrink-0 relative z-10'
          />
          <div className='absolute w-[150%] h-[150%] left-[-20%] top-[-10%] '>
            <BackgroundCircles circlesColor='var(--color-teal)' />
          </div>
        </div>
      </Container>
    </FeatureSection>
  );
};

export default StartSwimmingFasterSection;
