'use client';

import { useState } from 'react';
import { logoMobile, mainLogo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
import Button from './Button';
import { HamburgerIcon, WaveWithBorder } from './icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className='relative  z-30'>
      {/* Background wave SVG */}
      <div className='absolute inset-0 z-0 pointer-events-none'></div>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden flex justify-between items-center gap-4 relative px-4 py-2 font-bold text-[#110241] z-10'>
        <Link href='#'>
          <Image src={logoMobile} alt='Sunsational Swim School' className='h-[90px] w-auto' />
        </Link>
        <Button link={'/registration'} text='Book Now' shadowColor='var(--color-orange)' />
        <button className='text-[#110241] h-[40px] w-[40px] focus:outline-none' onClick={toggleMenu}>
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col gap-4 relative text-[#110241] font-bold text-xl px-[16%] py-2 space-y-2 font-[Grandstander]'>
          <Link href='/' className='block'>
            Home
          </Link>
          <Link href='#' className='block'>
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
      <div className='hidden md:flex justify-between items-center flex-wrap relative z-10 max-w-[1440px] mx-auto text-[#110241] sm:text-xl font-bold pt-[1rem] px-[2rem] pb-[2rem] flex-column flex-column lg:flex-row lg:gap-6'>
        <div className='flex gap-16 items-center flex-wrap '>
          <Link href='#'>About</Link>
          <Link href='#'>Swim Lesson Programs</Link>
          <Link href='#'>Pricing</Link>
        </div>

        <div className='flex justify-center'>
          <Link href='#'>
            <Image src={mainLogo} alt='sunsational swim school logo' />
          </Link>
        </div>

        <Link href='#'>Support</Link>
        <div className='flex gap-16 items-center flex-wrap order-3'>
          <div className='flex gap-6 items-center'>
            <Link href='tel:18887882140' className='text-red-600'>
              📞 1-888-788-2140hh
            </Link>
            <Button link={'/registration'} text='Book Now' shadowColor='var(--color-orange)' />
          </div>
        </div>
      </div>
      <div className='w-full  h-[20px] md:h-[54px] absolute right-0 bottom-[2%]  md:-bottom-[7%] rotate-180 z-[99] '>
        <WaveWithBorder />
      </div>
    </nav>
  );
};

export default Navbar;
