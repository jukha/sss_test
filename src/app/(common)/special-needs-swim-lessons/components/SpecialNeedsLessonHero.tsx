import { specialNeedsLessonHero, specialNeedsLessonHeroMobile } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';

const content = {
  title: 'Special Needs Swim Lessons Program',
  description:
    'Private, at-home special needs swim lessons. One-on-one instruction for Autism, ADHD, Down Syndrome, and more – in your home pool.',
};

const SpecialNeedsLessonHero = () => {
  return (
    <Hero
      desktopBgImage={specialNeedsLessonHero}
      mobileBgImage={specialNeedsLessonHeroMobile}
      hasBottomBar={false}
    >
      <Typography variant='h1' className='max-w-[672px] mb-10'>
        {content.title}
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[672px] mb-[26px] font-secondary leading-[120%]'
      >
        {content.description}
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <CustomInputForm
          outlineColor='transparent'
          placeholder='Your Zip Code'
          submitText='Search'
        />
      </div>
      <Typography
        variant='custom'
        className='font-secondary font-bold leading-[125%] text-2xl mt-4 text-white'
      >
        <span className='text-yellow'>Enter your zip code&nbsp;</span>
        to view local pricing
      </Typography>
    </Hero>
  );
};

export default SpecialNeedsLessonHero;
