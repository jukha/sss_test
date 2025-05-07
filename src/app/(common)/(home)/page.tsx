import Hero from '@/components/Hero';
import { homeHero } from '@/assets';
import ArrowButton from '@/components/ArrowButton';
import CardVariant1 from '@/components/CardVariant1';
import GroupedWomen from '@/assets/images/grouped.svg';
import Image from 'next/image';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import { heroSection, howItWorksSection, whyChooseSunsationalSection } from './data';
import { Bubbles } from '@/components/decoration';

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
          <Typography variant='h1' className='max-w-[690px] mb-8'>
            {heroSection.title}
            <span className='text-orange relative inline-flex justify-center items-center'>
              &nbsp;{heroSection.titleHighlight}
              {/* White highlight bubble behind the text */}
              <span className='bg-white w-[300px] lg:w-[576px] h-[120px] left-1 -z-10 rounded-full opacity-90 inline-block -rotate-[0.5deg] absolute'></span>
            </span>
          </Typography>
          <Typography
            variant='body1'
            className='text-white  max-w-[457px] leading-[125%] mb-[26px] font-secondary font-medium'
          >
            {heroSection.desc}
          </Typography>
          <ArrowButton text={'Book Swimming Lessons'} iconBackgroundColor='var(--color-darkBlue)' />
        </Hero>

        {/* How It Works Section - Step-by-step process */}
        <Container>
          <section className='flex flex-col gap-20 py-[100px] justify-start items-center'>
            <div className='flex flex-col gap-2'>
              <Typography variant='h2' className='max-w-[837px] text-center'>
                {howItWorksSection.title}
              </Typography>
              <Typography variant='body1' className='font-bold max-w-[762px]  text-center leading-[125%]'>
                {howItWorksSection.desc}
              </Typography>
            </div>
            {/* Steps cards container - displays process steps */}
            <div className='flex justify-center gap-8 flex-wrap items-center'>
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
          <section className='relative flex flex-col gap-20 py-[100px] justify-start items-center bg-[#ffffffa9]'>
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
              <div className='w-full lg:w-1/2  relative'>
                <Image src={GroupedWomen} fill alt='Image' />
              </div>
              {/* Right side - Feature list */}
              <div className='w-full lg:w-1/2'>
                <ul className='w-full flex flex-col justify-center gap-16'>
                  {whyChooseSunsationalSection.steps.map((el, index) => {
                    return (
                      <li key={index} className='w-full flex items-start gap-[45px] '>
                        <div>{el.image}</div>
                        <div>
                          <Typography variant='h4' className='font-bold  text-[#033D9A] leading-[120%] font-primary'>
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
