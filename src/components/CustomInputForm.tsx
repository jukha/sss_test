type Props = {
  outlineColor?: string;
  placeholder: string;
  submitText: string;
};

const CustomInputForm: React.FC<Props> = (props: Props) => {
  return (
    <div className='flex z-10 items-center max-w-[450px]'>
      <svg
        className='w-full h-full'
        viewBox='0 0 458 66'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
      >
        <path
          d='M1.51473 32.9527C1.52941 39.1573 4.7448 45.1719 10.7509 50.8703L11.3414 51.4212L11.3434 51.4232L11.8578 51.8843C14.4839 54.1906 17.9898 56.48 25.5168 58.182L26.7774 58.4538C40.06 61.1897 61.207 61.6489 80.1399 61.9061L100.312 62.1724C201.128 63.469 302.111 64.2365 403.117 64.4749L403.133 64.4788L403.288 64.4788C412.323 64.5012 421.834 64.5023 430.079 63.7167L430.08 63.7167C438.813 62.8836 445.135 59.9164 449.409 55.6264C453.678 51.3406 455.781 45.8592 456.308 40.223C456.834 34.5979 455.799 28.7737 453.752 23.6803C451.709 18.598 448.613 14.1332 444.91 11.3077C444.262 10.8126 443.333 10.4342 442.307 10.1185C441.244 9.79126 439.925 9.48726 438.384 9.20046C435.3 8.62641 431.216 8.10379 426.291 7.62583C416.435 6.66929 403.093 5.88057 387.392 5.23128C355.983 3.93244 315.044 3.18718 273.464 2.77497C190.301 1.95053 104.518 2.45885 87.1559 2.54768L80.1168 2.5926C63.5736 2.72832 46.4415 3.15013 33.7737 5.24385L32.5597 5.4525C20.2476 7.64699 14.9536 11.0833 11.2642 14.4808L10.676 15.0314C4.68878 20.7301 1.50012 26.7465 1.51473 32.9527Z'
          fill='white'
          stroke={props.outlineColor}
          strokeWidth='3'
        />
        <foreignObject width={'100%'} className='px-4' height={'100%'}>
          <div className=' z-10 flex justify-between items-center w-full h-full'>
            <input
              type='text'
              placeholder='Your Zip Code'
              className='w-[60%] border-none font-bold focus:outline-none text-2xl text-darkBlue px-2 py-1 bg-white placeholder-darkBlue'
            />
            <div className='relative flex items-center justify-center h-full'>
              <svg
                width='100%'
                height='80%'
                viewBox='0 0 115 47'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100.685 46.8666C73.7299 46.6828 46.782 46.0236 19.8843 44.8912C14.982 44.6844 9.55058 44.3057 6.30344 41.9968C4.36047 40.6146 3.55598 38.7572 2.93118 36.958C-0.172847 27.9818 -0.178145 18.5935 2.92154 9.61676C3.81145 7.0389 5.12077 4.32724 8.35993 2.63842C11.9453 0.771133 16.9909 0.600656 21.6504 0.52382C30.3336 0.378814 109.615 0.892043 113.048 9.14576C116.482 17.3995 115.816 43.7239 107.351 46.2702C105.311 46.8835 102.951 46.8851 100.688 46.8688L100.685 46.8666Z'
                  fill='#FDD733'
                />
              </svg>
              <button className='absolute font-primary text-2xl font-medium cursor-pointer'>
                Search
              </button>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default CustomInputForm;
