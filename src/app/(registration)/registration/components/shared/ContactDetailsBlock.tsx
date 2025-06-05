import clsx from 'clsx';
import React from 'react';

type Props = {
  label: string;
  description: string;
  className?: string;
};

const ContactDetailsBlock: React.FC<Props> = ({ label, description, className }) => {
  return (
    <p className={clsx('font-primary text-offBlack leading-[1.2]', className)}>
      <div className='font-semibold desktop:text-[20px]'>{label}</div>
      <div className='font-bold text-[20px] desktop:text-2xl'>{description}</div>
    </p>
  );
};

export default ContactDetailsBlock;