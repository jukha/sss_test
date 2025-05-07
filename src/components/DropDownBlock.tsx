import { DropDownType } from '@/types/dropdown.type';
import DropDown from './DropDown';

type Props = {
  dropDownBlocks: DropDownType[];
};

const DropDownBlock: React.FC<Props> = ({ dropDownBlocks }) => {
  return (
    <div className='bg-lightYellow rounded-[24px] p-[20px] flex flex-col gap-[20px]'>
      {dropDownBlocks.map((el, i) => (
        <div key={i} className='flex flex-col gap-[20px]'>
          <div className='px-[10px]'>
            <DropDown dropDown={el} />
          </div>
          {i !== dropDownBlocks.length - 1 && (
            <div className='bg-black h-[1px] w-full' />
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDownBlock;
