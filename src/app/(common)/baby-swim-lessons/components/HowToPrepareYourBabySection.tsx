import { BackgroundCircles, Bubbles } from '@/components/decoration';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';

const content = {
  title: 'How to prepare your baby for swim lessons',
  description:
    'Not ready for a formal class yet? Start at home! Simple activities in the bathtub, like gently pouring water over your baby’s head, introducing words like “kick” and “splash”, or laying them on their back in shallow water, can help them feel comfortable in the water before their first lesson.\n\nWhen you’re ready for the pool, help your baby be successful with these tips:',
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses: 'pl-8 pr-12 py-[50px] lg:py-[64px] lg:px-[79px] bg-off-white',
  useListIdxAsIcon: true,

  listItemBulletIconAlignment: 'center',
  listItems: [
    {
      itemDescription:
        'Feed them at least 30 minutes before a lesson to prevent tummy discomfort',
      itemBulletBg: 'var(--color-blue)',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription:
        'Pack essentials like swim diapers, towels, dry clothes, and fresh diapers',
    },
    {
      itemBulletBg: 'var(--color-orange)',
      itemDescription: 'Arrive early so you have time to get ready',
    },
    {
      itemBulletBg: 'var(--color-yellow)',
      itemDescription: 'Ease into the water to keep the experience positive',
    },
  ],
};

const HowToPrepareYourBabySection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-yellow)'
      waveColor='var(--color-yellow)'
      className=''
    >
      <FlexWrapper className='overflow-hidden lg:p-20 items-stretch'>
        <div className='lg:w-[50%] relative z-0'>
          <Typography
            variant='h3'
            className='text-offBlack mb-2 font-primary max-w-[454px]'
          >
            {content.title}
          </Typography>
          <Typography
            variant='body2'
            className='lg:max-w-[420px] font-medium font-secondary text-offBlack whitespace-pre-wrap'
          >
            {content.description}
          </Typography>

          {/* Background Circles */}
          <div className='hidden lg:block absolute inset-0 z-[-1] scale-[2.5] w-full h-full'>
            <BackgroundCircles circlesOpacity='0.3' />
          </div>
        </div>
        <div className='lg:w-[50%] flex max-w-[494px] relative z-0 '>
          <SectionInfoCard {...sectionInfoCardData} />

          {/* Top Right Stars */}
          <div className='w-[100px] lg:w-[188px] h-[112px] lg:h-[187px] absolute -top-[33px] lg:top-0 right-0 lg:-right-[94px]'>
            <ThreeStareSlim color='var(--color-orange)' />
          </div>

          {/* Top Left Bubble */}
          <div className='absolute -top-[33px] left-0 lg:-top-10 lg:-left-10 w-[116px] h-[80px]'>
            <Bubbles color='var(--color-blue)' />
          </div>

          {/* Bottom Right Bubbles */}
          <div className='hidden lg:block absolute bottom-0 right-[-150px] w-[116px] h-[116px] rotate-[-18deg] lg:w-[342px] lg:h-[200px]'>
            <Bubbles color='var(--color-blue)' />
          </div>
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default HowToPrepareYourBabySection;
