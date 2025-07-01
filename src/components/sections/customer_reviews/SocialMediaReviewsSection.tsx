'use client';
import Typography from '@/components/semantics/Typography';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import IconFrame from '@/components/icons/IconFrame';
import SocialMediaReviewCard from '@/components/shapes/SocialMediaReviewCard';
import {
  useEmblaCarouselControls,
  PrevButton,
  NextButton,
} from '@/components/widgets/EmblaCarouselArrowButton';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';

const titleContent = {
  heading: '4000+ 5-Star Ratings from Happy Swimmers',
  description:
    'Read Sunsational reviews from thousands of happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.',
};

type Props = {
  reviews: CustomerReviewEntity[];
  heading?: string;
  description?: string;
  cardColor?: string;
};

const SocialMediaReviewsSection = ({
  reviews,
  heading = titleContent.heading,
  description = titleContent.description,
  cardColor = 'var(--color-lightBlue)',
}: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    setIsMobile(window.matchMedia('(max-width: 768px)').matches);

    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    loop: true,
    align: isMobile ? 'center' : 'start',
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useEmblaCarouselControls(emblaApi);

  useEffect(() => {});

  return (
    <section className='md:px-[4em] relative flex flex-col gap-20 overflow-clip justify-start items-center'>
      <div className='flex flex-col gap-6  justify-start items-center z-10'>
        <Typography variant='h2' className='max-w-[354px] md:max-w-[842px] text-center'>
          {heading}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[669px] text-center font-medium text-offBlack'
        >
          {description}
        </Typography>
      </div>

      <div className='flex items-center max-w-[1440px] relative justify-center gap-4 md:gap-0 lg:gap-4 z-10 w-full mb-[40px]'>
        <div className='absolute top-0 w-full h-[300px] md:h-[380px] flex justify-between items-center'>
          <div className='hover:cursor-pointer absolute  left-5  md:-left-16 z-40'>
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center '>
              <PrevButton
                className='h-full w-full inline-flex justify-center items-center text-white cursor-pointer'
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-orange)' />
              </span>
            </div>
          </div>
          <div className='hover:cursor-pointer absolute right-5  md:-right-16 z-40'>
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center '>
              <NextButton
                className='h-full w-full inline-flex justify-center items-center text-white cursor-pointer'
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
              <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
                <IconFrame color='var(--color-orange)' />
              </span>
            </div>
          </div>
        </div>

        <div className='embla_social_media_review_section   z-30'>
          <div ref={emblaRef} className='embla__viewport_social_media_review_section'>
            {reviews.length ? (
              <div className='embla__container_social_media_review_section '>
                {reviews.map((review, index) => {
                  return (
                    <div
                      key={index}
                      className='embla__slide_social_media_review_section flex justify-center items-start'
                    >
                      <SocialMediaReviewCard data={review} rating={5} cardColor={cardColor} />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReviewsSection;
