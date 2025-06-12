'use client';
import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import Typography from '@/components/semantics/Typography';
import IconFrame from '@/components/icons/IconFrame';
import { ChevronArrowIcon } from '@/components/icons';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  data: FAQItem[];
};

const FAQsSection: React.FC<FAQsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className='max-w-5xl mx-auto px-4'>
      {data.map((faq, index) => (
        <button
          key={index}
          className='py-4 lg:py-16 pl-0 lg:pl-8 border-b-[1] border-black w-full cursor-pointer'
          onClick={() => toggleIndex(index)}
        >
          <div
            className={clsx(
              'grid grid-cols-[1fr_max-content] gap-2 justify-between items-center transition-all duration-300 ease-in-out',
              {
                'pb-5 lg:pb-[33px]': activeIndex === index,
                'pb-0': activeIndex !== index,
              }
            )}
          >
            {/* ******** */}
            {/* Question */}
            {/* ******** */}
            <Typography
              variant='h4'
              className='max-sm:max-w-[337px] font-primary text-left font-semibold lg:font-bold text-black leading-[120%] max-lg:text-base'
            >
              {faq.question}
            </Typography>
            {/* ************* */}
            {/* Toggle Button */}
            {/* ************* */}
            <div
              className={
                'max-h-[35px] max-w-[35px] lg:max-h-10 lg:max-w-10 flex relative items-center justify-center'
              }
            >
              <IconFrame color='#00ACB6' />
              <span
                className={clsx(
                  'inline-block w-[15px] lg:w-[20px] h-[11px] absolute transition-all duration-300 ease-in-out',
                  {
                    'rotate-0': activeIndex === index,
                    'rotate-180': activeIndex !== index,
                  }
                )}
              >
                <ChevronArrowIcon />
              </span>
            </div>
          </div>
          {/* ****** */}
          {/* Answer */}
          {/* ****** */}
          <Typography
            variant='body2'
            className={clsx(
              'max-w-[827px] font-secondary text-left max-lg:text-xs leading-[120%] transition-all duration-300 ease-in-out whitespace-pre-line',
              {
                'max-h-40 opacity-100': activeIndex === index,
                'max-h-0 opacity-0 overflow-hidden': activeIndex !== index,
              }
            )}
          >
            {faq.answer}
          </Typography>
        </button>
      ))}
    </section>
  );
};

export default FAQsSection;
