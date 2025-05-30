import {
  localTeenHero,
  localTeenHeroMobile
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const heroSection = {
  title: 'Teen Swim Lessons in',
  titleHighlight: 'Los Angeles',
  desc: 'Looking for the best private swim lessons near me? It’s always a Sunsational time to learn to swim in [city or area]! Our private swim lessons in [city] ensure rapid progress in essential water safety skills.',
};

const LocalTeenHero = () => {
  return (
    <Hero
      desktopBgImage={localTeenHero}
      mobileBgImage={localTeenHeroMobile}
      heroBottomVariant='citypage'
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[670px] mb-8'
      >
        {heroSection.title}
        <span className='text-yellow inline-block text-start'>
          {heroSection.titleHighlight}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[726px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Book Swimming Lessons'}
          buttonClasses='bg-brightYellow text-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
          link='/registration'
        />
      </div>
    </Hero>
  );
};

export default LocalTeenHero;
