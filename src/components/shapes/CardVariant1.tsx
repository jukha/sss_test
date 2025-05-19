import React from 'react';
import Typography from '../semantics/Typography';

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
      <section
        className={`flex flex-col relative  px-12 md:px-14 justify-start items-center z-10 gap-5  ${
          props.iconWidth ? 'py-[1em]' : 'py-[2em]'
        } `}
      >
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
          <Typography
            variant='h4'
            className='font-bold  leading-[120%]  text-center font-primary text-offBlack'
          >
            {props.title}
          </Typography>
        </div>
        {/* Description */}
        <div>
          <Typography
            variant='body1'
            className='font-bold  leading-[125%] text-center'
          >
            {props.description}
          </Typography>
        </div>
      </section>
    );
  };

  return (
    <div
      style={{
        backgroundColor: props.bgColor,
      }}
      className={`flex flex-col max-w-[337px] md:max-w-[399px] min-h-[400px] md:min-h-[515px] relative ${
        props.direction === 'lt' ? 'home-card-left' : 'home-card-right'
      }`}
    >
      <CardContent />
    </div>
  );
};

export default CardVariant1;
