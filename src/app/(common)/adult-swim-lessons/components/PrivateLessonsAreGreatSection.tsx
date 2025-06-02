import { adultLessonsAreGreat } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';
import Image from 'next/image';

const content = {
  title: 'Private adult swimming lessons are great for…',
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses: 'pl-8 pr-12 py-[50px] lg:py-[40px] lg:px-[79px] bg-[#f1fafc] gap-6',
  listItemBulletIconAlignment: 'start',
  useListIdxAsIcon: true,
  listItems: [
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Adults in all swimming levels',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Fear of water or aquaphobia',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Adults with near drowning/traumatic experiences',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Training for a triathlon or other swim competition',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Learning stroke technique',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Training for a swim test (military, school, etc.)',
    },
    {
      itemBulletBg: 'var(--color-darkBlue',
      itemDescription: 'Preparing for a vacation – and need to become swim-confident fast',
    },
  ],
};
const PrivateLessonsAreGreatSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-darkBlue)'
      waveColor='var(--color-darkBlue)'
    >
      <div className='relative overflow-hidden py-[88px] lg:p-20'>
        <FlexWrapper
          className='items-center justify-center z-[1] relative'
          stackOrder='second-top'
        >
          {/* Background Circles Top Left */}
          <div className='hidden lg:block absolute w-[30%] h-full -left-[5%] -top-[10%] scale-[2]'>
            <BackgroundCircles circlesOpacity='0.1' />
          </div>
          {/* Background Circles Bottom Right */}
          <div className='hidden lg:block absolute w-[30%] h-full right-0 -bottom-[10%] scale-[2]'>
            <BackgroundCircles circlesOpacity='0.1' />
          </div>
          <div className='w-full flex-1 max-w-[500px]'>
            <Typography
              variant='h3'
              className='font-primary mb-10 text-white hidden lg:block'
            >
              {content.title}
            </Typography>
            <SectionInfoCard {...sectionInfoCardData} />
          </div>
          <div className='w-full lg:w-1/2 relative z-[1]'>
            <Typography
              variant='h3'
              className='font-primary mb-10 text-white lg:hidden mb-9'
            >
              {content.title}
            </Typography>
            <Image src={adultLessonsAreGreat} alt='' />
          </div>
        </FlexWrapper>
      </div>
    </FeatureSection>
  );
};

export default PrivateLessonsAreGreatSection;
