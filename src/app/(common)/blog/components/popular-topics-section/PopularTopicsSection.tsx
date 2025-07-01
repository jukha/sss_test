// import SunIcon from '@/components/icons/SunIcon';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import ChipWithIcon from '@/components/shapes/ChipWithIcon';
import { BlogCategoryEntity } from '@/entities/blog-category.entity';
import React from 'react';

type PopularTopicsSectionProps = {
  data: BlogCategoryEntity[];
};

const PopularTopicsSection = ({ data }: PopularTopicsSectionProps) => {
  return (
    <Container className='flex flex-col justify-start items-center gap-16 py-12'>
      <Typography
        variant='custom'
        className='text-[40px] md:text-[48px] font-primary font-bold text-center leading-[110%] text-offBlack'
      >
        Popular Topics & Categories
      </Typography>
      <div className='flex justify-center items-center flex-wrap max-w-[1333px] gap-4'>
        {data.map((topic, index) => {
          return <ChipWithIcon key={index} content={topic} />;
        })}
      </div>
    </Container>
  );
};

export default PopularTopicsSection;
