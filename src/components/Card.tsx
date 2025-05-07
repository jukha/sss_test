import { CardType } from '@/types/card.type';
import FilteredImage from './FilteredImage';
import { curveCard } from '@/assets';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = {
  cardInfo: CardType;
};

const Card: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className='z-[1] w-full relative'>
      <div className=' p-[20px] pt-[40px] laptop:p-[50px] laptop:pt-[80px] w-full flex flex-col justify-between min-h-[300px]'>
        <span className='font-[500] text-medium text-white'>
          {cardInfo.text}
        </span>
        <div className='flex gap-[10px]'>
          <div className='w-[70px] h-[70px] bg-lightBlue rounded-[70px]' />
          <div className='flex flex-col'>
            <span className='font-[600] text-medium text-white'>
              {cardInfo.person.name}
            </span>
            <span className='font-[500] text-medium text-white'>
              {cardInfo.person.city}
            </span>
          </div>
        </div>
      </div>

      <FilteredImage
        src={curveCard.src}
        alt='front'
        height={30}
        width={30}
        className='z-[-1] object-fill absolute w-full h-full top-0'
        filter={FilterClassEnum.DarkBlue}
      />

      <FilteredImage
        src={curveCard.src}
        alt='back'
        height={30}
        width={30}
        className='z-[-2] object-fill absolute w-full h-full top-[10px] left-[-10px]'
        filter={FilterClassEnum.Blue}
      />
    </div>
  );
};

export default Card;
