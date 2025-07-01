// components/BrowseArticlesSection.tsx
'use client';

import React, { useCallback, useState } from 'react';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Button from '@/components/kit/buttons/Button';

import BlogCard from '@/components/shapes/BlogCard';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { getNewestBlogs } from '@/repositories/blog_records/newest.blogs';

type BrowseArticlesSectionProps = {
  data: BlogRecordEntity[];
};

const BrowseArticlesSection = ({ data }: BrowseArticlesSectionProps) => {
  const [blogs, setBlogs] = useState<BlogRecordEntity[]>(data);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreBlogs = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const limit = 4;

      const response = await getNewestBlogs({
        limit,
        offset: blogs.length,
      });

      const newBlogs = response.data;

      setBlogs((prev) => [...prev, ...newBlogs]);
    } catch (err) {
      console.error('Failed to load blogs:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, blogs.length]);

  if (!data.length) return null;

  return (
    <div>
      <Container className='flex flex-col items-center gap-20 py-12'>
        <div className='flex flex-wrap justify-between items-start gap-x-10 gap-y-24 w-full max-w-[1240px]'>
          <div className='flex flex-col w-full'>
            <Typography variant='custom' className='text-[20px] font-bold font-secondary leading-[120%]'>
              LATEST
            </Typography>
            <Typography variant='h3' className='text-start font-primary'>
              Browse all content
            </Typography>
          </div>

          {blogs.map((blog, index) => {
            const categories = blog.categories.map((c) => c.name).join(', ');

            return (
              <BlogCard
                key={index}
                img={blog.featuredImage}
                title={blog.title}
                teaser={blog.teaser}
                categories={categories}
                link={`/blog/${blog.hyphenatedTitle}`}
              />
            );
          })}
        </div>
        <div className='flex flex-col items-center'>
          {isLoading && <p className='text-xl'>Loading...</p>}
          <Button onClick={loadMoreBlogs} text='Show More' buttonClasses='bg-offBlack text-white' />
        </div>
      </Container>
    </div>
  );
};

export default BrowseArticlesSection;
