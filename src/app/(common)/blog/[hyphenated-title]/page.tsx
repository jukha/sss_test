import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import { ServerRelatedArticlesSection } from '../components/related-articles-section';
import { ServerBlogInfoSection } from './components/blog-info-section';
import AboutSunsationalSchoolSection from '../components/AboutSunsationalSchoolSection';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';

type BlogArticleSearchParams = {
  params: Promise<{
    'hyphenated-title': string;
  }>;
};

async function BlogArticle({ params }: BlogArticleSearchParams) {
  const { 'hyphenated-title': hyphenatedTitle } = await params;

  return (
    <div>
      <main className='flex flex-col'>
        <ServerBlogInfoSection hyphenatedTitle={hyphenatedTitle} />
        <AboutSunsationalSchoolSection />
        <ServerRelatedArticlesSection hyphenatedBlogTitle={hyphenatedTitle} />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}

export default withServerSideErrorBoundary(BlogArticle);
