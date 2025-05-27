import { parentsGroupLessonImg } from '@/assets';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import LessonPricingCard from '@/components/shapes/LessonPricingCard';
import Image from 'next/image';
import React from 'react';
import NeedHelpButton from './NeedHelpButton';

export const data = {
  title: ' Parents & Tots Group Lessons',
  noOfPeople: "Own group of 3 - 6 Parent Tot/Pairs",
  type : '30 minute Group lessons',
  image: parentsGroupLessonImg,
  lessonPackages: [
    {
      id: 1,
      noOfLessons: 6,
      options: [
        { rate: '30 minutes', price: 100 },
        { rate: '45 minutes', price: 120 },
      ],
      cardColor: '#EEFCFF',
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [
        { rate: '30 minutes', price: 95, discount: 5 },
        { rate: '45 minutes', price: 115, discount: 7 },
      ],
      ribbonText: 'MOST POPULAR',
      ribbonColor: 'red',
      cardColor: '#FFF5EF',
    },
    {
      id: 3,
      noOfLessons: 18,
      options: [
        { rate: '30 minutes', price: 90, discount: 10 },
        { rate: '45 minutes', price: 110, discount: 15 },
      ],
      ribbonText: 'BEST VALUE',
      ribbonColor: 'darkOrange',
      cardColor: '#FFF9E1',
    },
  ],
};

const ParentsGroupLessonsSection = () => {
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
              Parents are in the water with their baby/toddler (Aged 6 months-
              2.5 years) in a group lesson format. <br />{' '}
              <span className='text-red'>*</span> Must organize your own group
              of 3-6 parent/tot pairs <br />
              <span className='text-red'>*</span> Lesson cost is divided between
              entire group (as low as $12/lesson/parent)
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography
              variant='custom'
              className='text-[20px] md:text-[24px] leading-[125%] font-bold font-secondary'
            >
              {data.noOfPeople}
            </Typography>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[20px] leading-[120%] font-bold font-secondary text-red'
            >{data.type}</Typography>
          </div>
        </div>
      </FlexWrapper>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        {data.lessonPackages.map((pkg) => {
          return (
            <LessonPricingCard
              key={pkg.id}
              id={pkg.id}
              options={pkg.options}
              ribbonColor={pkg.ribbonColor}
              ribbonText={pkg.ribbonText}
              noOfLessons={pkg.noOfLessons}
              cardColor={pkg.cardColor}
            />
          );
        })}
      </div>
      <NeedHelpButton />
      <div className='flex flex-col justify-start items-center gap-4'>
        <Typography
          variant='custom'
          className='text-center text-[24px] text-darkBlue font-bold font-secondary leading-[125%] '
        >
          Other Fees
        </Typography>
        <Typography
          variant='custom'
          className='text-base font-secondary text-center max-w-[578px]'
        >
          All pool entrance fees (if any) must be paid by customer when a third
          party pool is used for swim lessons. A pool usage fee of $15 per hour
          will apply if using one of our contracted pools
        </Typography>
      </div>
    </Container>
  );
};

export default ParentsGroupLessonsSection;
