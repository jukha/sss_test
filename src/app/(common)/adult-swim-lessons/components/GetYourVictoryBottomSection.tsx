import { localAdultWhyChooseUs } from '@/assets';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';

const content = {
  title:
    'Get to your victory lap faster with a dedicated Sunsational private swim instructor',
  descriptions: [
    'At Sunsational Swim School, we personally match you with a qualified swim instructor based on your needs and availability. You choose the location--your own pool, public pool, etc.--along with the days that work best for you. Our full-time matching team carefully selects an instructor who’s best suited to help you achieve your goals and teach within your schedule. \n\n',
    'Your dedicated swim instructor will guide you through your swim lesson plan from start to finish. With personalized, one-on-one support, learning becomes fun, fast and focused. In fact, most of our adult students learn to swim in just 6 to 12 private lessons! \n\n',
    'We’ve helped thousands of adults learn to swim and overcome their fear of water by breaking swimming into simple, comfortable steps for learners of all levels.',
  ],
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4',
  posterImage: localAdultWhyChooseUs,
};

const GetYourVictoryBottomSection = () => {
  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
    >
      <div className='overflow-hidden py-[70px] lg:p-20'>
        <FlexWrapper className='items-stretch justify-center'>
          <div className='w-full lg:w-1/2 max-w-[476px] relative z-[1]'>
            <Typography
              variant='h3'
              className='font-primary mb-9 text-offBlack'
            >
              {content.title}
            </Typography>
            {content.descriptions.map((description, i) => (
              <Typography
                key={i}
                variant='custom'
                className='text-[18px] text-off-black md:text-black md:text-[20px] font-medium leading-[120%] font-secondary whitespace-break-spaces'
              >
                {description}
              </Typography>
            ))}
            <div className='hidden lg:flex justify-start items-center gap-4 mt-[30px]'>
              <ArrowButton
                text={'Register Now'}
                buttonClasses='bg-brightYellow text-offBlack'
                iconColor='var(--color-white)'
                shadow={true}
                shadowClasses='bg-orange'
                link='/registration'
              />
            </div>
          </div>
          <div className='lg:w-1/2 relative'>
            <div className='relative flex h-full flex-col justify-center items-center gap-10'>
              <div className=' flex justify-center h-full items-center horizontal-card bg-offBlack py-[10px] px-5 md:py-8'>
                <div className='flex justify-center h-full items-center horizontal-card bg-[#cfccd9] py-5 px-10 md:px-10 md:py-8'>
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
        <div className='flex px-4 lg:hidden justify-start items-center gap-4 mt-[30px]'>
          <ArrowButton
            text={'Register Now'}
            buttonClasses='bg-brightYellow text-offBlack'
            iconColor='var(--color-white)'
            shadow={true}
            shadowClasses='bg-orange'
            link='/registration'
          />
        </div>
      </div>
    </FeatureSection>
  );
};

export default GetYourVictoryBottomSection;
