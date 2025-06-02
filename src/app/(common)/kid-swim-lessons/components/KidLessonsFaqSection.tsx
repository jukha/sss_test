import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FAQsSection from '@/components/sections/FaqSection';
import FeaturedBannerSection from '@/components/sections/FeaturedBannerSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const KidLessonsFaqSection = () => {
  const faqData = [
    {
      question:
        'How long does it take to learn how to swim with private lessons?',
      answer:
        'We require that a parent or guardian be present during all lessons. Parents can supervise lessons, either from inside the house, or from the pool deck. If your child starts acting out, we would recommend watching the lessons out of their sight, since young children perform better if there is only one authority figure to focus on at a time.\n\nFor children under 2 years we recommend a parent is in the water for the child to be the most comfortable. Children 2 years and older get the most out of lessons without the parent in the water and often with the parent out of direct sight (preschoolers often act up when the parent is in view).',
    },
    {
      question: 'Where is your pool located?',
      answer: '',
    },
    {
      question: "What happens if I don't have a pool at home?",
      answer: '',
    },
    {
      question: 'What qualifications do your instructors have?',
      answer: '',
    },
    {
      question: 'What is your Learn to Swim Guarantee?',
      answer: '',
    },
    {
      question: 'What is the cost and how many lessons are typically required?',
      answer: '',
    },
    {
      question: 'When can I register? How?',
      answer: '',
    },
  ];

  return (
    <div className='py-16'>
      <FeaturedBannerSection
        bgColor='var(--color-lightYellow)'
        borderColor='var(--color-yellow)'
        decorationIconRight={<ThreeStareSlim />}
        decorationIconRightClasses='absolute right-[0px] top-0 w-[100px] h-[120px]'
      >
        <div className='flex flex-col justify-start items-center  w-full'>
          <div className='flex items-center gap-0 mb-2 md:mb-4'>
            <Typography
              variant='h3'
              className='font-bold font-primary leading-[110%] text-offBlack'
            >
              Got questions?
            </Typography>
          </div>

          <Typography
            variant='body2'
            className='font-bold font-primary leading-[110%] text-offBlack mb-1 md:mb-0'
          >
            We have answers.What age groups do you offer private swim lessons
            for?
          </Typography>
        </div>
      </FeaturedBannerSection>
      <FAQsSection data={faqData} />
    </div>
  );
};

export default KidLessonsFaqSection;
