import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import HeroBottomBar from './HeroBottomBar';
import Container from './Container';
import { StampIcon, WaveWithBorder } from '../icons';
import clsx from 'clsx';

type HeroBottomBarVariant = 'homepage' | 'citypage';

type Props = {
  // content?: HeroType;
  children: ReactNode;
  desktopBgImage: StaticImageData;
  hasBottomBar?: boolean;
  hasSticker?: boolean;
  heroBottomVariant?: HeroBottomBarVariant;
};

const Hero: React.FC<Props> = ({
  children,
  desktopBgImage,
  hasBottomBar = true,
  hasSticker = true,
  heroBottomVariant
}) => {
  return (
    <section className='pt-[42px] lg:pt-0  bg-no-repeat relative -translate-y-5'>
      {/* Desktop only Gradient */}
      <div
        className='hidden lg:block -translate-y-[0.75%] opacity-70 absolute top-0 w-full h-[100px] lg:bottom-0 lg:top-0 lg:left-0  bg-[linear-gradient(360deg,rgba(27,129,188,0)_0%,#1B81BC_95%)]
          -z-10'
      ></div>
      {/* Gradient */}
      <div
        className='absolute top-0 w-full h-[70%] lg:bottom-0 lg:top-0 lg:left-0 lg:w-1/2 lg:h-full bg-[linear-gradient(360deg,rgba(27,129,188,0)_0%,#1B81BC_45%)]
         lg:bg-[linear-gradient(269.54deg,rgba(27,129,188,0)_0%,#1B81BC_34%)] -z-10'
      ></div>
      <Container className='lg:relative max-lg:bg-[#1b81bc] max-lg:shadow-[0px_0px_15px_rgba(27,_129,_188,_0.7)] z-10'>
        <div className='max-w-[1440px] lg:py-[200px] mx-auto'>{children}</div>
        {/* <StampSticker /> */}
        {hasSticker && (
          <div className='absolute bottom-28 lg:bottom-40 lg:h-[200px] lg:w-[200px] right-1 lg:right-4 h-[116px] w-[116px]'>
            <StampIcon />
          </div>
        )}
        {/* Bottom Wavy pattern */}
      </Container>
      <div className='absolute -bottom-8 w-full'>
        {hasBottomBar && <HeroBottomBar variant={heroBottomVariant} />}
      </div>
      {/* desktop image */}
      <div className='relative hidden lg:block z-[-100] lg:absolute lg:top-0 lg:right-0 lg:object-cover w-full h-full lg:w-[75%] lg:-z-20'>
        <Image
          src={desktopBgImage}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
          fill
          alt=''
          className='relative z-[-100] lg:absolute lg:top-0 lg:right-0 lg:object-cover w-full h-full lg:w-[75%] lg:-z-20'
          priority={true}
        />
      </div>
      {!hasBottomBar && (
        <div className='w-full hidden lg:block absolute h-[54px] translate-y-1/3 bottom-0 z-10'>
          <WaveWithBorder />
        </div>
      )}

      <div
        className={clsx(
          'relative lg:hidden z-[-100]',
          hasBottomBar ? '-translate-y-24' : '-translate-y-10'
        )}
      >
        {!hasBottomBar && (
          <div className='w-full absolute h-[54px] -bottom-[26px] z-10'>
            <WaveWithBorder />
          </div>
        )}

       {/* mobile image */}
        <div className='relative'>
          <div
            className='absolute top-0 w-full h-[50%] lg:bottom-0 lg:top-0 lg:left-0 lg:w-1/2 lg:h-full bg-[linear-gradient(360deg,rgba(27,129,188,0)_0%,#1B81BC_45%)]
            lg:bg-[linear-gradient(269.54deg,rgba(27,129,188,0)_0%,#1B81BC_34%)] z-[10]'
          ></div>
          <Image
            src={desktopBgImage}
            quality={80}
            width={1000}
            alt=''
            className='relative lg:hidden lg:translate-y-0 z-[-100]'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;