import { benefitsOfAdultSwim, benefitsOfAdultSwim2 } from '@/assets';
import {
  GraduationCapIcon,
  HappyIcon,
  MedalFirstPlaceIcon,
  MuscleIcon,
  SnorkelIcon,
  SwimmingPoolIcon,
} from '@/components/icons';
import BenefitsShowCaseSection from '@/components/sections/BenefitsShowCaseSection';

const benefitsShowCaseSectionData = {
  heading: 'Benefits of adult swimming lessons with Sunsational',
  buttonText: 'Book Now',
  buttonLink: '/registration',
  data: [
    {
      title: 'Private swim lessons are the most effective way to learn',
      icon: <SwimmingPoolIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'If you want to learn to swim and you’re afraid or embarrassed to try in a group, the Sunsational Swim School’s private swimming lessons for adults can help you develop a strong set of basic swim skills quickly.',
    },
    {
      img: benefitsOfAdultSwim,
      imageScale: 1.3,
    },
    {
      title: 'We make it convenient to learn',
      icon: <MedalFirstPlaceIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'Our adult swim lessons can take place at your community pool or even in your own home swimming pool—at the times and days that work best for you.',
    },
    {
      title: 'We tailor our lessons for you',
      icon: <MuscleIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'Our private adult swim lessons are tailored to your comfort level and learning style. We create a relaxed environment where progress is easy and fast.',
    },
    {
      title: 'Flexible scheduling',
      icon: <HappyIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'You can choose a time slot for adult swimming lessons that fits with your own schedule and even book multiple lessons in advance at the same time.',
    },
    {
      title: 'Non-swimmers to advance technique training',
      icon: <GraduationCapIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'From the first splash to the last dive, our private swim lessons for adults help you advance at your pace in an encouraging and safe environment.',
    },
    {
      img: benefitsOfAdultSwim2,
    },
    {
      title: 'Highly qualified & patient instructors',
      icon: <SnorkelIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'Our instructors are CPR/First Aid certified, background checked, and trained in swim safety. They’re patient and experienced at teaching adults.',
    },
  ],
};

const BenefitsOfAdultSwimSection = () => {
  return (
    <div>
      <BenefitsShowCaseSection {...benefitsShowCaseSectionData} />;
    </div>
  );
};

export default BenefitsOfAdultSwimSection;
