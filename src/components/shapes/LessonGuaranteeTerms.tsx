import { RedTickIcon } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import React from 'react';

type Props = {
  guaranteeTerms: string[];
};

const LessonGuaranteeTerms: React.FC<Props> = ({ guaranteeTerms }) => {
  return (
    <div className='flex flex-col gap-2'>
      {guaranteeTerms.map((term, index) => (
        <div key={index} className='flex justify-start items-center gap-4'>
          <div className='shrink-0 h-[26px] w-[26px]'>
            <RedTickIcon />
          </div>
          <Typography
            variant='custom'
            className='text-base leading-[120%] font-medium font-secondary'
          >
            {term}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default LessonGuaranteeTerms;
