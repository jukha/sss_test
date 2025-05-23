import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import BlogHero from './components/HeroBlog';
import FeaturedArticleSection from './components/FeaturedArticleSection';

export default function Pricing() {
  return (
    <div>
      <main className='flex flex-col'>
        <BlogHero />
        {/* How to do flutter kicks - section */}
        <FeaturedArticleSection />
        {/*Popular categories - section */}
        {/*Browse all content - section */}
        {/*Service Locations - Section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
