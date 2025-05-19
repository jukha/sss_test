'use client';

import React from 'react';
import ProfileCardCircle from '../shapes/ProfileCardCircle';
import useEmblaCarousel from 'embla-carousel-react';
import { StaticImageData } from 'next/image';

type Props = {
  content: {
    reviews: {
    name: string;
    experience: string;
    review?: string;
    img: StaticImageData;
    rating: number;
    }[];
  };
};

const EmblaProfileCardSlider = ({content} : Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container flex'>
        {content.reviews.map((el, index) => (
          <div
            key={`review-mobile-${index}`}
            className='embla__slide flex-[0_0_80%] min-w-0 pl-4 flex justify-center' // Adjust slide width as needed
          >
            <ProfileCardCircle
              name={el.name}
              rating={el.rating}
              description={el.review}
              experience={el.experience}
              img={el.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaProfileCardSlider;
