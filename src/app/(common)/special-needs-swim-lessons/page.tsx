import React from 'react';

import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import PrivateVsGroupLessonsSection from '../city/common/PrivateVsGroupLessonsSection';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';
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

const SpecialNeedsSwimmingLessons = () => {
  return (
    <div>
      <main>
        <SpecialNeedsLessonHero />
        {/* Safe, Fun & taught at home special needs swim lessons! - Section */}
        <SafeFunAtHomeSection />
        {/* Sunsational clients love our swimming lessons - Section */}
        <CustomerReviewsSection />
        {/* We cater to many needs - Section */}
        <SpecialLessonsCaterManyNeedsSection />
        {/* Why are Special Needs (SNAP) swimming lessons so important? - Section */}
        <WhySpecialLessonsImportantSection />
        {/* Featured special needs swim instructors! - Section */}
        <FeatureInstructorsSliderSection />
        {/* 100% Satisfaction Guarantee - Section */}
        <SatisfactionGuaranteeSection
          image={specialNeedsLessonSatisfactionGuarantee}
        />
        {/* Start swimming faster with personalized special needs swim lessons in [city] - Section */}
        <StartSwimmingFasterSection />
        {/* Benefits of swimming lessons for special needs students - Section */}
        <SpecialSwimLessonsBenefitsSection />
        {/* Special Needs And Abilities/SNAP Swim Lesson Pricing - Section */}
        <SpecialNeedsLessonPricingSection />
        {/* Thousands of 5-Star Ratings from Happy Swimmers - Section */}
        <SocialMediaReviewsSection />
        {/* Swim Lessons With Local Swim Instructors You Can Trust - Section */}
        <WhatMakesOurInstructorsSection />
        {/* Private swim lessons vs. Group swim lessons - Section */}
        <PrivateVsGroupLessonsSection />
        {/* Service Locations Section - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
        {/* Got Questions - Section */}
      </main>
    </div>
  );
};

export default SpecialNeedsSwimmingLessons;
