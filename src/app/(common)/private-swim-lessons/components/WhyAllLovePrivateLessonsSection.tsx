import {
  whyAllLovePrivateLessonsImg,
  whyAllLovePrivateLessonsImg2,
} from '@/assets';
import BenefitsShowCaseSection from '@/components/sections/BenefitsShowCaseSection';
import React from 'react';

const content = {
  heading: 'Why parents and children love private swim lessons',
  buttonText: 'Book Now',
  buttonLink: '/registration',
  data: [
    {
      title: 'FUN, ENGAGING LESSONS FOR ALL AGES AND SKILL LEVELS',

      titleBgColor: 'var(--color-darkBlue)',
      description:
        'Learning to swim should be fun – not frustrating! Instructors use interactive games and activities to keep kids engaged while they develop essential life skills. Plus, with our Sunsational Skill Chart and Certificate, your child will see their progress and feel motivated to keep going.',
    },
    {
      img: whyAllLovePrivateLessonsImg,
    },
    {
      title: 'QUICKEST WAY TO LEARN TO SWIM',

      titleBgColor: 'var(--color-blue)',
      description:
        'Why wait months or years for your child to learn to swim? Private lessons offer the personalized attention and the consistency required to help kids gain confidence and master swimming quickly. Our Learn-to-Swim Guarantee means real results in a matter of weeks.',
    },
    {
      title: 'CONVENIENCE FOR BUSY FAMILIES',

      titleBgColor: 'var(--color-darkBlue)',
      description:
        'Skip the stress of driving across town– our private swim instructors come to you! Choose the best day, time and location, whether it’s your home pool, a public pool, or a community center. No more schedule conflicts or missed naps!',
    },
    {
      title: 'TAILORED TO YOUR CHILD’S NEEDS',
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'Private swim classes are inherently flexible, allowing your child to learn to swim at his own pace rather than following a rigid class structure. Ready to move quickly to the next lesson? Need to slow down and work on an area of weakness? No problem!',
    },
    {
      title: 'A SMARTER INVESTMENT THAN GROUP LESSONS',

      titleBgColor: 'var(--color-orange)',
      description:
        'Group swim lessons mean limited instructor attention, slow progress that can take months or years, and more sessions before your child becomes a safe and confident swimmer. Private classes actually save you money by helping them progress quicker than typical group lessons.',
    },
    { img: whyAllLovePrivateLessonsImg2 },
    {
      title: 'NO LESSON TIME WASTED',

      titleBgColor: 'var(--color-red)',
      description:
        "With one-on-one swim instruction, learning is fun, fast, and focused. You will have the instructor's undivided attention and fewer distractions than a group class. No more waiting for your turn to get the instructor's attention for 5 minutes of the class.",
    },
  ],
};

const WhyAllLovePrivateLessonsSection = () => {
  return <BenefitsShowCaseSection {...content} />;
};

export default WhyAllLovePrivateLessonsSection;
