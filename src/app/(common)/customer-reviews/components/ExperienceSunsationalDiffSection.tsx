import BackgroundSun from '@/components/decoration/BackgroundSun';
import FeatureSection from '@/components/FeatureSection';
import { ApprovalIcon, ProtectIcon } from '@/components/icons';
import SmileyIcon from '@/components/icons/SmileyIcon';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import TallFeaturesCard from '@/components/shapes/TallFeaturesCard';
import React from 'react';

const data = {
  heading: 'Experience the Sunsational Difference',
  guarantees: [
    {
      title: '100% Satisfaction Guarantee',
      description1:
        'Love your instructor and swim lessons or get a fresh start! If you’re unhappy after your first lesson, we’ll either restart your entire package with a new instructor or refund your unused lessons – your choice! Just contact us within 72 hours of your first lesson (and before you have a second one).',
      icon: <SmileyIcon />,
    },
    {
      title: 'Learn to Swim Guarantee',
      description1:
        'Our water safety program helps young beginners (ages 3–17) learn essential swim survival skills. Most kids master these within 12 private lessons, but if they need more time to meet the goal, we’ll provide up to 4 extra 30-minute lessons for free.',
      description2:
        'To qualify, students must complete 3+ lessons per week in a minimum 82°F pool and do not require special needs instruction or extreme fear counseling.',
      icon: <ProtectIcon hasWhiteBg={true} />,
    },
    {
      title: 'Zero-Risk Registration',
      description1:
        'Sign up with no upfront charges! We’ll only bill you once we’ve matched you with an instructor available for all your lessons. The matching process usually takes 1–5 business days, and you’ll have two days to confirm before we process the payment.',
      description2:
        'If we can’t match you within the normal timeframe, our customer service team will contact you and give you the option to either cancel or continue to wait for an available swim instructor. Your choice.',
      icon: <ApprovalIcon />,
    },
  ],
};

const ExperienceSunsationalDiffSection = () => {
  return (
    <FeatureSection
      backgroundColor={'var(--color-lightBlue)'}
      waveColor={'var(--color-lightBlue)'}
      className='relative'
    >
      <Container className='flex flex-col justify-start items-center gap-16 max-lg:py-20'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[842px] text-center z-10'
        >
          {data.heading}
        </Typography>
        <div className='flex flex-wrap gap-12 justify-center items-center z-10'>
          {data.guarantees.map((el, index) => (
            <TallFeaturesCard key={index} {...el} />
          ))}
        </div>
      </Container>
      <div className='absolute h-full w-full m-0 inset-0'>
        <BackgroundSun />
      </div>
    </FeatureSection>
  );
};

export default ExperienceSunsationalDiffSection;
