'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

// Icons
import { StarIcon, PoolIcon, ProtecIcon } from '../icons';
import { HeroBottomBarVariant } from '@/types/heroBottomBar.type';

type PropType = {
  variant?: HeroBottomBarVariant;
};

const EmblaCarousel: React.FC<PropType> = ({ variant = 'homepage' }) => {
  const SLIDES = [
    {
      icon: <StarIcon />,
      content: {
        homepage: (
          <div>
            <p className='text-xl xl:text-2xl'>Thousands of</p>
            <p className='text-xl xl:text-2xl'>5-star reviews</p>
          </div>
        ),
        citypage: (
          <div>
            <p className='text-xl xl:text-2xl'>Thousands of</p>
            <p className='text-xl xl:text-2xl'>5-star reviews</p>
          </div>
        ),
      },
    },
    {
      icon: <PoolIcon />,
      content: {
        homepage: (
          <div>
            <p className='text-xl xl:text-2xl'>Trusted with over 200k</p>
            <p className='text-xl xl:text-2xl'>swimmers since 2009</p>
          </div>
        ),
        citypage: (
          <div>
            <span className='text-xl xl:text-5xl font-bold'>100k+</span>
            <p className='text-xl xl:text-2xl'>swimmers</p>
          </div>
        ),
      },
    },
    {
      icon: <ProtecIcon />,
      content: {
        homepage: (
          <div>
            <p className='text-xl xl:text-2xl'>Vetted, background checked</p>
            <p className='text-xl xl:text-2xl'>& insured instructors</p>
          </div>
        ),
        citypage: (
          <div>
            <span className='text-xl xl:text-5xl font-bold'>2000+</span>
            <p className='text-xl xl:text-2xl'>Sunsational Swim instructors</p>
          </div>
        ),
      },
    },
    // {
    //   icon: <FemaleUserIcon />,
    //   content: {
    //     homepage: (
    //       <div>
    //         <p className="text-xl lg:text-2xl">Nationwide service</p>
    //         <p>from coast to coast</p>
    //       </div>
    //     ),
    //     citypage: (
    //       <div>
    //         <p className="text-xl lg:text-5xl font-bold">50+</p>
    //         <p>States covered</p>
    //       </div>
    //     ),
    //   },
    // },
    // {
    //   icon: <StarIcon />,
    //   content: {
    //     homepage: (
    //       <div>
    //         <p className="text-xl lg:text-2xl">Satisfaction guaranteed</p>
    //         <p>or your money back</p>
    //       </div>
    //     ),
    //     citypage: (
    //       <div>
    //         <p className="text-xl lg:text-5xl font-bold">100%</p>
    //         <p>Guarantee</p>
    //       </div>
    //     ),
    //   },
    // },
  ];

  const OPTIONS: EmblaOptionsType = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <section className='embla lg:hidden'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {SLIDES.map((slide, index) => (
              <div className='embla__slide' key={index}>
                <div className='flex justify-center gap-5'>
                  <div className='h-[70px] w-[70px]'>{slide.icon}</div>
                  <div className='flex font-bold flex-col justify-center items-start'>
                    {variant === 'homepage'
                      ? slide.content.homepage
                      : slide.content.citypage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='embla__controls'>
          <div className='embla__dots'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={
                  'embla__dot' +
                  (index === selectedIndex ? ' embla__dot--selected' : '')
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className='hidden lg:flex z-0 justify-center gap-8 xl:gap-24 items-center my-10'>
        {SLIDES.map((slide, index) => (
          <div className='flex gap-5' key={index}>
            <div className='h-[70px] w-[70px] xl:h-[100px] xl:w-[100px]'>
              {slide.icon}
            </div>
            <div className='flex font-bold flex-col justify-center items-start'>
              {variant === 'citypage'
                ? slide.content.homepage
                : slide.content.citypage}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default EmblaCarousel;
