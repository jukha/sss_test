import { sunsationalInstructorImg } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Swim instructor jobs available: Apply now',
  media: 'https://www.youtube.com/embed/8b1d2a3c5f4', // Example video URL
  posterImage: sunsationalInstructorImg,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop:
    'We’re currently looking for independent swim instructors for Spring/Summer 2025 and beyond!',
  descriptionsBottom: [
    'If you are self-motivated, have 2+ seasons of experience, CPR/First Aid certification, a reliable vehicle, and love working with kids…we’d love to hear from you. Apply today, participate in a short interview, pass a background and reference check, and partner with a team that’s making a splash nationwide.',
  ],
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Apply Now',
};

const SwimInstructorJobsSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default SwimInstructorJobsSection;
