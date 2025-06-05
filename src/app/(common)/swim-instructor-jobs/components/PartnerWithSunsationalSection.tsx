import PartnerPerksSection from '@/components/sections/PartnerPerksSection';
import React from 'react';

const content = {
  descriptionTop:
    "Sunsational Swim School is a nationwide leader in private swim instruction, connecting families with qualified independent swim instructors. We're currently welcoming experienced swimming instructors to apply to join our growing network of swim teachers coast-to-coast. By joining us, you’ll enjoy:",
  descriptionBottom:
    'Sunsational Swim School brings essential swim skills to you, helping everyone enjoy the water more safely.',
};

const PartnerWithSunsationalSection = () => {
  return (
    <PartnerPerksSection
      descriptionBottom={content.descriptionBottom}
      descriptionTop={content.descriptionTop}
    />
  );
};
export default PartnerWithSunsationalSection;
