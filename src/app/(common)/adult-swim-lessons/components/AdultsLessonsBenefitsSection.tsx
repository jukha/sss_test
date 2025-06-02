import { benefitsOfAdultLesson } from '@/assets';
import {
  HappyIcon,
  LearningIcon,
  MessagingIcon,
  MuscleIcon,
  ProtectIcon,
  TrustIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Benefits of adult swimming lessons with Sunsational',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: benefitsOfAdultLesson,

  sellingReasons: [
    {
      title: 'Private sim lesson are the most effective way to learn',
      description:
        "If you want to learn to swim and you're afraid or embarrassed that you cannot, the Sunsational Swim School's private swimming lessons for adults can help you develop a strong set of basic swim skills quickly",
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '28deg',
    },
    {
      title: 'We make it convenient to learn',
      description:
        "The great thing about the Sunsational Swim School instructors is that they're really there for you, both in terms of education and location. Our adult swimming lessons can take place at your community pool or even in your own home swimming pool.",
      icon: <LearningIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'We tailor our lessons for you',
      description:
        'The best thing about our private adult swim lessons is that we can tailor the course to suit you, your needs and your swimming background. This means we can create a learning environment where progress is easy and fast',
      icon: <MuscleIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Flexible scheduling',
      description:
        'Fitting in private adult swim lessons is often a challenge. But with Sunsational you can choose a time slot for adult swimming lessons that fits with your own schedule, and book several lessons in advance at the same time.',
      icon: <HappyIcon />,
      iconFrameColor: 'var(--color-yellow)',
      iconRotateDeg: '',
    },
    {
      title: 'Non-swimmers to advance technique training',
      description:
        'From the first splash to the last dive, our private swim lessons for adults give you the chance to move through all the skill levels in an encouraging and safe environment.',
      icon: <MessagingIcon />,
      iconFrameColor: 'var(--color-orange)',
      iconRotateDeg: '',
    },
    {
      title: 'Highly qualified & patient instructors',
      description:
        "One of the smartest reasons to choose Sunsational Swim School is because we only take the best instructors. Our business has a quality screening process that requires all our instructors to have CPR/First Aid, years of experience, background checks and, of course, a teaching style that you'll love.",
      icon: <TrustIcon />,
      iconFrameColor: 'var(--color-red)',
      iconRotateDeg: '',
    },
  ],
};

const AdultsLessonsBenefitsSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default AdultsLessonsBenefitsSection;
