import { blogHeroImg, blogHeroMobileImg } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';
import SearchBlogInput from './SearchBlogInput';

const BlogHero = () => {
  return (
    <Hero
      desktopBgImage={blogHeroImg}
      mobileBgImage={blogHeroMobileImg}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1' className='max-w-[340px] md:max-w-[600px]'>
        Blog
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-secondary leading-[120%]'
      >
        Sunsational Swim School is America’s largest mobile swim school,
        offering private, at-home swim lessons for all ages.
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <SearchBlogInput placeholder='Search Topics' submitText='Search' />
      </div>
    </Hero>
  );
};

export default BlogHero;
