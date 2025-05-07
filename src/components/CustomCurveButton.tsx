import { StaticImageData } from 'next/image';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { curveOval } from '@/assets';

type Props = {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  icon?: StaticImageData;
  width?: string;
  type?: 'submit' | 'button' | 'reset';
};

const CustomCurveButton: React.FC<Props> = ({
  onClick,
  text,
  disabled,
  width,
  icon,
  type,
}) => {
  return (
    <div className='z-[1]' style={{ width }}>
      <button
        className='w-full curveButton flex items-center px-[100px] py-[30px] cursor-pointer justify-center disabled:opacity-60 disabled:cursor-default relative'
        disabled={disabled}
        type={type || 'button'}
        onClick={onClick}
      >
        <FilteredImage
          src={curveOval.src}
          alt='front'
          height={30}
          width={30}
          className='z-[-1] object-fill absolute w-full h-full'
          filter={FilterClassEnum.DarkBlue}
        />
        <span className='w-fit text-white text-medium font-semibold'>
          {text}
        </span>
        {icon && (
          <div className='curveCircle bg-yellow flex items-center justify-center p-[8px] absolute right-[20px]'>
            <FilteredImage
              filter={FilterClassEnum.Black}
              src={icon}
              alt='icon'
            />
          </div>
        )}

        {!disabled && (
          <FilteredImage
            src={curveOval.src}
            alt='back'
            height={30}
            width={30}
            className='z-[-2] object-fill absolute w-full h-full top-[10px] left-[-10px]'
            filter={FilterClassEnum.LightBlue}
          />
        )}
      </button>
    </div>
  );
};

export default CustomCurveButton;
