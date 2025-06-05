import clsx from 'clsx';
import SelectDecorButton from './SelectDecorButton';
import { CurvyBorderSquare, CurvySquare } from '@/components/icons';

const LessonMinutesCard = ({
  minutes,
  isSelected,
  otherCardSelected,
  isRecommended,
  onChange,
  cardColor,
  nameAttr,
}: {
  isSelected: boolean;
  otherCardSelected: boolean;
  minutes: number;
  isRecommended: boolean;
  onChange: (v: number) => void;
  cardColor: string;
  nameAttr: string;
}) => {
  return (
    <label
      className={clsx(
        'w-[138px] h-[124px] flex flex-col relative pt-[28px] pb-[16px] pl-[20px] pr-[9px] transition-transform',
        !isSelected && 'hover:scale-[1.05] cursor-pointer'
      )}
    >
      {isRecommended && (
        <div className='absolute top-0 left-[50%] z-1 px-[10px] py-[2px] font-bold leading-[120%] text-[10px] rounded-[8px] bg-[#C7EAF3] text-offBlack translate-[-50%]'>
          RECOMMENDED
        </div>
      )}
      <div className='relative z-1 flex flex-col items-start'>
        <span
          className={clsx(
            'font-bold text-[29px] font-primary leading-[80%]',
            otherCardSelected ? 'text-offBlack' : 'text-white'
          )}
        >
          {minutes}
        </span>
        <span
          className={clsx(
            'font-semibold text-[12px] font-primary leading-[120%',
            otherCardSelected ? 'text-offBlack' : 'text-yellow'
          )}
        >
          Minute Lessons
        </span>

        <SelectDecorButton
          className='mt-[10px]'
          bgSvgClassName={otherCardSelected ? '!text-off-white' : ''}
          selected={isSelected}
        />
      </div>

      <input
        className='absolute invisible top-0 left-0 w-0 h-0'
        type='radio'
        name={nameAttr}
        value={minutes}
        onChange={() => onChange(minutes)}
        checked={isSelected}
      />

      {otherCardSelected ? (
        <CurvyBorderSquare className='absolute top-0 left-0 w-full h-full' strokeColor={cardColor} />
      ) : (
        <CurvySquare className='absolute top-0 left-0 w-full h-full' fillColor={cardColor} />
      )}
    </label>
  );
};

export default LessonMinutesCard;
