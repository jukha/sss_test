import React from 'react';
import PrivateVsGroupLessonsSection from '../city/common/PrivateVsGroupLessonsSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import LocalPrivateFaqsSection from '../city/local-private/components/LocalPrivateFaqsSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import PrivateSwimLessonHero from './components/PrivateSwimLessonHero';
import MembersOfSection from '@/components/sections/MembersOfSection';
import ArePrivateLessonsBetterSection from './components/ArePrivateLessonsBetterSection';
import WhyOneOnOneLessonsSection from './components/WhyOneOnOneLessonsSection';
import DrowningIsPreventableSection from './components/DrowningIsPreventableSection';
import WhyAllLovePrivateLessonsSection from './components/WhyAllLovePrivateLessonsSection';
import WhoBenefitMostFromPrivateLessonSection from './components/WhoBenefitMostFromPrivateLessonSection';
import StackedSections from '@/components/layout/StackedSections';

const PrivateSwimLessons = () => {
  return (
      <main className='flex flex-col gap-20 lg:gap-26'>
        <PrivateSwimLessonHero />
        {/* Are private swim lessons better than group lessons for your child? - section */}
        <ArePrivateLessonsBetterSection />
        {/* Private swim lessons vs. Group swim lessons - section */}
        <PrivateVsGroupLessonsSection />
        <StackedSections>
          {/* Why our students and parents love us - section */}
          <CustomerReviewsSection
            heading='Why our students and parents love us'
            description='Check out our 4.9 rating out of 1852 reviews'
          />
          {/* Why are one-on-one lessons more effective for water safety? - Section */}
          <WhyOneOnOneLessonsSection />
        </StackedSections>
        {/* Drowning is preventable - section */}
        <DrowningIsPreventableSection />
        {/* Members of - section */}
        <MembersOfSection />
        {/* Why parents and children love private swim lessons - section */}
        <WhyAllLovePrivateLessonsSection />
        {/* Who benefits the most from private swim lessons? - section */}
        <WhoBenefitMostFromPrivateLessonSection />
        {/* Our private swim lesson programs -section  */}
        <TopSwimmingLessonsSection sectionHeader='Our private swim lesson programs' />
        {/* Levels we teach on our Swim Lesson Programs -section  */}
        <SkillLevelsSection />
        {/* Swim Lessons With Local Swim Instructors You Can Trust */}
        <WhatMakesOurInstructorsSection />
        {/* Get private swimming lessons at home! - section */}
        <HowItWorksSection />
        {/* Local Private Swim Lessons FAQs - section */}
        <LocalPrivateFaqsSection />
        {/* Service Locations - section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
  );
};

export default PrivateSwimLessons;
