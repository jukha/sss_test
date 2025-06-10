import { startSwimFasterSpecialNeedsSwimLessonImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const content = {
  heading:
    'Start swimming faster with personalized special needs swim lessons in [city]',
  description:
    "At Sunsational Swim School, we believe special needs swim lessons are essential, and we make them convenient for families in [city]. With flexible scheduling and lessons at your home pool, your loved one can learn in a safe and supportive environment. \n\n Our instructors tailor each one-on-one session to your child's unique needs, ensuring personalized lessons that help them build confidence, improve skills, and achieve meaningful progress.",
  buttonText: 'Book Swim Lessons',
  buttonLink: '/registration',
};

const StartSwimmingFasterSection = () => {
  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
    >
      <Container className='flex max-lg:gap-10 max-lg:my-[130px_80px] flex-col-reverse lg:flex-row justify-center items-center overflow-x-clip'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Typography
            variant='h3'
            className='text-start max-w-[555px] font-primary'
          >
            {content.heading}
          </Typography>
          <Typography
            variant='body2'
            className='max-w-[535px] font-bold md:font-medium text-off-black leading-[120%] whitespace-break-spaces'
          >
            {content.description}
          </Typography>

          <ArrowButton
            text='Book Swim Lessons'
            link='#'
            IconClasses='bg-yellow'
            iconColor='black'
            shadow={true}
            shadowClasses='bg-blue'
            buttonClasses='bg-offBlack text-white text-lg font-semiBold'
          />
        </div>
        <div className='relative'>
          <Image
            src={startSwimFasterSpecialNeedsSwimLessonImg}
            alt='start swimming faster img'
            className='shrink-0 relative z-10'
          />
          <div className='absolute w-[150%] h-[150%] left-[-20%] top-[-10%] scale-[1.3] lg:scale-[1.7]'>
            <BackgroundCircles
              circlesColor='var(--color-teal)'
              circlesOpacity='0.3'
            />
          </div>
        </div>
      </Container>
    </FeatureSection>
  );
};

export default StartSwimmingFasterSection;
