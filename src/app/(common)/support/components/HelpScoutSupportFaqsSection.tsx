import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FAQsSection from '@/components/sections/FaqSection';
import FeaturedBannerSection from '@/components/sections/FeaturedBannerSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const faqData = [
  {
    question: 'Do parents need to be at the lessons? In the water?',
    answer:
      'We require that a parent or guardian be present during all lessons. Parents can supervise lessons, either from inside the house, or from the pool deck. If your child starts acting out, we would recommend watching the lessons out of their sight, since young children perform better if there is only one authority figure to focus on at a time. \n\nFor children under 2 years we recommend a parent is in the water for the child to be the most comfortable. Children 2 years and older get the most out of lessons without the parent in the water and often with the parent out of direct sight (preschoolers often act up when the parent is in view).',
  },
  {
    question: 'What is the Learn to Swim Guarantee?',
    answer:
      'The Learn to Swim Guarantee is our promise that your child will learn to swim within a certain number of lessons, or we will provide additional lessons at no extra cost.',
  },
  {
    question: 'How fast will my child learn to swim?',
    answer:
      'The speed at which your child learns to swim depends on various factors, including their age, comfort level in the water, and previous experience. Our instructors tailor lessons to each child’s needs to ensure effective learning.',
  },
];

const HelpScoutSupportFaqsSection = () => {
  return (
    <section className='section'>
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
              FAQ
            </Typography>
          </div>

          <Typography
            variant='body2'
            className='font-bold font-primary leading-[110%] text-offBlack mb-1 md:mb-0'
          >
            Still thinking about it? We are always here to answer any of your
            questions 24hr a day.
          </Typography>
        </div>
      </FeaturedBannerSection>
      <FAQsSection data={faqData} />
    </section>
  );
};

export default HelpScoutSupportFaqsSection;
