import { blogAuthorImg } from '@/assets';
import { WaveWithBorder } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import Image from 'next/image';
import React from 'react';

type BlogArticleHeroProps = {
  blogHeroData: BlogRecordEntity;
};

const BlogArticleHero = ({ blogHeroData }: BlogArticleHeroProps) => {
  const {
    title,
    authorName,
    publicationDate,
    readTime,
    authorPhoto,
    featuredImageAltDescription,
    featuredImage,
  } = blogHeroData || {};

  const blogTitle = title ?? 'Untitled Article';
  const blogAuthor = authorName ?? 'Anonymous';
  const blogReadTime = readTime ?? 10;
  const blogAuthorPhoto = authorPhoto ?? blogAuthorImg;
  const blogAltText = featuredImageAltDescription ?? 'Blog featured image';

  return (
    <section className='flex flex-col justify-start items-center gap-10 md:gap-20'>
      <div className='flex flex-col px-[1.5em] gap-2 md:gap-10'>
        <Typography variant='h2' className='max-w-[837px]'>
          {blogTitle}
        </Typography>
        <div className='flex gap-4 justify-start items-center'>
          <div className='h-10 w-10 rounded-full relative overflow-hidden'>
            <Image src={blogAuthorPhoto} alt='author image' fill className='object-cover' unoptimized />
          </div>
          <Typography
            variant='body2'
            className='font-secondary font-bold md:font-medium leading-[120%] text-offBlack '
          >
            Written by {blogAuthor} - {publicationDate} - {blogReadTime} min read
          </Typography>
        </div>
      </div>

      <div className='relative w-[100%] h-screen max-h-[80vh] overflow-hidden'>
        {featuredImage && (
          <Image
            src={featuredImage}
            alt={blogAltText}
            fill
            className='object-cover'
            priority
            unoptimized
          />
        )}
        <div className='w-full absolute h-[54px] bottom-0 z-10'>
          <WaveWithBorder />
        </div>
        <div className='w-full absolute h-[54px] top-0 z-10 rotate-180 md:hidden'>
          <WaveWithBorder />
        </div>
      </div>
    </section>
  );
};

export default BlogArticleHero;
