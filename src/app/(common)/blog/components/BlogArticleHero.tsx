import { blogArticleImg, blogAuthorImg } from '@/assets';
import { WaveWithBorder } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const blogData = {
  title: 'How to do Flutter Kicks in Swimming',
  author: 'Cey',
  date: '25/02/2025',
  read: '2',
};

const BlogHero = () => {
  return (
    <section className='flex flex-col justify-start items-center gap-10 md:gap-20'>
      <div className='flex flex-col px-[1.5em] gap-2 md:gap-10'>
        <Typography variant='h2' className='max-w-[837px]'>
          {blogData.title}
        </Typography>
        <div className='flex gap-4 justify-start items-center'>
          <div className='h-10 w-10 rounded-full relative overflow-hidden'>
            <Image
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              src={blogAuthorImg}
              alt='author image'
            />
          </div>
          <Typography
            variant='body2'
            className='font-secondary font-bold md:font-medium leading-[120%] text-offBlack '
          >
            Written by {blogData.author} - {blogData.date} - {blogData.read} min read
          </Typography>
        </div>
      </div>

      <div className='relative'>
        <Image src={blogArticleImg} alt='blog image' />
        <div className='w-full  absolute h-[54px] translate-y-6/12 md:translate-y-5/12 bottom-0 z-10'>
          <WaveWithBorder />
        </div>
        <div className='w-full md:hidden absolute h-[54px] -translate-y-6/12 top-0 z-10 rotate-180'>
          <WaveWithBorder />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
