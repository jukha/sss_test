import HeroNearbyInstructors from './components/HeroNearbyInstructors';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SearchNearbyInstructorsSection from '@/components/sections/SearchNearbyInstructorsSection';
import InstructorQualitiesSection from '@/components/sections/InstructorQualitiesSection';
import { InstructorsProvider } from '@/context/instructors.context';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';
import WeBackTheirExpSection from './components/WeBackTheirExpSection';

export default function OurSwimInstructors() {
  return (
    <div>
      <main>
        <HeroNearbyInstructors />

        {/*What makes our Swim instructors Sunsational - Section */}
        <InstructorQualitiesSection page='nearbySwimInstructor' />
        {/*Search Nearby Instructors - Section with map*/}
        <InstructorsProvider>
          <SearchNearbyInstructorsSection />
        </InstructorsProvider>
        {/*We back their expertise - Featured banner*/}
        <WeBackTheirExpSection />
        {/*Are you a swim instructor? - Section*/}
        <AreYouInstructor2Section />
        {/*Service Locations - Section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
