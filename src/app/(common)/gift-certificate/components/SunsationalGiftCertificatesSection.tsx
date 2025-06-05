import {
  sunsationalGiftCertificateImg,
} from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Sunsational Swim School gift certificates',
  media: sunsationalGiftCertificateImg,
  buttonLink: '/',
  buttonText: 'Buy a gift certificate today',
  buttonType: 'yellow', 
  descriptionTop:
    'From your grandchildren who live on the other side of the country to your best friend with a new baby, giving the gift of swimming to someone you love has never been easier. Purchase a Sunsational Swim School gift certificate good for a complete package of at-home swim lessons, or purchase a custom amount that can be applied to any future lessons.',
};

const SunsationalGiftCertificatesSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default SunsationalGiftCertificatesSection;
