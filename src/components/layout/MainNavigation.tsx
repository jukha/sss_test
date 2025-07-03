'use client';

import { useState, useRef, useEffect } from 'react';
import { logoMobile, mainLogo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import '../../app/globals.css';
import Button from '../kit/buttons/Button';
import {
  HamburgerIcon,
  WaveWithBorder,
  ChevronDown,
  ChevronUp,
} from '../icons';
import { usePathname } from 'next/navigation';
import { useLocalPhoneNumber } from '@/context/phone.context';

const Navbar = () => {
  const phoneNumber = useLocalPhoneNumber();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLessonsOpen, setIsMobileLessonsOpen] = useState(false);

  const [isLessonsMenuOpen, setIsLessonsMenuOpen] = useState(false);

  const lessonsMenuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileLessonsOpen(false);
    }
  };

  const toggleLessonMenu = () => {
    setIsLessonsMenuOpen(!isLessonsMenuOpen);
  };

  // Close lessons menu when clicking or scrolling outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        lessonsMenuRef.current &&
        !lessonsMenuRef.current.contains(event.target as Node)
      ) {
        setIsLessonsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isLessonsMenuOpen) {
        setIsLessonsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLessonsMenuOpen]);

  // Close menus when navigating to a new page
  useEffect(() => {
    setIsLessonsMenuOpen(false);
    setIsMobileLessonsOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className='relative pb-[1em] z-30'>
      {/* Background wave SVG */}
      <div className='md:hidden flex justify-between items-center gap-4 relative px-1 py-2 font-bold text-[#110241] z-10'>
        <Link href='#' className='w-[50%] lg:w-auto'>
          <Image
            src={logoMobile}
            alt='Sunsational Swim School'
            width={181}
            height={51}
            className=''
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
          onClick={toggleMobileMenu}
          aria-label={
            isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMobileMenuOpen}
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

          {/* Swim Lessons Programs Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileLessonsOpen(!isMobileLessonsOpen)}
              className='whitespace-nowrap flex items-center gap-2 hover:cursor-pointer hover:text-orange'
            >
              Swim Lesson Programs{' '}
              {isMobileLessonsOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isMobileLessonsOpen && (
              <div className='ml-4 mt-4 space-y-4'>
                <Link href='/private-swim-lessons' className='block'>
                  Private Swim Lessons
                </Link>
                <Link href='/baby-swim-lessons' className='block'>
                  Baby Swim Lessons
                </Link>
                <Link href='/toddler-swim-lessons' className='block'>
                  Toddler Swim Lessons
                </Link>
                <Link href='/teen-swim-lessons' className='block'>
                  Teen Swim Lessons
                </Link>
                <Link href='/adult-swim-lessons' className='block'>
                  Adult Swim Lessons
                </Link>
                <Link href='/special-needs-swim-lessons' className='block'>
                  Special Needs Swim Lessons
                </Link>
              </div>
            )}
          </div>

          <Link href='/pricing' className='block'>
            Pricing
          </Link>
          <Link href='/support' className='block'>
            Support
          </Link>
          <Link href='/blog' className='block'>
            Blog
          </Link>
          <Link href='/registration' className='block'>
            Register
          </Link>
          <Link href='/instructors' className='block'>
            Our Nearby Swim Instructors
          </Link>
          <Link href='/customer-reviews' className='block'>
            Customer Reviews
          </Link>
          <Link href='/gift-certificates' className='block'>
            Gift Certificates
          </Link>
          <Link href='/swim-instructor-jobs' className='block'>
            Swim Instructor Jobs
          </Link>
          <Link href={phoneNumber.telLink} className='block text-red-600'>
            📞 {phoneNumber.formatted}
          </Link>
        </div>
      )}

      {/* Desktop and tablet view */}
      <div className='hidden  md:flex justify-center gap-12 items-center  relative max-w-[1440px] mx-auto text-[#110241] sm:text-xl font-bold  px-[2rem]  flex-column flex-column lg:flex-row'>
        <div className='flex   items-center gap-8 justify-center w-full '>
          <Link href='/about-us'>About</Link>

          <div ref={lessonsMenuRef} className='flex flex-col gap-6'>
            <button
              className='whitespace-nowrap flex items-center gap-2 hover:cursor-pointer hover:text-orange'
              onClick={toggleLessonMenu}
            >
              Swim Lessons {isLessonsMenuOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isLessonsMenuOpen && (
              <div
                className='flex flex-col gap-6 absolute z-[100] mt-12 -ml-8 pt-2 px-8 pb-8 bg-white shadow-lg font-primary font-semibold text-xl'
                style={{
                  clipPath: `polygon(70.338% 0.574%,70.338% 0.574%,68.862% 0.531%,65.155% 0.439%,59.776% 0.318%,53.283% 0.193%,46.232% 0.084%,39.183% 0.014%,32.691% 0.006%,27.316% 0.082%,23.615% 0.264%,22.145% 0.575%,22.145% 0.575%,21.984% 0.57%,21.823% 0.567%,21.662% 0.566%,21.502% 0.568%,21.341% 0.571%,21.181% 0.576%,21.021% 0.582%,20.861% 0.59%,20.701% 0.598%,20.541% 0.607%,20.541% 0.607%,19.036% 0.698%,17.531% 0.802%,16.027% 0.918%,14.524% 1.046%,13.02% 1.186%,11.518% 1.339%,10.016% 1.504%,8.514% 1.681%,7.013% 1.87%,5.512% 2.07%,5.512% 2.07%,5.151% 2.129%,4.787% 2.219%,4.426% 2.36%,4.069% 2.574%,3.722% 2.88%,3.387% 3.298%,3.068% 3.849%,2.768% 4.551%,2.493% 5.426%,2.244% 6.494%,2.244% 6.494%,2.049% 7.614%,1.886% 8.848%,1.752% 10.18%,1.644% 11.598%,1.559% 13.086%,1.495% 14.629%,1.448% 16.213%,1.415% 17.825%,1.394% 19.448%,1.382% 21.069%,1.382% 21.069%,1.376% 26.717%,1.42% 32.406%,1.513% 38.126%,1.655% 43.867%,1.845% 49.618%,2.084% 55.368%,2.37% 61.109%,2.703% 66.828%,3.083% 72.516%,3.51% 78.163%,3.51% 78.163%,3.602% 79.293%,3.699% 80.423%,3.801% 81.547%,3.91% 82.658%,4.026% 83.75%,4.152% 84.816%,4.289% 85.848%,4.437% 86.842%,4.598% 87.789%,4.773% 88.683%,4.773% 88.683%,5.091% 90.012%,5.43% 91.12%,5.786% 92.031%,6.158% 92.766%,6.541% 93.348%,6.932% 93.797%,7.327% 94.137%,7.724% 94.39%,8.118% 94.576%,8.506% 94.719%,8.506% 94.719%,10.377% 95.321%,12.247% 95.876%,14.116% 96.384%,15.983% 96.845%,17.849% 97.26%,19.714% 97.628%,21.577% 97.95%,23.439% 98.224%,25.299% 98.452%,27.158% 98.634%,27.158% 98.634%,29.8% 99.352%,34.334% 99.784%,40.266% 99.977%,47.099% 99.981%,54.34% 99.845%,61.493% 99.617%,68.064% 99.347%,73.557% 99.083%,77.477% 98.874%,79.329% 98.769%,79.329% 98.769%,80.834% 98.678%,82.339% 98.574%,83.843% 98.458%,85.347% 98.33%,86.85% 98.19%,88.353% 98.037%,89.855% 97.872%,91.357% 97.696%,92.858% 97.507%,94.358% 97.306%,94.358% 97.306%,94.72% 97.248%,95.083% 97.158%,95.445% 97.016%,95.801% 96.802%,96.149% 96.496%,96.484% 96.078%,96.803% 95.527%,97.102% 94.825%,97.378% 93.95%,97.627% 92.882%,97.627% 92.882%,97.822% 91.762%,97.985% 90.528%,98.119% 89.195%,98.227% 87.778%,98.312% 86.29%,98.376% 84.747%,98.423% 83.163%,98.456% 81.552%,98.477% 79.928%,98.489% 78.307%,98.489% 78.307%,98.495% 72.659%,98.451% 66.97%,98.358% 61.25%,98.216% 55.509%,98.026% 49.758%,97.787% 44.008%,97.501% 38.268%,97.167% 32.548%,96.787% 26.86%,96.36% 21.213%,96.36% 21.213%,96.268% 20.084%,96.172% 18.953%,96.07% 17.829%,95.961% 16.718%,95.844% 15.626%,95.718% 14.561%,95.582% 13.528%,95.434% 12.534%,95.273% 11.587%,95.097% 10.693%,95.097% 10.693%,94.798% 9.296%,94.51% 8%,94.227% 6.814%,93.945% 5.745%,93.661% 4.799%,93.368% 3.986%,93.062% 3.312%,92.74% 2.784%,92.396% 2.411%,92.026% 2.199%,92.026% 2.199%,89.897% 1.592%,87.738% 1.163%,85.557% 0.882%,83.362% 0.72%,81.16% 0.646%,78.961% 0.631%,76.771% 0.647%,74.598% 0.663%,72.452% 0.65%,70.339% 0.578%,70.338% 0.574%)`,
                }}
              >
                <Link
                  href='/private-swim-lessons'
                  className='hover:text-orange'
                >
                  Private Swim Lessons
                </Link>
                <Link href='/baby-swim-lessons' className='hover:text-orange'>
                  Baby Swim Lessons
                </Link>
                <Link
                  href='/toddler-swim-lessons'
                  className='hover:text-orange'
                >
                  Toddler Swim Lessons
                </Link>
                <Link href='/teen-swim-lessons' className='hover:text-orange'>
                  Teen Swim Lessons
                </Link>
                <Link href='/adult-swim-lessons' className='hover:text-orange'>
                  Adult Swim Lessons
                </Link>
                <Link
                  href='/special-needs-swim-lessons'
                  className='hover:text-orange'
                >
                  Special Needs Swim Lessons
                </Link>
              </div>
            )}
          </div>

          <Link href='/pricing'>Pricing</Link>
        </div>

        <Link href='/'>
          <Image
            width={355}
            src={mainLogo}
            alt='sunsational swim school logo'
            className=''
          />
        </Link>

        <div className='flex w-full  justify-center gap-8  items-center'>
          <Link href='/support'>Support</Link>

          <div className='flex flex-col xl:gap-8 xl:justify-between xl:flex-row items-end xl:items-center'>
            <Link
              href={phoneNumber.telLink}
              className='text-red-600 text-base lg:text-[20px]'
            >
              📞 {phoneNumber.formatted}
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
      <div className='w-full absolute  h-[54px] bottom-[0%] translate-y-[15%] rotate-180 z-30'>
        <WaveWithBorder />
      </div>
    </nav>
  );
};

export default Navbar;
