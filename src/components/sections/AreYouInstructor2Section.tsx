import { areYouInstructor2Img } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

const data = {
  heading: 'Are You A Swim Instructor?',
  description:
    'Find out how you can become a Sunsational Instructor and enjoy flexible scheduling, competitive compensation and a chance to make a difference!',
  image: areYouInstructor2Img,
};

const AreYouInstructor2Section = () => {
  return (
    <FlexWrapper stackOrder='second-top'>
      <div className='flex flex-col justify-center items-start gap-1'>
        <Typography
          variant='h3'
          className='font-bold font-primary leading-[110%] md:max-w-[367px] text-start'
        >
          {data.heading}
        </Typography>
        <Typography
          variant='body2'
          className='font-secondary font-medium leading-[120%] md:max-w-[377px] text-start'
        >
          {data.description}
        </Typography>
        <div className='flex justify-start items-center mt-6'>
          <ArrowButton
            text={'Learn More'}
            buttonClasses='bg-brightYellow pl-10 lg:pl-12 text-[16px] md:text-[24px] font-secondary font-bold text-offBlack'
            shadowClasses='bg-orange'
            IconClasses='bg-offBlack'
            shadow={true}
            iconColor='white'
          />
        </div>
      </div>
      <div className='flex relative justify-center items-center '>
        <Image src={data.image} alt='Are You A Swim Instructor? Image' />
      </div>
    </FlexWrapper>
  );
};

export default withClientErrorBoundary(AreYouInstructor2Section);
