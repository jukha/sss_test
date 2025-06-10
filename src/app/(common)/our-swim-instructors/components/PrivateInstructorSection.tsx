import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import React from 'react';


const data = {
  heading: 'Looking For a Private Swim Instructor? We Bring Lessons to You!',
  description1:
    'Sunsational Swim School makes learning to swim easy with private at-home swim lessons. With our Learn to Swim guarantee, children (aged 3+) will learn how to swim without help back to the edge of the pool after their instructor drops them into the water once they complete their guarantee to swim package. The Learn to Swim package is a minimum of 12 private lessons at 3 lessons per week.',
  description2:
    'Our expert instructors are certified in water safety and/or lifeguarding, have passed rigorous background checks, and are covered under our company liability policy. They make sure to personalize lessons focused on water safety skills first, and then on learning swim strokes.',
};

const PrivateInstrucutorSection = () => {
  return (
    <Container className='flex flex-col  justify-start items-center'>
      <div className='flex flex-col justify-start items-center gap-4 max-w-[354px]  md:max-w-[837px]'>
        <Typography variant='h2' className=' text-center'>
          {data.heading}
        </Typography>
        <div className='flex flex-col justify-start items-center max-w-[673px] gap-4'>
          <Typography
            variant='custom'
            className='text-[18px] md:text-[20px] leading-[125%] md:leading-[120%] font-bold md:font-medium font-secondary text-center'
          >
            {data.description1}
          </Typography>
          <Typography
            variant='custom'
            className='text-[18px] md:text-[20px] leading-[125%] md:leading-[120%] font-bold md:font-medium font-secondary text-center'
          >
            {data.description2}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default PrivateInstrucutorSection;
