'use client';
import Typography from '@/components/semantics/Typography';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import IconFrame from '@/components/icons/IconFrame';
import {
  NextButton,
  PrevButton,
  useEmblaCarouselControls,
} from '../widgets/EmblaCarouselArrowButton';
import SocialMediaReviewCard from '../shapes/SocialMediaReviewCard';
import {
  SocialMediaReviewSectionType,
  SocialMediaReviewCardType,
} from '@/types/social-media-review.type';
import { socialMediaReviewCardDemoImg } from '@/assets';

const defaultContent: SocialMediaReviewSectionType = {
  heading: '4000+ 5-Star Ratings from Happy Swimmers',
  description:
    'Read Sunsational reviews from thousands of happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.',
  reviews: [
    {
      image: socialMediaReviewCardDemoImg, // demo image, will replace with actual images from api
      name: 'Peg Romano',
      rating: 5,
      review:
        'Asher was an absolute GEM! She provided excellent swim lessons to our 3 and 5 year old grandchildren while they were visiting. They made incredible progress in their 6 lessons, looked forward to each day and have much greater skills and confidence in the water. Thank you!',
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'Karen Nabutovsky Feller',
      rating: 5,
      review:
        'Michaela was absolutely wonderful with my four year-old granddaughter! The progress she made in just six sessions was remarkable and my granddaughter never complained and absolutely loved every session! Michaela is warm, friendly, funny, and makes the kids feel super safe, all well providing an incredible swim lesson. She was super easy to connect with, very responsive and was on time or early every single session.',
      platform: 'facebook',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'Alvin G',
      rating: 5,
      review:
        "Adrian has been an excellent at home swim instructor, pushing our boys to the limit, helping them overcome their fears, and developing their skills along the way. He's punctual, talented and caring with our boys. We highly recommend him.",
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'C Nemenzo',
      rating: 5,
      review:
        "We are fortunate to have Gwendolyn as my son's swimming instructor. She's so great that my son can easily follow her directions, even though he is an autistic child with developmental delays. Gwen is really effective with her strategies and goals, which have shown positive results. After just his first swimming lesson, my son already knows a lot about pool safety. We would love to keep her as my son's private swim instructor for long term.",
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'Karen Nabutovsky Feller',
      rating: 5,
      review:
        'Michaela was absolutely wonderful with my four year-old granddaughter! The progress she made in just six sessions was remarkable and my granddaughter never complained and absolutely loved every session! Michaela is warm, friendly, funny, and makes the kids feel super safe, all well providing an incredible swim lesson. She was super easy to connect with, very responsive and was on time or early every single session.',
      platform: 'facebook',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'Alvin G',
      rating: 5,
      review:
        "Adrian has been an excellent at home swim instructor, pushing our boys to the limit, helping them overcome their fears, and developing their skills along the way. He's punctual, talented and caring with our boys. We highly recommend him.",
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'C Nemenzo',
      rating: 5,
      review:
        "We are fortunate to have Gwendolyn as my son's swimming instructor. She's so great that my son can easily follow her directions, even though he is an autistic child with developmental delays. Gwen is really effective with her strategies and goals, which have shown positive results. After just his first swimming lesson, my son already knows a lot about pool safety. We would love to keep her as my son's private swim instructor for long term.",
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'C Nemenzo',
      rating: 5,
      review:
        "We are fortunate to have Gwendolyn as my son's swimming instructor. She's so great that my son can easily follow her directions, even though he is an autistic child with developmental delays. Gwen is really effective with her strategies and goals, which have shown positive results. After just his first swimming lesson, my son already knows a lot about pool safety. We would love to keep her as my son's private swim instructor for long term.",
      platform: 'google',
    },
    {
      image: socialMediaReviewCardDemoImg,
      name: 'C Nemenzo',
      rating: 5,
      review:
        "We are fortunate to have Gwendolyn as my son's swimming instructor. She's so great that my son can easily follow her directions, even though he is an autistic child with developmental delays. Gwen is really effective with her strategies and goals, which have shown positive results. After just his first swimming lesson, my son already knows a lot about pool safety. We would love to keep her as my son's private swim instructor for long term.",
      platform: 'google',
    },
  ],
};

type Props = {
  heading?: string;
  description?: string;
  cardColor?: string;
  reviews?: SocialMediaReviewCardType[];
};

const SocialMediaReviewsSection = ({
  heading,
  description,
  reviews,
  cardColor = 'var(--color-lightBlue)',
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);

      const handleResize = () => {
        setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    loop: true,
    align: isMobile ? 'center' : 'start',
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaCarouselControls(emblaApi);

  useEffect(() => {});

  return (
    <section className='my-[10em] md:px-[4em]  py-[8em] relative flex flex-col gap-20 overflow-clip justify-start items-center'>
      <div className='flex flex-col gap-6  justify-start items-center z-10'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[842px] text-center'
        >
          {heading ?? defaultContent.heading}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[669px] text-center font-medium text-offBlack'
        >
          {description ?? defaultContent.description}
        </Typography>
      </div>

      <div className='flex items-center max-w-[1440px] relative justify-center gap-4 md:gap-0  lg:gap-4  z-10  w-full  '>
        <div className='absolute top-0 w-full h-[300px] md:h-[380px] flex justify-between items-center '>
          <div className='hover:cursor-pointer absolute  left-5  md:-left-16 z-40'>
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center '>
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
            <div className='lg:h-12 lg:w-12 h-9 w-9 relative flex justify-center items-center '>
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

        <div className='embla_social_media_review_section   z-30'>
          <div
            ref={emblaRef}
            className='embla__viewport_social_media_review_section'
          >
            <div className='embla__container_social_media_review_section '>
              {(reviews ?? defaultContent.reviews).map((el, i) => {
                return (
                  <div
                    key={i}
                    className='embla__slide_social_media_review_section  flex justify-center items-start'
                  >
                    <SocialMediaReviewCard
                      image={el.image}
                      name={el.name}
                      platform={el.platform}
                      review={el.review}
                      rating={el.rating}
                      cardColor={cardColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReviewsSection;
