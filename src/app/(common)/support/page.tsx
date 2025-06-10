import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import HelpScoutSupportHero from './components/HelpScoutSupportHero';
import LocationsListSection from '@/components/sections/LocationsListSection';
import HelpScoutSupportFaqsSection from './components/HelpScoutSupportFaqsSection';
import AdditionalQuestionsSection from './components/AdditionalQuestionsSection';

const HelpScoutSupport = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <HelpScoutSupportHero />
        {/* Additional Questions Section */}
        <AdditionalQuestionsSection />
        {/* FAQs Section */}
        <HelpScoutSupportFaqsSection />
        {/* Service Location Map Section */}
        <ServiceLocationsSection />
        {/* Available All Across Section */}
        <LocationsListSection />
      </main>
    </div>
  );
};

export default HelpScoutSupport;
