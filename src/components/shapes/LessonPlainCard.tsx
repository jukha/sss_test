import Typography from '@/components/semantics/Typography';
import React from 'react';

type Props = {
  data: string[];
};

const LessonPlainCard: React.FC<Props> = ({ data }) => {
  return (
    <div className='flex flex-col gap-6 flex-1 justify-center items-center px-12 mb-4 lg:mb-0'>
      {data.map((title, idx) => (
        <>
          <Typography
            variant='custom'
            className='text-offBlack text-[20px] font-secondary font-bold leading-[125%] text-center'
          >
            {title}
          </Typography>
          {idx < data.length && <div className='w-full border-b-[2px]'></div>}
        </>
      ))}
    </div>
  );
};

export default LessonPlainCard;
