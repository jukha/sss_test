import { kidsSwimLessonHero, kidsSwimLessonHeroMobile } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';

const KidSwimLessonHero = () => {
  return (
    <Hero
      desktopBgImage={kidsSwimLessonHero}
      mobileBgImage={kidsSwimLessonHeroMobile}
      hasBottomBar={false}
    >
      <Typography variant='h1' className='max-w-[610px] mb-10'>
        Kid Swim Lessons Program
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[610px] mb-[26px] font-secondary leading-[120%]'
      >
        Sunsational Swim School is the leading provider of swimming lessons for
        kids and has thousands of swim instructors in cities throughout the US.
        Unlike traditional swim schools, we bring expert instructors to your
        home or community pool.
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

export default KidSwimLessonHero;
