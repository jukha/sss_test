import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1:
    'Get to your victory lap faster with a dedicated Sunsational private swim instructor',
  descriptionTop: [
    'At Sunsational Swim School, we personally match you with a qualified swim instructor based on your needs and availability. You choose the location--your own pool, public pool, etc.--along with the days that work best for you. Our full-time matching team carefully selects an instructor who’s best suited to help you achieve your goals and teach within your schedule. \n\n',
    'Your dedicated swim instructor will guide you through your swim lesson plan from start to finish. With personalized, one-on-one support, learning becomes fun, fast and focused. In fact, most of our adult students learn to swim in just 6 to 12 private lessons! We’ve helped thousands of adults learn to swim and overcome their fear of water by breaking swimming into simple, comfortable steps for learners of all levels.',
  ],
  buttonType: 'black',
  buttonLink: '#',
  buttonText: 'Book Now',
};

const GetYourVictoryTopSection = () => {
  return (
    <div>
      <GeneralFirstSection {...generalFirstSectionData} />;
    </div>
  );
};

export default GetYourVictoryTopSection;
