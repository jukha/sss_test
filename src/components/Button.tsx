import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  color?: string;
  shadowColor?: string;
  link?: string;
  width?: string;
  height?: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <div
      style={{ height: props.height, width: props.width }}
      className={`relative inline-flex items-center justify-center ${
        props.height ? '' : 'py-4'
      } ${props.width ? '' : 'px-7'}    rounded-full overflow-hidden`}
    >
      
      <svg
        className='absolute inset-0 w-full h-full -z-10 pointer-events-none'
        viewBox='0 0 170 75'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
      >
        <rect
          x='2.46777'
          y='8'
          className='w-full h-auto'
          rx='26.7152'
          fill='#FDD733'
        />
        {props.shadowColor && (
          <path
            d='M147.949 9.0772C108.368 8.71383 68.7869 9.00638 29.2689 9.95272C22.0665 10.1256 14.0834 10.5237 9.26523 13.634C6.3822 15.4959 5.16037 18.0393 4.20364 20.5066C-0.550258 32.8161 -0.763381 45.7648 3.59145 58.2169C4.8417 61.7928 6.70483 65.5628 11.4239 67.9662C16.6473 70.6238 24.0519 70.9744 30.8916 71.187C43.6378 71.5857 160.055 72.6922 165.278 61.3868C170.5 50.0814 170.098 13.758 157.724 10.0523C154.742 9.15975 151.277 9.10358 147.954 9.0742L147.949 9.0772Z'
            fill='#F86008'
          />
        )}

        <path
          d='M151.949 3.0772C112.368 2.71383 72.7869 3.00638 33.2689 3.95272C26.0665 4.12564 18.0834 4.5237 13.2652 7.63396C10.3822 9.49593 9.16037 12.0393 8.20364 14.5066C3.44974 26.8161 3.23662 39.7648 7.59145 52.2169C8.8417 55.7928 10.7048 59.5628 15.4239 61.9662C20.6473 64.6238 28.0519 64.9744 34.8916 65.187C47.6378 65.5857 164.055 66.6922 169.278 55.3868C174.5 44.0814 174.098 7.75802 161.724 4.0523C158.742 3.15975 155.277 3.10358 151.954 3.0742L151.949 3.0772Z'
          fill={props.color ? props.color : '#FDD733'}
        />
      </svg>
      <div className='flex gap-6 justify-center items-center w-full h-full'>
        <Link
          href={props.link?? '#'}
          className='relative z-10  text-2xl font-bold text-darkBlue'
        >
          {props.text}
        </Link>
      </div>
    </div>
  );
};

export default Button;
