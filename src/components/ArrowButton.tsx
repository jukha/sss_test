import Link from 'next/link';
import React from 'react';

interface Props {
  height?: string;
  width?: string;
  link?: string;
  iconColor?: string;
  iconBackgroundColor?: string;
  text: string;
  buttonColor?: string;
}

const ArrowButton = (props: Props) => {
  return (
    <div
      style={{ height: props.height, width: props.width }}
      className={`relative inline-flex items-center justify-center ${
        props.height ? '' : 'py-4'
      } ${props.width ? '' : 'px-7'}    rounded-full overflow-hidden`}
    >
      <svg
        className='absolute inset-0 w-full h-full -z-10 pointer-events-none'
        width='400'
        viewBox='0 0 399 76'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* shadow */}
        <path
          d='M49.3239 75.8221C142.281 75.5194 235.214 74.4837 327.975 72.7185C344.882 72.3963 363.613 71.8084 374.814 68.2463C381.516 66.1138 384.292 63.2495 386.449 60.475C397.163 46.6333 397.191 32.1586 386.511 18.3205C383.445 14.3467 378.933 10.1668 367.764 7.56532C355.401 4.68891 338.001 4.42969 321.933 4.31457C291.988 4.09722 18.5771 4.94535 6.72644 17.6733C-5.12422 30.4013 -2.85561 70.9876 26.3339 74.9074C33.3701 75.8515 41.5076 75.8522 49.3124 75.8256L49.3239 75.8221Z'
          fill='#F86008'
        />
        {/* buttonbuttonColor */}
        <path
          d='M53.8093 71.8221C146.766 71.5194 239.7 70.4837 332.461 68.7185C349.367 68.3963 368.098 67.8084 379.299 64.2463C386.001 62.1138 388.777 59.2495 390.934 56.475C401.648 42.6333 401.677 28.1586 390.997 14.3205C387.931 10.3467 383.418 6.1668 372.249 3.56532C359.887 0.688913 342.487 0.429691 326.418 0.314566C296.473 0.0972223 23.0625 0.94535 11.2118 13.6733C-0.638865 26.4013 1.62974 66.9876 30.8192 70.9074C37.8554 71.8515 45.993 71.8522 53.7977 71.8256L53.8093 71.8221Z'
          fill={props.buttonColor ? props.buttonColor : '#FDD733'}
        />
      </svg>

      <div className='flex gap-6 justify-center items-center w-full h-full'>
        <Link
          href={props.link ?? '/'}
          className='relative z-10  text-2xl font-bold text-darkBlue'
        >
          {props.text}
        </Link>

        <div className='relative flex justify-center items-center'>
          <span className='absolute'>
            {/* arrow icon */}
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.6353 24.7181L9.90202 21.9222L17.3041 14.7482L0.226854 14.481L0.29015 10.436L17.3674 10.7033L10.1932 3.31313L13.0129 0.592137L24.8871 12.8439L12.6353 24.7181Z'
                fill={props.iconColor? props.iconColor:'white'}
              />
            </svg>
          </span>
          {/* icon background */}
          <svg
            width='60'
            height='52'
            viewBox='0 0 60 52'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M58.0439 36.4632C58.8766 34.8233 59.4762 26.9039 59.1174 24.6853C58.719 22.2218 57.7175 15.0413 56.0434 12.4633C52.103 6.39236 46.2609 3.93779 39.4585 1.26568C35.4601 -0.30355 31.8573 0.0437943 28.6574 0.666374C16.7956 2.97872 9.15822 6.59524 3.04492 14.9628C1.31998 17.3253 0.631164 29.4231 1.11561 32.9625C2.39548 42.3074 16.9221 51.2625 27.4642 51.6619C42.0691 52.2185 53.1742 46.0418 58.0439 36.4632Z'
              fill={props.iconBackgroundColor}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArrowButton;
