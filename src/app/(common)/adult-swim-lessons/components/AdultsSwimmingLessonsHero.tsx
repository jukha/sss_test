import { adultsSwimLessonHero, adultsSwimLessonHeroMobile } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';

const AdultsSwimmingLessonsHero = () => {
  return (
    <Hero
      desktopBgImage={adultsSwimLessonHero}
      mobileBgImage={adultsSwimLessonHeroMobile}
      hasBottomBar={false}
    >
      <Typography variant='h1' className='max-w-[610px] mb-10'>
        Adult Swim Lessons Program
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[610px] mb-[26px] font-secondary leading-[120%]'
      >
        Our expert swim instructors provide personalized, 1-on-1 adult swim
        lessons to help you reach your goals. Learn to swim at your own pace
        with America’s #1 swim school.
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

export default AdultsSwimmingLessonsHero;
