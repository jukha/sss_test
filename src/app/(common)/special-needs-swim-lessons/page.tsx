import React from 'react';

import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import PrivateVsGroupLessonsSection from '../city/common/PrivateVsGroupLessonsSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { specialNeedsLessonSatisfactionGuarantee } from '@/assets';
import SpecialNeedsLessonHero from './components/SpecialNeedsLessonHero';
import SafeFunAtHomeSection from './components/SafeFunAtHomeSection';
import SpecialLessonsCaterManyNeedsSection from './components/SpecialLessonsCaterManyNeedsSection';
import WhySpecialLessonsImportantSection from './components/WhySnapSpecialNeedsLessonsImportantSection';
import FeatureInstructorsSliderSection from './components/FeatureInstructorsSliderSection';
import StartSwimmingFasterSection from './components/StartSwimmingFasterSection';
import SpecialSwimLessonsBenefitsSection from './components/SpecialSwimLessonsBenefitsSection';
import SpecialNeedsLessonPricingSection from './components/SpecialNeedsLessonPricingSection';
import StackedSections from '@/components/layout/StackedSections';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';

const SpecialNeedsSwimmingLessons = () => {
  return (
      <main className='flex flex-col gap-20 lg:gap-26'>
        <SpecialNeedsLessonHero />
        {/* Safe, Fun & taught at home special needs swim lessons! - Section */}
        <SafeFunAtHomeSection />
        {/* Sunsational clients love our swimming lessons - Section */}
        <ServerCustomerReviewsSection designation='special needs' hideButton={true} />
        {/* We cater to many needs - Section */}
        <SpecialLessonsCaterManyNeedsSection />
        {/* Why are Special Needs (SNAP) swimming lessons so important? - Section */}
        <WhySpecialLessonsImportantSection />
        {/* Featured special needs swim instructors! - Section */}
        <FeatureInstructorsSliderSection />
        {/* 100% Satisfaction Guarantee - Section */}
        <StackedSections>
          <SatisfactionGuaranteeSection
            image={specialNeedsLessonSatisfactionGuarantee}
          />
          {/* Start swimming faster with personalized special needs swim lessons in [city] - Section */}
          <StartSwimmingFasterSection />
        </StackedSections>
        {/* Benefits of swimming lessons for special needs students - Section */}
        <SpecialSwimLessonsBenefitsSection />
        {/* Special Needs And Abilities/SNAP Swim Lesson Pricing - Section */}
        <SpecialNeedsLessonPricingSection />
        {/* Thousands of 5-Star Ratings from Happy Swimmers - Section */}
        <ServerSocialMediaReviewsSection />
        {/* Swim Lessons With Local Swim Instructors You Can Trust - Section */}
        <WhatMakesOurInstructorsSection />
        {/* Private swim lessons vs. Group swim lessons - Section */}
        <PrivateVsGroupLessonsSection />
        {/* Service Locations Section - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
        {/* Got Questions - Section */}
      </main>
  );
};

export default SpecialNeedsSwimmingLessons;
