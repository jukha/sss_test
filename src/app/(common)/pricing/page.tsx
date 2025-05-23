import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import PricingHero from './components/PricingHero';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';

export default function Pricing() {
  return (
    <div>
      <main className='flex flex-col'>
        <PricingHero />
        {/*Swim Lessons -section */}
        {/*Learn to swim Guarantee -section */}
        {/*Private or semi private lessons -section */}
        {/*Adult lessons -section */}
        {/*Parents and Tots lessons -section */}
        {/*Faq -section */}
        {/*Thousands of Five Star Reviews - section*/}
        <CustomerReviewsSection />
        {/*Search our serviced locations - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
