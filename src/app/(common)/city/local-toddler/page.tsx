import LocalToddlerHero from './components/LocalToddlerHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SafeFunLessonsAtHomeSection from './components/SafeFunLessonsAtHomeSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import WhatAreSurvivalLessonsSection from './components/WhatAreSurvivalLessonsSection';
import WhyToddlerLessonsSection from './components/WhyToddlerLessonsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import MembersOfSection from '@/components/sections/MembersOfSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { localToddlerSatisfactionGuarantee } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import WhyChooseUsForToddler from './components/WhyChooseUsForToddler';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';
import BenefitsShowCaseSection from '@/components/sections/BenefitsShowCaseSection';
import LocalToddlerLessonsPricing from './components/LocalToddlerLessonsPricing';

const LocalToddler = () => {
  return (
    <div>
      <main>
        <LocalToddlerHero />
        {/* Safe, fun, and taught at home! - section */}
        <SafeFunLessonsAtHomeSection />
        {/* Sunsational clients love our swimming lessons - section */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
        />
        {/* What are survival float lessons? - section */}
        <WhatAreSurvivalLessonsSection />
        {/* Why are swimming lessons so important for toddlers? - section */}
        <WhyToddlerLessonsSection />
        {/*Levels we teach on our Swim Lesson Programs - section */}
        <SkillLevelsSection
          showDecorationElements={false}
          skillsToShow={[
            SkillTitle.Tadpole,
            SkillTitle.Starfish,
            SkillTitle.Goldfish,
            SkillTitle.Jellyfish,
            SkillTitle.Seahorse,
            SkillTitle.Dolphin,
            SkillTitle.Seal,
          ]}
        />
        {/* Members of - section */}
        <MembersOfSection />
        {/* Benefits of kids swimming lessons - section  */}
        <BenefitsShowCaseSection />
        {/* Satisfaction Guarantee - section */}
        <SatisfactionGuaranteeSection
          bgColor='var(--color-lightBlue)'
          image={localToddlerSatisfactionGuarantee}
          bgCirclesColor='var(--color-paleTeal)'
        />
        {/* Private vs Group Lessons - section */}
        <PrivateVsGroupLessonsSection />
        {/* Why Choose Us for Toddler Swimming Lessons - section */}
        <WhyChooseUsForToddler />
        {/* Toddlers swimming lessons pricing - section */}
        <LocalToddlerLessonsPricing />
        {/*5-Star Ratings from Happy Swimmers - section */}
        <SocialMediaReviewsSection
          heading='1800+ 5-Star Ratings from Happy Swimmers'
          description='Read Sunsational reviews from 900+ happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.'
        />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
};

export default LocalToddler;
