import React from 'react';

import {
  swimInstructorReviewImg1,
  swimInstructorReviewImg2,
  swimInstructorReviewImg3,
} from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import ProfileCardCircle from '../shapes/ProfileCardCircle';
import EmblaProfileCardSlider from '../widgets/EmblaProfileCardSlider';

const content = {
  heading: 'The Faces Behind Sunsational Lessons',
  reviews: [
    {
      name: 'Dana L.',
      experience: '3+ Years Experience Arlington Heights, IL 60005',
      review:
        '“A short, friendly quote from the instructor about their teaching philosophy”',
      rating: 5,
      img: swimInstructorReviewImg3,
    },
    {
      name: 'Veronica M.',
      experience: '5+ Years Swim Experience Speciality: Infants',
      review: '',
      rating: 5,
      img: swimInstructorReviewImg1,
    },
    {
      name: 'Madison I.',
      experience: '3+ Years Experience Speciality: Special Needs',
      review:
        '“A short, friendly quote from the instructor about their teaching philosophy”',
      rating: 5,
      img: swimInstructorReviewImg2,
    },
  ],
};

const FeaturedSwimInstructorsSection = () => {

  return (
    <Container className='flex flex-col justify-start items-center md:gap-12 py-24'>
      <Typography
        variant='h3'
        className='font-primary font-bold  max-w-[678px] text-center'
      >
        {content.heading}
      </Typography>
      <div className='hidden md:flex justify-center items-center gap-8'>
        {content.reviews.map((el, index) => {
          return (
            <ProfileCardCircle
              key={`review-desktop-${index}`}
              name={el.name}
              rating={el.rating}
              description={el.review}
              experience={el.experience}
              img={el.img}
            />
          );
        })}
      </div>
      {/* Mobile Slider */}
      <div className='md:hidden w-full overflow-hidden'>
        <EmblaProfileCardSlider content={content} />
      </div>
      <div className='w-full flex justify-center items-center mt-8 md:mt-0'>
        <ArrowButton
          text='Find Your Instructor'
          buttonClasses='font-primary bg-offBlack text-white text-[20px] font-semiBold'
          shadow
          shadowClasses='bg-blue'
          IconClasses='bg-yellow'
          iconColor='black'
          link='/find-instructor'
        />
      </div>
    </Container>
  );
};

export default FeaturedSwimInstructorsSection;
