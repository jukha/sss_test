import {
  glassdoorIcon,
  indeedIcon,
  instructorsLoveTeachingInstructorJobImg,
} from '@/assets';
import { Bubbles } from '@/components/decoration';
import ThreeStars from '@/components/decoration/ThreeStars';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import StudentReviewCard from '../../city/local-teen/components/StudentReviewCard';

const content = {
  heading: ' Our [city] Sunsational instructors love teaching with us',
  description:
    'Rated best swim school to work with by our independent swim instructors.',
};

type ImageContainerProps = {
  img: StaticImageData;
  alt: string;
};

type SalaryInfoBlockProps = {
  textTop: string;
  salary: string;
  textBottom: string;
};

const OurInstructorsLoveTeachingSection = () => {
  const ImageContainer = ({ img, alt }: ImageContainerProps) => {
    return (
      <div className='chip-bg flex justify-center items-center bg-white px-4 md:h-[138px] h-[104px] w-[279px] md:w-[370px]'>
        <Image src={img} alt={alt} />
      </div>
    );
  };
  const SalaryInfoBlock = ({
    textTop,
    salary,
    textBottom,
  }: SalaryInfoBlockProps) => {
    return (
      <div className='flex bg-white px-6 py-4 chip-bg flex-col justify-start items-center'>
        <Typography
          variant='custom'
          className='text-[18px] leading-[114%] font-medium font-secondary'
        >
          {textTop}
        </Typography>
        <Typography
          variant='custom'
          className='text-[53px] font-primary leading-[112%] font-bold'
        >
          {salary}
        </Typography>
        <Typography
          variant='custom'
          className='text-[18px] leading-[114%] font-medium font-secondary'
        >
          {textBottom}
        </Typography>
      </div>
    );
  };
  return (
    <FeatureSection
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue)'
      className='my-24'
    >
      <Container className='flex flex-col justify-start overflow-clip items-center relative  gap-10'>
        <Typography variant='h2' className='max-w-[837px] text-center z-10'>
          {content.heading}
        </Typography>
        <Typography
          variant='body2'
          className='font-medium font-secondary leading-[120%] max-w-[342px] md:max-w-[495px] text-center z-10 whitespace-break-spaces'
        >
          {content.description}
        </Typography>

        <div
          className={`w-full flex-col lg:flex-row flex justify-center   items-center relative overflow-x-clip lg:overflow-visible`}
        >
          <Image
            src={instructorsLoveTeachingInstructorJobImg}
            alt={'Instructors Love Teaching image'}
            className='z-10 lg:translate-x-12'
          />

          <div className='w-full shrink z-10 flex flex-col -translate-y-12 lg:translate-y-0  gap-4'>
            <div className='flex justify-start'>
              <ImageContainer img={indeedIcon} alt='indeed icon' />
            </div>
            <div className='flex justify-end'>
              <ImageContainer img={glassdoorIcon} alt='glassdoor icon' />
            </div>
            <div className='flex w-full justify-start relative z-10'>
              <SalaryInfoBlock
                textTop='Start at'
                textBottom=' part-time + BONUSES'
                salary='$38-$60/hr'
              />
            </div>
            <div className='absolute hidden lg:block right-0 w-[96px] h-[150px] top-[-20%] z-10'>
              <ThreeStars color='var(--color-orange)' />
            </div>
            <div className='absolute right-[5%] md:right-[15%] w-[96px] h-[150px] bottom-[-20%] '>
              <ThreeStars color='var(--color-orange)' />
            </div>
          </div>

          <div className='absolute w-[148px] h-[145px]  lg:h-[503px] lg:w-[592px] rotate-180 left-[-10%] top-[-20%] md:left-0 md:top-[-10%] opacity-10 '>
            <Bubbles color='var(--color-blue)' />
          </div>

          <div className='absolute w-[148px] h-[145px] md:w-[378px] md:h-[334px] right-[-10%] bottom-[-20%] lg:right-0 lg:bottom-0 opacity-10'>
            <Bubbles color='var(--color-blue)' />
          </div>
        </div>
        <div className='lg:absolute flex justify-center items-center w-full h-auto z-10   lg:w-[444px] lg:h-[250px]  lg:bottom-0  lg:left-10 xl:left-20'>
          <StudentReviewCard
            name='Robert B.'
            location=''
            review='“I love working for Sunsational because it allows me to work when I want to. My students tend to learn quicker, because I develop effective lesson plans and encourage the parent to practice with their child. I love showing up, and seeing my student swim on their own. Makes my life easier, and allows me to work on more technique!"'
            decoration={false}
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default OurInstructorsLoveTeachingSection;
