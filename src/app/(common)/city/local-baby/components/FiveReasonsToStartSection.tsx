import { localBabyFiveReasonsToStart } from '@/assets';
import { LearningIcon, MessagingIcon, MuscleIcon, ProtectIcon, SwimmingPoolIcon } from '@/components/icons';
import SellingPointsSection from '@/components/sections/SellingPointsSection';
import { SellingPointsSectionType } from '@/types/selling-point-section.type';

const sellingPointsSectionData: SellingPointsSectionType = {
  sectionTitle: '5 reasons to start swim lessons for your baby now',
  sectionTitleMaxWidth: 'max-w-[960px]',
  sectionDescription:
    'Many [city] parents wonder if their baby is too young to start learning to swim. They think babies will eventually learn the skills on their own, or that the skill isn’t necessary. Here’s why starting lessons early is a smart choice:',
  image: localBabyFiveReasonsToStart,

  sellingReasons: [
    {
      title: 'Water safety starts early',
      description:
        'Drowning is the leading cause of accidental death for children under four. Babies are naturally curious, which is why baby swimming lessons make so much sense. An awareness of the water, and water safety skills, could very well save your child’s life one day.',
      icon: <ProtectIcon hasWhiteBg={true} />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '28deg',
    },
    {
      title: 'Decreased risk of drowning',
      description:
        'It’s impossible to watch over your children every second. Most daycare facilities have pool or splash days during the summer or have field trips that include water fun. Children can drown in less than 1 inch of water, particularly if the person is under the age of 4. Swimming lessons help decrease the risk of drowning.',
      icon: <SwimmingPoolIcon />,
      iconFrameColor: 'var(--color-darkBlue)',
      iconRotateDeg: '',
    },
    {
      title: 'Encourages social interaction',
      description:
        "Swimming and playing in the pool with parents and other babies helps boost babies' social development.  Babies learn through shared experiences, laughter, and engaging in activities together. Your child shouldn't have to skip these character-forming moments due to a fear of the water or because you simply haven't found the time for swim lessons.",
      icon: <MessagingIcon />,
      iconFrameColor: 'var(--color-blue)',
      iconRotateDeg: '',
    },
    {
      title: 'Builds their strength',
      description:
        'For babies, swimming helps strengthen their muscles, improve coordination, and enhance their motor skills – all without any unnecessary stress on joints. Plus, the water’s resistance provides a full-body workout, even for the tiniest of swimmers. Swimming may even help learn to walk sooner thanks to better muscle control.',
      icon: <MuscleIcon />,
      iconFrameColor: 'var(--color-teal)',
      iconRotateDeg: '',
    },
    {
      title: 'Lifelong skill that starts early',
      description:
        "Swimming is a skill for life. Providing your baby with swimming lessons opens up a whole new arena of fun and fitness that they can participate in all their lives. If you don't know how to swim, consider taking a parent and baby swim class together or taking adult swim lessons on your own. Create core memories in the water, together!",
      icon: <LearningIcon />,
      iconFrameColor: 'var(--color-lightBlue)',
      iconRotateDeg: '',
    },
  ],
};

const FiveReasonsToStartSection = () => {
  return <SellingPointsSection {...sellingPointsSectionData} />;
};

export default FiveReasonsToStartSection;
