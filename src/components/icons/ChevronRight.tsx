import React from 'react';
import { Property } from 'csstype';

type Props = {
  color?: Property.Color;
};

const ChevronRight: React.FC<Props> = ({ color = '#C7EAF3' }) => {
  return (
    <svg
      width='17'
      height='18'
      viewBox='0 0 17 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.66187 2.2984C4.68892 2.2984 4.10837 3.40119 4.64792 4.22474L9.85076 9.00003L4.64865 13.7753C4.1091 14.5989 4.68892 15.7017 5.66187 15.7017C6.06891 15.7017 6.4496 15.4947 6.67582 15.1499L12.2374 9.82582C12.5654 9.32543 12.5654 8.67388 12.2374 8.17349L6.67582 2.84942C6.4496 2.5054 6.06964 2.2984 5.66187 2.2984Z'
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
