import FilteredImage from '@/components/FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import clsx from 'clsx';

type Props = {
  icons: string[];
  currentStep: number;
  setStep: (n: number) => void;
};

const StepsIndicator: React.FC<Props> = ({ icons, currentStep, setStep }) => {
  return (
    <div className='absolute top-[-20px] tablet:top-[-25px] laptop:top-[-32px] w-full max-w-[750px] self-center flex justify-evenly px-[10px] laptop:px-[1%]'>
      {icons.map((el, i) => (
        <div
          onClick={() => setStep(i + 1)}
          key={i}
          className={clsx(
            'w-[40px] h-[40px] tablet:w-[50px] tablet:h-[50px] laptop:w-[64px] laptop:h-[64px] rounded-[64px] flex items-center justify-center cursor-pointer',
            currentStep === i + 1 ? 'bg-yellow' : 'bg-gray'
          )}
        >
          <FilteredImage
            filter={
              currentStep === i + 1
                ? FilterClassEnum.Orange
                : FilterClassEnum.Gray
            }
            alt='icon'
            src={el}
            className='h-[30px] tablet:h-[36px] laptop:h-[40px]'
          />
        </div>
      ))}
    </div>
  );
};

export default StepsIndicator;
