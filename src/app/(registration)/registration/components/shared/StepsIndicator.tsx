import FilteredImage from '@/components/FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import clsx from 'clsx';
import { useState } from 'react';

type CircleNavigationBarStep = {
  image: string,
  steps: RegistrationStepEnum[]
};

type Props = {
  steps: CircleNavigationBarStep[];
  currentStep: RegistrationStepEnum;
  setStep: (n: RegistrationStepEnum) => void;
};

const StepsIndicator: React.FC<Props> = ({ steps, currentStep, setStep }) => {
  const [hoverIndex, setHoverIndex] = useState<number>();

  return (
    <div className='absolute top-[-20px] tablet:top-[-25px] laptop:top-[-32px] w-full max-w-[750px] self-center flex justify-evenly px-[10px] laptop:px-[1%]'>

      {steps.map((el, i) => (
        <div
          onClick={() => setStep(el.steps[0])}
          key={i}
          className={clsx(
            'w-[40px] h-[40px] transition-all tablet:w-[50px] tablet:h-[50px] laptop:w-[64px] laptop:h-[64px] rounded-[64px] flex items-center justify-center cursor-pointer hover:bg-yellow',
            el.steps.includes(currentStep) ? 'bg-yellow' : 'bg-lightGray'
          )}
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(undefined)}
        >
          <FilteredImage
            filter={
              el.steps.includes(currentStep) || hoverIndex === i
                ? FilterClassEnum.Orange
                : FilterClassEnum.Gray
            }
            alt='icon'
            src={el.image}
            className={clsx('h-[30px] tablet:h-[36px] laptop:h-[40px]')}
          />
        </div>
      ))}
    </div>
  );
};

export default StepsIndicator;
