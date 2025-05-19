'use client';
import React, { useEffect, useRef, useState } from 'react';
import Typography from '../semantics/Typography';
import { useClickOutside } from '../../hooks/use-click-outside';
import clsx from 'clsx';

type Props = {
  direction: 'lt' | 'rt' | 'center';
  title?: string;
  bgColor: string;
  shadowColor: string;
  description?: string;
  location: string;
  index: number;
}

type ClassesType = {
  lt: string;
  rt: string;
  center: string;
}

const ReviewCard = (props: Props) => {
  const classes: ClassesType = {
    lt: 'slider-card-left text-white',
    rt: 'slider-card-right text-white',
    center: 'slider-card-center text-black',
  };
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isExpandedAble, setIsExpandAble] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Review = props.description;

  useEffect(() => {
    const height = textContentRef?.current?.clientHeight || 0;
    if (height > 120) {
      setIsExpandAble(true);
    }
  }, []);

  useClickOutside(cardRef, () => {
    if (expanded) {
      setExpanded(false);
    }
  });

  return (
    <div
      ref={cardRef}
      style={{
        backgroundColor: props.shadowColor,
      }}
      className={clsx(
        'relative w-full sm:w-auto top-0',
        classes[props.direction],
        'relative min-h-[280px] p-6 w-fit min-w-[250px] max-w-[275px]',
        'md:max-w-[386px] md:min-h-[360px] z-20'
      )}
    >
      {/* content start */}
      <div
        className={clsx(
          'flex flex-col h-full relative justify-start',
          isExpandedAble ? 'gap-2 md:gap-16' : 'gap-8 md:gap-28',
          'duration-300 pl-4 md:px-6 items-start z-10',
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
              {Review}
            </Typography>
          </div>

          {isExpandedAble && (
            <span
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setExpanded((prev) => !prev);
              }}
              className='font-primary text-[12px] sm:text-base font-bold hover:cursor-pointer hover:scale-105 duration-500 inline-block w-fit pr-2'
            >
              {expanded ? 'See Less' : 'See More'}
            </span>
          )}
        </div>
        <div className='flex gap-4'>
          <div className='rounded-full w-[36px] h-[36px] md:h-[69px] md:w-[69px] bg-orange-400'></div>
          <div className={`flex flex-col justify-center items-start`}>
            <Typography
              className='font-semibold font-primary md:font-bold text-[16px] md:text-[20px]  '
              variant='custom'
            >
              {props.title}
            </Typography>
            <Typography
              className='text-[12px] font-medium font-secondary md:text-[20px] '
              variant='custom'
            >
              {props.location}
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
  );
};

export default ReviewCard;
