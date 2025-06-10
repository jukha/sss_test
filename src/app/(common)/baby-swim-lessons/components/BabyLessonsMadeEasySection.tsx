import { babyLessonsMadeEasyImg } from '@/assets';
import { Bubbles } from '@/components/decoration';
import Container from '@/components/layout/Container';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Baby swim lessons made easy for parents',
  buttonText: 'Book Now',
  buttonLink: '/registration',
  buttonType: 'yellow',
  media: babyLessonsMadeEasyImg,
  descriptionTop:
    'Getting to swim classes can be tough – that’s why we bring baby swim lessons to you! We want your baby to be comfortable in the water, so we offer private parent and baby lessons or the option to create a small baby group (3 to 6 babies) with your friends.Our instructors make it easy for everyone to have fun while learning key water safety skills together. \n\n Babies will receive a certificate after completing their lessons. What’s more fun than your baby earning a certificate with their friends?',
};

const BabyLessonsMadeEasySection = () => {
  return (
    <Container className='relative overflow-x-clip'>
      <GeneralFirstSection {...generalFirstSectionData} />
      <div className='absolute hidden lg:block z-[-1] h-[933px] w-[1200px]  right-[-25%] bottom-[-5%] opacity-20'>
        {<Bubbles color='var(--color-blue)' />}
      </div>
    </Container>
  );
};

export default BabyLessonsMadeEasySection;
