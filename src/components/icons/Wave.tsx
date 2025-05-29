import React from 'react';

const Wave: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='402'
      height='15'
      viewBox='0 0 402 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      {...props}
    >
      <path
        d='M401.075 3.14413L401.01 14.2868L-1.00053 14.9999L-0.939021 4.44459C12.3312 1.99279 25.3316 -2.0687 39.1706 1.69598C53.0096 5.46067 87.7168 5.5021 103.34 5.05223C117.433 3.14613 148.451 -0.0530918 159.79 2.39883C171.128 4.85075 201.54 8.67992 216.534 5.71181C232.224 3.46415 269.445 0.347588 281.57 3.64617C293.696 6.94476 330.12 11.3736 353.324 6.50888C366.261 4.69838 401.075 3.14413 401.075 3.14413Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Wave;
