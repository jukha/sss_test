import React from 'react';
import Typography from '@/components/semantics/Typography';
import Container from '@/components/layout/Container';
import { sunsationalInstructorImg } from '@/assets';
import ThreeStareSlim from '../decoration/ThreeStareSlim';

const data = {
  heading: 'See our Sunsational Instructors in Action',
  img: sunsationalInstructorImg,
};

const VideoFrameGenericSsection = () => {
  return (
    <Container className=' flex flex-col justify-start items-center gap-10 py-24'>
      <div className='relative flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center items-center max-w-[678px]'>
          <Typography
            variant='h3'
            className='text-center font-primary leading-[110%] font-bold'
          >
            {data.heading}
          </Typography>
        </div>
        <div className=' flex justify-center items-center horizontal-card bg-yellow py-[10px] px-5 md:px-16 md:py-8'>
          <div className='flex justify-center items-center horizontal-card bg-lightYellow py-5 px-10 md:px-24 md:py-16'>
            {/* <Image src={sunsationalInstructorImg} alt='instructor image' /> */}
            <video
              className='w-full h-full'
              controls
              poster={sunsationalInstructorImg.src}
            >
              <source src={sunsationalInstructorImg.src} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 z-10 w-10 md:w-30' >
          <ThreeStareSlim />
        </div>
        <div className='absolute top-30 md:25 right-0 z-10 w-10 md:w-30 scale-x-[-1]'>
          <ThreeStareSlim />
        </div>
      </div>
    </Container>
  );
};

export default VideoFrameGenericSsection;
