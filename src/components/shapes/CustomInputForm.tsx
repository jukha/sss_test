import Link from 'next/link';

type Props = {
  outlineColor?: string;
  placeholder: string;
  submitText: string;
};

const CustomInputForm: React.FC<Props> = (props: Props) => {
  return (
    <div
      className='relative background-decoration p-1 max-w-max'
      style={{ background: props.outlineColor ? props.outlineColor : '' }}
    >
      <div className='flex justify-between relative items-center background-decoration bg-white gap-2 pt-[9px] pr-[10px] lg:pr-[22px] pb-2'>
        <input
          type='text'
          placeholder={props.placeholder}
          className='w-[60%] border-none font-medium focus:outline-none text-base lg:text-2xl text-offBlack pl-2 lg:pl-[26px] lg:px-2 lg:py-1 bg-white placeholder-offBlack'
        />
        <div className='w-[40%] lg:w-max'>
          <Link href='#'>
            <div className='bg-yellow background-decoration text-center text-base lg:text-2xl font-medium font-primary py-1 lg:py-[10px] px-2 lg:px-5 text-offBlack cursor-pointer'>
              {props.submitText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomInputForm;
