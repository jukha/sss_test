import React from 'react';
import Container from '../layout/Container';
import clsx from 'clsx';

type Props = {
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
  decorationIconLeft?: React.ReactNode;
  decorationIconLeftClasses?: string;
  decorationIconRight?: React.ReactNode;
  decorationIconRightClasses?: string;
};

const FeaturedBannerSection = (props: Props) => {
  return (
    <Container className='flex justify-center items-center w-full relative px-16'>
      <div
        style={{ backgroundColor: props.borderColor }}
        className='rotate-[0.5deg] horizonral-card-local-swim-instructors px-3 md:px-10 py-6 md:py-6 w-full  '
      >
        <div
          style={{ backgroundColor: props.bgColor }}
          className='horizonral-card-local-swim-instructors px-5 py-10 '
        >
          {props.children}
        </div>
        <div className={`absolute ${props.decorationIconLeftClasses}`}>
          {props.decorationIconLeft}
        </div>
        <div
          className={clsx(`absolute ${props.decorationIconRightClasses}`, {
            hidden: !props.decorationIconRight,
          })}
        >
          {props.decorationIconRight}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedBannerSection;
