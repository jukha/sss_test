import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import HeroInstructors from './components/HeroInstructors';
import LocationsListSection from '@/components/sections/LocationsListSection';
import PrivateInstrucutorSection from './components/PrivateInstructorSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import FeaturedSwimInstructorsSection from '@/components/sections/FeaturedSwimInstructorsSection';
import VideoFrameGenericSsection from '@/components/sections/VideoFrameGenericSsection';

export default function OurSwimInstructors() {
  return (
    <div>
      <main>
        <HeroInstructors />

        {/*Looking for a Private Swim Instructor? - Section */}
        <PrivateInstrucutorSection />
        {/*See our Sunsational instructors in Action - Section */}
        <VideoFrameGenericSsection />
        {/*The Faces Behind Sunsational Lessons - Section */}
        <FeaturedSwimInstructorsSection />
        {/*Swim Lessons With Local Swim Instructors - Section */}
        <WhatMakesOurInstructorsSection />
        {/*How We Match You With the Perfect Swim Instructor - Section */}
        {/*Thousands Of Five Stars - Section */}
        {/*Are You A Swim Instructor? - Section */}

        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
