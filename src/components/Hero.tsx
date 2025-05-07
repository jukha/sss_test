import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import HeroBottomBar from './HeroBottomBar';
import Container from './Container';
import { StampIcon } from './icons';
import { homeHeroMobile } from '@/assets';

type Props = {
  // content?: HeroType;
  children: ReactNode;
  bgImage: StaticImageData;
  hasBottomBar?: boolean;
  hasSticker?: boolean;
};

const Hero: React.FC<Props> = ({
  children,
  bgImage,
  hasBottomBar = true,
  hasSticker = true,
}) => {
  return (
    <section className='pt-[42px] lg:pt-0  bg-no-repeat relative -translate-y-5'>
      {/* Gradient */}
      <div
        className='absolute top-0 w-full h-[70%] lg:bottom-0 lg:top-0 lg:left-0 lg:w-1/2 lg:h-full bg-[linear-gradient(360deg,rgba(27,129,188,0)_0%,#1B81BC_34%)]
         lg:bg-[linear-gradient(269.54deg,rgba(27,129,188,0)_0%,#1B81BC_34%)] -z-10'
      ></div>
      <Container>
        <div className='max-w-[1440px] lg:py-[200px] mx-auto'>{children}</div>
        {/* <StampSticker /> */}
        {hasSticker && (
          <div className='absolute bottom-28 lg:bottom-40 lg:h-[200px] lg:w-[200px] right-1 lg:right-4 h-[116px] w-[116px]'>
            <StampIcon />
          </div>
        )}
        {/* Bottom Wavy pattern */}
      </Container>
      <div className='absolute overflow-hidden -bottom-8  w-full'>
        {hasBottomBar && <HeroBottomBar />}
      </div>

      {/* desktop image */}
      <Image
        src={bgImage}
        quality={80}
        width={1000}
        alt=''
        className='relative  hidden lg:block  z-[-100] lg:absolute  lg:top-0 lg:right-0  lg:object-cover  w-full h-full lg:w-[80%] lg:-z-20'
      />
      {/* mobile image */}
      <Image
        src={homeHeroMobile}
        quality={80}
        width={1000}
        alt=''
        className='relative lg:hidden -translate-y-24  lg:translate-y-0   z-[-100]'
      />
    </section>
  );
};

export default Hero;
