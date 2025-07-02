import { areasWeServiceHero} from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const heroSection = {
  title: 'Areas We Service',
  desc: 'Sunsational Swim School is America’s largest mobile swim school, offering private, at-home swim lessons for all ages. ',
};

const AreasWeServiceHero = () => {
  return (
    <Hero
      desktopBgImage={areasWeServiceHero}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[500px] mb-8'
      >
        {heroSection.title}
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[500px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
    </Hero>
  );
};

export default AreasWeServiceHero;
