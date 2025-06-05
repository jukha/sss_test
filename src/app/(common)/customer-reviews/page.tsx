import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import CustomerReviewsHero from './components/CustomerReviewsHero';
import RatingsFromHappySwimmersSection from './components/RatingsFromHappySwimmersSection';
import CustomerReviewsHowItWorks from './components/CustomerReviewsHowItWorks';
import ExperienceSunsationalDiffSection from './components/ExperienceSunsationalDiffSection';

export default function CustomerReviews() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <CustomerReviewsHero />
        {/* Masonry Grid Custom Reviews - Section */}
        <RatingsFromHappySwimmersSection />
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
    </div>
  );
}
