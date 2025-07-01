import InstructorQualitiesSection from '@/components/sections/InstructorQualitiesSection';
import SearchNearbyInstructorsSection, {
  SearchNearbyInstructorsSectionProps
} from '@/components/sections/SearchNearbyInstructorsSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import HeroNearbyInstructors from '@/app/(common)/swim-instructors/nearby/components/HeroNearbyInstructors';
import WeBackTheirExpSection from '@/app/(common)/swim-instructors/nearby/components/WeBackTheirExpSection';

type Props = SearchNearbyInstructorsSectionProps;

export default async function NearbyInstructorsPage({ ...searchNearbyInstructorsProps }: Props) {
  return (
    <div>
      <main>
        <HeroNearbyInstructors />

        {/*What makes our Swim instructors Sunsational - Section */}
        <InstructorQualitiesSection page='nearbySwimInstructor' />
        {/*Search Nearby Instructors - Section with map*/}
        <SearchNearbyInstructorsSection { ...searchNearbyInstructorsProps }/>
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
