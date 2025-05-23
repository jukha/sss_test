import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import { howWeMatchYouImg } from '@/assets';

const HowWeMatchYouSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-darkBlue)'
      waveColor='var(--color-darkBlue)'
      className='my-28'
    >
      <FlexWrapper stackOrder='second-top'>
        <div className='relative z-0 lg:w-[50%] p-1'>
          {/* Background circles */}
          <div className='absolute w-full -top-[500px] lg:-top-[20px] -left-[160px] rotate-[90deg] -z-[1] lg:scale-[1.70] opacity-10'>
            <BackgroundCircles />
          </div>
          <div className='relative z-0 p-8 lg:px-0 pb-24 lg:pb-0 lg:pl-20 md:pl-8'>
            <Typography
              variant='h3'
              className='text-white mb-2 font-primary lg:max-w-[500px]'
            >
              How We Match You With The Perfect
            </Typography>
            <Typography
              variant='h3'
              className='text-yellow mb-2 font-primary lg:max-w-[500px]'
            >
              Swim Instructor
            </Typography>
            <Typography
              variant='body2'
              className='lg:max-w-[500px] font-medium font-secondary text-white'
            >
              Sunsational matches students and instructors based on location,
              skill level, and goals.
            </Typography>
            <br />
            <Typography
              variant='body2'
              className='lg:max-w-[500px] font-medium font-secondary text-white'
            >
              You can also feel free to request a specific type of instructor
              for your child’s private swim lessons (For example, instructors
              with expertise in teaching toddlers or students with special
              needs).
            </Typography>
            <div className='flex justify-center lg:justify-start mt-8'>
              <ArrowButton
                text='Start your instructor match today'
                link='/find-instructor'
                buttonClasses='bg-offBlack text-white h-16 lg:h-20'
                shadowClasses='bg-blue'
                IconClasses='bg-brightYellow'
                shadow
                iconColor='#000000'
              />
            </div>
          </div>
        </div>
        <div className='relative z-0 w-full lg:w-[50%] p-4'>
          <Image
            src={howWeMatchYouImg}
            alt='How We Match You With The Perfect Swim Instructor Image'
            width={1000}
            className={'w-full'}
          />
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default HowWeMatchYouSection;
