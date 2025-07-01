'use client';
import Masonry from 'react-masonry-css';
import SocialMediaReviewCard from '@/components/shapes/SocialMediaReviewCard';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { useCallback, useState } from 'react';
import Button from '@/components/kit/buttons/Button';
import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';

const titleContent = {
  heading: '4000+ 5-Star Ratings from Happy Swimmers',
  description:
    'Read Sunsational reviews from thousands of happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.',
};

type RatingsFromHappySwimmersSectionProps = {
  data: CustomerReviewEntity[];
};

const RatingsFromHappySwimmersSection = ({ data }: RatingsFromHappySwimmersSectionProps) => {
  const [reviews, setReviews] = useState<CustomerReviewEntity[]>(data);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreReviews = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const limit = 3;

      const response = await getBaseCustomerReviews({
        limit,
        offset: reviews.length,
      });

      const newReviews = response.data;

      setReviews((prev) => [...prev, ...newReviews]);
    } catch (err) {
      console.error('Failed to load reviews:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, reviews.length]);

  // Masonry breakpoint settings
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1,
  };

  return (
    <Container>
      <div className='flex flex-col gap-6  justify-start items-center z-10'>
        <Typography variant='h2' className='max-w-[354px] md:max-w-[842px] text-center'>
          {titleContent.heading}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[669px] text-center font-medium text-offBlack mb-20'
        >
          {titleContent.description}
        </Typography>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='flex w-auto -ml-4'
        columnClassName='pl-4 bg-clip-padding'
      >
        {reviews.map((review, index) => (
          <div key={index} className='mb-4 break-inside-avoid'>
            <SocialMediaReviewCard data={review} />
          </div>
        ))}
      </Masonry>

      <div className='flex justify-center mt-8'>
        <div className='flex flex-col items-center gap-4'>
          {isLoading && <p className='text-xl'>Loading...</p>}
          <Button text='Load More' onClick={loadMoreReviews} />
        </div>
      </div>
    </Container>
  );
};

export default RatingsFromHappySwimmersSection;
