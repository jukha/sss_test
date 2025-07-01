import React, { ReactNode } from 'react';
import Typography from '../semantics/Typography';

interface Props {
  name: string;
  location: string;
  description?: string;
}

const CardHorizontal = (props: Props) => {
  return (
    <Background>
      <foreignObject height={'100%'} width={'100%'}>
        <section
          className={`flex flex-col relative  justify-start items-center z-10 gap-4 p-[2em] py-[3.5em] lg:py-[3em] `}
        >
          {/* Description */}
          <div>
            <Typography
              variant="custom"
              className="font-medium font-secondary text-sm md:text-base md:w-[377px] leading-[120%] text-start"
            >
              {props.description}
            </Typography>
          </div>
          <div className="flex gap-3 w-full justify-start item-center">
            <div className="w-10 h-10 bg-[#F86008] rounded-full"></div>
            <div className="flex flex-col">
              <Typography
                variant="custom"
                className="text-[14px] md:text-[19px] font-bold font-primary leading-[129%]"
              >
                {props.name}
              </Typography>
              <Typography
                variant="custom"
                className="font-medium font-secondary text-[14px]"
              >
                {props.location}
              </Typography>
            </div>
          </div>
        </section>
      </foreignObject>
    </Background>
  )
};

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 444 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d='M23.0236 24.5053C55.0352 17.4811 87.1157 12.8442 119.214 10.6081L119.218 10.5967C121.91 10.405 338.539 -1.6799 341.4 1.28568C343.868 1.12604 346.338 1.08494 348.796 1.05374C371.982 0.769629 395.166 0.981689 418.348 1.67864C423.898 1.8406 429.911 2.45674 434.217 11.7131C438.107 20.085 439.719 33.7162 440.828 46.6919C444.693 91.8766 444.868 139.29 441.345 184.774C440.636 193.891 439.713 203.31 437.426 210.385C433.604 222.203 427.142 224.379 421.308 225.661C392.923 231.889 364.485 236.241 336.028 238.706C313.707 246.508 118.018 248.844 96.9866 249.095C96.3284 249.103 95.8413 249.109 95.5359 249.113C72.3499 249.397 49.1659 249.185 25.984 248.488C20.4334 248.326 14.4211 247.71 10.115 238.453C6.22479 230.081 4.61308 216.45 3.50345 203.474C-0.361492 158.29 -0.536549 110.876 2.98675 65.3928C3.69609 56.2757 4.61831 46.8565 6.90556 39.7816C10.7281 27.9634 17.1892 25.7872 23.0236 24.5053Z'
        fill='#FEDF46'
      />
      {children}
    </svg>
  );
};

export default CardHorizontal;
