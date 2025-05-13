import React from 'react';

interface Props {
  iconColor?: string;
}

const ArrowIcon = (props: Props) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.6353 24.7181L9.90202 21.9222L17.3041 14.7482L0.226854 14.481L0.29015 10.436L17.3674 10.7033L10.1932 3.31313L13.0129 0.592137L24.8871 12.8439L12.6353 24.7181Z'
        fill={props.iconColor ? props.iconColor : 'white'}
      />
    </svg>
  );
};

export default ArrowIcon;
