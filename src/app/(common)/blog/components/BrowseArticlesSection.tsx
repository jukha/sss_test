// components/BrowseArticlesSection.tsx

import React from 'react';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Button from '@/components/kit/buttons/Button';

import {
  suggestedArticle2,
  suggestedArticle3,
  suggestedArticle4,
  suggestedArticle5,
} from '@/assets';
import BlogCard from '@/components/shapes/BlogCard';

const blogData = {
  tagline: 'LATEST',
  title: 'Browse all content',
  blogs: [
    {
      category: 'Swimming Tips',
      title: 'How to do Flutter Kicks in Swimming',
      description:
        'The flutter kick is a kicking movement used in both swimming and exercise. It’s commonly used in strokes like freestyle and backstroke.',
      buttonText: 'Read More',
      img: suggestedArticle5,
      link: '#',
    },
    {
      category: 'Water Safety',
      title: 'How to Teach a Toddler or a Child to Hold Breath Underwater',
      description:
        'Many children fear dunking their head underwater. Even without fear, some struggle to fully submerge comfortably.',
      buttonText: 'Read More',
      img: suggestedArticle3,
      link: '#',
    },
    {
      category: 'Swimming Tips',
      title: 'How to do Flutter Kicks in Swimming',
      description:
        'The flutter kick is a kicking movement used in both swimming and exercise. It’s commonly used in strokes like freestyle and backstroke.',
      buttonText: 'Read More',
      img: suggestedArticle2,
      link: '#',
    },
    {
      category: 'Water Safety',
      title: 'How to Teach a Toddler or a Child to Hold Breath Underwater',
      description:
        'Many children fear dunking their head underwater. Even without fear, some struggle to fully submerge comfortably.',
      buttonText: 'Read More',
      img: suggestedArticle4,
      link: '#',
    },
  ],
};

const BrowseArticlesSection: React.FC = () => {
  const { tagline, title, blogs } = blogData;

  return (
    <Container className='flex flex-col items-center gap-20 py-12'>
      <div className='flex flex-wrap justify-between items-start gap-x-10 gap-y-24 w-full max-w-[1240px]'>
        <div className='flex flex-col w-full'>
          <Typography
            variant='custom'
            className='text-[20px] font-bold font-secondary leading-[120%]'
          >
            {tagline}
          </Typography>
          <Typography variant='h3' className='text-start font-primary'>
            {title}
          </Typography>
        </div>

        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            link={blog.link}
            img={blog.img}
            category={blog.category}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
      <div>
        <Button text='Show More' buttonClasses='bg-offBlack text-white' />
      </div>
    </Container>
  );
};

export default BrowseArticlesSection;
