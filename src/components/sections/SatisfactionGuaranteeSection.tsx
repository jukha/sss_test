import React from 'react';
import FeatureSection from '../FeatureSection';
import { BackgroundCircles } from '../decoration';
import { homeFeatureSectionImage } from '@/assets';
import { StampIcon } from '../icons';
import Image from 'next/image';
import FlexWrapper from '../layout/FlexWrapper';
import Typography from '../semantics/Typography';

type Props = {
  location?: string;
};

const data = {
  title: '100% Satisfaction Guarantee',
  desc: {
    paragraph1:
      "We're so confident in the quality of our swim instructors that we stand behind them with our Sunsational Instructor Guarantee!",
    getSecondParagraph: (location?: string) =>
      `If your first lesson is anything less than sunsational, just let us know and we can either refund your unused lesson time or re-start your lesson package with a more suitable Instructor${
        location ? ` in ${location}` : ''
      }, your choice!`,
  },
};

const SatisfactionGuaranteeSection: React.FC<Props> = ({ location }) => {
  return (
    <FeatureSection
      backgroundColor='var(--color-yellow)'
      waveColor='var(--color-yellow)'
      className='my-28'
    >
      <FlexWrapper stackOrder='first-top'>
        <div className='lg:w-[60%] relative z-0'>
          {/* Background circles */}
          <div className='absolute w-full -top-[60px] lg:-top-[109px] -left-[100px] -z-[1]  lg:scale-[1.20]'>
            <BackgroundCircles />
          </div>
          <Image
            src={homeFeatureSectionImage}
            alt=''
            width={1000}
            className={'w-full'}
          />
          <div className='absolute bottom-0 right-0 sm:-bottom-[1%] sm:-right-[1%] lg:bottom-0 lg:right-0 w-[116px] h-[116px] lg:w-[200px] lg:h-[200px]'>
            <StampIcon />
          </div>
        </div>
        <div className='lg:w-[40%] relative z-0 px-4 lg:px-0 pb-24 lg:pb-0'>
          <Typography
            variant='h3'
            className='text-darkBlue mb-2 font-primary lg:max-w-[367px]'
          >
            {data.title}
          </Typography>
          <Typography
            variant='body2'
            className='lg:max-w-[367px] font-medium font-secondary text-brown'
          >
            {data.desc.paragraph1}
            <br />
            <br />
            {data.desc.getSecondParagraph(location)}
          </Typography>
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default SatisfactionGuaranteeSection;
