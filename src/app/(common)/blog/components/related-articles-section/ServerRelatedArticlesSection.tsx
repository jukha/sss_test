'use server';

import RelatedArticlesSection from './RelatedArticlesSection';
import { getNewestBlogs } from '@/repositories/blog_records/newest.blogs';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { getRelatedBlogsByHyphenatedCategoryName } from '@/repositories/blog_records/related-by-category-hyphenated-name';
import { getRelatedBlogsByHyphenatedTitle } from '@/repositories/blog_records/related-by-hyphenated-title.blogs';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { RelatedArticlesSectionVariant } from '@/types/related-articles-section.type';

type ServerRelatedArticlesSectionOptions = {
  hyphenatedBlogTitle?: string;
  hyphenatedCategoryName?: string;
  variant?: RelatedArticlesSectionVariant;
};

const ServerRelatedArticlesSection = async ({
  hyphenatedBlogTitle,
  hyphenatedCategoryName,
  variant,
}: ServerRelatedArticlesSectionOptions) => {
  let blogs: BlogRecordEntity[] = [];
  let currentCategory = '';

  if (hyphenatedBlogTitle) {
    blogs = await getRelatedBlogsByHyphenatedTitle({
      hyphenatedTitle: hyphenatedBlogTitle,
      limit: 3,
    });
  }

  if (hyphenatedCategoryName) {
    const response = await getRelatedBlogsByHyphenatedCategoryName({
      hyphenatedName: hyphenatedCategoryName,
      limit: 3,
    });

    if (response) {
      blogs = response.data;
      currentCategory = response.currentCategory.name || '';

      return <RelatedArticlesSection data={blogs} currentCategory={currentCategory} variant={variant} />;
    }
  }

  if (!blogs.length) {
    const response = await getNewestBlogs({ limit: 3 });

    blogs = response.data;
  }

  return <RelatedArticlesSection data={blogs} variant={variant} currentCategory={currentCategory} />;
};

export default withServerSideErrorBoundary(ServerRelatedArticlesSection);
