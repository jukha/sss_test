import { arrowUp } from '@/assets';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import clsx from 'clsx';

type Props = {
  onClick?: () => void;
  text: string;
  size?: 'large' | 'small';
};

const GoBackTextButton: React.FC<Props> = ({
  text,
  onClick,
  size = 'large',
}) => {
  return (
    <button
      className={clsx(
        'flex gap-[10px] items-center cursor-pointer font-bold leading-[120%] font-primary',
        size === 'large' && 'self-start text-[24px]',
        size === 'small' && 'text-[20px]'
      )}
      onClick={onClick}
      type='button'
    >
      {onClick && (
        <FilteredImage
          src={arrowUp}
          width={20}
          height={20}
          alt='arrow'
          filter={FilterClassEnum.DarkBlue}
          rotate='left'
          className={clsx(size === 'large' && 'mb-[6px]')}
        />
      )}
      <span
        className={clsx('text-darkBlue', size === 'small' && '!text-medium')}
      >
        {text}
      </span>
    </button>
  );
};

export default GoBackTextButton;
