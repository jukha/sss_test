import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import HeroBottomBar from './HeroBottomBar';
import Container from './Container';
import { StampIcon, WaveWithBorder } from './icons';
import { HeroBottomBarVariant } from '@/types/heroBottomBar.type';

type Props = {
  // content?: HeroType;
  children: ReactNode;
  bgImage: StaticImageData;
  hasBottomBar?: boolean;
  hasSticker?: boolean;
  bottomBarVariant?: HeroBottomBarVariant;
};

const Hero: React.FC<Props> = ({
  children,
  bgImage,
  hasBottomBar = true,
  hasSticker = true,
  bottomBarVariant = 'homepage',
}) => {
  return (
    <section className='min-h-[768px] bg-no-repeat relative -translate-y-5'>
      <Image
        src={bgImage}
        quality={80}
        width={1000}
        alt=''
        className='absolute top-0 right-0 h-full object-cover w-[80%] -z-20'
      />

      <Container>
        {/* Gradient Left*/}
        <div className='absolute bottom-0 top-0 left-0 w-1/2 bg-[linear-gradient(269.54deg,_rgba(27,129,188,0)_0%,_#1B81BC_34%)] -z-10'></div>
        <div className='max-w-[1440px] py-[200px] mx-auto'>{children}</div>
        {/* <StampSticker /> */}
        {hasSticker && (
          <div className='absolute bottom-40 right-4'>
            <StampIcon />
          </div>
        )}
        {/* Bottom Wavy pattern */}
      </Container>
      <div className='absolute w-full -bottom-1'>
        <WaveWithBorder />
      </div>
      {hasBottomBar && <HeroBottomBar variant={bottomBarVariant} />}
    </section>
  );
};

export default Hero;
