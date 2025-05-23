'use client';

import { localSwimInstructorimg } from '@/assets';
import IconFrame from '@/components/icons/IconFrame';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ThreeStars from '../decoration/ThreeStars';

const content = {
  heading: 'Swim Lessons With Local Swim Instructors You Can Trust',
  heading2: 'What makes our Swim Instructors Sunsational?',
  image: localSwimInstructorimg,
  benefits: [
    'Passed Extensive Background Checks',
    'Minimum 2 Years Experience',
    'Current CPR/First Aid Certification',
    'Fully Insured Through Our Company Policy',
    'Patient, Caring and Love Teaching!',
    '100% Satisfaction Guarantee',
  ],
};

const WhatMakesOurInstructorsSection = () => {
  const [isMobile, setIsMobile] = useState(false); // Initialize with a default value

  useEffect(() => {
    // Check if window is defined (ensures client-side execution)
    if (typeof window === 'undefined') return;

    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileMediaQuery.matches); // Set initial state based on current media query

    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
    };

    mobileMediaQuery.addEventListener('change', handleResize); // Use addEventListener for modern browsers

    // Cleanup function to remove the event listener
    return () => {
      mobileMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <Container className='flex flex-col gap-12 justify-start items-center py-24'>
      <Typography
        variant='h2'
        className='text-center max-w-[372px] md:max-w-[1020px] mb-[300px] lg:mb-0'
      >
        {content.heading}
      </Typography>
      <div className='flex justify-center items-center  relative  py-4 px-5 lg:px-16 md:py-8  md:max-w-[1450px]'>
        {/* more than 1024px */}
        <div className='z-10 h-[770px] w-[473px]  absolute left-0  -translate-x-1/3 -translate-y-4 hidden xl:block'>
          <Image fill src={content.image} className='' alt='instructor image' />
        </div>
        {/* less than 1024px */}
        <div className='z-10 absolute h-[473px] w-[287px] -translate-y-[90%] lg:hidden'>
          <Image fill src={content.image} className='' alt='instructor image' />
        </div>
        <div className='flex flex-col lg:flex-row  justify-between items-center relative  w-full  py-10 px-10  md:py-16'>
          <div className='flex flex-col gap-6 pt-16 lg:pt-0 lg:pl-44   z-10'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[40px] leading-[115%] font-primary font-bold text-offBlack text-center max-w-[287px] md:max-w-[595px]'
            >
              {content.heading2}
            </Typography>
            <div className='flex flex-col max-w-[366px] md:max-w-none gap-5'>
              {content.benefits.map((el, index) => {
                return (
                  <div
                    key={`benefit-${index}`}
                    className='flex justify-between md:justify-start gap-5'
                  >
                    <span className='flex justify-center items-center h-5 w-[8%] md:w-auto'>
                      <IconFrame />
                    </span>
                    <Typography
                      variant='custom'
                      className='w-[92%] md:w-auto text-base md:text-[30px] font-primary font-bold leading-[100%] md:leading-[113%] md:whitespace-nowrap'
                    >
                      {el}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Inner div background */}
          <div
            className={clsx(
              'absolute w-full h-full  bg-lightYellow  top-0 left-0',
              {
                'vertical-card': isMobile,
                'horizonral-card-local-swim-instructors': !isMobile,
              }
            )}
          ></div>
        </div>
        {/* Outer div background */}
        <div
          className={clsx(
            'absolute w-full bg-darkYellow h-full  top-0 left-0 z-[-1]',
            {
              'vertical-card': isMobile,
              'horizonral-card-local-swim-instructors': !isMobile,
            }
          )}
        ></div>
        <div className='hidden lg:block absolute z-10 -right-[30px] w-[155px] bottom-40'>
          <ThreeStars />
        </div>
        <div className='lg:hidden absolute z-10  w-[65px] bottom-0 left-[-25px]'>
          <ThreeStars />
        </div>
      </div>
    </Container>
  );
};

export default WhatMakesOurInstructorsSection;
