import { featuredBlogImg } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import Image from 'next/image';
import React from 'react';

type FeaturedArticleSectionProps = {
  data: BlogRecordEntity | null;
};

const FeaturedArticleSection = ({ data }: FeaturedArticleSectionProps) => {
  return (
    <Container className='my-16'>
      <FlexWrapper stackOrder='second-top' className='justify-between'>
        <div className='flex relative justify-center items-center horizontal-card bg-yellow p-10 rotate-[-2deg] '>
          <Image
            width={360}
            height={230}
            src={data && data.featuredImage ? data.featuredImage : featuredBlogImg}
            alt={
              data && data.featuredImageAltDescription
                ? data.featuredImageAltDescription
                : 'How to do Flutter Kicks in Swimming blog Image'
            }
            unoptimized
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
          <Typography
            variant='custom'
            className='text-[14px] md:text-[20px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1'
          >
            {data && data.categories
              ? data.categories
                  .map((c) => c.name)
                  .join(', ')
                  .toUpperCase()
              : 'SWIMMING TIPS'}
          </Typography>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] md:max-w-[367px] text-start my-2'
          >
            {data && data.title ? data.title : 'How to do Flutter Kicks in Swimming'}
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary font-medium leading-[120%] md:max-w-[377px] text-start'
          >
            {data && data.teaser
              ? data.teaser
              : 'The flutter kick is a kicking movement used in both swimming and exercise. \
            Nonetheless, the flutter kick is commonly used in different strokes, like \
            freestyle or backstroke.'}
          </Typography>
          <div className='flex justify-start items-center mt-6'>
            {data && (
              <ArrowButton
                text={'Read More'}
                link={`/blog/${data.hyphenatedTitle}`}
                buttonClasses='bg-offBlack pl-10 h-18 lg:pl-12 text-[16px] md:text-[24px] font-secondary font-bold text-white'
                IconClasses='bg-yellow'
                iconColor={'var(--color-offBlack)'}
              />
            )}
          </div>
        </div>
      </FlexWrapper>
    </Container>
  );
};

export default FeaturedArticleSection;
