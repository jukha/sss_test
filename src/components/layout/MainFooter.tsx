import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FacebookIcon, InstaIcon, LinkedInIcon } from '@/components/icons';
import { imageSun } from '@/assets';
import CustomInputForm from '../shapes/CustomInputForm';
import Typography from '../semantics/Typography';

const MainFooter = () => {
  return (
    <div className='relative  flex flex-col lg:flex-row justify-center lg:items-start  gap-[74px] bg-[#FFF9E1] p-[3em]'>
      <svg
        className='w-full absolute top-[-2.5%] left-0'
        width='1440'
        height='22'
        viewBox='0 0 1440 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.5'
          d='M51.5 2.8858C7.45268 10.5906 -99.1046 19.6317 -140 22H1576.72C1578.53 22 1580 20.5309 1580 18.7186C1580 17.1418 1578.92 15.795 1577.37 15.5077C1528.06 6.37319 1422.3 -7.76154 1372.93 5.26418C1322.66 18.5265 1196.78 17.9476 1140.13 16.0004C1089.06 8.84292 976.624 -3.32475 935.449 5.26418C894.994 13.7029 773.427 15.9233 731.725 15.9984C730.254 16.001 728.891 15.8982 727.435 15.6855C669.648 7.23901 547.455 -6.21244 503.953 5.26418C459.905 16.8845 305.261 17.2634 233.445 16.0004C186.565 9.21131 95.5473 -4.81899 51.5 2.8858Z'
          fill='#FFF9E1'
        />
      </svg>
      {/* Section Left */}
      <div className='flex flex-col gap-4 lg:gap-10 '>
        {/* Text */}
        <div className='flex flex-col-reverse lg:flex-row items-start  justify-between gap-4'>
          <Typography
            variant='body1'
            className=' font-bold w-full  lg:max-w-[488px] text-offBlack'
          >
            Our swim instructors travel to your home or community pool.
            <span className='text-[var(--color-orange)]'>
              {' '}
              Learn to Swim guaranteed
            </span>
            <br />
            with a Sunsational instructor!
          </Typography>
          <div className='flex items-center justify-around  gap-4 '>
            {/* insta */}
            <span className='h-[31px] w-[31px]'>
              <FacebookIcon />
            </span>
            {/* face */}
            <span className='h-[31px] w-[31px]'>
              <InstaIcon />
            </span>
            {/* linked */}
            <span className='h-[31px] w-[31px]'>
              <LinkedInIcon />
            </span>
          </div>
        </div>
        {/* Divider */}
        <hr className='text-[var(--color-yellow)] md:mb-[24px]' />
        {/*  */}
        <div className='flex gap-10 lg:gap-6  flex-wrap justify-between'>
          {/* SiteMap */}
          <div className='flex flex-col gap-4 min-w-[189px]'>
            <p className='text-[var(--color-orange)] font-primary text-xl font-bold '>
              Sitemap
            </p>
            <ul className='flex flex-col gap-4 font-semibold'>
              <li>
                <Link
                  className='font-secondary text-neutral-900 text-[14px] font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className='flex flex-col -mt-6 md:-mt-0 md:pt-[44px] gap-4 min-w-[189px]'>
            <ul className='flex flex-col gap-4 font-semibold'>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base self-end'
                  href={'#'}
                >
                  Our Swim Instructors
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Nearby Swim Instructors
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Gift Certificates
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Swim Instructor Jobs
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Swim School
                </Link>
              </li>
            </ul>
          </div>
          {/* Swim Lessons */}
          <div className='flex flex-col gap-4 min-w-[189px]'>
            <p className='text-[var(--color-orange)] font-primary text-xl font-bold '>
              Swim Lessons
            </p>
            <ul className='flex flex-col gap-4 font-semibold'>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Private Swim Lessons
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Baby Swim Lessons
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Toddler Swim Lessons
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Teen Swim Lessons
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Adult Swim Lessons
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Special Needs Swim Lessons
                </Link>
              </li>
            </ul>
          </div>
          {/* Swim Lessons */}
          <div className='flex flex-col gap-4 min-w-[189px]'>
            <p className='text-[var(--color-orange)] font-primary text-xl font-bold '>
              Contact Us
            </p>
            <ul className='flex flex-col gap-4 font-semibold'>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className='font-secondary text-[14px] text-neutral-900 font-semiBold leading-[120%] md:text-base'
                  href={'#'}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='hidden flex-col gap-3 lg:flex'>
          <p className='font-medium text-[#808080] text-xs'>
            ©Sunsational Swim School LLC 2025- Private At-Home Swim Lessons of
            America
          </p>
          <p className='font-medium text-[#808080] text-xs'>
            Proudly founded in Los Angeles, Headquartered in San Diego & Serving
            All America Business 1-888-788-2140
          </p>
        </div>
      </div>

      {/* Section Right */}
      <div className='flex flex-col gap-6'>
        <Typography variant='h2' className='max-w-[294px]  md:max-w-[444px]'>
          Bring the swim school to{' '}
          <span className='text-[var(--color-orange)]'>your pool!™</span>
        </Typography>

        <div className='relative z-10'>
          <CustomInputForm
            placeholder='Your Zip Code'
            outlineColor='var(--color-orange)'
            submitText='Submit'
          />
        </div>
        {/* logo */}
        <div className='flex lg:-translate-y-20  items-center justify-start lg:justify-center'>
          <Image src={imageSun} alt='Image Sun' height={300} width={400} />
        </div>
      </div>

      <div className='flex-col  gap-3 lg:hidden'>
        <p className='font-medium text-[#808080] text-xs'>
          ©Sunsational Swim School LLC 2025- Private At-Home Swim Lessons of
          America
        </p>
        <p className='font-medium text-[#808080] text-xs'>
          Proudly founded in Los Angeles, Headquartered in San Diego & Serving
          All America Business 1-888-788-2140
        </p>
      </div>

      <svg
        className='absolute bottom-0 left-0 w-full'
        width='1440'
        height='33'
        viewBox='0 0 1440 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M51.5 3.17395C7.45268 11.6481 -99.1046 33.3952 -140 36H1569.85C1575.46 36 1580 31.4561 1580 25.851C1580 21.0434 1576.66 16.8961 1571.94 15.9737C1520.67 5.94964 1420.56 -8.03101 1372.93 5.78981C1322.66 20.3764 1200.5 30.3934 1140.13 17.598C1089.06 9.72589 976.624 -3.65673 935.449 5.78981C894.274 15.2364 786.43 26.8594 729.576 17.598C672.721 8.33668 548 -6.99083 503.953 5.78981C459.905 18.5705 305.5 21.8318 233.445 17.598C175 14.1639 95.5473 -5.30017 51.5 3.17395Z'
          fill='#C7EAF3'
        />
      </svg>
    </div>
  );
};

export default MainFooter;
