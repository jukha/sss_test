import React from 'react';
import { StampIcon, WaveIcon } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import { aboutUsSectionImage5, imageSun } from '@/assets';
import { Bubbles } from '@/components/decoration';
import FlexWrapper from '@/components/layout/FlexWrapper';

const content = {
  title: {
    chunks: ['Learn to swim', 'Guarantee'],
  },
  description:
    'Sunsational’s 12-lesson “Learn to Swim Guarantee” has helped thousands of children and adults gain water safety in weeks, not months or years. Today, we’re committed to saving lives through swimming, and making water safety accessible, stress-free, and fun for families.',
};

const LearnToSwimGuarantee = () => {
  return (
    <section className='bg-darkBlue relative my-28 pb-11 lg:py-11 lg:p-0'>
      {/* Top Wave */}
      <div className='absolute top-0 h-[16px] md:h-[54px] left-0 w-full -translate-y-1/2 z-[-3]'>
        <WaveIcon color='var(--color-darkBlue)' />
      </div>
      <FlexWrapper stackOrder='second-top'>
        <div className='lg:w-[45%] relative z-0'>
          <Typography variant='h3' className='text-white mb-2 font-primary'>
            <span className='text-yellow text-[32px] md:text-5xl font-bold leading-[115%] md:leading-[110%]'>
              {content.title.chunks[0]}
            </span>{' '}
            <br /> {content.title.chunks[1]}
          </Typography>
          <Typography
            variant='body2'
            className='lg:max-w-[420px] font-medium font-secondary text-white'
          >
            {content.description}
          </Typography>
          {/* Bubbles */}
          <div className='mt-[26px] lg:mt-0 relative lg:absolute w-[115px] h-[113px] lg:w-[240px] lg:h-[200px] -z-[1] -left-[25px] lg:left-[unset] lg:bottom-0 lg:right-full lg:rotate-[334deg] lg:translate-y-[50px] lg:translate-x-[25px]'>
            <Bubbles color='var(--color-blue)' />
          </div>
        </div>
        <div className='lg:w-[55%] relative z-0 pl-[30px] lg:pl-0'>
          {/* <Image src={aboutUsSectionImage5} alt='' /> */}
          <video
            className='w-full rounded-xl shadow-lg object-cover aspect-video'
            controls
            poster={aboutUsSectionImage5.src}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src='' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='absolute w-1/2 -z-[1] -top-[44px] -left-[54px] lg:-left-[116px] lg:-top-[57px]'>
            <Image src={imageSun} className='w-full' alt='' />
          </div>
          <div className='absolute bottom-0 right-0 w-[116px] h-[116px] lg:w-[200px] lg:h-[200px]'>
            <StampIcon />
          </div>
        </div>
      </FlexWrapper>
      {/* Bottom Wave */}
      <div className='absolute bottom-0 h-[16px] md:h-[54px] left-0 w-full translate-y-1/2 rotate-180'>
        <WaveIcon color='var(--color-darkBlue)' />
      </div>
    </section>
  );
};

export default LearnToSwimGuarantee;
