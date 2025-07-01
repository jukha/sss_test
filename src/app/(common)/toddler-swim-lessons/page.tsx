import ToddlerSwimLessonHero from './components/ToddlerSwimLessonHero';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import MembersOfSection from '@/components/sections/MembersOfSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeToddlerImg } from '@/assets';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SafeFunTaughtAtHomeToddlerSection from './components/SafeFunTaughtAtHomeToddlerSection';
import WhySwimLessonImportantForToddlersSection from './components/WhySwimLessonImportantForToddlersSection';
import WhySurvivalFloatLessonsSection from './components/WhySurvivalFloatLessonsSection';
import BenefitsOfSwimLessonsForToddlers from './components/BenefitsOfSwimLessonsForToddlers';
import ToddlerLessonsFaqSection from './components/ToddlerLessonsFaqSection';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';

export default function ToddlerSwimLessons() {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      <ToddlerSwimLessonHero />
      {/* Safe, fun, and taught at home! - section */}
      <SafeFunTaughtAtHomeToddlerSection />
      {/* Why our students and parents love us - section */}
      <ServerCustomerReviewsSection
        ageGroup='toddler'
        heading='Why our students and parents love us'
        description='Check out our 4.9 rating out of 1852 reviews'
        hideButton={true}
      />
      {/* Why are swimming lessons so important for toddlers? - section */}
      <WhySwimLessonImportantForToddlersSection />
      {/* What are survival float lessons?- section */}
      <WhySurvivalFloatLessonsSection />
      {/* What skills will your toddler learn in our lessons? - section */}
      <SkillLevelsSection
        skillsToShow={[SkillTitle.Tadpole, SkillTitle.Starfish, SkillTitle.Goldfish, SkillTitle.Jellyfish]}
        sectionHeader='What skills will your toddler learn in our lessons?'
      />
      {/* Members of - section */}
      <MembersOfSection />
      {/* Benefits of swim lessons for toddlers - section */}
      <BenefitsOfSwimLessonsForToddlers />
      {/* Swim Lessons With Local Swim Instructors You Can Trust - section */}
      <WhatMakesOurInstructorsSection />
      {/* 100% Satisfaction Guarantee - section */}
      <SatisfactionGuaranteeSection
        image={satisfactionGuaranteeToddlerImg}
        bgCirclesColor='var(--color-orange)'
        bgColor='var(--color-off-white)'
      />
      {/* 4000+ 5-Star Ratings from Thousands of Happy Customers - section */}
      <ServerSocialMediaReviewsSection />
      {/* Get private swimming lessons at home! - section */}
      <HowItWorksSection />
      {/* Faq - section */}
      <ToddlerLessonsFaqSection />
      {/* Service locations - section */}
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
}
