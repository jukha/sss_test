import { blogImg } from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import MarkdownTypography from '@/components/markdown/MarkdownTypography';
import { SocialShareButtons } from './SocialShareButtons';

type BlogContentProps = {
  blogContentData: BlogRecordEntity;
};

const BlogContent = ({ blogContentData }: BlogContentProps) => {
  return (
    <section>
      <Container className='flex flex-col gap-6 justify-start items-center '>
        <Image src={blogImg} alt='test' className='my-10' />
        <div className='font-primary w-[1100px] prose'>
          <MarkdownTypography content={blogContentData.body ?? ''} />
        </div>
        <div className='flex justify-between items-center max-w-[818px] w-full'>
          <Typography variant='custom' className='text-[18px] font-secondary font-bold md:text-[24px]'>
            Share on socials
          </Typography>
          <SocialShareButtons
            url={`/blog/${blogContentData.hyphenatedTitle}`}
            title='Check out this amazing article'
            description='Learn about the latest trends in technology'
          />
        </div>
        <div className='w-full max-w-[800px] border-t-2 border-yellow mb-16'></div>
      </Container>
    </section>
  );
};

export default BlogContent;
