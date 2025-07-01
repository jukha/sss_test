import React from 'react';
import BlogArticleHero from '../BlogArticleHero';
import BlogContent from '../BlogContent';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

type BlogInfoSectionProps = {
  data: BlogRecordEntity | null;
};

const BlogInfoSection = ({ data }: BlogInfoSectionProps) => {
  if (!data) return null;
  return (
    <article className='flex flex-col gap-[54px] md:gap-[154px] my-24'>
      <BlogArticleHero blogHeroData={data} />
      <BlogContent blogContentData={data} />
    </article>
  );
};

export default withClientErrorBoundary(BlogInfoSection);