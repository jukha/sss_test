import React from 'react';
import BlogArticleHero from './BlogArticleHero';
import BlogContent from './BlogContent';

const BlogInfoSection = () => {
  return (
    <article className='flex flex-col gap-[54px] md:gap-[154px] my-24'>
      <BlogArticleHero />
      <BlogContent />
    </article>
  );
};

export default BlogInfoSection;
