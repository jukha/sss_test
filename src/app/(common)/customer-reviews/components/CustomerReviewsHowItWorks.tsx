import ArrowButton from '@/components/kit/buttons/ArrowButton';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const footnote =
  'ZERO RISK registration: Sign up online or give us a call today. A credit card is required, but you won’t be charged unless we match you with the perfect Sunsational Swim instructor. Plus, enjoy our 100% satisfaction guarantee!*';

const CustomerReviewsHowItWorks = () => {
  return (
    <div>
      <HowItWorksSection />
      <div className='flex justify-center mt-[65px] mb-10'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-yellow text-offBlack'
          IconClasses='bg-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
        />
      </div>
      <Typography variant='custom' className='font-secondary text-sm text-gray uppercase max-w-[594px] mx-auto text-center'>{footnote}</Typography>
    </div>
  );
};

export default CustomerReviewsHowItWorks;
