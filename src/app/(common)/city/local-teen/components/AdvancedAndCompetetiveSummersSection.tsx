import { localTeenGeneralImage3 } from '@/assets';
import { Bubbles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import StudentReviewCard from './StudentReviewCard';

const content = {
  title: 'Advanced and competitive swimmers benefit from private lessons too',
  description:
    'Even experienced swimmers can benefit from teen swim lessons near me. Private lessons provide focused, one-on-one coaching to help competitive swimmers refine their technique and improve performance. \n\n With a dedicated private swim instructor, teens can target specific skills like hand pulls, kicks, and stroke timing. Advanced techniques such as relay starts, backstroke starts, diving skills, and flip turns can also be practiced and perfected.',
};

const AdvancedAndCompetetiveSummersSection = () => {
  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
      className='my-24'
    >
      <Container className='flex flex-col justify-start overflow-x-clip items-center relative gap-8'>
        <Typography variant='h2' className='text-center max-w-[911px]'>
          {content.title}
        </Typography>
        <Typography
          variant='custom'
          className='text-[18px] text-off-black md:text-black md:text-[20px] font-medium leading-[120%] font-secondary max-w-[735px] whitespace-break-spaces text-start'
        >
          {content.description}
        </Typography>

        <div
          className={`w-full flex flex-col justify-center items-center relative  lg:overflow-visible md:my-16`}
        >
          <div className='relative flex justify-center  overflow-x-clip items-center w-full'>
            <Image
              src={localTeenGeneralImage3}
              alt={'Advanced and Competetive Summers Image'}
              className='z-10 -translate-x-6 md:-translate-x-12'
            />
            <div className='absolute w-[168px] h-[145px]  lg:h-[503px] lg:w-[612px]  rotate-180 left-[-10%] top-0 md:left-0 md:top-[-10%] opacity-50 '>
              {<Bubbles color='var(--color-blue)' />}
            </div>

            <div className='absolute w-[168px] h-[145px]  lg:h-[503px] lg:w-[612px] right-[-10%] bottom-0 lg:right-[-10%] lg:bottom-[-5%] opacity-50'>
              {<Bubbles color='var(--color-blue)' />}
            </div>
          </div>

          <div className='md:absolute flex justify-center items-center w-full h-auto z-10   md:w-[444px] md:h-[250px]  md:bottom-0  md:right-10 xl:right-20'>
            <StudentReviewCard />
          </div>
        </div>
      </Container>
    </FeatureSection>
  );
};

export default AdvancedAndCompetetiveSummersSection;
