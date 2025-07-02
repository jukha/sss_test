import { instructorsHero } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const HeroInstructors = () => {

  return (
    <Hero
      desktopBgImage={instructorsHero}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1'>Our Swim</Typography>
      <Typography variant='h1'>Instructors</Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-secondary leading-[120%]'
      >
        Meet Sunsational Swim School’s private swim instructors offering personalized lessons for all ages at home or community pools.
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-brightYellow text-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
        />
      </div>
    </Hero>
  );
};

export default HeroInstructors;
