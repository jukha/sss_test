import React from 'react';
import { localBabySatisfactionGuaranteeImg } from '@/assets';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import FiveReasonsToStartSection from './components/FiveReasonsToStartSection';
import FunSafeEffectiveLessonsSection from './components/FunSafeEffectiveLessonsSection';
import LocalBabyHero from './components/LocalBabyHero';
import WhenBabiesStartSection from './components/WhenBabiesStartSection';
import WhyChooseOurSwimSchool from './components/WhyChooseOurSwimSchool';
import WhyParentsLoveSection from './components/WhyParentsLoveSection';
import { SkillTitle } from '@/enum/skill-title.enum';

const LocalBaby = () => {
  return (
    <div>
      <main>
        <LocalBabyHero />
        {/* Fun, safe & effective baby swim lessons section */}
        <FunSafeEffectiveLessonsSection />
        {/* Customer reviews section */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
        />
        {/* Why parents love Sunsational baby swim lessons section */}
        <WhyParentsLoveSection />
        {/* When Babies start swim lessons - General section */}
        <WhenBabiesStartSection />
        {/*Private swim lessons vs group - section */}
        <PrivateVsGroupLessonsSection />
        {/* Levels we teach on our swim lesson programs - Section */}
        <SkillLevelsSection
          skillsToShow={[
            SkillTitle.Tadpole,
            SkillTitle.Starfish,
            SkillTitle.Goldfish,
            SkillTitle.Jellyfish,
          ]}
        />
        {/* 5 reasons to start swim lessons for your baby now - Section */}
        <FiveReasonsToStartSection />
        {/* Why choose Sunsational Swim School? - Section */}
        <WhyChooseOurSwimSchool />
        {/* 100% satisfaction guarantee - Section */}
        <SatisfactionGuaranteeSection
          image={localBabySatisfactionGuaranteeImg}
        />
        {/* Service Locations - Section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
};

export default LocalBaby;
