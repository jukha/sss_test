import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import LessonPricingCard from '@/components/shapes/LessonPricingCard';
import { LessonPricingSectionType } from '@/types/lesson.types';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import LessonGuaranteeTerms from '../shapes/LessonGuaranteeTerms';
import LessonPlainCard from '../shapes/LessonPlainCard';
import LessonRequirements from '../shapes/LessonRequirements';
import ArrowButton from '../kit/buttons/ArrowButton';

const LessonPricingSection: React.FC<LessonPricingSectionType> = ({
  image,
  title,
  description,
  noOfStudent,
  lessonType,
  lessonPlainCardInfo,
  lessonsPackages,
  requirements,
  guaranteeTerms,
  headerLessonSplitInfo,
  footerLessonSplitInfo,
}) => {
  const reduceDescriptionParts = (prev: ReactNode[], curr: string, index: number, arr: string[]) => {
    prev.push(curr);

    if (index < arr.length - 1) {
      prev.push(<span key={index} className="text-red">*</span>);
    }

    return prev;
  }

  const renderDescriptionWithRedAsterisks = (desc: string | React.ReactNode) => {
    if (typeof desc !== 'string') return desc;
    return desc.split('*').reduce<React.ReactNode[]>(reduceDescriptionParts, [])
  }

  return (
    <Container className='flex flex-col justify-start items-center gap-10'>
      {/* Section 1: Instructor Image and Lesson Meta Info */}
      <FlexWrapper className='md:gap-16'>
        <div>
          <Image alt='instructor image' src={image} />
        </div>

        <div className='flex flex-col gap-4 md:gap-6 max-w-[511px]'>
          {/* Title & Description */}
          <div className='flex flex-col'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[48px] font-primary font-bold leading-[114%] md:leading-[110%] text-start max-w-[354px] md:max-w-[375px]'
            >
              {title}
            </Typography>
            <Typography
              variant='custom'
              className='text-base md:text-[20px] font-secondary font-medium leading-[120%] whitespace-pre-wrap'
            >
              {renderDescriptionWithRedAsterisks(description)}
            </Typography>
          </div>

          {/* Lesson Type Info */}
          <div className='flex flex-col'>
            <Typography
              variant='custom'
              className='text-[20px] md:text-[24px] leading-[125%] font-bold font-secondary mb-1'
            >
              {noOfStudent}
            </Typography>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[20px] leading-[120%] font-bold font-secondary text-red'
            >
              {lessonType}
            </Typography>
            {headerLessonSplitInfo && (
              <Typography
                variant='custom'
                className='text-[14px] md:text-[20px] leading-[120%] font-bold font-secondary text-offBlack'
              >
                {headerLessonSplitInfo}
              </Typography>
            )}
          </div>

          {/* Requirements List (if any) */}
          {requirements && <LessonRequirements requirements={requirements} />}

          {/* Guarantee Terms (if any) */}
          {guaranteeTerms && (
            <LessonGuaranteeTerms guaranteeTerms={guaranteeTerms} />
          )}
        </div>
      </FlexWrapper>

      {/* Section 2: Pricing Cards */}
      <div className='flex flex-col w-full lg:flex-row justify-center items-center gap-6 max-w-[1238px] mx-auto'>
        {/* Plain Card (if any) */}
        {lessonPlainCardInfo && <LessonPlainCard data={lessonPlainCardInfo} />}

        {/* Styled Pricing Cards */}
        {lessonsPackages?.map((pkg) => (
          <LessonPricingCard
            key={pkg.id}
            id={pkg.id}
            options={pkg.options}
            ribbonColor={pkg.ribbonColor}
            ribbonText={pkg.ribbonText}
            noOfLessons={pkg.noOfLessons}
            cardColor={pkg.cardColor}
            blurPrice={pkg.blurPrice}
          />
        ))}
      </div>

      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-offBlack text-white'
          IconClasses='bg-yellow'
          iconColor='var(--color-offBlack)'
          link='/registration'
        />
      </div>

      {/* Section 3: Optional Lesson Split Note */}
      {footerLessonSplitInfo && (
        <Typography
          variant='custom'
          className='font-bold font-secondary leading-[120%] text-center text-[14px] uppercase text-offBlack whitespace-pre-wrap'
        >
          {footerLessonSplitInfo}
        </Typography>
      )}
    </Container>
  );
};

export default LessonPricingSection;
