import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import BlogHero from './components/HeroBlog';
import { ServerFeaturedArticleSection } from './components/featured-article-section';
import { ServerBrowseArticlesSection } from './components/browse-articles-section';
import { ServerPopularTopicsSection } from './components/popular-topics-section';
import { BlogRecordsProvider } from '@/context/blogs.context';
import SearchResultsSection from './components/SearchResultsSection';

export default function Pricing() {
  return (
    <div>
      <main className='flex flex-col'>
        <BlogRecordsProvider>
          <BlogHero />
          <SearchResultsSection />
        </BlogRecordsProvider>
        {/* How to do flutter kicks - section */}
        <ServerFeaturedArticleSection />
        {/*Popular categories - section */}
        <ServerPopularTopicsSection />
        {/*Browse all content - section */}
        <ServerBrowseArticlesSection />
        {/*Service Locations - Section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
