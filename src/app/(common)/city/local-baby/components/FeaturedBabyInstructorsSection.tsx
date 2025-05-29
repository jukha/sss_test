import {
  featuredBabySwimInstructorImg,
  featuredBabySwimInstructorImg2,
  featuredBabySwimInstructorImg3,
} from '@/assets';
import FeaturedSwimInstructorsSection from '@/components/sections/FeaturedSwimInstructorsSection';
import React from 'react';

const content = {
  sectionHeading: 'Featured baby swim instructors in [city, state]',
  sectionDescription:
    'We believe our students deserve the best, so we work with only the best swim instructors in [city]. Every Sunsational swim teacher has a minimum of 2 years teaching experience, is CPR/First Aid certified, passes a national background check, and has a proven track record of successful teaching before they even land an interview with Sunsational.\n\nWe back their expertise with a 100% satisfaction guarantee. Why? Because we know great instructors mean fast results!',
  buttonShadowClasses: 'bg-blue',
  reviews: [
    {
      review:
        'I have been trying to teach my son to swim independently for 3 years unsuccessfully. His swim instructor, Dolores taught my son how to swim for the first time ever! Now my son can swim above and under water with so much confidence! When he gets tired he learned how to roll over and float on his back and take a break. She was so patient with my son who is on the spectrum and this was a huge concern of mine. Worth every single penny and I would definitely recommend this school and instructor again and again.',
      name: 'Julie V.',
      rating: 5,
      img: featuredBabySwimInstructorImg,
    },
    {
      review:
        'We had Natalie as our instructor and she has been AMAZING. My daughter was like a fish in water by the 3rd lesson. I’m so impressed with how much Natalie was able to teach her in a short period of time and in turn, boost my daughter’s confidence in her abilities. For reference, my daughter was 4 and a half when she started her lessons and she didn’t even know how to hold her breath under water and was always too scared to swim without floaties. Now, she refuses to wear floaties and loves to swim around our entire pool. I cant praise Natalie enough!',
      name: 'Nina M.',
      rating: 5,
      img: featuredBabySwimInstructorImg2,
    },
    {
      review:
        'Joel is amazing. Our girls (4 and 6) had been in community center swim lessons since they were babies but they still needed floaties. Since we recently moved into a house with a pool, we really wanted the peace of mind of knowing the girls can swim to safety if they fall in. Within 3 sessions, my oldest was swimming back and forth across the pool without a floatie. Now, after only 12 lessons, they are better swimmers than me!',
      name: 'Haley H.',
      rating: 5,
      img: featuredBabySwimInstructorImg3,
    },
  ],
};

const FeaturedBabyInstructorsSection = () => {
  return (
    <FeaturedSwimInstructorsSection
      sectionHeading={content.sectionHeading}
      sectionDescripton={content.sectionDescription}
      reviews={[...content.reviews, ...content.reviews]}
      shadowClasses={content.buttonShadowClasses}
    />
  );
};

export default FeaturedBabyInstructorsSection;
