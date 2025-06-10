import {
  aboutUsSectionImage2,
  aboutUsSectionImage3,
  aboutUsSectionImage4,
  whatMakesUsSunsationalFeatureImage,
} from '@/assets';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <Container>
      {/* Section title */}
      <div>
        <Typography variant='h2' className='text-center mb-2'>
          Who we are
        </Typography>
        <Typography
          variant='body2'
          className='text-center max-w-[578px] mx-auto font-secondary text-black font-medium leading-[120%]'
        >
          With certified, background-checked instructors and a “Learn to Swim
          Guarantee”, we make learning to swim faster, more fun, and super
          convenient — right in your own pool..
        </Typography>
      </div>

      {/* Our Mission */}
      <FlexWrapper stackOrder='second-top'>
        <div className='lg:max-w-[502px] lg:w-1/2 mt-6 lg:mt-0'>
          <Typography variant='h3' className='mb-2 font-primary'>
            Our Mission
          </Typography>
          <div>
            <Typography
              variant='body2'
              className='font-bold text-black leading-[125%] font-secondary'
            >
              In 2009, Sunsational Swim School was founded with a simple yet
              powerful mission: make learning to swim convenient, fast, and fun
              —especially since drowning is the #1 leading cause of death for
              children under five.
            </Typography>
            <br />
            <Typography
              variant='body2'
              className='text-black leading-[120%] font-medium font-secondary'
            >
              What started as a local swim program has quickly grown to over
              2,000 instructors in 40 major metropolitan areas nationwide.
              Sunsational Certified teachers are CPR and First Aid certified,
              and have also passed an extensive interview process which includes
              criminal background checks and Family Watchdog screening.
            </Typography>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <Image
            src={whatMakesUsSunsationalFeatureImage}
            className='w-full h-full'
            alt=''
          />
        </div>
      </FlexWrapper>

      {/* Learning to swim */}
      <div className='pt-8 lg:pt-[90px] lg:pb-[75px]'>
        <FlexWrapper>
          <div className='grow-[2]'>
            <Image
              src={aboutUsSectionImage2}
              className='w-full h-full object-cover'
              alt=''
            />
          </div>
          <div className='lg:max-w-[502px] grow'>
            <Typography
              variant='h3'
              className='mb-2 font-primary'
            >
              Learning to swim
            </Typography>
            <div>
              <Typography
                variant='body2'
                className='font-bold text-black leading-[125%] font-secondary'
              >
                What started as a local swim program has quickly grown to over
                2,000 instructors in 40 major metropolitan areas nationwide.
                Sunsational Certified teachers are CPR and First Aid certified,
                and have also passed an extensive interview process which
                includes criminal background checks and Family Watchdog
                screening.
              </Typography>
              <br />
              <Typography
                variant='body2'
                className='text-black leading-[120%] font-medium font-secondary'
              >
                Swim instruction can start as early as 6 months, with guaranteed
                results for swimmers 3 and older. Our instructors provide
                private swim classes for all ages tailored to a student’s
                particular needs and skill level — infants and toddlers, kids,
                and adults — at your home or community pool.
              </Typography>
            </div>
          </div>
        </FlexWrapper>
      </div>

      {/* Meet our Founder */}
      <FlexWrapper stackOrder='second-top'>
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
              Education - until a Craigslist ad for swim lessons plunged her
              into the deep end of entrepreneurship. Sarah founded Sunsational
              Swim School as the sole instructor traveling from house to house
              in Los Angeles. She quickly realized a common frustration among
              parents: their kids lacked progress in group swim lessons. While
              families spent months in crowded classes with little progress, her
              one-on-one approach helped kids learn to swim in just weeks.
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
        <div className='lg:w-1/2 relative'>
          <Image src={aboutUsSectionImage3} className='w-full h-full' alt='' />
          <span className='background-decoration text-white bg-offBlack font-primary text-2xl lg:text-4xl font-bold absolute right-[10%] bottom-[13%] p-4 lg:p-6 leading-[115%]'>
            Our founder
          </span>
        </div>
      </FlexWrapper>

      {/* Our Sunsational Team */}
      <div className='pt-24 lg:pt-[162px] lg:max-w-[80%] mx-auto'>
        <FlexWrapper>
          <div>
            <div>
              <Typography
                variant='h3'
                className='mb-2 text-center font-primary'
              >
                Our Sunsational Team
              </Typography>
            </div>
            <div className=''>
              <Image
                src={aboutUsSectionImage4}
                className='w-full h-full'
                alt=''
              />
            </div>
          </div>
        </FlexWrapper>
      </div>
    </Container>
  );
};

export default WhoWeAre;
