import { ArrowButtonType } from '@/types/button.type';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import ArrowButton from '../kit/buttons/ArrowButton';
import FlexWrapper from '../layout/FlexWrapper';
import Typography from '../semantics/Typography';
import SellingReasonListItem from '../shapes/SellingReasonListItem';

const SellingPointsSection: React.FC<SellingPointsSectionType> = ({
  sectionTitle,
  sectionTitleMaxWidth = 'max-w-[837px]',
  sectionDescription,
  image,
  sellingReasons,
  arrowButtonProps,
}) => {
  const defaultArrowProps: ArrowButtonType = {
    text: 'Book Now',
    link: '/registration',
    buttonClasses: 'bg-offBlack text-white min-w-[300px] gap-12 mx-auto',
    IconClasses: 'bg-yellow',
    iconColor: 'var(--color-black)',
    shadow: true,
    shadowClasses: 'bg-blue',
  };

  const finalArrowProps = { ...defaultArrowProps, ...arrowButtonProps };

  return (
    <section className='py-[90px] lg:py-[200px]'>
      <Typography
        variant='h2'
        className={clsx('mx-auto text-center', sectionTitleMaxWidth)}
      >
        {sectionTitle}
      </Typography>
      <Typography
        variant='custom'
        className='text-xl font-medium leading-[120%] mt-10 font-secondary text-black max-w-[633px] text-center mx-auto'
      >
        {sectionDescription}
      </Typography>
      <FlexWrapper className='items-start mt-16 lg:mt-[120px] gap-[54px]'>
        {/* Left column: illustrative image */}
        <div className='lg:w-1/2 flex justify-end'>
          <Image src={image} alt='' />
        </div>
        {/* Right column: list of selling points */}
        <div className='lg:w-1/2'>
          {sellingReasons.map((reason, i) => (
            <SellingReasonListItem reason={reason} key={i} />
          ))}
        </div>
      </FlexWrapper>
      <div className='flex justify-center'>
        <ArrowButton {...finalArrowProps} />
      </div>
    </section>
  );
};

export default SellingPointsSection;
