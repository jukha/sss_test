import { localToddlerGeneralImage } from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Safe, fun, and taught at home!',
  media: localToddlerGeneralImage,
  mediaAlt: 'Baby enjoying a swim lesson',
  descriptionTop: (
    <>
      With our{' '}
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        Learn-to-Swim Guarantee
      </a>
      , if your toddler can’t demonstrate the “Sunsational Swim Sequence” by the
      twelfth lesson, we’ll give you up to four additional classes for free!
    </>
  ),
  descriptionsBottom: [
    'Sunsational Swim School brings essential swim skills to your home pool or local community pool, helping everyone enjoy the water more safely across the [city nickname or city].',
  ],
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Get Started',
};

const SafeFunLessonsAtHomeSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default SafeFunLessonsAtHomeSection;
