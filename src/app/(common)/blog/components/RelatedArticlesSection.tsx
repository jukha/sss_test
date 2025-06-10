import {
  suggestedArticle2,
  suggestedArticle3,
  suggestedArticle5,
} from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import BlogCard from '@/components/shapes/BlogCard';
import React from 'react';

const blogData = {
  tagline: 'LATEST',
  title: 'Related Articles',
  blogs: [
    {
      category: 'NEWS',
      title: 'How to do Flutter Kicks in Swimming',
      description:
        'The flutter kick is a kicking movement used in both swimming and exercise. It’s commonly used in strokes like freestyle and backstroke.',
      buttonText: 'Read More',
      img: suggestedArticle5,
      link: '#',
    },
    {
      category: 'NEWS',
      title: 'How to Teach a Toddler or a Child to Hold Breath Underwater',
      description:
        'Many children fear dunking their head underwater. Even without fear, some struggle to fully submerge comfortably.',
      buttonText: 'Read More',
      img: suggestedArticle3,
      link: '#',
    },
    {
      category: 'NEWS',
      title: 'How to do Flutter Kicks in Swimming',
      description:
        'The flutter kick is a kicking movement used in both swimming and exercise. It’s commonly used in strokes like freestyle and backstroke.',
      buttonText: 'Read More',
      img: suggestedArticle2,
      link: '#',
    },
  ],
};

const RelatedArticlesSection = () => {
  return (
    <Container className='flex flex-col items-center gap-6 my-24'>
      <div className='flex flex-col w-full'>
        <Typography
          variant='custom'
          className='text-[20px] font-bold font-secondary leading-[120%]'
        >
          {blogData.tagline}
        </Typography>
        <Typography variant='h3' className='text-start font-primary'>
          {blogData.title}
        </Typography>
      </div>
      <div className='grid grid-cols-3 gap-20'>
        {blogData.blogs.map((blog, index) => (
          <BlogCard
            key={index}
            link={blog.link}
            img={blog.img}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            hideButton={true}
          />
        ))}
      </div>
    </Container>
  );
};

export default RelatedArticlesSection;
