import { specialNeedsLessonBenefits } from '@/assets';
import {
  MuscleIcon,
  ProtectIcon,
  RunningManIcon,
  SwimmingPoolIcon,
} from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: 'Why choose Sunsational Swim School for kids swimming lessons?',
  sectionTitleMaxWidth: 'max-w-[837px]',
  image: specialNeedsLessonBenefits,

  sellingReasons: [
    {
      title: 'It could save their lives',
      description:
        'Often it is simply a lack of water safety awareness that causes danger among children with special needs. Our special needs swim lessons educate kids on all aspects of water safety, and the skills they need to survive in a water environment.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-offBlack)',
      iconRotateDeg: '28deg',
    },
    {
      title: 'Help boost confidence & self-esteem',
      description:
        'Many children with special needs have problems with confidence, but successfully learning a new skill like swimming with the help of a special needs swim instructor can make all the difference.',
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'It improves their fitness & strength',
      description:
        'Special needs children can benefit from the improvement of strength and fitness that comes with our swim lessons, making them healthier and more capable',
      icon: <MuscleIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Improve coordination & range of motion',
      description:
        'Swimming is an activity that improves balance, coordination and range of motion, all things that many special needs children struggle with. Our talented special needs swim instructors can help your child improve their skills in each area as they learn to swim.',
      icon: <RunningManIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
  ],
};

const SpecialSwimLessonsBenefitsSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default SpecialSwimLessonsBenefitsSection;
