import React from 'react';
import { PoolIcon, ProtecIcon, StarIcon, WaveIcon } from './icons';
import { HeroBottomBarVariant } from '@/types/heroBottomBar.type';
import FemaleUserIcon from './icons/FemaleUserIcon';

type Props = {
  variant?: HeroBottomBarVariant;
};

const HeroBottomBar: React.FC<Props> = ({ variant }) => {
  return (
    <>
      <section className='w-full  flex justify-center items-center relative mt-[60px] h-[131px] bg-[var(--color-yellow)]'>
        {/* Top Wave */}
        <div className=' w-full absolute -top-[40px] right-0 h-[54px] z-10 '>
          <WaveIcon />
        </div>
        {/* Bottom Wave */}
        <div className=' w-full absolute -bottom-[40px] right-0 h-[54px] z-10  rotate-180'>
          <WaveIcon />
        </div>
        <div className='flex justify-center gap-24 items-center'>
          <div className='flex gap-5'>
            <div className='h-[100px] w-[100px]'>
              <StarIcon />
            </div>
            <div className='flex text-[24px] font-bold flex-col justify-center items-start'>
              <p className=''>Thousands of</p>
              <p>5-star reviews</p>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='h-[100px] w-[100px]'>
              <PoolIcon />
            </div>
            {variant === 'homepage' && (
              <div className='flex text-[24px] font-bold flex-col justify-center items-start'>
                <p className=''>Trusted with over 200k</p>
                <p>swimmers since 2009 </p>
              </div>
            )}
            {variant === 'citypage' && (
              <div className='flex text-[24px] font-bold flex-col justify-center items-start'>
                <span className='text-5xl font-bold'>100k+</span>
                <p>swimmers</p>
              </div>
            )} 
          </div>
          <div className='flex gap-5'>
            {variant === 'homepage' && (
              <>
                <div className='h-[100px] w-[100px]'>
                  <ProtecIcon />
                </div>
                <div className='flex text-[24px] font-bold flex-col justify-center items-start'>
                  <p className=''>Vetted, background checked </p>
                  <p>& insured instructors</p>
                </div>
              </>
            )}
            {variant === 'citypage' && (
              <>
                <div className='h-[100px] w-[100px]'>
                  <FemaleUserIcon />
                </div>
                <div className='flex text-[24px] font-bold flex-col justify-center items-start'>
                  <span className='text-5xl font-bold'>2000+</span>
                  <p>Sunsational Swim instructors</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBottomBar;
