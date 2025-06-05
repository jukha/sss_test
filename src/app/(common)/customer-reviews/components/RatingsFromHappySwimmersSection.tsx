'use client';
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { SocialMediaReviewCardType } from '@/types/social-media-review.type';
import SocialMediaReviewCard from '@/components/shapes/SocialMediaReviewCard';
import { aboutUsSectionImage2 } from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Button from '@/components/kit/buttons/Button';

const content = {
  heading: '4000+ 5-Star Ratings from Happy Swimmers',
  description:
    'Read Sunsational reviews from thousands of happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.',
};

// Sample reviews
const sampleReviews = [
  'Amazing instructors! My child learned so fast.',
  'Great experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. .',
  'Highly recommend! The team was so supportive.',
  'Not bad, but session times could be more flexible.',
  'My daughter loves the lessons. Friendly staff and patient teachers.',
  'Quick improvement in swimming skills. Impressed!',
  'Affordable and worth it. Saw real progress in just a few weeks.',
  'Loved the one-on-one sessions. Highly professional coaches. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintainedGreat experience overall. The facilities were clean and well-maintained',
  'Fun environment and structured learning!',
  'Really boosted my kid’s confidence in water.',
  'Really boosted my kid’s confidence in water.',
  'Really boosted my kid’s confidence in water.',
];

// Generate dummy reviews
const generateDummyReviews = (count: number): SocialMediaReviewCardType[] => {
  return Array.from({ length: count }).map((_, i) => ({
    name: `User ${i + 1}`,
    rating: Math.floor(Math.random() * 2) + 4,
    review: sampleReviews[i % sampleReviews.length],
    platform: i % 2 === 0 ? 'google' : 'facebook',
    image: aboutUsSectionImage2, // mock image could not get from figma section because whole section is screenshot
    cardColor: 'var(--color-iceBlue)',
  }));
};

const RatingsFromHappySwimmersSection = () => {
  const [reviews, setReviews] = useState<SocialMediaReviewCardType[]>(
    generateDummyReviews(10)
  );

  const loadMoreReviews = () => {
    const newReviews = generateDummyReviews(3);
    setReviews((prev) => [...prev, ...newReviews]);
  };

  // Masonry breakpoint settings
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1,
  };

  return (
    <Container className='pt-[107px]'>
      <div className='flex flex-col gap-6  justify-start items-center z-10'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[842px] text-center'
        >
          {content.heading}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[669px] text-center font-medium text-offBlack mb-20'
        >
          {content.description}
        </Typography>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='flex w-auto -ml-4'
        columnClassName='pl-4 bg-clip-padding'
      >
        {reviews.map((review, index) => (
          <div key={index} className='mb-4 break-inside-avoid'>
            <SocialMediaReviewCard {...review} />
          </div>
        ))}
      </Masonry>

      <div className='flex justify-center mt-8'>
        <div>
          <Button text='Load More' onClick={loadMoreReviews} />
        </div>
      </div>
    </Container>
  );
};

export default RatingsFromHappySwimmersSection;
