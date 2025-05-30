import {
  localTeenGeneralImage2
} from '@/assets';
import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'Intermediate swim lessons for teens in [city]',
  media: localTeenGeneralImage2,
  mediaAlt: 'Teen diving into a pool during a swim lesson',
  descriptionTop: [
    'For teens who already have a grasp of swimming basics, formal swimming lessons can provide a perfect way to go from a beginner swimmer to swim team-ready.\n\n',
    <>
      Intermediate private lessons will usually include developing the
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        mechanics of the various competitive strokes
      </a>
      ; freestyle (or front crawl), backstroke,
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        butterfly
      </a>
      , and
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        breaststroke
      </a>
      . For a teen looking to join a swim team, a working knowledge of these
      strokes is a must.
    </>,
    '\n\nWhile a teen will learn how to do these swimming strokes from a swim team coach, private swim lessons ensure that a swimmer has a strong grasp on proper stroke form. Intermediate lessons for teens can also include introductions to other competitive swim skills, such as diving, flip turns, breathing technique, treading water and underwater streamline work.',
  ],
  descriptionsBottom: [
    <>
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        Water safety&nbsp;
      </a>
      is a skill that should not be delayed. The sooner they start with a&nbsp;
      <a href='#' className='text-off-black font-bold md:font-medium underline'>
        private swim instructor
      </a>
      , the better prepared they’ll be for pool parties, beach trips, or water
      parks.
    </>,
    'Some teens may feel embarrassed about learning to swim. That’s why private swim lessons are so effective—no audience, no pressure, just one-on-one guidance from a skilled instructor focused on helping your teen succeed.',
  ],
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Get Started',
};

const IntermediateSwimLessonsSection = () => {
  return <GeneralFirstSection {...generalFirstSectionData} />;
};

export default IntermediateSwimLessonsSection;
