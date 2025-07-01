'use client';

import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import { useCityPageContext } from '@/app/(common)/city/context';

const generateGeneralFirstSectionData = (options: { city: string }): GeneralFirstSectionType => ({
  heading1: `Start swimming faster with a Sunsational private swim instructor in ${options.city}`,
  descriptionTop: [
    'Getting to swim classes can be tough – that’s why we bring baby swim lessons to you! \n',
    'We want your baby to be comfortable in the water, so we offer private parent and baby lessons or the option to create a small baby group (3 to 6 babies) with your friends. \n',
    'Our instructors make it easy for everyone to have fun while learning key water safety skills together. \n\n',
    "Babies will receive a certificate after completing their lessons. What's more fun than your baby earning a certificate with their friends?",
  ],
  buttonType: 'yellow',
  buttonLink: '/registration',
  buttonText: 'Book Now',
});

const StartSwimmingFasterSection = () => {
  const { cityName } = useCityPageContext();
  return <GeneralFirstSection {...generateGeneralFirstSectionData({ city: cityName })} />;
};

export default StartSwimmingFasterSection;
