import { localToddlerWhyUs } from '@/assets';
import {
  ApprovalIcon,
  HappyIcon,
  ProtectIcon,
  SnorkelIcon,
  TimerIcon
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle:
    'Why choose Sunsational Swim School for your toddler’s swim lessons?',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: localToddlerWhyUs,

  sellingReasons: [
    {
      title: 'Water safety starts early',
      description:
        'We prioritize safety in every lesson. Our toddler swim programs teach essential water safety skills, ensuring your child learns to swim in a fun yet secure environment.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '28deg',
    },
    {
      title: 'A fun and progressive learning approach',
      description:
        "At Sunsational Swim School our lessons follow a progressive method that makes learning fun; not stressful or fear-inducing. With private lessons our instructors go at your child's pace, progressing them only when they're ready.",
      icon: <HappyIcon />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '',
    },
    {
      title: 'Learn to swim guaranteed',
      description:
        "We're so confident in our methods that we offer a Learn to Swim Guarantee in all of our private toddler swim classes. If your child can't swim back to the pool wall after 12 lessons, you'll get up to four more lessons for free.",
      icon: <ApprovalIcon />,
      iconFrameColor: 'var(--color-yellow)',
      iconRotateDeg: '',
    },
    {
      title: 'Swim lessons that fit around your schedule',
      description:
        "[city] parents are busy, and often struggle to fit their toddler's swim lessons into their schedule. That's why our instructors come to you, holding lessons at a time, and pool, that's convenient for you.",
      icon: <TimerIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Expert instructors you can trust',
      description:
        'Our [city] swim instructors are highly experienced and have a minimum of two years teaching, CPR and First Aid Certified, and many are also Red Cross lifeguard or Water Safety Instructor certified.',
      icon: <SnorkelIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Lessons are fun and age-appropriate',
      description:
        'We make learning to swim fun and engaging with games, activities and age-appropriate techniques. Young children also earn Sunsational skill charts and certificates to celebrate their progress!',
      icon: <HappyIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
  ],
};

const WhyChooseUsForToddler = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default WhyChooseUsForToddler;
