import { helpScoutSupportHero, helpScoutSupportHeroMobile } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import { WaveWithBorder } from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import Image from 'next/image';

const HelpScoutSupportHero = () => {
  return (
    <section className='bg-darkBlue bg-no-repeat relative -translate-y-5 overflow-hidden'>
      <Container className='relative z-[2]'>
        <div className='max-w-[1440px] max-md:pt-[116px] py-[200px] mx-auto'>
          <Typography
            variant='h1'
            className='!max-w-full lg:max-w-[690px] text-center'
          >
            How can we help?
          </Typography>
          <Typography
            variant='body2'
            className='text-white text-center my-6 leading-[125%] mb-[26px] font-secondary font-medium'
          >
            Find the answers to all of your questions
          </Typography>
          <div className='flex justify-center items-center gap-4'>
            <CustomInputForm
              placeholder='Search Knowledge Base'
              submitText='Search'
            />
          </div>
        </div>
      </Container>

      {/* Desktop Image */}
      <Image
        src={helpScoutSupportHero}
        quality={80}
        width={1000}
        alt=''
        className='hidden lg:block absolute inset-0 z-[-2] object-cover w-full h-full'
      />

      {/* Mobile Image */}
      <Image
        src={helpScoutSupportHeroMobile}
        quality={80}
        width={1000}
        alt=''
        className='lg:hidden absolute inset-0 z-[-2] object-cover w-full h-full'
      />

      {/* Bottom Stars */}
      <div className='w-36 h-[90px] lg:w-[188px] lg:h-[117px] absolute bottom-[72px] lg:bottom-[84px] right-0 lg:right-[15%] z-0 scale-x-[-1]'>
        <ThreeStareSlim
          color='var(--color-yellow)'
          preserveAspectRatio='none'
        />
      </div>

      {/* Center Right Circles */}
      <div className='absolute w-[282px] lg:w-[365px] right-[-220px] lg:right-[-100px] top-[35%] lg:top-1/2 -translate-y-1/2 rotate-[28deg] lg:rotate-[65deg] z-0'>
        <BackgroundCircles
          circlesOpacity='1'
          circlesColor='var(--color-lightBlue)'
        />
      </div>

      {/* Bottom Left Circles */}
      <div className='absolute w-[282px] lg:w-[365px] bottom-[-70px] left-[-150px] lg:left-[-91px] rotate-[28deg] z-0'>
        <BackgroundCircles
          circlesOpacity='1'
          circlesColor='var(--color-lightBlue)'
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-darkBlue mix-blend-multiply z-[-1]'></div>
      <div className='w-full absolute h-[54px] lg:translate-y-1/3 bottom-[-26px] lg:bottom-0 z-10'>
        <WaveWithBorder />
      </div>
    </section>
  );
};

export default HelpScoutSupportHero;
