import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const content = {
  heading: 'Drowning is preventable',
  firstDescription:
    'Participation in private swimming lessons can reduce the risk of drowning by as much as 88% among children age 1-4 years.',
  secondDescription: (
    <>
      Learning to swim is the only sport that can save you or your child&#39;s
      life. We guarantee your child will be swimming within 12 lessons.{' '}
      <a href='#' className='underline'>
        Check out our Learn to Swim Guarantee here.
      </a>
    </>
  ),
};

const DrowningIsPreventableSection = () => {
  return (
    <Container className='flex flex-col gap-16 justify-start items-center mb-12'>
      <div className='flex flex-col gap-8'>
        <Typography variant='h2' className='max-w-[837px] text-center'>
          {content.heading}
        </Typography>
        <Typography
          variant='body2'
          className='font-bold md:font-medium text-center leading-[120%] max-w-[820px]'
        >
          {content.firstDescription}
        </Typography>
        <Typography
          variant='body2'
          className='font-bold md:font-medium text-center leading-[120%] max-w-[820px]'
        >
          {content.secondDescription}
        </Typography>
      </div>
    </Container>
  );
};

export default DrowningIsPreventableSection;
