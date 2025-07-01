import AboutusHero from './components/AboutusHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import LearnToSwimGuarantee from './components/LearnToSwimGuarantee';
import WhoWeAre from './components/WhoWeAre';
import StackedSections from '@/components/layout/StackedSections';
import { ServerSuggestedArticles } from './components/suggested-articles';

export default function AboutUs() {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      <AboutusHero />
      {/* Who we are section */}
      <WhoWeAre />
      <StackedSections>
        {/*  Learn to swim Guarantee Section */}
        <LearnToSwimGuarantee />
        {/* Making Waves: Blog for Happy, Confident Swimmers */}
        <ServerSuggestedArticles />
      </StackedSections>
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
}
