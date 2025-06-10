import Image from 'next/image';

import {
  howItWorksSectionImage1,
  localBabyStep2Img,
  localBabyStep3Img,
} from '@/assets';
import IconFrame from '@/components/icons/IconFrame';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import clsx from 'clsx';
import { HowItWorksType, SwimStepType } from '@/types/city-how-it-works.type';


const defaultSwimSteps: SwimStepType[] = [
  {
    title: 'Register online',
    titleMaxWidth: 'max-w-[200px]',
    description:
      'Tell us your baby’s needs and skills, and we’ll match you with the perfect Sunsational instructor.',
    image: howItWorksSectionImage1,
    parentCardClasses: 'pb-20',
    statWrapperClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
    statText: '1,500+',
    statCaption: 'Cities Served',
  },
  {
    title: 'Get Matched',
    description:
      'Shortly after registering, we’ll introduce you to your hand-selected instructor who will schedule lessons at a time and place that suits you.',
    image: localBabyStep2Img,
    parentCardClasses: 'pb-10 lg:pb-52',
    statWrapperClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:left-0',
    statText: '2,000+',
    statCaption: 'Sunsational Swim Instructors',
  },
  {
    title: 'Start Lessons',
    titleMaxWidth: 'max-w-[200px]',
    description:
      'Dive in and start making waves! Lessons help your child gain confidence and reach swimming goals quickly.',
    image: localBabyStep3Img,
    statWrapperClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
    statText: '100,000+',
    statCaption: 'Swimmers Since 2009',
  },
];

const HowItWorksCitiesSection: React.FC<HowItWorksType> = ({
  sectionHeader = 'How does Sunsational Swim School work?',
  steps,
  sectionDescription,
}) => {
  const finalSteps = steps?.length ? steps : defaultSwimSteps;
  return (
    <Container>
      <div className='lg:px-20'>
        <Typography
          variant='h2'
          className='max-w-[837px] text-center mx-auto mb-9'
        >
          {sectionHeader}
        </Typography>
        <Typography
          variant='custom'
          className='text-2xl font-bold leading-[125%] font-secondary text-offBlack max-w-[559px] text-center mx-auto'
        >
          {sectionDescription}
        </Typography>
        {finalSteps.map((item, i) => (
          // ==================
          // Parent Card Starts
          // ==================
          <FlexWrapper
            className={item.parentCardClasses}
            stackOrder='second-top'
            direction={i % 2 === 0 ? 'row' : 'row-reverse'}
            key={i}
          >
            <div className='flex flex-1 lg:justify-center max-lg:flex-wrap gap-4 lg:gap-12 items-start mt-20 lg:mt-0'>
              {/* ============ */}
              {/* Step No */}
              {/* ============ */}
              <div className='relative z-0 grid grid-items-center justify-items-center'>
                <span
                  className='inline-block w-[60px] h-[52px]'
                  style={{ gridArea: '1/1' }}
                >
                  <IconFrame color='var(--color-orange)' />
                </span>
                <div style={{ gridArea: '1/1' }}>
                  <Typography
                    variant='custom'
                    className='text-[42px] font-bold font-primary text-white'
                  >
                    {i + 1}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant='h3'
                  className={clsx(
                    'font-primary capitalize mb-3',
                    item.titleMaxWidth
                  )}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='h5'
                  className='font-secondary lg:max-w-[298px] leading-[120%]'
                >
                  {item.description}
                </Typography>
              </div>
            </div>
            <div className='max-w-[840px] flex-1 relative z-0'>
              <Image src={item.image} alt='' />

              <div
                className={clsx(
                  'z-10 flex flex-col px-8 py-4 lg:pt-10 lg:pb-4 justify-center items-center background-decoration bg-offBlack w-max absolute right-0',
                  item.statWrapperClasses
                )}
              >
                <Typography
                  variant='custom'
                  className='font-primary text-[48px] leading-[115%] xl:text-[80px] xl:leading-[113%] text-white font-bold'
                >
                  {item.statText}
                </Typography>
                <Typography
                  variant='custom'
                  className='text-base lg:text-[28px] -translate-y-3 capitalize font-secondary font-medium text-white whitespace-nowrap'
                >
                  {item.statCaption}
                </Typography>
              </div>
            </div>
          </FlexWrapper>
        ))}
        <div className='flex justify-center items-center gap-4 ml-[30px] mt-24 lg:mt-56'>
          <ArrowButton
            text={'Sign Up Now'}
            buttonClasses='bg-offBlack text-white'
            iconColor='var(--color-black)'
            IconClasses='bg-yellow'
            shadow={true}
            shadowClasses='bg-blue'
            link='/registration'
          />
        </div>
      </div>
    </Container>
  );
};

export default HowItWorksCitiesSection;
