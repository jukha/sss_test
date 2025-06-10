import { semiPrivateLessonsImg } from '@/assets';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import LessonPricingCard from '@/components/shapes/LessonPricingCard';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import React from 'react';
import NeedHelpButton from './NeedHelpButton';
import { LessonPackage } from '@/types/lesson.types';

type SemiPrivateLessonsPageData = {
  title: string;
  description: string;
  type: string;
  noOfStudent: string;
  image: StaticImageData;
  lessonPackages: LessonPackage[];
}

const data: SemiPrivateLessonsPageData = {
  title: 'Private or Semi-Private Lessons',
  description:
    '1 Hr or longer (add in 30 minute increments). Each hour can be divided by up to 4 students (max of 2 beginners at one time; both beginners must be age 4 yrs or older). 30 minutes private lesson per student to qualify for the guarantee',
  type: '1 Hour+ Private or Semi-private Lessons:',
  noOfStudent: '1 - 4 Student',
  image: semiPrivateLessonsImg,
  lessonPackages: [
    {
      id: 1,
      noOfLessons: 6,
      options: [{ rate: 'hour', price: 145 }],

      cardColor: '#EEFCFF',
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [{ rate: 'hour', price: 95, discount: 7 }],
      cardColor: '#FFF5EF',
      ribbonText: 'MOST POPULAR',
      ribbonColor: 'red',
    },
    {
      id: 3,
      noOfLessons: 18,
      options: [{ rate: 'hour', price: 90, discount: 10 }],
      ribbonText: 'Best Value',
      ribbonColor: 'darkOrange',
      cardColor: '#FFF9E1',
    },
  ],
};

const SemiPrivateLessonsSection = () => {
  return (
    <Container className='flex flex-col justify-start items-center gap-10'>
      <FlexWrapper className='md:gap-16'>
        <div>
          <Image alt='instructor image' src={data.image} />
        </div>
        <div className='flex flex-col gap-4 md:gap-6'>
          <div className='flex flex-col gap-2 max-w-[511px]'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[48px] font-primary font-bold leading-[114%] md:leading-[110%] text-start max-w-[354px] md:max-w-[375px]'
            >
              {data.title}
            </Typography>
            <Typography
              variant='custom'
              className='text-base md:text-[20px] font-secondary font-medium leading-[120%] '
            >
              {data.description}
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography
              variant='custom'
              className='text-[20px] md:text-[24px] leading-[125%] font-bold font-secondary'
            >
              {data.noOfStudent}
            </Typography>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[20px] leading-[120%] font-bold font-secondary text-red'
            >
              {data.type}
            </Typography>
          </div>
        </div>
      </FlexWrapper>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        {data.lessonPackages.map((pkg) => {
          // Changed to lessonPackages
          return (
            <LessonPricingCard
              key={pkg.id} // Added key
              // Pass the whole package object as props
              id={pkg.id}
              noOfLessons={pkg.noOfLessons}
              options={pkg.options}
              cardColor={pkg.cardColor}
              ribbonColor={pkg.ribbonColor}
              ribbonText={pkg.ribbonText}
            />
          );
        })}
      </div>
      <NeedHelpButton />
    </Container>
  );
};

export default SemiPrivateLessonsSection;
