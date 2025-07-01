import LocalToddlerHero from './components/LocalToddlerHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SafeFunLessonsAtHomeSection from './components/SafeFunLessonsAtHomeSection';
import WhatAreSurvivalLessonsSection from './components/WhatAreSurvivalLessonsSection';
import WhyToddlerLessonsSection from './components/WhyToddlerLessonsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import MembersOfSection from '@/components/sections/MembersOfSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { localToddlerSatisfactionGuarantee } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import WhyChooseUsForToddler from './components/WhyChooseUsForToddler';
import BenefitsShowCaseSection from '@/components/sections/BenefitsShowCaseSection';
import LocalToddlerLessonsPricing from './components/LocalToddlerLessonsPricing';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import React from 'react';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import ClientDynamicCityPage from '../[slug]/ClientDynamicCityPage';
import getLessonPackages from '@/repositories/lesson_packages/get-lesson-packages';

async function LocalToddlerPage({ metroArea, locationCityPage }: CityPageProps) {
  const lessonPackages = await getLessonPackages({
    type: 'private',
    durations: [30, 60],
    metroAreaId: metroArea.id,
  })

  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalToddlerHero />
        {/* Safe, fun, and taught at home! - section */}
        <SafeFunLessonsAtHomeSection />
        {/* Sunsational clients love our swimming lessons - section */}
        <ServerCustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
          ageGroup={'toddler'}
          metroAreaId={metroArea.id}
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
        {lessonPackages &&
          <LocalToddlerLessonsPricing lessonPackages={lessonPackages}/>
        }
        {/*5-Star Ratings from Happy Swimmers - section */}
        <ServerSocialMediaReviewsSection
          heading='1800+ 5-Star Ratings from Happy Swimmers'
          description='Read Sunsational reviews from 900+ happy customers! Learn why families love our top-rated swim instructors and how we help students learn water safety and confidence in the water.'
          ageGroup={'toddler'}
          metroAreaId={metroArea.id}
        />
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </ClientDynamicCityPage>
  );
}

export default withServerSideErrorBoundary(LocalToddlerPage, <Error500Page reason={'Database query failed'} />);
