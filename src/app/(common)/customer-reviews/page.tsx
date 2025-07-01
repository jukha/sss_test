import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import CustomerReviewsHero from './components/CustomerReviewsHero';
import CustomerReviewsHowItWorks from './components/CustomerReviewsHowItWorks';
import ExperienceSunsationalDiffSection from './components/ExperienceSunsationalDiffSection';
import { ServerRatingsFromHappySwimmersSection } from './components/ratings-from-happy-swimmers-section';

export default function CustomerReviews() {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      {/* Hero Section */}
      <CustomerReviewsHero />
      {/* Masonry Grid Custom Reviews - Section */}
      <ServerRatingsFromHappySwimmersSection />
      {/* Get private swimming lessons at home! - Section */}
      <CustomerReviewsHowItWorks />
      {/* Experience the Sunsational Difference  */}
      <ExperienceSunsationalDiffSection />
      {/* Popular Swimming Lesson Programs - Section */}
      <TopSwimmingLessonsSection />
      {/*Service Locations - Section*/}
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
}
