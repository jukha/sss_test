import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import BlogHero from './components/HeroBlog';
import FeaturedArticleSection from './components/FeaturedArticleSection';
import BrowseArticlesSection from './components/BrowseArticlesSection';
import PopularTopicsSection from './components/PopularTopicsSection';

export default function Pricing() {
  return (
    <div>
      <main className='flex flex-col'>
        <BlogHero />
        {/* How to do flutter kicks - section */}
        <FeaturedArticleSection />
        {/*Popular categories - section */}
        <PopularTopicsSection /> 
        {/*Browse all content - section */}
        <BrowseArticlesSection />
        {/*Service Locations - Section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
