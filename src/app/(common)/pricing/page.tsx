import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import PricingHero from './components/PricingHero';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import NeedHelpSection from './components/NeedHelpSection';
import PricingFaqSection from './components/PricingFaqSection';
import PricingPageHeadingSection from './components/PricingPageHeadingSection';
import BabyLessonsSection from './components/BabyLessonsSection';
import SwimGuaranteePackageSection from './components/SwimGuaranteePackageSection';
import SemiPrivateLessonsSection from './components/SemiPrivateLessonsSection';
import AdultLessonsSection from './components/AdultLessonsSection';
import ParentsGroupLessonsSection from './components/ParentsGroupLessonsSection';

export default function Pricing() {
  return (
    <div>
      <main className='flex flex-col'>
        <PricingHero />
        <PricingPageHeadingSection />
        {/*Need help -section */}
        <NeedHelpSection />
        {/*Swim Lessons -section */}
        <BabyLessonsSection/>
        {/*Learn to swim Guarantee -section */}
        <SwimGuaranteePackageSection />
        {/*Private or semi private lessons -section */}
        <SemiPrivateLessonsSection />
        {/*Adult lessons -section */}
        <AdultLessonsSection />
        {/*Parents and Tots lessons -section */}
        <ParentsGroupLessonsSection />
        {/*Faq -section */}
        <PricingFaqSection />
        {/*Thousands of Five Star Reviews - section*/}
        <CustomerReviewsSection />
        {/*Search our serviced locations - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
