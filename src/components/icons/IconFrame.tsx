import React from 'react';

interface Props {
  color?: string;
}
const IconFrame = (props: Props) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 60 56'
      opacity={100}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M45.9167 0.968779C48.0128 1.35597 50.1715 1.91385 51.9302 3.64995C53.8829 5.57756 55.1101 8.7167 56.2417 11.7601C58.9081 18.9251 61.4849 27.6389 58.9827 34.9289C57.5107 39.2129 54.5816 41.9274 51.6943 44.134C40.9871 52.3107 28.8735 56.4199 16.8257 55.9661C13.4248 55.837 9.88359 55.2833 7.0142 52.5855C-0.560878 45.4621 -2.85699 20.7986 4.42547 11.9349C14.5116 -0.346827 33.6688 -1.28773 45.9167 0.968779Z'
        fill={props.color ? props.color : '#1A8DC6'}
      />
    </svg>
  );
};

export default IconFrame;
