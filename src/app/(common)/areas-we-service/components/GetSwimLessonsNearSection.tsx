import { BackgroundCircles, Bubbles } from '@/components/decoration';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FeatureSection from '@/components/FeatureSection';
import SunIcon from '@/components/icons/SunIcon';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';

const content = {
  title: 'Get Swim Lessons Near Me, In Any Pool Of Your Choice',
  description:
    'Sunsational Swim School not only provides our students with tailored swim lessons for all ages, we can also hold those lessons wherever you want. Our swim instructors are able to deliver quality swimming lessons at housing community pool (including apartment, condos and HOA), hotel pools, country club pools, public pools, and even the pool in your own backyard!',
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses: 'pl-8 pr-12 py-[50px] lg:py-[64px] lg:px-[79px] bg-off-white',
  useListIdxAsIcon: true,

  listItemBulletIconAlignment: 'center',
  listItems: [
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Home pool',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Housing community pool',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Fitness center pool',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'City/public pool (if permitted)',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Country Club',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Hotel or resort',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'Any other pool you have access to!',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemBulletBg: 'transparent',
      itemDescription: 'HOA Pool (Condo, Apartment, etc)',
      itemBulletIcon: <SunIcon />,
      itemBulletIconSize: 32,
    },
  ],
};

const GetSwimLessonsNearSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-yellow)'
      waveColor='var(--color-yellow)'
    >
      <FlexWrapper className='overflow-hidden lg:p-20 items-stretch max-lg:py-20'>
        <div className='lg:w-[50%] relative z-0'>
          <Typography
            variant='h3'
            className='text-orange mb-2 font-primary max-w-[454px]'
          >
            {content.title}
          </Typography>
          <Typography
            variant='body2'
            className='lg:max-w-[420px] font-medium font-secondary text-offBlack'
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

export default GetSwimLessonsNearSection;
