import { arrowUp } from '@/assets';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import clsx from 'clsx';

export type CollapsibleListItem = { title: string; description: React.ReactNode };

type Props = {
  items: CollapsibleListItem[];
  className?: string;
};

const CollapsibleList: React.FC<Props> = ({ items, className }) => {
  return (
    <div
      className={clsx(
        'bg-lightYellow rounded-[16px] px-2 flex flex-col desktop:rounded-[24px] desktop:px-6',
        className
      )}
    >
      {items.map(({ title, description }, i) => {
        return (
          <details
            key={i}
            className='group transition-all py-4 not-first:border-t-[1px] not-last:border-b-[1px] desktop:py-6'
          >
            <summary className='flex gap-[10px] justify-between cursor-pointer font-primary font-semibold leading-[1.2] desktop:text-2xl desktop:font-bold'>
              {title}
              <div className='curveCircle bg-teal shrink-0 w-[28px] h-[28px] flex items-center justify-center desktop:w-[38px] desktop:h-[38px]'>
                <FilteredImage
                  className='rotate-180 group-open:rotate-0'
                  src={arrowUp}
                  filter={FilterClassEnum.White}
                />
              </div>
            </summary>
            <div className='font-medium text-sm leading-[1.2] font-secondary mt-5 desktop:text-medium desktop:mt-6'>
              {description}
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default CollapsibleList;
