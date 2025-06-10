import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import HeroInstructors from './components/HeroInstructors';
import LocationsListSection from '@/components/sections/LocationsListSection';
import PrivateInstrucutorSection from './components/PrivateInstructorSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import FeaturedSwimInstructorsSection from '@/components/sections/FeaturedSwimInstructorsSection';
import VideoFrameGenericSsection from '@/components/sections/VideoFrameGenericSsection';
import HowWeMatchYouSection from './components/HowWeMatchYouSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import StackedSections from '@/components/layout/StackedSections';

export default function OurSwimInstructors() {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      <HeroInstructors />
      {/*Looking for a Private Swim Instructor? - Section */}
      <PrivateInstrucutorSection />
      {/*See our Sunsational instructors in Action - Section */}
      <VideoFrameGenericSsection />
      {/*The Faces Behind Sunsational Lessons - Section */}
      <FeaturedSwimInstructorsSection />
      {/*Swim Lessons With Local Swim Instructors - Section */}
      <WhatMakesOurInstructorsSection />
      <StackedSections>
        {/*How We Match You With the Perfect Swim Instructor - Section */}
        <HowWeMatchYouSection />
        {/*Thousands Of Five Stars - Section */}
        <CustomerReviewsSection />
      </StackedSections>
      {/*Are You A Swim Instructor? - Section */}
      <AreYouInstructor2Section />
      {/*Service Locations - Section */}
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
}
