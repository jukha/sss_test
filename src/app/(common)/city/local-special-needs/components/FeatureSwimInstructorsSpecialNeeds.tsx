import {
  featuredBabySwimInstructorImg,
  featuredBabySwimInstructorImg2,
  featuredBabySwimInstructorImg3,
} from '@/assets';
import FeaturedSwimInstructorsSection from '@/components/sections/FeaturedSwimInstructorsSection';
import React from 'react';

const content = {
  sectionHeading: 'Featured kids swim instructors in [city, state]',
  sectionDescription:
    'We believe our students deserve the best, so we work with only the best swim instructors in [city]. Every Sunsational swim teacher has a minimum of 2 years teaching experience, is CPR/First Aid certified, passes a national background check, and has a proven track record of successful teaching before they even land an interview with Sunsational.\n\nWe back their expertise with a 100% satisfaction guarantee. Why? Because we know great instructors mean fast results!',
  buttonShadowClasses: 'bg-blue',
  reviews: [
    {
      review:
        "“Miss Christina was phenomenal with our son. He's autistic, and can get easily frustrated but the instructor took it all in stride and made each lesson productive and fun. Sammy is able to jump right into the deep end of the pool and find his way to safety. He enjoys swimming so much more now that he's gained confidence and practices all the safety precautions that Christina constantly reinforced.”",
      name: 'Tracy H.',
      rating: 5,
      img: featuredBabySwimInstructorImg,
    },
    {
      review:
        '“We had struggled to find swim lessons for our child with special needs until we discovered Sunsational Swim School. Marie, our instructor, was patient, engaging, and took the time to understand our daughter’s cerebral palsy, creating a thoughtful and adaptive swim program. In just six lessons, our daughter made incredible progress—kicking more consistently, grabbing the wall, and even back floating with support. Marie’s creativity, dedication, and personalized approach made this a fantastic experience!”',
      name: 'Laura K.',
      rating: 5,
      img: featuredBabySwimInstructorImg2,
    },
    {
      review:
        '“Jordan is amazing, my son is high functioning autistic and ADHD, all the swim lessons we took at swim schools was so hard for him to do as he really needs one on one teaching and a fun program versus a strict step by step based learning. Jordan worked with him and did everything he wanted to do while still teaching him to be a strong swimmer.”',
      name: ' Sheryl F.',
      rating: 5,
      img: featuredBabySwimInstructorImg3,
    },
  ],
};

const FeatureSwimInstructorsSpecialNeeds = () => {
  return (
    <FeaturedSwimInstructorsSection
      sectionHeading={content.sectionHeading}
      sectionDescripton={content.sectionDescription}
      reviews={[...content.reviews, ...content.reviews]}
      shadowClasses={content.buttonShadowClasses}
    />
  );
};

export default FeatureSwimInstructorsSpecialNeeds;
