import Typography from '@/components/semantics/Typography';
import React from 'react';

type Props = {
  requirements: string[];
};

const LessonRequirements: React.FC<Props> = ({ requirements }) => {
  return (
    <Typography
      variant='custom'
      className='text-base md:text-[20px] font-secondary font-medium leading-[120%] '
    >
      {requirements.map((requirement, i) => (
        <p key={i}>
          <span className='text-red'>*</span>
          {requirement}
        </p>
      ))}
    </Typography>
  );
};

export default LessonRequirements;
