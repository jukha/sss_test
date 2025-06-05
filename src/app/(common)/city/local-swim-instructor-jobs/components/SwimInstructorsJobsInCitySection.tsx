import { swimInstructorJobsInCityImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import React from 'react';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Swim instructor jobs in [city] available: Apply now',
  media: swimInstructorJobsInCityImg,
  buttonText: 'Apply Now',
  buttonLink: '#',
  descriptionTop:
    'Join Sunsational Swim School, America’s #1 provider of mobile swim lessons. We’re currently partnering with swim instructors in [city] for Spring/Summer 2025 and beyond!',
  descriptionsBottom: [
    'If you are self-motivated, have 2+ seasons of experience, CPR/First Aid certification, a reliable vehicle, and love working with kids…we’d love to hear from you. Apply today, participate in a short interview, pass a background and reference check, and partner with a team that’s making a splash nationwide.',
  ],
};

const SwimInstructorsJobsInCitySection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default SwimInstructorsJobsInCitySection;
