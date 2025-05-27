import Typography from '@/components/semantics/Typography';
import React from 'react';

const data = {
  heading: 'Swim Lessons',
  description:
    'Take a look at our fabulous selection of swim lessons. RegistrationFee (annual): $20 per student',
};

const PricingPageHeadingSection = () => {
  return (
    <div className='flex flex-col gap-2 translate-y-12 justify-start items-center'>
      <Typography variant='h2' className='text-center max-w-[837px]'>
        {data.heading}
      </Typography>
      <Typography
        variant='custom'
        className='text-base md:text-[20px] font-secondary font-bold md:font-medium leading-[120%] text-center max-w-[578px]'
      >
        {data.description}
      </Typography>
    </div>
  );
};

export default PricingPageHeadingSection;
