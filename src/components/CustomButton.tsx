import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  icon?: StaticImageData;
  width?: string;
  type?: 'submit' | 'button' | 'reset';
  isActive?: boolean;
  className?: string;
  textClassName?: string;
};

const CustomButton: React.FC<Props> = ({
  onClick,
  text,
  disabled,
  width,
  icon,
  type,
  isActive,
  className,
  textClassName,
}) => {
  return (
    <button
      className={clsx(
        'flex items-center px-[8px] py-[12px] gap-[10px] cursor-pointer justify-center relative rounded-[10px] disabled:opacity-60 disabled:cursor-default',
        isActive ? 'bg-blue' : 'bg-gray',
        className
      )}
      style={{ width }}
      disabled={disabled}
      type={type || 'button'}
      onClick={onClick}
    >
      <span
        className={clsx(
          'max-w-[80%]',
          isActive ? 'text-white' : 'text-black',
          textClassName ? textClassName : 'text-medium font-semibold'
        )}
      >
        {text}
      </span>
      {icon && (
        <FilteredImage filter={FilterClassEnum.Black} src={icon} alt='icon' />
      )}
    </button>
  );
};

export default CustomButton;
