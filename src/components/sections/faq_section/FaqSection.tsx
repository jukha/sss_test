'use client';
import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import Typography from '@/components/semantics/Typography';
import IconFrame from '@/components/icons/IconFrame';
import { ChevronArrowIcon } from '@/components/icons';
import { FAQsSectionVariant } from '@/types/faq-section.type';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  data: FAQItem[];
  variant?: FAQsSectionVariant;
};

const FAQsSection: React.FC<FAQsProps> = ({ data, variant = 'default' }) => {
  const variantStyles = {
    default: {
      styles: {
        backgroundColor: 'transparent',
        padding: '',
      },
      classname: 'py-4 lg:py-16 pl-0 lg:pl-8 w-full cursor-pointer',
      divider: true,
    },
    registration: {
      styles: {
        backgroundColor: '#fff9e1',
        borderRadius: '20px',
        padding: '32px',
      },
      classname: 'w-full cursor-pointer',
      divider: false,
    },
  };

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

  const currentVariant = variantStyles[variant] || variantStyles.default;

  return (
    <section
      className='max-w-5xl mx-auto px-4'
      style={{
        backgroundColor: currentVariant.styles.backgroundColor,
        borderRadius: '20px',
      }}
    >
      {data.map((faq, index) => (
        <button
          key={index}
          className={currentVariant.classname}
          style={{ padding: currentVariant.styles.padding }}
          onClick={() => toggleIndex(index)}
        >
          <div
            className={clsx(
              'grid grid-cols-[1fr_max-content] gap-2 justify-between items-center transition-all duration-300 ease-in-out',
              {
                'pb-5 lg:pb-[13px]': activeIndex === index,
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
              className={'max-h-[35px] max-w-[35px] lg:max-h-10 lg:max-w-10 flex relative items-center justify-center'}
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
          {(data.length - 1 != index || currentVariant.divider) && <div className='border-black border-b-1 pt-3' />}
        </button>
      ))}
    </section>
  );
};

export default FAQsSection;
