import AboutusHero from './components/AboutusHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SuggestedArticles from './components/SuggestedArticles';
import LearnToSwimGuarantee from './components/LearnToSwimGuarantee';
import WhoWeAre from './components/WhoWeAre';

export default function AboutUs() {
  return (
    <div>
      <main>
        <AboutusHero />
        {/* Making Waves: Blog for Happy, Confident Swimmers */}
        <SuggestedArticles />
        {/* Who we are section */}
        <WhoWeAre />
        {/*  Learn to swim Guarantee Section */}
        <LearnToSwimGuarantee />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
