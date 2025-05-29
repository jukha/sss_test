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
import LocalBabyLessonsPricing from './components/LocalBabyLessonsPricing';
import ParentsGroupsLessonPricingSection from './components/ParentsGroupsLessonPricingSection';
import InfantSwimLessonsNearMe from './components/InfantSwimLessonsNearMe';
import MembersOfSection from '@/components/sections/MembersOfSection';
import HowToPrepareYourBaby from './components/HowToPrepareYouBabySection';
import WaterSafeyPrioritySection from './components/WaterSafeyPrioritySection';
import HowParentsAndBabySection from './components/HowParentsAndBabySection';
import HowItWorksCitiesSection from '../common/HowItWorksCitiesSection';
import FeaturedBabyInstructorsSection from './components/FeaturedBabyInstructorsSection';

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
        {/* How does Sunsational School work? - Section */}
        <HowItWorksCitiesSection />
        {/* Why choose Sunsational Swim School? - Section */}
        <WhyChooseOurSwimSchool />
        {/* 100% satisfaction guarantee - Section */}
        <SatisfactionGuaranteeSection
          image={localBabySatisfactionGuaranteeImg}
        />
        {/* Pricing for local baby swim lessons - Section */}
        <LocalBabyLessonsPricing />
        {/* Parents & Tots Group Lessons Pricing Section */}
        <ParentsGroupsLessonPricingSection />
        {/*Private swim lessons vs group - section */}
        <PrivateVsGroupLessonsSection />
        {/* Infant swim lessons near me - Section */}
        <InfantSwimLessonsNearMe />
        {/* Levels we teach on our swim lesson programs - Section */}
        <SkillLevelsSection
          skillsToShow={[
            SkillTitle.Tadpole,
            SkillTitle.Starfish,
            SkillTitle.Goldfish,
            SkillTitle.Jellyfish,
          ]}
        />
        {/* Members of section */}
        <MembersOfSection />
        {/* 5 reasons to start swim lessons for your baby now - Section */}
        <FiveReasonsToStartSection />
        {/* How parent and baby swim lessons help build confidence around the water - Section */}
        <HowParentsAndBabySection/>
        {/* How to prepare your baby for swim lessons - Section */}
        <HowToPrepareYourBaby />
        {/* Water Safety Priority Section */}
        <WaterSafeyPrioritySection />
        {/* Featured baby swim instructors in [city, state] - Section */}
        <FeaturedBabyInstructorsSection />

        {/*Featured Instructors with map will be added when api for it is ready */}

        {/* Service Locations - Section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
};

export default LocalBaby;
