'use client';

import {
  swimInstructorReviewImg1,
  swimInstructorReviewImg2,
  swimInstructorReviewImg3,
} from '@/assets';
import FeaturedSwimInstructorsSection from '@/components/sections/FeaturedSwimInstructorsSection';
import React from 'react';
import { useCityPageContext } from '@/app/(common)/city/context';

const reviews = [
  {
    name: 'Dana L.',
    experience: '3+ Years Experience Arlington Heights, IL 60005',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    rating: 5,
    img: swimInstructorReviewImg3,
  },
  {
    name: 'Veronica M.',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    experience: '5+ Years Swim Experience Speciality: Infants',
    rating: 5,
    img: swimInstructorReviewImg1,
  },
  {
    name: 'Madison I.',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    experience: '3+ Years Experience Speciality: Special Needs',
    rating: 5,
    img: swimInstructorReviewImg2,
  },
  {
    name: 'Dana L.',
    experience: '3+ Years Experience Arlington Heights, IL 60005',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    rating: 5,
    img: swimInstructorReviewImg3,
  },
  {
    name: 'Veronica M.',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    experience: '5+ Years Swim Experience Speciality: Infants',
    rating: 5,
    img: swimInstructorReviewImg1,
  },
  {
    name: 'Madison I.',
    instructorQuote:
      '“A short, friendly quote from the instructor about their teaching philosophy”',
    experience: '3+ Years Experience Speciality: Special Needs',
    rating: 5,
    img: swimInstructorReviewImg2,
  },
]

const FeaturedSwimInstructorsLocalJobsSection = () => {
  const { cityName } = useCityPageContext();

  return (
    <FeaturedSwimInstructorsSection
      sectionHeading={`Featured swim instructors in ${cityName}`}
      sectionDescripton={'We believe our students deserve the best, which is why our every Sunsational swim teacher has a minimum of 2 years teaching experience, is CPR/First Aid certified, passes a national background check, and has a proven track record of successful teaching before they even land an interview with Sunsational.\n\n If you believe that you have what it takes to be a Sunsational Swim Instructor, apply below:'}
      reviews={reviews}
      buttonText={'Apply Now'}
      shadowClasses={'bg-blue'}
    />
  );
};

export default FeaturedSwimInstructorsLocalJobsSection;
