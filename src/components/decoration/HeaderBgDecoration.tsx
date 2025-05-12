import React from 'react';

type Props = {
  color?: string;
  width: string;
};

const HeaderBgDecoration: React.FC<Props> = ({ color, width }) => {
  return (
    <svg
      width={width}
      height='100%'
      viewBox='0 0 661 83'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <path
        d='M577.562 82.19C422.031 81.8485 266.54 80.6648 111.336 78.643C83.0495 78.2739 51.7095 77.5999 32.9696 73.5083C21.7564 71.0588 17.1115 67.7684 13.5036 64.5811C-4.42106 48.6799 -4.46644 32.0507 13.4047 16.1523C18.5355 11.5867 26.0861 6.78437 44.7735 3.79493C65.4584 0.489574 94.5715 0.190609 121.457 0.0572779C171.559 -0.194412 629.017 0.761725 648.843 15.3834C668.669 30.005 664.867 76.6325 616.028 81.1377C604.256 82.2227 590.64 82.2241 577.582 82.194L577.562 82.19Z'
        fill={color ? color : '#FEDF46'}
      />
    </svg>
  );
};

export default HeaderBgDecoration;
