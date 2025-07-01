'use client';

import { comeMeetWithTeamImg } from '@/assets';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const ComeMeetTeamSection = () => {
  const { cityName } = useCityPageContext();

  return (
    <FeatureSection
      waveColor='var(--color-darkBlue)'
      backgroundColor='var(--color-darkBlue)'
      className='my-20'
    >
      <Container className='flex flex-col-reverse lg:flex-row justify-center items-center overflow-x-clip mb-12 md:mb-0'>
        <div className='flex flex-col gap-6 justify-start items-start max-w-[467px]'>
          <Typography variant='h2' className='max-w-[911px] text-white text-start'>
            Got questions? Come meet the {cityName} team!
          </Typography>
          <Typography className='text-[18px] text-white md:text-[20px] font-medium leading-[120%] font-secondary max-w-[735px] whitespace-break-spaces text-start'>
            Wondering what it&#39;s like to be a Sunsational instructor in {cityName}? Join a Meet and Greet Q&A any Wednesday or Friday to meet other instructors, Sunsational staff, and ask questions alongside other applicants to get the answers you need to decide if being a Sunsational instructor is right for you before you apply.
          </Typography>
          <ArrowButton
            text={'Register Now'}
            link={'#'}
            buttonClasses={`text-[20px] bg-yellow font-semiBold leading-[120%] `}
            shadowClasses='bg-orange'
            shadow={true}
            IconClasses='bg-offBlack'
            iconColor='white'
          />
        </div>
        <div className='relative translate-y-8 lg:translate-y-0'>
          <Image
            src={comeMeetWithTeamImg}
            alt='start swimming faster img'
            className='shrink-0 relative z-10'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default ComeMeetTeamSection;
