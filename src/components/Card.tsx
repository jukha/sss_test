import { CardType } from '@/types/card.type';
import FilteredImage from './FilteredImage';
import clsx from 'clsx';

type Props = {
  cardInfo: CardType;
};

const Card: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className='z-[1] w-full relative'>
      <div className=' p-[20px] pt-[40px] gap-[50px] laptop:p-[50px] laptop:pt-[80px] w-full flex flex-col justify-between min-h-[300px]'>
        <span
          className={clsx(
            'font-[500] text-medium text-white min-h-[140px]',
            cardInfo.textColor
          )}
        >
          {cardInfo.text}
        </span>
        <div className='flex gap-[10px]'>
          <div
            className={clsx(
              'w-[70px] h-[70px] rounded-[70px]',
              cardInfo.person.bgColor
            )}
          />
          <div className='flex flex-col'>
            <span
              className={clsx(
                'font-[600] text-medium text-white',
                cardInfo.textColor
              )}
            >
              {cardInfo.person.name}
            </span>
            <span
              className={clsx(
                'font-[500] text-medium text-white',
                cardInfo.textColor
              )}
            >
              {cardInfo.person.city}
            </span>
          </div>
        </div>
      </div>

      <FilteredImage
        src={cardInfo.cardBgSrc.src}
        alt='front'
        height={30}
        width={30}
        className='z-[-1] object-fill absolute w-full h-full top-0'
        filter={cardInfo.cardFilter}
      />

      <FilteredImage
        src={cardInfo.cardBgSrc.src}
        alt='back'
        height={30}
        width={30}
        className='z-[-2] object-fill absolute w-full h-full top-[10px] left-[-10px]'
        filter={cardInfo.cardShadowFilter}
      />
    </div>
  );
};

export default Card;
