import Typography from '@/components/semantics/Typography';
import React from 'react';
import { ThreeStarsWide } from '@/components/decoration';

const StudentReviewCard = () => {
  return (
    <div>
      <div className='horizonral-card-local-swim-instructors relative px-12 pt-10 pb-4 bg-yellow min-w-[350px] md:min-w-[525px] flex flex-col gap-4 justify-start items-center'>
        <Typography
          variant='custom'
          className='text-[14px] leading-[120%] font-secondary  font-medium  text-left'
        >
          Teen lessons have always been my favorite to teach. Over the years,
          I’ve been lucky to teach teens at almost every level: beginners
          learning how to swim, teens enrolled in the GuardStart program,
          competitive swimmers on swim teams, and everything in between. Most of
          my work with teens has been with non-swimmer beginners looking to gain
          the fundamental basics of swimming. This has included teens who were
          terrified of water as well as teens who simply hadn’t yet had the
          opportunity to learn how to swim.
        </Typography>
        <div className='flex gap-3 w-full justify-start item-center'>
          <div className='w-10 h-10 bg-orange rounded-full'></div>
          <div className='flex flex-col'>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[16px] font-bold font-primary leading-[129%]'
            >
              Sunsational Private Swim Instructor
            </Typography>
            <Typography
              variant='custom'
              className='font-medium font-secondary text-[14px]'
            >
              Arizona
            </Typography>
          </div>
        </div>
      </div>
      <div className='absolute hidden md:block top-[-10%] right-[-15%] w-[100px] h-[100px]'>
        <ThreeStarsWide />
      </div>
    </div>
  );
};

export default StudentReviewCard;
