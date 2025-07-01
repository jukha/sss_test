'use client';
import useEmblaCarousel from 'embla-carousel-react';

import { NextButton, PrevButton, useEmblaCarouselControls } from '@/components/widgets/EmblaCarouselArrowButton';
import IconFrame from '@/components/icons/IconFrame';

import { SwimSchool } from './types';
import SchoolCard from './SchoolCard';
import { BORDER_COLORS, FIELDS_LABELS } from './utils';

type Props = {
  data: SwimSchool[];
};

const MobileSwimSchoolCompetitor: React.FC<Props> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
    align: 'center',
    containScroll: 'keepSnaps',
  });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useEmblaCarouselControls(emblaApi);

  return (
    <section className='embla relative flex items-center'>
      <div className='h-9 w-9 flex justify-center items-center absolute z-[1]'>
        <PrevButton
          className='h-full w-full inline-flex justify-center items-center text-white'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
          <IconFrame color='var(--color-orange)' />
        </span>
      </div>

      <div className='h-9 w-9 flex justify-center items-center absolute right-0 z-[1]'>
        <NextButton
          className='h-full w-full inline-flex justify-center items-center text-white'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
        <span className='w-full absolute h-full inline-block top-0 left-0 z-[-1]'>
          <IconFrame color='var(--color-orange)' />
        </span>
      </div>

      <div className='embla__viewport embla_swim_schools_comparison_section' ref={emblaRef}>
        <div className='embla__container pt-[60px]' style={{ '--slide-size': '70%' } as React.CSSProperties}>
          {data.map(({ features }, idx) => {
            const colorsIdx = idx % BORDER_COLORS.length;
            return (
              <div key={idx} className='embla__slide'>
                <SchoolCard
                  features={features}
                  featuresLabels={FIELDS_LABELS}
                  showSunsationalLogo={idx === 0}
                  bolderColor={BORDER_COLORS[colorsIdx]}
                  className='max-w-[100%]! pt-[120px]! pl-12!'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileSwimSchoolCompetitor;
