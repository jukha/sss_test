import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import MembersOfSection from '@/components/sections/MembersOfSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeBaby } from '@/assets';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import BabySwimHero from './components/BabySwimHero';
import IsYourBabySafeSection from './components/IsYourBabySafeSection';
import WhyBabySwimLessons from './components/WhyBabySwimLessons';
import WhenCanBabyStartSection from './components/WhenCanBabyStartSection';
import BabyLessonsMadeEasySection from './components/BabyLessonsMadeEasySection';
import BenefitsOfBabySwimLessons from './components/BenefitsOfBabySwimLessons';
import WhyChooseUsForBabySection from './components/WhyChooseUsForBabySection';
import HowToPrepareYourBabySection from './components/HowToPrepareYourBabySection';
import WaterSafetySection from './components/WaterSafetySection';
import BabyLessonsFaqSection from './components/BabyLessonsFaqSection';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';

export default function BabySwimLessons() {
  return (
    <main className='flex flex-col'>
      {/* Hero section for baby swim lessons */}
      <BabySwimHero />
      {/* Is your baby safe in and around water? - section */}
      <IsYourBabySafeSection />
      {/* Why are baby swim lessons important? - section */}
      <WhyBabySwimLessons />
      {/* When can babies start swim lessons? - section */}
      <WhenCanBabyStartSection />
      {/* Making baby lessons easy and accessible - section */}
      <BabyLessonsMadeEasySection />
      {/* Skill levels for baby swimming progress - section */}
      <SkillLevelsSection
        skillsToShow={[
          SkillTitle.BabyTadpole,
          SkillTitle.BabyStarfish,
          SkillTitle.BabyGoldfish,
          SkillTitle.BabyJellyfish,
        ]}
        sectionHeader=''
      />
      {/* Customer reviews for baby swim lessons - section */}
      <CustomerReviewsSection
        heading='Parents are raving about our baby swim lessons'
        description='Check out our 4.9 rating out of 1852 reviews'
      />
      {/* Organizations we're members of - section */}
      <MembersOfSection />
      {/* Benefits of baby swim lessons - section */}
      <BenefitsOfBabySwimLessons />
      {/* Why choose Sunsational Swim School for baby swim lessons? - section */}
      <WhyChooseUsForBabySection />
      {/* How to prepare your baby for swim lessons - section */}
      <HowToPrepareYourBabySection />
      {/* Water safety for babies - section */}
      <WaterSafetySection />
      {/* 100% Satisfaction Guarantee - section */}
      <SatisfactionGuaranteeSection
        bgColor='var(--color-lightBlue)'
        bgCirclesColor='var(--color-teal)'
        image={satisfactionGuaranteeBaby}
      />
      {/* How it works - get swim lessons at home - section */}
      <HowItWorksSection />
      {/* FAQ for baby swim lessons - section */}
      <BabyLessonsFaqSection />
      {/* Social media reviews section */}
      <SocialMediaReviewsSection />
      {/* Service areas - section */}
      <ServiceLocationsSection />
      {/* List of all available locations - section */}
      <LocationsListSection />
    </main>
  );
}
