import React from 'react';

const ErrorHighlighter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className='absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] border-2 border-red rounded-md bg-lightRed'
    />
  );
};

export default ErrorHighlighter;
