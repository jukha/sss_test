import { featuredBlogImg } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const FeaturedArticleSection = () => {
  return (
    <Container className='my-16'>
      <FlexWrapper stackOrder='second-top' className='justify-between'>
        <div className='flex relative justify-center items-center horizontal-card bg-yellow p-10 rotate-[-2deg] '>
          <Image src={featuredBlogImg} alt=' How to do Flutter Kicks in Swimming blog Image' />
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
          <Typography
            variant='custom'
            className='text-[14px] md:text-[20px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1'
          >
            SWIMMING TIPS
          </Typography>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] md:max-w-[367px] text-start my-2'
          >
            How to do Flutter Kicks in Swimming
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary font-medium leading-[120%] md:max-w-[377px] text-start'
          >
            The flutter kick is a kicking movement used in both swimming and
            exercise. Nonetheless, the flutter kick is commonly used in
            different strokes, like freestyle or backstroke.
          </Typography>
          <div className='flex justify-start items-center mt-6'>
            <ArrowButton
              text={'Read More'}
              buttonClasses='bg-offBlack pl-10 h-18 lg:pl-12 text-[16px] md:text-[24px] font-secondary font-bold text-white'
              IconClasses='bg-yellow'
              iconColor={'var(--color-offBlack)'}
            />
          </div>
        </div>
      </FlexWrapper>
    </Container>
  );
};

export default FeaturedArticleSection;
