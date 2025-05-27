'use client';
// Example Usage
{/* <CustomerReviewsSection
  description='4.9 rating out of 1851 reviews'
  heading='Sunsational Swim School - Home Swimming Lessons'
  bgColor={'var(--color-lightBlue)'}
  bgDecorationIcon={''}
  hideButton={true}
  decorationIconLeft={<BackgroundCircles />}
  decorationIconRight={<BackgroundCircles />}
  decorationIconLeftClasses='lg:right-0 lg:top-[-10%] w-[616px] h-[616px] lg:h-[800px]  lg:w-[800px] -rotate-45'
  decorationIconRightClasses='left-[-5%] bottom-[-5%] h-[780px] w-[780px] hidden lg:block -rotate-45'
/>; */}

import ArrowButton from '@/components/kit/buttons/ArrowButton';

import Typography from '@/components/semantics/Typography';
import ReviewCard from '@/components/shapes/ReviewCard';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { EmblaOptionsType } from 'embla-carousel';

import IconFrame from '@/components/icons/IconFrame';
import { WaveIcon } from '@/components/icons';
import {
  NextButton,
  PrevButton,
  useEmblaCarouselControls,
} from '../widgets/EmblaCarouselArrowButton';
import BackgroundSun from '../decoration/BackgroundSun';

const content: CustomerReviewType = {
  title: 'Thousands of Five Star Reviews and counting!',
  desc: 'Rated 4.9/5 Stars From Over 900+ Sunsational Swim School Reviews',
  steps: [
    {
      desc: '“Christine has been great! My kids enjoy swimming with her and she is very easy to work with...',
      name: 'Joselyn K',
      location: 'Las Vegas',
      direction: 'lt',
      bgColor: '#110241',
      shadowcolor: '#033D9A',
    },
    {
      desc: '“We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. First they worked hard to get us matched. We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. First they worked hard to get us matched.',
      name: 'Neda',
      location: 'Arizona',
      direction: 'center',
      bgColor: '#FEDF46',
      shadowcolor: '#F86008',
    },
    {
      desc: '“We had James for swimming lessons, and I cannot say enough good things about him. He was prompt every single day...',
      name: 'Raja J',
      location: 'Atlanta',
      direction: 'rt',
      bgColor: '#1A8DC6',

      shadowcolor: '#C7EAF3',
    },
    {
      desc: '“We had James for swimming lessons, and I cannot say enough good things about him. He was prompt every single day... We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a',
      name: 'Raja J',
      location: 'Atlanta',
      direction: 'lt',
      bgColor: '#1A8DC6',
      shadowcolor: '#C7EAF3',
    },
    {
      desc: '“We have been having a great experience with Sunsational. First they worked hard to get us matched....We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a',
      name: 'Neda',
      location: 'Arizona',
      direction: 'center',
      bgColor: '#FEDF46',
      shadowcolor: '#F86008',
    },
    {
      desc: '“We have been having a great experience with Sunsational. First they worked hard to get us matched....We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a',
      name: 'Neda',
      location: 'Arizona',
      direction: 'rt',
      bgColor: '#1A8DC6',
      shadowcolor: '#C7EAF3',
    },
    {
      desc: '“We have been having a great experience with Sunsational. First they worked hard to get us matched....We have been having a great experience with Sunsational. We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a  We have been having a great experience with Sunsational. We have been having a',
      name: 'Neda',
      location: 'Arizona',
      direction: 'center',
      bgColor: '#FEDF46',
      shadowcolor: '#F86008',
    },
  ],
};

type ReviewStep = {
  desc: string;
  name: string;
  location: string;
  direction: 'lt' | 'center' | 'rt';
  bgColor: string;
  shadowcolor: string;
};

type CustomerReviewType = {
  title: string;
  desc: string;
  steps: ReviewStep[];
};

type Props = {
  heading?: string;
  description?: string;
  reviews?: ReviewStep[];
  bgDecorationIcon?: React.ReactNode | string;
  decorationIconLeft?: React.ReactNode;
  decorationIconRight?: React.ReactNode;
  decorationIconLeftClasses?: string;
  decorationIconRightClasses?: string;
  bgColor?: string;
  buttonText?: string;
  buttonClasses?: string;
  shadowClasses?: string;
  buttonIconClasses?: string;
  buttonIconColor?: string;
  hideButton?: boolean;
  buttonLink?: string;
};

const CustomerReviewsSection = ({
  heading,
  description,
  reviews,
  bgDecorationIcon,
  decorationIconLeft,
  decorationIconLeftClasses,
  decorationIconRightClasses,
  decorationIconRight,
  bgColor,
  buttonText,
  buttonClasses,
  shadowClasses,
  buttonIconClasses,
  buttonIconColor,
  hideButton,
  buttonLink,
}: Props) => {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 1, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaCarouselControls(emblaApi);

  return (
    <section
      style={{ backgroundColor: bgColor }}
      className='my-[10em] md:px-[4em]  py-[8em] relative bg-off-white flex flex-col gap-20 overflow-clip justify-start items-center'
    >
      <div className='absolute top-0 w-full h-6 md:h-12 -translate-y-1/2'>
        <WaveIcon color={bgColor ?? '#FFF9E1'} />
      </div>
      <div className='absolute bottom-0 w-full h-6 md:h-12 translate-y-1/2 rotate-180'>
        <WaveIcon color={bgColor ?? '#FFF9E1'} />
      </div>
      <div className='flex flex-col gap-6  justify-start items-center z-10'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[842px] text-center'
        >
          {heading ?? content.title}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[447px] text-center font-bold text-offBlack'
        >
          {description ?? content.desc}
        </Typography>
      </div>

      <div className='flex items-center max-w-[1440px] relative justify-center gap-4 md:gap-0  lg:gap-4  z-10  w-full  '>
        <div className='absolute top-0 w-full h-[300px] md:h-[380px] flex justify-between items-center '>
          <div className='hover:cursor-pointer absolute  left-5  md:-left-16 z-40'>
            <div className='lg:h-16 lg:w-16 h-9 w-9 relative flex justify-center items-center '>
              <PrevButton
                className='h-full w-full inline-flex justify-center items-center text-white'
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-orange)' />
              </span>
            </div>
          </div>
          <div className='hover:cursor-pointer absolute right-5  md:-right-16 z-40'>
            <div className='lg:h-16 lg:w-16 h-9 w-9 relative flex justify-center items-center '>
              <NextButton
                className='h-full w-full inline-flex justify-center items-center text-white'
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
              <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-orange)' />
              </span>
            </div>
          </div>
        </div>

        <div className='embla_review_section w-[100%]  z-30'>
          <div ref={emblaRef} className='embla__viewport_review_section'>
            <div className='embla__container_review_section '>
              {(reviews ?? content.steps).map((el, index) => {
                return (
                  <div
                    key={index}
                    className='embla__slide_review_section  flex justify-center items-start mx-3 md:px-0'
                  >
                    <ReviewCard
                      index={index}
                      direction={el.direction}
                      description={el.desc}
                      bgColor={el.bgColor}
                      shadowColor={el.shadowcolor}
                      title={el.name}
                      location={el.location}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {!hideButton && (
        <div className='z-10'>
          <ArrowButton
            text={buttonText ?? 'See our splashing reviews'}
            buttonClasses={
              buttonClasses ??
              'bg-offBlack leading-[120%] text-base md:text-[20px] text-white font-primary'
            }
            IconClasses={buttonIconClasses ?? 'bg-yellow'}
            shadow={true}
            iconColor={buttonIconColor ?? 'black'}
            shadowClasses={shadowClasses ?? 'bg-blue'}
            link={buttonLink ?? '/registration'}
          />
        </div>
      )}
      <div className='absolute  h-full w-full m-0 inset-0'>
        {bgDecorationIcon ?? <BackgroundSun />}
      </div>
      {decorationIconLeft && (
        <div className={`absolute ${decorationIconLeftClasses}`}>
          {decorationIconLeft}
        </div>
      )}
      {decorationIconRight && (
        <div className={`absolute ${decorationIconRightClasses}`}>
          {decorationIconRight}
        </div>
      )}
    </section>
  );
};

export default CustomerReviewsSection;
