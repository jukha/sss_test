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
    <div
      className={clsx(
        'flex gap-[10px] items-center',
        onClick ? 'cursor-pointer' : 'cursor-default',
        size === 'large' && 'self-start'
      )}
      onClick={onClick}
    >
      {onClick && (
        <FilteredImage
          src={arrowUp}
          width={20}
          height={20}
          alt='arrow'
          filter={FilterClassEnum.DarkBlue}
          rotate='left'
        />
      )}
      <h3 className={clsx('text-darkBlue', size === 'small' && '!text-medium')}>
        {text}
      </h3>
    </div>
  );
};

export default GoBackTextButton;
