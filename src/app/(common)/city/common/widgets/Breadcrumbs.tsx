import React from 'react';

type Props = {
  city: string;
  state: string;
  program: string;
}

export const Breadcrumbs = ({ city, state, program }: Props) => {
  return (
    <div
      className='flex gap-2 justify-start ml-[30px] items-center mb-4 text-lightBlue text-[14px] font-bold font-secondary md:text-base'>
      <span>Swim School</span>
      <span className='text-xl'>{'>'}</span>
      <span>{state}</span>
      <span>{'>'}</span>
      <span>{city}</span>
      <span>{'>'}</span>
      <span>{program}</span>
    </div>
  )
}
