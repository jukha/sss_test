import React from 'react';


interface Props {
  direction: string;
  icon?: React.ReactElement;
  title?: string;
  bgColor: string;
  description?: string;
  iconHeight?: string;
  iconWidth?: string;
  opacity?: number;
}

const CardVariant1 = (props: Props) => {
  const CardContent = () => {
    return (
      <foreignObject height={'100%'} width={'100%'}>
        <section className={`flex flex-col relative  justify-start items-center z-10 gap-5  ${props.iconWidth? 'py-[1em]':'py-[2em]'}`}>
          {/* Icon */}
          <div
            style={{
              height: props.iconHeight ?? '100px',
              width: props.iconWidth ?? '100px',
            }}
          >
            {props.icon}
          </div>
          {/* Title */}
          <div>
            <p className='text-[32px] text-darkBlue text-center max-w-[290px] leading-[120%] font-[Grandstander] font-bold'>
              {props.title}
            </p>
          </div>
          {/* Description */}
          <div>
            <p className='text-[24px] text-center max-w-[301px] leading-[125%]  font-bold'>
              {props.description}
            </p>
          </div>
        </section>
      </foreignObject>
    );
  };

  const LeftTiltCard = () => {
    return (
      <svg
        width='394'
        height='516'
        viewBox='0 0 394 516'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className=''
      >
        <path
          opacity={props.opacity ? props.opacity : 1}
          d='M117.246 2.95776C119.597 2.78968 308.477 -3.61564 310.671 2.96462C312.825 2.84467 314.97 2.9754 317.105 3.12857C337.232 4.59461 357.316 7.11797 377.357 10.6749C382.156 11.5161 387.317 13.3665 390.269 33.4817C392.936 51.6748 393.183 80.8754 393.051 108.634C392.59 205.295 388.741 306.38 381.849 403.017C380.465 422.388 378.871 442.383 376.291 457.259C371.979 482.11 366.194 486.171 361.027 488.382C335.892 499.122 310.868 505.853 285.987 508.565C265.368 523.664 85.3282 509.892 76.5917 509.265C56.4648 507.799 36.3816 505.275 16.3411 501.719C11.5421 500.877 6.3813 499.027 3.42871 478.911C0.762044 460.718 0.514664 431.517 0.647253 403.759C1.10815 307.097 4.95564 206.014 11.8476 109.376C13.2317 90.0057 14.8261 70.0104 17.406 55.134C21.7173 30.2837 24.9627 13.5476 30.1294 11.3365C58.4773 -0.776256 89.2239 4.87979 117.243 2.98118L117.246 2.95776Z'
          fill={props.bgColor ? props.bgColor : '#FEDF46'}
        />
        <CardContent />
      </svg>
    );
  };

  const RightTiltCard = () => {
    return (
      <svg
        width='389'
        height='517'
        viewBox='0 0 389 517'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity={props.opacity ? props.opacity : 1}
          d='M277.27 5.49011C274.921 5.29264 86.1423 -3.47523 83.86 3.07643C81.7073 2.92953 79.5607 3.0334 77.4243 3.15984C57.2805 4.37389 37.1667 6.64573 17.083 9.95158C12.274 10.7326 7.09025 12.519 3.88621 32.596C0.992065 50.7544 0.379306 79.9495 0.164501 107.707C-0.584285 204.367 1.99892 305.491 7.68096 402.207C8.82261 421.594 10.1666 441.608 12.5602 456.515C16.5602 481.418 22.2946 485.552 27.4332 487.827C52.432 498.881 77.3699 505.923 102.214 508.946C122.642 524.302 302.841 512.785 311.585 512.267C331.729 511.053 351.842 508.781 371.925 505.476C376.734 504.694 381.918 502.908 385.122 482.831C388.016 464.673 388.63 435.478 388.845 407.72C389.594 311.06 387.01 209.936 381.328 113.22C380.187 93.8336 378.843 73.8194 376.449 58.9117C372.449 34.0096 369.413 17.2352 364.275 14.9593C336.081 2.49281 305.266 7.76365 277.273 5.51455L277.27 5.49011Z'
          fill={props.bgColor ? props.bgColor : '#C7EAF3'}
        />
        <CardContent />
      </svg>
    );
  };

  return (
    <div className='flex flex-col  relative'>
      {props.direction == 'rt' && <LeftTiltCard />}
      {props.direction == 'lt' && <RightTiltCard />}
    </div>
  );
};

export default CardVariant1;
