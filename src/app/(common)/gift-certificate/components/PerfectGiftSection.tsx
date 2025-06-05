import BackgroundSun from '@/components/decoration/BackgroundSun';
import FeatureSection from '@/components/FeatureSection';
import {
  MommyAndMeIcon,
  ProtectIcon,
  SmileyIcon,
} from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import TallFeaturesCard from '@/components/shapes/TallFeaturesCard';
import React from 'react';

const data = {
  heading: 'The perfect gift that keeps on giving',
  guarantees: [
    {
      title: 'Good anytime, anywhere',
      description1:
        'Sunsational Swim School gift certificates never expire. With year-round, private swim instructors in over 2,000 cities across America, use your gift certificate to learn to swim in your backyard or in the infinity pool of your Airbnb on your next vacation.',
      icon: <SmileyIcon />,
    },
    {
      title: 'Available instantly',
      description1:
        'Sunsational Swim School gift certificates never expire. With year-round, private swim instructors in over 2,000 cities across America, use your gift certificate to learn to swim in your backyard or in the infinity pool of your Airbnb on your next vacation.',
      icon: <ProtectIcon hasWhiteBg={true} />,
    },
    {
      title: 'Lifetime memories',
      icon: <MommyAndMeIcon />,
      description1:
        'Swimming is a gift that lasts a lifetime and opens up an entire world of new experiences. From adventures like whitewater rafting to making friends at backyard pool parties, swimming connects you to others and the world around you.',
    },
  ],
};

const PerfectGiftSection = () => {
  return (
    <FeatureSection
      backgroundColor={'var(--color-lightBlue)'}
      waveColor={'var(--color-lightBlue)'}
      className='my-24 relative'
    >
      <Container className='flex flex-col justify-start items-center gap-16'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[842px] text-center z-10'
        >
          {data.heading}
        </Typography>
        <div className='flex flex-wrap gap-12 justify-center items-center z-10'>
          {data.guarantees.map((el, index) => (
            <TallFeaturesCard
              key={index}
              title={el.title}
              description1={el.description1}
              icon={el.icon}
              minHeight='560px'
            />
          ))}
        </div>
      </Container>
      <div className='absolute h-full w-full m-0 inset-0'>
        <BackgroundSun />
      </div>
    </FeatureSection>
  );
};

export default PerfectGiftSection;
