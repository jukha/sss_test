import { areasWeServiceHeroMobile, locationPagesHero } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

type Props = {
  title?: string;
  titleHighlight?: string;
  description?: string;
};

const SectionHero: React.FC<Props> = ({
  title = 'Swim Programs In Your Location:',
  titleHighlight = 'State',
  description = 'Find trusted swim instructors for your at-home swim lessons.',
}) => {
  return (
    <Hero
      desktopBgImage={locationPagesHero}
      mobileBgImage={areasWeServiceHeroMobile}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography
        variant='h1'
        className='md:max-w-full lg:max-w-[991px] mb-8'
      >
        {title}&nbsp;
        <span className='text-yellow relative inline-flex justify-center items-center '>
          {titleHighlight}
          {/* White highlight bubble behind the text */}
        </span>
      </Typography>
      <Typography
        variant='body1'
        className='text-white  max-w-[700px] leading-[125%] mb-[26px] font-secondary font-medium'
      >
        {description}
      </Typography>
    </Hero>
  );
};

export default SectionHero;
