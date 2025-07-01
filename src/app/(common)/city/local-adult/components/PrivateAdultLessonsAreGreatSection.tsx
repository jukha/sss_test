import { localAdultSectionInfo1 } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';
import Image from 'next/image';


const content = {
  title: 'Private adult swimming lessons are great for…',
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses:
    'pl-8 pr-12 py-[50px] lg:py-[28px] lg:px-[79px] bg-[#f1fafc] gap-4',
  listItemBulletIconAlignment: 'start',
  useListIdxAsIcon: true,

  listItems: [
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Adults in all swimming levels',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Fear of water or aquaphobia',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Adults with near drowning/traumatic experiences',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Training for a triathlon or other swim competition',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Learning stroke technique',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Training for a swim test (military, school, etc.)',
    },
  ],
};
const PrivateAdultLessonsAreGreatSection = () => {
  return (
    <FlexWrapper className='items-start justify-evenly'>
      <div className='relative z-[1]'>
        {/* Background Circles Top Left */}
        <div className='hidden lg:block absolute w-full h-full -left-[20%] scale-[1.35] z-[-1]'>
          <BackgroundCircles
            circlesColor='var(--color-lightBlue)'
            circlesOpacity='1'
          />
        </div>
        <Image src={localAdultSectionInfo1} alt='' />
      </div>
      <div className='flex-1 max-w-[510px]'>
        <Typography variant='h3' className='font-primary mb-10'>
          {content.title}
        </Typography>
        <SectionInfoCard {...sectionInfoCardData} />
      </div>
    </FlexWrapper>
  );
};

export default PrivateAdultLessonsAreGreatSection;
