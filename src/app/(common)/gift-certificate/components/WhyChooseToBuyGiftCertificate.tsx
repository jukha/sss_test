import React from 'react';
import { whyChooseToBuyGiftCertificateImg } from '@/assets';
import Image from 'next/image';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { BackgroundCircles } from '@/components/decoration';
import { StampIcon } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import ArrowButton from '@/components/kit/buttons/ArrowButton';

const content = {
  title: (
    <>
      Why choose to buy a{' '}
      <span className='text-orange'>Sunsational gift certificate</span> for a
      loved one?
    </>
  ),
  description:
    'We’ve all been there: we want to give someone a gift but spend hours walking through malls or scrolling through e-commerce sites for the perfect gift. Well, your search is over. The best gifts are experiences!',
  idealFor: [
    'Birthdays, holidays, and special occasions',
    'Parents seeking water safety for their kids',
    'Grandparents or family members who want to gift a meaningful experience',
  ],
};

const WhyChooseToBuyGiftCertificate = () => {
  return (
    <FeatureSection
      backgroundColor={'var(--color-off-white)'}
      waveColor={'var(--color-off-white)'}
      className='my-28'
    >
      <FlexWrapper stackOrder='first-top'>
        <div className='lg:w-[60%] relative z-0'>
          {/* Background circles */}
          <div className='absolute w-full -top-[60px] lg:-top-[109px] -left-[100px] -z-[1]  lg:scale-[1.15]'>
            <BackgroundCircles circlesColor={'var(--color-yellow)'} />
          </div>
          <Image
            src={whyChooseToBuyGiftCertificateImg}
            alt=''
            width={1000}
            className={'w-full'}
          />
          <div className='absolute bottom-0 right-0 sm:-bottom-[1%] sm:-right-[1%] lg:bottom-0 lg:right-0 w-[116px] h-[116px] lg:w-[200px] lg:h-[200px]'>
            <StampIcon />
          </div>
        </div>
        <div className='lg:w-[40%] relative z-0 px-4 lg:px-0 pb-24 lg:pb-0 flex flex-col gap-6'>
          <Typography
            variant='h3'
            className='text-darkBlue mb-2 font-primary lg:max-w-[425px]'
          >
            {content.title}
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary font-bold md:font-medium leading-[120%]'
          >
            {content.description}
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary font-bold  leading-[120%]'
          >
            Sunsational gift certificates are ideal for:
          </Typography>
          <div className='flex flex-col gap-2'>
            {content.idealFor.map((el, i) => {
              return (
                <Typography
                  key={i}
                  variant='body2'
                  className='font-secondary font-bold md:font-medium leading-[120%] flex gap-2'
                >
                  <span className='font-black'>.</span>
                  {el}
                </Typography>
              );
            })}
          </div>
          <div className='flex justify-start items-center gap-4 ml-[30px]'>
            <ArrowButton
              text={'Buy a gift certificate today'}
              buttonClasses='bg-brightYellow text-offBlack'
              IconClasses='bg-offBlack'
              iconColor='var(--color-white)'
              shadow={true}
              shadowClasses='bg-orange'
              link='/registration'
            />
          </div>
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default WhyChooseToBuyGiftCertificate;
