'use client';
import React from 'react';

type BlogButtonProps = {
  onClick: () => void;
};

const BlogButton = ({ onClick }: BlogButtonProps) => {
  return (
    <div className='relative group w-46'>
      <button
        onClick={onClick}
        className='block w-full py-3 lg:py-4 px-3 lg:px-7 bg-brightYellow text-black text-base lg:text-lg font-bold duration-300 cursor-pointer'
      >
        <div className='flex items-center justify-center'>
          <span className='relative'>Show More</span>
        </div>
      </button>

      <div className='absolute z-[-1] h-full w-full bottom-[-6px] left-[-4px] bg-orange duration-300'></div>
    </div>
  );
};

export default BlogButton;
