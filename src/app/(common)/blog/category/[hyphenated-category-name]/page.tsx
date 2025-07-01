import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import AboutSunsationalSchoolSection from '../../components/AboutSunsationalSchoolSection';
import { ServerRelatedArticlesSection } from '../../components/related-articles-section';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';

type BlogArticleSearchParams = {
  params: Promise<{
    'hyphenated-category-name': string;
  }>;
};

async function BlogArticle({ params }: BlogArticleSearchParams) {
  const { 'hyphenated-category-name': hyphenatedCategoryName } = await params;

  return (
    <div>
      <main className='flex flex-col'>
        <ServerRelatedArticlesSection hyphenatedCategoryName={hyphenatedCategoryName} variant='categoriesPage' />
        <AboutSunsationalSchoolSection />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}

export default withServerSideErrorBoundary(BlogArticle);
