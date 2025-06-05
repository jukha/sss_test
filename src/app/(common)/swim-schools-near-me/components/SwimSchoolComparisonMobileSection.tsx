'use client';
import IconFrame from '@/components/icons/IconFrame';
import {
  NextButton,
  PrevButton,
  useEmblaCarouselControls,
} from '@/components/widgets/EmblaCarouselArrowButton';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import SwimSchoolSlide from './SwimSchoolSlide';
import { SwimSchool } from './SwimSchoolComparison';

type Props = {
  data: SwimSchool[];
};

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 1,
  loop: true,
  align: 'center',
};

const SwimSchoolComparisonMobileSection: React.FC<Props> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useEmblaCarouselControls(emblaApi);

  return (
    <div className='relative max-w-[1280px] mx-auto pb-28 lg:hidden pt-[60px]'>
      <section className='embla relative flex items-center'>
        {/* ************* */}
        {/* Buttons Start */}
        {/* ************* */}

        {/* Previous Button */}
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

        {/* Next Button */}
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
        {/* *********** */}
        {/* Buttons End */}
        {/* *********** */}

        {/* ******************** */}
        {/* Slider Wrapper Start */}
        {/* ******************** */}
        <div
          className='embla__viewport embla_swim_schools_comparison_section'
          ref={emblaRef}
        >
          <div className='embla__container pt-[60px]'>
            {data.map((school, index) => (
              <SwimSchoolSlide key={index} school={school} index={index} />
            ))}
          </div>
        </div>
        {/* ****************** */}
        {/* Slider Wrapper End */}
        {/* ****************** */}
      </section>
    </div>
  );
};

export default SwimSchoolComparisonMobileSection;
