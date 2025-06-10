'use client';
import React from 'react';
import {
  swimInstructorReviewImg1,
  swimInstructorReviewImg2,
  swimInstructorReviewImg3,
} from '@/assets';
import Typography from '@/components/semantics/Typography';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import ProfileCardCircle from '../shapes/ProfileCardCircle';
import { StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import IconFrame from '@/components/icons/IconFrame';
import {
  NextButton,
  PrevButton,
  useEmblaCarouselControls,
} from '../widgets/EmblaCarouselArrowButton';

// Default content in case props are not passed
const defaultContent = {
  sectionHeading: 'The Faces Behind Sunsational Lessons',
  sectionDescripton: '',
  buttonText: 'Find Your Instructor',
  buttonLink: '#',
  buttonClasses:
    'font-primary bg-offBlack text-white text-[20px] font-semiBold',
  shadowClasses: '',
  iconClasses: 'bg-yellow',
  iconColor: 'black',
  buttonShadow: true,
  hideButton: false,
  reviews: [
    {
      name: 'Dana L.',
      instructorQuote:
        '“A short, friendly quote from the instructor about their teaching philosophy”',
      rating: 5,
      img: swimInstructorReviewImg3,
    },
    {
      name: 'Veronica M.',
      experience: '5+ Years Swim Experience Speciality: Infants',
      rating: 5,
      img: swimInstructorReviewImg1,
    },
    {
      name: 'Madison I.',
      experience: '3+ Years Experience Speciality: Special Needs',
      rating: 5,
      img: swimInstructorReviewImg2,
    },
  ],
};

type Review = {
  name?: string;
  experience?: string;
  review?: string;
  rating?: number;
  img?: StaticImageData;
  instructorQuote?: string;
};

type SectionProps = {
  sectionHeading?: string;
  sectionDescripton?: string;
  reviews?: Review[];
  buttonText?: string;
  buttonLink?: string;
  buttonClasses?: string;
  shadowClasses?: string;
  iconClasses?: string;
  iconColor?: string;
  buttonShadow?: boolean;
  hideButton?: boolean;
};

const FeaturedSwimInstructorsSection = ({
  sectionHeading = defaultContent.sectionHeading,
  sectionDescripton = defaultContent.sectionDescripton,
  reviews = [...defaultContent.reviews, ...defaultContent.reviews],
  buttonText = defaultContent.buttonText,
  buttonLink = defaultContent.buttonLink,
  buttonClasses = defaultContent.buttonClasses,
  shadowClasses = defaultContent.shadowClasses,
  iconClasses = defaultContent.iconClasses,
  iconColor = defaultContent.iconColor,
  buttonShadow = defaultContent.buttonShadow,
  hideButton = defaultContent.hideButton,
}: SectionProps) => {
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    loop: true,
    align: 'start',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaCarouselControls(emblaApi);

  return (
    <section className='md:px-[4em] relative flex flex-col gap-20 overflow-clip justify-start items-center'>
      {/* Section heading and description */}
      <div className='flex flex-col gap-6 justify-start items-center z-10'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[849px] text-center'
        >
          {sectionHeading}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[820px] text-center font-bold md:font-medium text-offBlack whitespace-break-spaces'
        >
          {sectionDescripton}
        </Typography>
      </div>

      {/* Carousel container */}
      <div className='flex items-center max-w-[1440px] relative justify-center gap-4 md:gap-0 lg:gap-4 z-10 w-full'>
        {/* Navigation buttons (Prev/Next) */}
        <div className='absolute top-0 w-full h-[580px] flex justify-between items-center'>
          {/* Previous Button */}
          <div className='hover:cursor-pointer absolute left-5 md:-left-12 z-40'>
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center'>
              <PrevButton
                className='h-full w-full inline-flex justify-center items-center text-white'
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <span className='w-full absolute h-full top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-teal)' />
              </span>
            </div>
          </div>

          {/* Next Button */}
          <div className='hover:cursor-pointer absolute right-5 md:-right-12 z-40'>
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center'>
              <NextButton
                className='h-full w-full inline-flex justify-center items-center text-white'
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
              <span className='w-full absolute h-full top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-teal)' />
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Slides */}
        <div className='embla_feature_swim_instructor z-30'>
          <div
            ref={emblaRef}
            className='embla__viewport_feature_swim_instructor'
          >
            <div className='embla__container_feature_swim_instructor'>
              {reviews.map((el, index) => (
                <div
                  key={`review-desktop-${index}`}
                  className='embla__slide_feature_swim_instructor flex justify-center items-start'
                >
                  <ProfileCardCircle
                    name={el.name}
                    rating={el.rating}
                    experience={el.experience}
                    img={el.img}
                    review={el.review}
                    instructorQuote={el.instructorQuote}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action button */}
      {!hideButton && (
        <div>
          <ArrowButton
            text={buttonText}
            link={buttonLink}
            buttonClasses={buttonClasses}
            shadowClasses={shadowClasses}
            iconColor={iconColor}
            IconClasses={iconClasses}
            shadow={buttonShadow}
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedSwimInstructorsSection;
