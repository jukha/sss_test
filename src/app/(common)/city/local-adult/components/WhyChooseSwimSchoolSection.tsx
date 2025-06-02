import { localAdultWhyChooseUs } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';

const content = {
  title: 'Why choose Sunsational Swim School to learn to swim?',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4',
  posterImage: localAdultWhyChooseUs,
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses: 'pl-8 pr-12 py-[50px] lg:py-[64px] lg:px-[79px] bg-white',
  listItemBulletIconAlignment: 'center',
  useListIdxAsIcon: true,
  listItems: [
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Quick Results',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription:
        'Our adult swim students generally learn to swim within just 6 to 12 swim lessons',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Built-in Convenience',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription:
        'Sunsational swim instructors travel to you & work around your schedule',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Top Instructors',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription:
        'All Sunsational instructors are CPR/First Aid certified with a minimum of 2 years of experience teaching adult lessons',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Satisfaction Guaranteed',
    },
    {
      itemBulletBg: 'var(--color-darkBlue)',
      itemDescription: 'Love your lessons or choose a new instructor or refund',
    },
  ],
};

const WhyChooseSwimSchoolSection = () => {
  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
    >
      <Typography
        variant='h2'
        className='max-w-[940px] mx-auto text-left lg:text-center px-4 mb-5 lg:mb-0'
      >
        {content.title}
      </Typography>
      <div className='overflow-hidden lg:p-20'>
        <FlexWrapper className='items-stretch justify-evenly'>
          <div className='w-full lg:w-1/2 max-w-[503px] relative z-[1] mx-auto'>
            {/* Background Circles Top Left */}
            <div className='hidden lg:block absolute w-full h-full -left-[20%] scale-[1.80] z-[-1]'>
              <BackgroundCircles circlesColor='var(--color-off-white)' />
            </div>
            <SectionInfoCard {...sectionInfoCardData} />
          </div>
          <div className='lg:w-1/2 relative'>
            {/* Background Circles Bottom Right */}
            <div className='hidden lg:block absolute w-full h-full -right-[30%] bottom-0 scale-[1.80] z-[0] -rotate-[90deg]'>
              <BackgroundCircles circlesColor='var(--color-off-white)' />
            </div>

            <div className='relative flex flex-col justify-center items-center gap-10'>
              <div className=' flex justify-center items-center horizontal-card bg-offBlack py-[10px] px-5 md:py-8'>
                <div className='flex justify-center items-center horizontal-card bg-[#cfccd9] py-5 px-10 md:px-10 md:py-8'>
                  <video
                    className='w-full h-full rounded-4xl'
                    controls
                    poster={content.posterImage.src}
                  >
                    <source src={content.media} type='video/mp4' />
                  </video>
                </div>
              </div>

              {/* Video Frame Decoration Element */}
              <div className='absolute top-0 left-32 z-10 w-10 md:w-16'>
                <ThreeStareSlim color='var(--color-yellow)' />
              </div>

              {/* Video Frame Decoration Element */}
              <div className='absolute bottom-0 right-[20%] z-10 w-10 md:w-16 scale-x-[-1]'>
                <ThreeStareSlim color='var(--color-yellow)' />
              </div>
            </div>
          </div>
        </FlexWrapper>
      </div>
    </FeatureSection>
  );
};

export default WhyChooseSwimSchoolSection;
