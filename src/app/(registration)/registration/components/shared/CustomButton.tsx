import { useState } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import FilteredImage from '@/components/FilteredImage';

type Props = {
  onClick: () => void;
  onBlur?: () => void;
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
  onBlur,
  text,
  disabled,
  width,
  icon,
  type,
  isActive,
  className,
  textClassName,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={clsx(
        'group flex items-center px-[8px] py-[12px] gap-[10px] cursor-pointer justify-center relative rounded-[10px] disabled:opacity-60 disabled:cursor-default enabled:hover:bg-darkBlue enabled:hover:text-white enabled:transition-all',
        isActive ? 'bg-darkBlue text-white' : 'bg-lightGray text-black',
        className
      )}
      style={{ width }}
      disabled={disabled}
      type={type || 'button'}
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={clsx(
          'max-w-[80%]',
          textClassName ? textClassName : 'text-medium font-semibold'
        )}
      >
        {text}
      </span>
      {icon && (
        <FilteredImage
          filter={
            isActive || hovered ? FilterClassEnum.White : FilterClassEnum.Black
          }
          src={icon}
          alt='icon'
        />
      )}
    </button>
  );
};

export default CustomButton;
