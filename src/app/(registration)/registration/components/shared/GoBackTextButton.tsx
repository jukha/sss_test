import { arrowUp } from '@/assets';
import FilteredImage from '@/components/FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import clsx from 'clsx';

type Props = {
  onClick?: () => void;
  text: string;
  size?: 'large' | 'small';
};

const GoBackTextButton: React.FC<Props> = ({ text, onClick, size = 'large' }) => {
  return (
    <div
      className={clsx(
        'flex gap-[10px] items-center font-bold leading-[1.2] font-primary border-b-[1px] border-b-[rgba(0,0,0,0)] hover:border-b-solid hover:border-b-offBlack',
        size === 'large' && 'self-start text-[24px]',
        size === 'small' && 'text-[20px]'
      )}
    >
      {onClick && (
        <button onClick={onClick} type='button' className='flex gap-[10px] cursor-pointer'>
          <FilteredImage
            src={arrowUp}
            width={20}
            height={20}
            alt='arrow'
            filter={FilterClassEnum.OffBlack}
            rotate='left'
            className={clsx(size === 'large' && 'mb-[6px]')}
          />
          <div className={clsx('text-offBlack', size === 'small' && '!text-medium')}>{text}</div>
        </button>
      )}
    </div>
  );
};

export default GoBackTextButton;
