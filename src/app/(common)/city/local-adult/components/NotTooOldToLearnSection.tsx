import GeneralFirstSection from '@/components/sections/GeneralFirstSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import { GeneralFirstSectionType } from '@/types/general-section.types';

const generalFirstSectionData: GeneralFirstSectionType = {
  heading1: 'You’re never too old to learn',
  descriptionTop: [
    'Learning to swim is an achievement to be proud of at any age, especially considering that nearly half of all American adults fear the deep end while 37% can’t swim at all. \n\n',
    'Our private adult swim lessons use personalized programs and proven methods to help adults of all levels build confidence, overcome their fear of water, and master essential swimming skills in a supportive environment.',
  ],
};

const NotTooOldToLearnSection = () => {
  return (
    <>
      <GeneralFirstSection {...generalFirstSectionData} />
      <SkillLevelsSection
        skillsToShow={[
          SkillTitle.AdultBeginner,
          SkillTitle.AdultIntermediate,
          SkillTitle.AdultAdvanced,
          SkillTitle.SpecializedTraining,
        ]}
        showDecorationElements={false}
        sectionHeader=''
      />
    </>
  );
};

export default NotTooOldToLearnSection;
