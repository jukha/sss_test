import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import BlogInfoSection from '../components/BlogInfoSection';
import AboutSunsationalSchoolSection from '../components/AboutSunsationalSchoolSection';
import RelatedArticlesSection from '../components/RelatedArticlesSection';

export default function BlogArticle() {
  return (
    <div>
      <main className='flex flex-col'>
        <BlogInfoSection />
        <AboutSunsationalSchoolSection />
        <RelatedArticlesSection />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
