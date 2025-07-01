import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import InstructorQualitiesSection from '../../../components/sections/InstructorQualitiesSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import TakeStressOutSection from './components/TakeStressOutSection';
import HomeHero from './components/HomeHero';
import MembersOfSection from '@/components/sections/MembersOfSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';

/**
 * Home Page Component
 * Main landing page for the Sunsational Swimming School website
 */
export default function Home() {
  return (
      <main className='flex flex-col gap-20 lg:gap-26'>
        {/* Hero Section - Main banner with call to action */}
        <HomeHero />
        {/* Take Stress Out Section - 3 cards */}
        <TakeStressOutSection />
        {/* Why Choose Sunsational Section - Features and benefits */}
        <WhyChooseUsSection />
        {/* How It Works Section */}
        <HowItWorksSection />
        {/* Customer Reviews Section - Testimonials */}
        <ServerCustomerReviewsSection buttonText={'See our glowing reviews'} buttonLink='/customer-reviews' />
        {/* Members of Section - Logos of organizations */}
        <MembersOfSection />
        {/* What makes our swim instructors sunsational - Highlights instructor qualities */}
        <InstructorQualitiesSection />
        {/* 100% Satisfaction Guarantee Section */}
        <SatisfactionGuaranteeSection />
        {/* Search our serviced locations Section - locations with map */}
        <ServiceLocationsSection />
        {/* Available all across the USA - Lists all locations */}
        <LocationsListSection />
      </main>
  );
}
