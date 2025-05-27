import {
  localBabyWhyUs1,
  localBabyWhyUs2,
  localBabyWhyUs3,
  localBabyWhyUs4,
} from '@/assets';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const content = {
  title: 'Why choose Sunsational Swim School?',
  reasons: [
    {
      img: localBabyWhyUs1,
      title: 'WE FIT YOUR SCHEDULE',
      description:
        'When you have a baby swimming lesson with Sunsational you get to choose a lesson time that works for you. You can even book more than one study back to back, so all your kids can have lessons at the same time.',
    },
    {
      img: localBabyWhyUs2,
      title: 'QUALIFIED INSTRUCTORS',
      description:
        'Sunsational has very strict rules for our instructors, and you can expect an airtight screening and qualification process (including working with children and background checks) that ensures every instructor is certified in CPR/First Aid and has a minimum of 2 years teaching experience.',
    },
    {
      img: localBabyWhyUs3,
      title: 'WE COMETO YOU',
      description:
        'Don’t worry about running your kids all over town to attend infant swimming lessons, because our instructors can come straight to your door. If you don’t have a pool, we can use your nearest community pool!',
    },
    {
      img: localBabyWhyUs4,
      title: 'WE CARE ABOUT WATER SAFETY',
      description:
        'After years of offering swimming lessons for babies, we understand that the most important part about learning to swim is safety skills. Our instructors prioritize these skills with our students to make sure they’re safe in the water.',
    },
  ],
};

const WhyChooseOurSwimSchool = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue)'
      className='mb-[-120px] pb-16'
    >
      <Container className='relative z-[2]'>
        <Typography
          variant='h2'
          className='max-w-[842px] mx-auto text-center mb-20 lg:mb-[100px]'
        >
          {content.title}
        </Typography>
        {/* ******* */}
        {/* Reasons */}
        {/* ******* */}
        <div className='grid  xl:grid-cols-2 gap-[29px]'>
          {content.reasons.map((reason, idx) => {
            return (
              <div key={idx} className='lg:flex justify-center gap-[29px]'>
                <div className='flex-1 flex-wrap max-lg:mb-[33px]'>
                  <Image src={reason.img} alt='' />
                </div>
                <div className='flex-1'>
                  <Typography
                    variant='h3'
                    className='!text-darkBlue font-primary'
                  >
                    {reason.title}
                  </Typography>
                  <Typography
                    variant='custom'
                    className='font-secondary text-offBlack leading-[120%] font-medium'
                  >
                    {reason.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <div className='flex justify-center items-center gap-4 ml-[30px] mt-[88px]'>
        <ArrowButton
          text={'Book Now'}
          buttonClasses='bg-offBlack text-white'
          iconColor='var(--color-black)'
          IconClasses='bg-yellow'
          shadow={true}
          shadowClasses='bg-blue'
          link='/registration'
        />
      </div>
    </FeatureSection>
  );
};

export default WhyChooseOurSwimSchool;
