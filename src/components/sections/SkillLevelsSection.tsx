/**
 * SkillLevelsSection
 *
 * Displays swim skill levels with icons and associated skills.
 * Filters displayed skill levels based on the optional `skillsToShow` prop.
 * Conditionally adjusts left decoration icon placement based on the number of skills shown.
 */

import React from 'react';
import Container from '../layout/Container';
import {
  dolphinIcon,
  goldfishIcon,
  jellyfishIcon,
  medalIcon,
  oneStarLevelIcon,
  seahorseIcon,
  sealIcon,
  starfishIcon,
  tadpoleIcon,
  threeStarsLevelIcon,
  twoStarsLevelIcon,
} from '@/assets';
import Image from 'next/image';
import Typography from '../semantics/Typography';
import IconFrame from '../icons/IconFrame';
import { Bubbles } from '../decoration';
import { SkillTitle } from '@/enum/skill-title.enum';

type Props = {
  skillsToShow?: SkillTitle[];
  sectionHeader?: string;
  showDecorationElements?: boolean;
};

const allSwimSkillsData = [
  {
    title: 'Tadpole Skills',
    icon: tadpoleIcon,
    skills: [
      'Cue words to learn to hold breath underwater',
      'Assisted back float',
      'Assisted front float/submersion',
      'Developing underwater comfort & water acclimation',
      'Assisted Kicking',
      'Introduction of Water Safety Skills (based on age)',
      'Blowing bubbles',
      'Assisted "monkey crawl" along pool wall',
    ],
  },
  {
    title: 'Starfish Skills',
    icon: starfishIcon,
    skills: [
      'Unassisted backfloat',
      'Underwater swim (person to person & to wall)',
      '"Monkey Crawl" holding the side of the pool wall',
      'Reach for the side of the pool after submersion',
      'Assisted roll to back float',
      'Assisted climb out of pool',
    ],
  },
  {
    title: 'Goldfish Skills',
    icon: goldfishIcon,
    skills: [
      'Unassisted kicking underwater',
      'Underwater turn to grab wall (near edge)',
      'Roll to back float (less assistance)',
      'Unassisted 15+ second back float',
      'Assisted fall into water and roll to back float',
      'Unassisted climb out of pool',
    ],
  },
  {
    title: 'Jellyfish Skills',
    icon: jellyfishIcon,
    skills: [
      'Unassisted roll to back float',
      'Drop in from pool edge, turn around and kick back to wall',
      'Unassisted 30+ second back float',
      'Unassisted roll to back float after fall in water',
    ],
  },
  {
    title: 'Baby Tadpole Skills',
    icon: tadpoleIcon,
    skills: [
      'Cue words to learn to hold breath underwater',
      'Assisted back float',
      'Assisted front float/submersion',
      'Developing underwater comfort & water acclimation',
      'Assisted Kicking',
      'Introduction of Water Safety Skills (based on age)',
      'Blowing bubbles',
      'Assisted "monkey crawl" along pool wall',
    ],
  },
  {
    title: 'Baby Starfish Skills',
    icon: starfishIcon,
    skills: [
      'Unassisted backfloat',
      'Underwater swim (person to person & to wall)',
      '"Monkey Crawl" holding the side of the pool wall',
      'Reach for the side of the pool after submersion',
      'Assisted roll to back float',
      'Assisted climb out of pool',
    ],
  },
  {
    title: 'Baby Goldfish Skills',
    icon: goldfishIcon,
    skills: [
      'Unassisted kicking underwater',
      'Underwater turn to grab wall (near edge)',
      'Roll to back float (less assistance)',
      'Unassisted 15+ second back float',
      'Assisted fall into water and roll to back float',
      'Unassisted climb out of pool',
    ],
  },
  {
    title: 'Baby Jellyfish Skills',
    icon: jellyfishIcon,
    skills: [
      'Unassisted roll to back float',
      'Drop in from pool edge, turn around and kick back to wall',
      'Unassisted 30+ second back float',
      'Unassisted roll to back float after fall in water',
    ],
  },
  {
    title: 'Seahorse Skills',
    icon: seahorseIcon,
    skills: [
      'Tread water',
      'Assisted back float',
      'Assisted front float/submersion',
      'Developing underwater comfort & water acclimation',
      'Assisted Kicking',
      'Introduction of Water Safety Skills (based on age)',
      'Blowing bubbles',
      'Assisted "monkey crawl" along pool wall',
    ],
  },
  {
    title: 'Dolphin Skills',
    icon: dolphinIcon,
    skills: [
      'Breaststroke',
      'Jump into pool tread water 10s return to side',
      'Forward somersault',
      'Skull head first 5m',
      'Backstroke',
      'Dolphin kick',
    ],
  },
  {
    title: 'Seal Skills',
    icon: sealIcon,
    skills: [
      'Technique refinement for all strokes',
      'Tread water 30+ seconds',
      'Retrieve underwater objects in deep water',
      'Flip turns',
      'Head first surface dive in deep water',
      'Butterfly',
    ],
  },
  {
    title: 'Adult Beginner',
    icon: oneStarLevelIcon,
    skills: [
      'How to be comfortable in the water',
      'Water safety/survival techniques',
      'Introduction to treading water',
      'Proper floating, kicking, and breathing underwater',
      'Front crawl/freestyle swim stroke',
    ],
  },
  {
    title: 'Adult Intermediate',
    icon: twoStarsLevelIcon,
    skills: [
      'Breaststroke, backstroke swimming techniques',
      'Rotary breathing',
      'Endurance building',
      'Mechanical stroke refinement on established swim strokes',
    ],
  },
  {
    title: 'Adult Advanced',
    icon: threeStarsLevelIcon,
    skills: [
      'Advanced stroke techniques for improved efficiency and speed',
      'Butterfly arm and kick coordination, flip turns, and diving',
      'Speed, endurance and stamina',
    ],
  },
  {
    title: 'Specialized Training',
    icon: medalIcon,
    skills: [
      'Endurance-based interval training for long-distance and military swim tests',
      'Swim training for swimmers participating in triathlons',
      'Water aerobic exercise with stretching and strength training routines to improve all elements of fitness (flexibility, muscular strength, and cardiovascular fitness)',
    ],
  },
];

const SkillLevelsSection: React.FC<Props> = ({
  skillsToShow,
  showDecorationElements = true,
  sectionHeader = 'Levels we teach on our Swim Lesson Programs',
}) => {
  const filteredData = skillsToShow
    ? allSwimSkillsData.filter((level) =>
        skillsToShow.includes(level.title as SkillTitle)
      )
    : allSwimSkillsData;

  const leftDecorationClasses = `hidden lg:block lg:absolute rotate-[334deg] -left-[8%] scale-y-[-1] ${
    filteredData && filteredData.length > 3
      ? 'bottom-1/2 translate-y-1/2'
      : 'bottom-0'
  }`;

  return (
    <Container className='relative'>
      {showDecorationElements && (
        <>
          {/* Top right decoration icon */}
          <div className='hidden lg:block lg:absolute top-[8%] rotate-[140deg] right-0 scale-y-[-1]'>
            <Bubbles />
          </div>
          {/* Left center decoration icon */}
          <div className={leftDecorationClasses}>
            <Bubbles />
          </div>
        </>
      )}

      <Typography
        variant='h3'
        className='font-primary max-w-[547px] mx-auto mb-10'
      >
        {sectionHeader}
      </Typography>

      <div className='flex flex-wrap gap-[26px] justify-center'>
        {filteredData.map((level, i) => (
          <div
            key={i}
            className='max-w-[284px] swim-skill-card-bg px-[25px_31px] py-[25px_72px] flex flex-col items-center bg-off-white'
          >
            <span className='bg-yellow inline-flex mx-auto w-[162px] h-[162px] rounded-full items-center justify-center'>
              <Image src={level.icon} alt='' />
            </span>
            <Typography
              variant='h6'
              className='font-secondary !font-bold !text-2xl text-offBlack leading-[125%] mt-2 mb-[26px]'
            >
              {level.title}
            </Typography>
            {level.skills.map((skill, s) => (
              <div
                key={s}
                className='grid grid-cols-[max-content_1fr] self-start items-start gap-3 mb-4'
              >
                <span className='inline-block w-6 h-4'>
                  <IconFrame color='var(--color-red)' />
                </span>
                <Typography
                  variant='custom'
                  className='font-secondary font-medium text-base text-offBlack leading-[120%]'
                >
                  {skill}
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillLevelsSection;
