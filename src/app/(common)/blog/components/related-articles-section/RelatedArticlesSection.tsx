'use client';

import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import BlogCard from '@/components/shapes/BlogCard';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';
import { RelatedArticlesSectionVariant } from '@/types/related-articles-section.type';
import { redirect } from 'next/navigation';
import React from 'react';

type RelatedArticlesSectionProps = {
  data: BlogRecordEntity[];
  currentCategory: string;
  variant?: RelatedArticlesSectionVariant;
};

const RelatedArticlesSection = ({ data, currentCategory, variant = 'default' }: RelatedArticlesSectionProps) => {
  const variantPages = {
    default: (
      <div className='flex flex-col w-full'>
        <Typography variant='custom' className='text-[20px] font-bold font-secondary leading-[120%]'>
          LATEST
        </Typography>
        <Typography variant='h3' className='text-start font-primary'>
          Related Articles
        </Typography>
      </div>
    ),
    categoriesPage: (
      <div className='flex flex-col w-full gap-6'>
        <button className='flex cursor-pointer text-5xl font-bold' onClick={() => redirect('/blog/')}>
          <Typography variant='h3' className='text-start font-primary'>
            ← Blog Home
          </Typography>
        </button>
        <div>
          <Typography variant='custom' className='text-[20px] font-bold font-secondary leading-[120%]'>
            CATEGORY
          </Typography>
          <Typography variant='h4' className='text-start font-primary font-bold'>
            {currentCategory}
          </Typography>
        </div>
      </div>
    ),
  };

  const currentVariant = variantPages[variant] || variantPages.default;

  return (
    <Container className='flex flex-col items-center gap-6 my-24'>
      {currentVariant}
      <div className='grid grid-cols-3 gap-20'>
        {data.length &&
          data.map((blog, index) => {
            const blogCategories = blog.categories.map((c) => c.name).join(', ');
            return (
              <BlogCard
                key={index}
                img={blog.featuredImage}
                title={blog.title}
                teaser={blog.teaser}
                link='#'
                categories={blogCategories}
                hideButton={true}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default withClientErrorBoundary(RelatedArticlesSection);
