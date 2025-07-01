'use client';
import React, { useEffect, useRef, useState } from 'react';
import Typography from '../semantics/Typography';
import { useClickOutside } from '../../hooks/use-click-outside';
import clsx from 'clsx';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import Image from 'next/image';
import Link from 'next/link';

type ReviewCardProps = {
  review: CustomerReviewEntity;
  index: number;
  direction: 'lt' | 'rt' | 'center';
  bgColor: string;
  shadowColor: string;
  avatarBgColor: string;
};

type ClassesType = {
  lt: string;
  rt: string;
  center: string;
};

const ReviewCard = (props: ReviewCardProps) => {
  const classes: ClassesType = {
    lt: 'slider-card-left text-white',
    rt: 'slider-card-right text-white',
    center: 'slider-card-center text-offBlack',
  };
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isExpandedAble, setIsExpandAble] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const height = textContentRef?.current?.clientHeight || 0;

    if (height > 120) {
      setIsExpandAble(true);
    }
  }, []);

  useClickOutside(cardRef, () => setExpanded(false));

  return (
    <Link href={props.review.socialUrl ?? '/blog/customer-reviews'}>
      <div
        ref={cardRef}
        style={{
          backgroundColor: props.shadowColor,
        }}
        className={clsx(
          'relative min-w-full sm:w-auto top-0',
          'relative min-h-[280px] p-6 w-fit min-w-[250px] max-w-[275px]',
          'md:max-w-[386px] md:min-h-[360px] z-20',
          classes[props.direction]
        )}
      >
        {/* content start */}
        <div
          className={clsx(
            'flex flex-col h-full relative justify-start',
            'duration-300 pl-4 md:px-6 items-start z-10',
            isExpandedAble ? 'gap-2 md:gap-16' : 'gap-8 md:gap-46',
            expanded ? 'pt-[3em] md:pt-[4em]' : 'pt-[1em] md:pt-[2em]'
          )}
        >
          <div className='flex flex-col gap-2 duration-300 group'>
            <div ref={textContentRef}>
              <Typography
                variant='custom'
                className={clsx(
                  'font-medium font-secondary text-[16px] pr-2 md:text-[20px] leading-[120%] text-start duration-500',
                  expanded
                    ? 'max-h-[400px] overflow-y-auto reviewCardScroll'
                    : 'max-h-[133px] md:max-h-[121px] overflow-hidden'
                )}
              >
                {props.review.body}
              </Typography>
            </div>

            {isExpandedAble && (
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  e.preventDefault();
                  setExpanded((prev) => !prev);
                }}
                className='font-primary text-[12px] sm:text-base font-bold hover:cursor-pointer hover:scale-105 duration-500 inline-block pr-2 h-8 w-22'
              >
                {expanded ? 'See Less' : 'See More'}
              </span>
            )}
          </div>
          <div className='flex gap-4'>
            {props.review.avatarUrl ? (
              <div className='h-16 w-16 rounded-full relative overflow-hidden'>
                <Image src={props.review.avatarUrl} alt='author image' fill className='object-cover' unoptimized />
              </div>
            ) : (
              <div
                className='h-16 w-16 rounded-full relative overflow-hidden'
                style={{ backgroundColor: props.avatarBgColor }}
              />
            )}
            <div className={`flex flex-col justify-center items-start`}>
              <Typography
                className='font-semibold font-primary md:font-bold text-[16px] md:text-[20px]'
                variant='custom'
              >
                {props.review.customerName}
              </Typography>
              <Typography className='text-[12px] font-medium font-secondary md:text-[20px]' variant='custom'>
                {props.review.city}
              </Typography>
            </div>
          </div>
        </div>
        {/* content end */}

        {/* main color card */}
        <div
          style={{
            backgroundColor: props.bgColor,
          }}
          className={clsx(
            'absolute flex flex-col h-full w-full left-[11px] top-0 duration-300',
            classes[props.direction]
          )}
        ></div>
      </div>
    </Link>
  );
};

export default ReviewCard;
