'use client';

import { useState } from 'react';
import { logoMobile, mainLogo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import '../../app/globals.css';
import Button from '../kit/buttons/Button';
import { HamburgerIcon, WaveWithBorder } from '../icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className='relative pb-[1em] z-30'>
      {/* Background wave SVG */}
      <div className='md:hidden flex justify-between items-center gap-4 relative px-1 py-2 font-bold text-[#110241] z-10'>
        <Link href='#' className='w-[50%] lg:w-auto'>
          <Image
            src={logoMobile}
            alt='Sunsational Swim School'
            className='h-[90px] w-full'
          />
        </Link>
        <Button
          link={'/registration'}
          text='Book Now'
          buttonClasses='bg-yellow'
          shadowClasses='bg-orange'
        />
        <button
          className='text-[#110241] h-[40px] w-[40px] focus:outline-none'
          onClick={toggleMenu}
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col gap-4 relative text-[#110241] font-bold text-xl px-[16%] py-2 space-y-2 font-[Grandstander]'>
          <Link href='/' className='block'>
            Home
          </Link>
          <Link href='/about-us' className='block'>
            About Us
          </Link>
          <Link href='#' className='block'>
            Swim Lesson Programs
          </Link>
          <Link href='#' className='block'>
            Pricing
          </Link>
          <Link href='#' className='block'>
            Support
          </Link>
          <Link href='#' className='block'>
            Blog
          </Link>
          <Link href='#' className='block'>
            Register
          </Link>
          <Link href='#' className='block'>
            Our Nearby Swim Instructors
          </Link>
          <Link href='#' className='block'>
            Customer Reviews
          </Link>
          <Link href='#' className='block'>
            Gift Certificates
          </Link>
          <Link href='#' className='block'>
            Swim Instructor Jobs
          </Link>
          <Link href='tel:18887882140' className='block text-red-600'>
            📞 1-888-788-2140
          </Link>
        </div>
      )}

      {/* Desktop and tablet view */}
      <div className='hidden  md:flex justify-center gap-12 items-center  relative z-10 max-w-[1440px] mx-auto text-[#110241] sm:text-xl font-bold  px-[2rem]  flex-column flex-column lg:flex-row'>
        <div className='flex   items-center gap-8 justify-center w-full '>
          <Link href='/about-us'>About</Link>
          <Link href='#' className=' '>
            Swim Lesson Programs
          </Link>
          <Link href='/pricing'>Pricing</Link>
        </div>

        <Link href='#'>
          <Image
            width={355}
            src={mainLogo}
            alt='sunsational swim school logo'
            className=''
          />
        </Link>

        <div className='flex w-full  justify-center gap-8  items-center'>
          <Link href='#'>Support</Link>

          <div className='flex flex-col xl:gap-8 xl:justify-between xl:flex-row items-end xl:items-center'>
            <Link
              href='tel:18887882140'
              className='text-red-600 text-base lg:text-[20px]'
            >
              📞 1-888-788-2140hh
            </Link>
            <Button
              link={'/registration'}
              text='Book Now'
              shadow={true}
              buttonClasses='bg-yellow'
              shadowClasses='bg-orange'
            />
          </div>
        </div>
      </div>
      <div className='w-full absolute  h-[54px] bottom-[0%] translate-y-[15%] rotate-180 z-[99] '>
        <WaveWithBorder />
      </div>
    </nav>
  );
};

export default Navbar;
