import React from 'react';

import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import ArrowButton from '../kit/buttons/ArrowButton';
import {
  BabyBottleIcon,
  BabyIcon,
  StreetViewIcon,
  StandingManIcon,
  ElderlyPersonIcon,
  MedalFirstPlaceIcon,
  NoTextStarIcon,
  CrowdIcon,
  ArrowIcon,
} from '../icons';

type Props = {
  sectionHeader?: string;
  showButton?: boolean;
};

const lessons = [
  {
    icon: <BabyBottleIcon />,
    name: 'Baby Swim Lessons',
    description:
      'Your baby can begin to learn water safety skills—it’s never too early to start!',
    background: '#f4fbfd',
  },
  {
    icon: <BabyIcon />,
    name: 'Toddler Swim Lessons',
    description:
      'Fun, safe lessons to help toddlers build confidence and basic swim skills.',
    background: '#cceef0',
  },
  {
    icon: <StreetViewIcon />,
    name: 'Child Swim Lessons',
    description:
      'Our private classes can help your child achieve—and exceed—their swimming goals.',
    background: '#d1e8f4',
  },
  {
    icon: <StandingManIcon />,
    name: 'Teenager Swim Lessons',
    description:
      'Our one-on-one lessons help your teen pickup the basics of swim with comfortable guidance.',
    background: '#cdd8eb',
  },
  {
    icon: <ElderlyPersonIcon />,
    name: 'Adult Swim Lessons',
    description:
      'Our lessons help even the most reluctant adults to conquer their fears.',
    background: '#fff9da',
  },
  {
    icon: <MedalFirstPlaceIcon />,
    name: 'Private Competitive Swimming Training',
    description:
      'Our private swim lessons by expert coaches get advanced swimmers ready for competition, tests and triathlons & more.',
    background: '#fedfce',
  },
  {
    icon: <NoTextStarIcon />,
    name: 'Special Needs Swim Lessons',
    description:
      'Our trained instructors can help students with autism, sensory challenges, ADHD, physical disabilities & more.',
    background: '#f7ccce',
  },
  {
    icon: <CrowdIcon />,
    name: 'Parent & Tot Group Lessons',
    description:
      'Teach your tot life skills and learn together in a fun, supportive group setting with other parents!',
    background: '#cfccd9',
  },
];

const TopSwimmingLessonsSection = ({
  sectionHeader = 'Popular Swimming Lesson Programs',
  showButton = true,
}: Props) => {
  return (
    <Container className='mb-[200px]'>
      <Typography
        variant='h3'
        className='mb-10 font-primary max-w-[551px] mx-auto text-center'
      >
        {sectionHeader}
      </Typography>

      <ul className='flex gap-4 flex-wrap justify-center mb-16'>
        {lessons.map((lesson, i) => (
          <li
            key={i}
            className='lg:w-[calc(25%_-16px)] rounded-4xl px-8 py-4'
            style={{ background: lesson.background }}
          >
            <span className='inline-block w-[60px] h-[60px]'>
              {lesson.icon}
            </span>
            <Typography
              variant='custom'
              className='font-secondary text-xl leading-[125%] font-bold max-w-[200px] my-2'
            >
              {lesson.name}
            </Typography>
            <Typography
              variant='body3'
              className='font-medium max-w-[200px] mb-6'
            >
              {lesson.description}
            </Typography>
            <button className='flex items-center gap-3 text-xl font-bold font-secondary text-black leading-[125%]'>
              Select
              <div className='icon-background-two bg-yellow w-[40px] h-[40px] inline-flex justify-center items-center'>
                <span className='w-[16px] h-[16px] inline-block'>
                  <ArrowIcon iconColor='var(--color-black)' />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {showButton && (
        <div className='flex justify-center'>
          <ArrowButton
            text={'Book Swimming Lessons'}
            buttonClasses='bg-offBlack text-white'
            IconClasses='bg-yellow'
            iconColor='var(--color-black)'
            shadow={true}
            shadowClasses='bg-blue'
          />
        </div>
      )}
    </Container>
  );
};

export default TopSwimmingLessonsSection;
