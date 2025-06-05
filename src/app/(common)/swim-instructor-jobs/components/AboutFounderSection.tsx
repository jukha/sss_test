import { aboutUsSectionImage3 } from '@/assets';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const AboutFounderSection = () => {
  return (
    <FlexWrapper stackOrder='first-top' className='!justify-center'>
      <div className='lg:w-1/2 relative'>
        <Image src={aboutUsSectionImage3} className='w-full h-full' alt='' />
        <span className='background-decoration text-white bg-offBlack font-primary text-2xl lg:text-4xl font-bold absolute right-[10%] bottom-[13%] p-4 lg:p-6 leading-[115%]'>
          Our founder
        </span>
      </div>
      <div className='lg:max-w-[511px]'>
        <Typography variant='h3' className='mb-2 font-primary'>
          Meet our Founder
        </Typography>
        <div>
          <Typography
            variant='body2'
            className='font-bold text-black leading-[125%] font-secondary'
          >
            In 2009, Sarah Sebe was on a path to earn her Master’s degree in
            Education - until a Craigslist ad for swim lessons plunged her into
            the deep end of entrepreneurship. Sarah founded Sunsational Swim
            School as the sole instructor traveling from house to house in Los
            Angeles. She quickly realized a common frustration among parents:
            their kids lacked progress in group swim lessons. While families
            spent months in crowded classes with little progress, her one-on-one
            approach helped kids learn to swim in just weeks.
          </Typography>
          <br />
          <Typography
            variant='body2'
            className='text-black leading-[120%] font-medium font-secondary'
          >
            Word spread and soon Sarah was overwhelmed with how many students
            wanted to learn to swim in the privacy and comfort of their own
            homes. So she started hiring experienced swimming instructors and
            with time expanded to service more areas in Southern California.
            Today, Sarah is proud to have grown Sunsational Swim School to be
            America’s #1 rated and largest mobile swim school with a team of
            over 2,000 Sunsational Certified swim instructors teaching lessons
            coast-to-coast!
          </Typography>
        </div>
      </div>
    </FlexWrapper>
  );
};

export default AboutFounderSection;
