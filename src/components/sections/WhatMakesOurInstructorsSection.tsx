'use client';

import { localSwimInstructorimg } from '@/assets';
import IconFrame from '@/components/icons/IconFrame';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import ThreeStars from '../decoration/ThreeStars';
import ArrowButton from '../kit/buttons/ArrowButton';

const content = {
  sectionHeading: 'Swim Lessons With Local Swim Instructors You Can Trust',
  title: 'What makes our Swim Instructors Sunsational?',
  image: localSwimInstructorimg,
  buttonText: undefined,
  buttonLink: '#',
  buttonClasses: 'bg-offBlack text-xl text-white',
  shadowClasses: 'bg-blue',
  buttonShadow: true,
  iconClasses: 'bg-yellow',
  iconColor: 'black',
  reasons: [
    'Passed Extensive Background Checks',
    'Minimum 2 Years Experience',
    'Current CPR/First Aid Certification',
    'Fully Insured Through Our Company Policy',
    'Patient, Caring and Love Teaching!',
    '100% Satisfaction Guarantee',
  ],
};

type Props = {
  sectionHeading?: string;
  title?: string; // send '' from outside to hide title
  image?: StaticImageData;
  reasons?: string[];
  buttonLink?: string;
  buttonText?: string;
  buttonClasses?: string;
  iconClasses?: string;
  iconColor?: string;
  buttonShadow?: boolean;
  shadowClasses?: string;
};

const WhatMakesOurInstructorsSection = ({
  sectionHeading = content.sectionHeading,
  title = content.title,
  image = content.image,
  reasons = content.reasons,
  buttonText = content.buttonText,
  buttonLink = content.buttonLink,
  buttonClasses = content.buttonClasses,
  shadowClasses = content.shadowClasses,
  buttonShadow = content.buttonShadow,
  iconClasses = content.iconClasses,
  iconColor = content.iconColor,
}: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize with a default value

  useEffect(() => {
    setIsClient(true);
  }, [])

  useEffect(() => {
    if (!isClient) return;

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
  }, [isClient]);

  return (
    <Container className='flex flex-col gap-2 lg:gap-20 justify-start items-center'>
      <Typography
        variant='h2'
        className='text-center max-w-[372px] md:max-w-[1020px] mb-[300px] lg:mb-0'
      >
        {sectionHeading}
      </Typography>
      <div className='flex justify-center items-center  relative  py-4 px-5 lg:px-16 md:py-8  md:max-w-[1450px]'>
        {/* more than 1024px */}
        <div className='z-10 h-[770px] w-[473px]  absolute left-0  -translate-x-5/12 -translate-y-4 hidden xl:block'>
          <Image fill src={image} className='' alt='instructor image' />
        </div>
        {/* less than 1024px */}
        <div
          className={clsx(
            `z-10 absolute h-[473px] w-[287px] lg:hidden`,
            title ? '-translate-y-[90%]' : '-translate-y-[70%]'
          )}
        >
          <Image fill src={image} className='' alt='instructor image' />
        </div>
        <div className='flex flex-col lg:flex-row lg:min-h-[530px] justify-between items-center relative  w-full  py-10 px-10  md:py-16'>
          <div className='flex flex-col gap-6 pt-16 lg:pt-0 lg:pl-44   z-10'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[40px] leading-[115%] font-primary font-bold text-offBlack text-center max-w-[287px] md:max-w-[595px]'
            >
              {title}
            </Typography>
            <div className='flex flex-col max-w-[366px] md:max-w-none gap-5'>
              {reasons.map((el, index) => {
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
                      className='w-[92%] md:w-auto text-base md:text-[30px] font-primary font-bold leading-[100%] md:leading-[113%] max-w-[687px]'
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
          <ThreeStars color={'var(--color-blue)'} />
        </div>
        <div className='lg:hidden absolute z-10  w-[65px] bottom-0 left-[-25px]'>
          <ThreeStars color={'var(--color-blue)'} />
        </div>
      </div>
      {buttonText && (
        <ArrowButton
          text={buttonText}
          link={buttonLink}
          buttonClasses={buttonClasses}
          IconClasses={iconClasses}
          iconColor={iconColor}
          shadowClasses={shadowClasses}
          shadow={buttonShadow}
        />
      )}
    </Container>
  );
};

export default WhatMakesOurInstructorsSection;
