import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const CurvySubstrate = ({ className, style }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 19 18'
      fill='none'
      style={style}
    >
      <path
        d='M3.12861 1.21376C2.54168 1.44833 1.94642 1.74148 1.53583 2.39574C1.07992 3.12217 0.905242 4.20357 0.752784 5.24896C0.393226 7.71024 0.149555 10.6689 1.29989 12.9017C1.97637 14.2138 2.98542 14.9413 3.95285 15.5063C7.54011 17.5997 11.3003 18.3015 14.7767 17.5275C15.7579 17.3088 16.7553 16.945 17.4331 15.9212C19.2222 13.2181 18.459 5.10396 15.8276 2.6097C12.1828 -0.846658 6.55857 -0.154929 3.12861 1.21376Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CurvySubstrate;
