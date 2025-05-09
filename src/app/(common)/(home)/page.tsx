import Hero from '@/components/Hero';
import { groupedWomen, homeHero } from '@/assets';
import ArrowButton from '@/components/ArrowButton';
import CardVariant1 from '@/components/CardVariant1';

import Image from 'next/image';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import {
  heroSection,
  howItWorksSection,
  whyChooseSunsationalSection,
} from './data';
import { Bubbles } from '@/components/decoration';
import CardHorizontal from '@/components/CardHorizontal';
import IconFrame from '@/components/icons/IconFrame';

/**
 * Home Page Component
 * Main landing page for the Sunsational Swimming School website
 */
export default function Home() {
  return (
    <div>
      <main className='flex flex-col '>
        {/* Hero Section - Main banner with call to action */}
        <Hero bgImage={homeHero}>
          <Typography
            variant='h1'
            className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
          >
            {heroSection.title}
            <span className='text-orange relative inline-flex justify-center items-center lg:p-4'>
              &nbsp;{heroSection.titleHighlight}
              {/* White highlight bubble behind the text */}
              <span className='bg-white w-full h-full left-1 -z-10 rounded-full opacity-90 inline-block -rotate-[0.5deg] absolute'></span>
            </span>
          </Typography>
          <Typography
            variant='body1'
            className='text-white  max-w-[457px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
          >
            {heroSection.desc}
          </Typography>
          <ArrowButton
            text={'Book Swimming Lessons'}
            iconBackgroundColor='var(--color-darkBlue)'
          />
        </Hero>

        {/* How It Works Section - Step-by-step process */}
        <Container>
          <section className='flex flex-col gap-16 py-[100px] justify-start items-center'>
            <div className='flex flex-col gap-2'>
              <Typography variant='h2' className='max-w-[837px] text-center'>
                {howItWorksSection.title}
              </Typography>
              <Typography
                variant='body1'
                className='font-bold max-w-[762px]  text-center leading-[125%]'
              >
                {howItWorksSection.desc}
              </Typography>
            </div>
            {/* Steps cards container - displays process steps */}
            <div className='flex justify-center gap-[25px] lg:gap-8 flex-wrap items-center'>
              {howItWorksSection.steps.map((el, index) => {
                return (
                  <CardVariant1
                    key={index}
                    title={el.title}
                    description={el.desc}
                    opacity={el.opacity}
                    bgColor={el.bgColor}
                    icon={el.image}
                    direction={el.direction}
                  />
                );
              })}
            </div>
          </section>
        </Container>

        {/* Why Choose Us Section - Features and benefits */}
        <Container>
          <section className='relative flex flex-col md:gap-20 py-[100px] justify-start items-center bg-[#ffffffa9]'>
            {/* Decorative bubbles - only visible on large screens */}
            <div className='hidden lg:block lg:absolute top-[-8%] right-0 scale-x-[-1] '>
              <Bubbles />
            </div>
            <div className='hidden lg:block lg:absolute bottom-0 left-0  '>
              <Bubbles />
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='h2' className=' max-w-[837px] text-center'>
                {whyChooseSunsationalSection.title}
              </Typography>
            </div>
            {/* Two column layout for desktop, stacked for mobile */}
            <div className='flex flex-col lg:flex-row  mx-auto'>
              {/* Left side - Image */}
              <div className='w-full mx-auto sm:max-w-[70%] lg:w-1/2  '>
                <div className='relative mb-24 lg:mb-0'>
                  <Image src={groupedWomen} alt='Image' className='mx-auto lg:max-w-[70%] lg:pb-32' />
                  <div className='absolute w-full h-auto  md:w-[444px] md:h-[250px] -bottom-[15%] md:bottom-0  md:right-10 xl:right-20'>
                    <CardHorizontal
                      name='Sarah'
                      location='Arizona'
                      description='“I am amazed with their progress after 12 lessons and it was one of the best investments I have ever made.  I am now confident not only that my son can swim but if he were to fall into the water, I trust that he would come back up and make it out safely! That is a priceless feeling! “'
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Feature list */}
              <div className='w-full lg:w-1/2 p-8'>
                <ul className='w-full flex flex-col justify-center gap-8'>
                  {whyChooseSunsationalSection.steps.map((el, index) => {
                    return (
                      <li
                        key={index}
                        className='w-full flex flex-col md:flex-row items-start gap-4 lg:gap-[45px] '
                      >
                        <div className='max-h-[64px] relative max-w-[64px]'>
                          <div className='w-full h-full relative z-1'>
                            {el.image}
                          </div>

                          <div
                            style={{ rotate: el.rotateDeg }}
                            className='absolute h-full top-0  left-0 w-full'
                          >
                            <IconFrame color={el.iconFrameColor} />
                          </div>
                        </div>
                        <div>
                          <Typography
                            variant='h4'
                            className='font-bold  text-[#033D9A] leading-[120%] font-primary'
                          >
                            {el.title}
                            <br />
                            {el.titleHighlight}
                          </Typography>
                          <Typography
                            variant='custom'
                            className='font-medium font-secondary text-darkBlue text-xl leading-[120%]'
                          >
                            {el.desc}
                          </Typography>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>{' '}
            {/* to be added later 
            <ArrowButton
              width='300.58px'
              height='83.41px'
              text='Get Started'
              iconColor='#000'
              iconBackgroundColor='#FEDF46'
              buttonColor='black'
            /> */}
          </section>
        </Container>
      </main>
    </div>
  );
}
