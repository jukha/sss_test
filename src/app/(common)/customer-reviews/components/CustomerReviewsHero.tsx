import { customerReviewsHero } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';

const heroSection = {
  title: 'Sunsational Reviews',
  desc: 'Since 2009, Sunsational Swim School has been on a mission to save lives and create unforgettable swim experiences. Our top-rated instructors help students grow, gain confidence in the water, and reach their swimming goals. Join the #1 rated swim school in America and experience the Sunsational difference today.',
};

const CustomerReviewsHero = () => {
  return (
    <Hero
      desktopBgImage={customerReviewsHero}
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
        className='text-white  max-w-[578px] leading-[125%] mb-[26px] font-secondary font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
    </Hero>
  );
};

export default CustomerReviewsHero;
