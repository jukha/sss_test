import { groupedWomen } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import CardHorizontal from '@/components/shapes/CardHorizontal';
import Container from '@/components/layout/Container';
import { Bubbles } from '@/components/decoration';
import { ApprovalIcon, PoolIcon, SnorkelIcon, SwimmingPoolIcon } from '@/components/icons';
import IconFrame from '@/components/icons/IconFrame';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const whyChooseSunsationalSection = {
  title: 'Why Choose Sunsational Swim School?',
  steps: [
    {
      image: <SnorkelIcon />,
      title: 'Water Safety,',
      titleHighlight: 'Made Simple',
      iconFrameColor: '#1A8DC6',
      rotateDeg: '',
      desc: 'Drowning is the #1 cause of death for children under 5, but formal swim lessons can reduce that risk by up to 88%. Our lessons focus on teaching lifesaving skills first, giving you peace of mind.',
    },
    {
      image: <PoolIcon />,
      title: 'Lessons at Your Home, ',
      titleHighlight: 'on Your Schedule',
      iconFrameColor: '#00ACB6',
      rotateDeg: '',
      desc: 'No more wasting time driving to lessons—our instructors come to your home or community pool at a time that works for you. Private lessons mean faster progress and less disruption to your routine.',
    },
    {
      image: <SwimmingPoolIcon />,
      title: 'Guaranteed Results, ',
      titleHighlight: 'Fast Progress',
      iconFrameColor: '#FEDF46',
      rotateDeg: '30deg',
      desc: 'We focus on results. Our “Learn to Swim Guarantee” ensures beginner swimmers (ages 3+) will swim to the side of the pool in 12 lessons—or we’ll keep going for free*.',
    },
    {
      image: <ApprovalIcon />,
      title: 'Certified & Experienced',
      titleHighlight: 'Instructors',
      iconFrameColor: '#F86008',
      rotateDeg: '35deg',
      desc: 'All Sunsational instructors are background-checked, CPR-certified, and experienced. They create a fun, supportive learning environment that helps swimmers gain confidence quickly.',
    },
  ],
  cardDesc:
    '“I am amazed with their progress after 12 lessons and it was one of the best investments I have ever made. I am now confident not only that my son can swim but if he were to fall into the water, I trust that he would come back up and make it out safely! That is a priceless feeling!”',
};

const WhyChooseUsSection = () => {
  return (
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
              <Image
                src={groupedWomen}
                alt='Image'
                className='mx-auto lg:max-w-[70%] lg:pb-32'
              />
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
        <ArrowButton
          text={'Get Started'}
          buttonClasses='bg-darkBlue text-white'
          IconClasses='bg-yellow'
          shadow={true}
          shadowClasses='bg-blue'
          iconColor='black'
          link='/get-started'
        />
      </section>
    </Container>
  );
};

export default WhyChooseUsSection;
