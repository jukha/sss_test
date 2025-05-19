import React from 'react';

import { WaveIcon } from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import {
  suggestedArticle1,
  suggestedArticle2,
  suggestedArticle3,
} from '@/assets';
import SwimmersBlogCard from './SwimmersBlogCard';

const content = {
  heading: 'Making Waves: The Blog for Happy, Confident Swimmers',
  subHeading:
    'Looking for swim tips, heartwarming swimmer stories, and expert advice from our instructors? Our blog is your go-to resource for making the most of every splash',
  blogs: [
    {
      category: 'NEWS',
      title: 'How to do Flutter Kicks in Swimming',
      description:
        'The flutter kick is a kicking movement used in both swimming and exercise. Nonetheless, the flutter kick is commonly used in different strokes, like freestyle or backstroke',
      img: suggestedArticle1,
    },
    {
      category: 'NEWS',
      title: 'How to Teach a Toddler or a Child to Hold Breath Underwater',
      description:
        'Plenty of children are afraid of taking that plunge of faith and dunking their head into the water below. Even when they are not afraid of the water, they may still struggle to get their whole head under the surface.',
      img: suggestedArticle2,
    },
    {
      category: 'NEWS',
      title: 'Fun Swimming Pool Games for Kids',
      description:
        ' Although the pool itself may entertain your child, what better way for a child to have fun is a new pool game that will only benefit your child’s swimming skills.',
      img: suggestedArticle3,
    },
  ],
};

const SuggestedArticles = () => {
  return (
    <div className='relative pt-[100px] lg:pt-[150px] mb-20 lg:mb-[100px]'>
      <Container className='flex flex-col gap-8 justify-start items-center pb-24 '>
        {/* Top Wave */}
        <div className='absolute top-0 h-[16px] md:h-[54px] left-0 w-full -translate-y-1/2 opacity-30 z-[-3]'>
          <WaveIcon color='var(--color-blueSky)' />
        </div>
        {/* Bottom Wave */}
        <div className='absolute bottom-0 h-[16px] md:h-[54px] left-0 w-full translate-y-1/2 rotate-180 opacity-30 z-[-3]'>
          <WaveIcon color='var(--color-blueSky)' />
        </div>
        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <Typography
            variant='h3'
            className='font-primary max-w-[837px] text-center'
          >
            {content.heading}
          </Typography>
          <Typography
            variant='custom'
            className='max-w-[718px] font-secondary text-[18px] leading-[125%] md:text-[28px] font-semibold text-darkBlue text-center'
          >
            {content.subHeading}
          </Typography>
        </div>

        <FlexWrapper direction='row' stackOrder='first-top' className='gap-12'>
          {content.blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-4 md:gap-6 max-w-[355px] lg:max-w-[400px]'
              >
                <SwimmersBlogCard blog={blog} />
              </div>
            );
          })}
        </FlexWrapper>
        {/*  */}
        <div className='absolute w-full h-full top-0 left-0 bg-[#C7EAF3] opacity-30 z-[-1]'></div>
        <div className='absolute w-full h-full top-0 left-0 bg-white z-[-2]'></div>
      </Container>
    </div>
  );
};

export default SuggestedArticles;
