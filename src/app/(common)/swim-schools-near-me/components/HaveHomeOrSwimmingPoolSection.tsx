import React from 'react';
import { homeOrCommunityPoolImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';

type Props = {
  city: string
}

const HaveHomeOrSwimmingPoolSection: React.FC<Props> = ({ city }) => {
  return (
    <FeatureSection
      backgroundColor='var(--color-yellow)'
      waveColor='var(--color-yellow)'
      className='z-10 relative'
    >
      <Container className='flex flex-col justify-start items-center relative overflow-x-clip mt-24'>
        <FlexWrapper
          stackOrder='second-top'
          className='!justify-center -translate-y-32 lg:-translate-y-0  relative z-10'
        >
          <div className=' bg-white justify-start items-start home-card-left flex flex-col gap-2 px-[2em] md:px-[4em] py-[3em] pb-[4em] lg:min-w-[450px] max-w-[613px] lg:translate-x-24'>
            <Typography
              variant='h3'
              className='max-w-[461px] font-bold font-primary text-black'
            >
              Have a home or community pool? Consider Private At-Home Swim Lessons!
            </Typography>
            <Typography
              variant='body2'
              className='font-bold md:font-medium font-secondary max-w-[434px] text-offBlack leading-[120%]'
            >
              Skip the crowded pools and inconvenient schedules—Sunsational Swim School brings private swim lessons directly to your home or community pool in {city}. With highly qualified instructors, flexible scheduling, and a proven Learn to Swim Guarantee, we make learning to swim easier, faster, and more convenient than ever.
            </Typography>
          </div>

          <Image
            src={homeOrCommunityPoolImg}
            alt='Kid Swimming Image'
            className='translate-y-16 shrink lg:translate-y-0 '
          />
        </FlexWrapper>
        <div className='absolute lg:top-[-10%] left-[5%] lg:left-[-10%] h-[600px] w-[400px] lg:h-[917px] lg:w-[758px]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
        <div className='absolute bottom-[-40%] right-[-10%] h-[917px] w-[758px] hidden lg:block rotate-[90deg]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default HaveHomeOrSwimmingPoolSection;
