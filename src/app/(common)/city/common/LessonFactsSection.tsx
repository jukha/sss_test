import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { SwimLessonFact } from '@/types/swim-lesson.types';
import { Property } from 'csstype';
import { FactBlock } from './FactBlock';

type Props = {
  decorationIconLeft?: React.ReactNode;
  decorationIconRight?: React.ReactNode;
  bgColor?: Property.BackgroundColor;
  heading: string;
  descriptionTop: string;
  descriptionBottom: string;
  facts?: SwimLessonFact[];
  image: StaticImageData;
  imageAlt: string;
};

const LessonFactsSection = ({
  decorationIconLeft,
  decorationIconRight,
  bgColor = 'var(--color-white)',
  image,
  imageAlt,
  heading,
  descriptionTop,
  descriptionBottom,
  facts,
}: Props) => {
  return (
    <FeatureSection
      backgroundColor={bgColor}
      waveColor={bgColor}
      className='my-24'
    >
      <Container className='flex flex-col justify-start items-center relative gap-10'>
        <Typography variant='h2' className='max-w-[837px] text-center z-10'>
          {heading}
        </Typography>
        <Typography
          variant='body2'
          className='font-medium font-secondary leading-[120%] max-w-[342px] md:max-w-[657px] text-center z-10 whitespace-break-spaces'
        >
          {descriptionTop}
        </Typography>

        <div className='w-full flex justify-center items-center relative overflow-x-clip lg:overflow-visible'>
          <Image src={image} alt={imageAlt} className='z-10' />

          {decorationIconLeft && (
            <div className='absolute w-[148px] h-[145px]  lg:h-[503px] lg:w-[592px] rotate-180 left-[-10%] top-[-20%] md:left-0 md:top-[-10%] opacity-50 '>
              {decorationIconLeft}
            </div>
          )}

          {decorationIconRight && (
            <div className='absolute w-[148px] h-[145px] md:w-[278px] md:h-[234px] right-[-10%] bottom-[-20%] lg:right-0 lg:bottom-0 opacity-50'>
              {decorationIconRight}
            </div>
          )}

          <div
            className={`absolute w-full md:w-[80%] ${
              (facts?.length ?? 0) > 2 ? 'h-[200%]' : 'h-[150%]'
            }  mobile:h-full  inset-0 m-auto lg:-translate-y-1/12 z-20  flex flex-col`}
          >
            {facts?.map((fact, index) => (
              <FactBlock
                key={index}
                position={fact.position}
                title={fact.title}
                text={fact.text}
                color={fact.color}
              />
            ))}
          </div>
        </div>

        <Typography
          variant='body2'
          className='font-medium font-secondary leading-[120%] max-w-[342px] md:max-w-[657px] text-center whitespace-break-spaces'
        >
          {descriptionBottom}
        </Typography>
      </Container>
    </FeatureSection>
  );
};

export default LessonFactsSection;
