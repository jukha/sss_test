import { swimSchoolsNearMeHero, swimSchoolsNearMeHeroMobile } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const heroSection = {
  title: 'Compare the Best Swim Schools in ',
  titleHighlight: '[city]',
  desc: 'Looking for reliable swim lessons near you? Compare top-rated swim schools in [city]. Plus, consider private, at-home lessons!',
};

const SwimSchoolsNearMeHeroSection = () => {
  return (
    <Hero
      desktopBgImage={swimSchoolsNearMeHero}
      mobileBgImage={swimSchoolsNearMeHeroMobile}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[778px] mb-8'
      >
        {heroSection.title}
        <span className='text-yellow inline-block text-start'>
          {heroSection.titleHighlight}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white max-w-[617px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
    </Hero>
  );
};

export default SwimSchoolsNearMeHeroSection;
