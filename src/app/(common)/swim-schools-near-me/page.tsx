import React from 'react';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import InlineRegistrationForm from '@/components/sections/InlineRegistrationForm';
import SwimSchoolsNearMeHeroSection from './components/SwimSchoolsNearMeHero';
import FindTheBestSchoolSection from './components/FindTheBestSchoolSection';
import HaveHomeOrSwimmingPoolSection from './components/HaveHomeOrSwimmingPoolSection';
import WhatOthersConsiderSection from './components/WhatOthersConsiderSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import WeBackOurInstructorsSection from './components/WeBackOurInstructorsSection';

const SwimSchoolsNearMe = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <SwimSchoolsNearMeHeroSection />
        {/* Find the Best Swim School Near You in [City]: Compare Your Options - Section */}
        <FindTheBestSchoolSection />
        {/* Have a home or community pool? Consider Private At-Home Swim Lessons! - Section */}
        <HaveHomeOrSwimmingPoolSection />
        {/* What Others Consider When Choosing A Swim School in [city, state]! - Section */}
        <WhatOthersConsiderSection />
        {/* Inline Register Form */}
        <InlineRegistrationForm
          title='Ready to Get Started?'
          description='Spots Fill Fast in [city, state]!'
        />
        {/* Why Choose Sunsational Swim School in [city, state] - Section */}
        <WhyChooseUsSection />
        {/* Customer reviews section */}
        <CustomerReviewsSection
          heading='What Parents Are Saying About Sunsational Swim School in [city, state]'
          description=''
          buttonText='Book Swimming Lessons'
          buttonClasses='bg-yellow'
          buttonIconColor='var(--color-white)'
          buttonIconClasses='bg-offBlack'
          shadowClasses='bg-orange'
          decorationIconRight={<ThreeStareSlim />}
          decorationIconRightClasses='hidden lg:block absolute z-[10] w-[96px] scale-x-[-1] right-0'
        />
        {/* INSTRUCTORS MAPS section will be added after api integration*/}
        {/* We back their expertise with a  100% satisfaction guarantee. - Section */}
        <WeBackOurInstructorsSection />
      </main>
    </div>
  );
};

export default SwimSchoolsNearMe;
