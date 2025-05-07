import { FilterClassEnum } from '@/enum/filter-class.enum';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  filter: FilterClassEnum;
  src: string | StaticImageData;
  className?: string;
  rotate?: 'top' | 'right' | 'bottom' | 'left';
  height?: number;
  width?: number;
  alt?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const FilteredImage: React.FC<Props> = ({
  filter,
  src,
  alt,
  className,
  rotate,
  height,
  width,
  style,
  onClick,
}) => {
  const rotateClass = () => {
    if (rotate === 'right') return 'rotate-90';
    if (rotate === 'bottom') return 'rotate-180';
    if (rotate === 'left') return 'rotate-270';
    return '';
  };

  return (
    <Image
      src={src}
      alt={alt || ''}
      height={height}
      width={width}
      className={clsx(className, filter, rotateClass(), 'transition-all')}
      style={style}
      onClick={onClick}
    />
  );
};

export default FilteredImage;
