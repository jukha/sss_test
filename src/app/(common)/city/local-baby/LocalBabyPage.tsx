import React from 'react';
import { localBabySatisfactionGuaranteeImg } from '@/assets';
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
import StackedSections from '@/components/layout/StackedSections';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import getLessonPackages from '@/repositories/lesson_packages/get-lesson-packages';
import ClientDynamicCityPage from '@/app/(common)/city/[slug]/ClientDynamicCityPage';
import { FeaturedSwimInstructorsMap } from '@/app/(common)/city/common/FeaturedSwimInstructorsMap';
import {
  FeaturedSwimInstructorsTextSection
} from '@/app/(common)/city/local-baby/components/FeaturedSwimInstructorsTextSection';

async function LocalBabyPage({ metroArea, locationCityPage }: CityPageProps) {
  const babyGeneralPriceMatrices = await getLessonPackages({
    type: 'baby',
    metroAreaId: metroArea.id,
    durations: [30, 60]
  });

  const babyGroupPriceMatrices = await getLessonPackages({
    type: 'baby',
    metroAreaId: metroArea.id,
    durations: [30]
  });

  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalBabyHero />
        {/* Fun, safe & effective baby swim lessons section */}
        <FunSafeEffectiveLessonsSection />
        {/* Customer reviews section */}
        <ServerCustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
          ageGroup={'baby'}
          metroAreaId={metroArea.id}
        />
        {/* Why parents love Sunsational baby swim lessons section */}
        <WhyParentsLoveSection />
        {/* When Babies start swim lessons - General section */}
        <WhenBabiesStartSection />
        {/* How does Sunsational School work? - Section */}
        <HowItWorksCitiesSection />
        <StackedSections>
          {/* Why choose Sunsational Swim School? - Section */}
          <WhyChooseOurSwimSchool />
          {/* 100% satisfaction guarantee - Section */}
          <SatisfactionGuaranteeSection
            image={localBabySatisfactionGuaranteeImg}
          />
        </StackedSections>
        {/* Pricing for local baby swim lessons - Section */}
        {babyGeneralPriceMatrices &&
          <LocalBabyLessonsPricing lessonPackages={babyGeneralPriceMatrices} />
        }
        {/* Parents & Tots Group Lessons Pricing Section */}
        {babyGroupPriceMatrices &&
          <ParentsGroupsLessonPricingSection lessonPackages={babyGroupPriceMatrices} />
        }
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
        <HowParentsAndBabySection />
        {/* How to prepare your baby for swim lessons - Section */}
        <HowToPrepareYourBaby />
        {/* Water Safety Priority Section */}
        <WaterSafeyPrioritySection />
        <FeaturedSwimInstructorsTextSection/>
        <FeaturedSwimInstructorsMap/>
        {/* Featured baby swim instructors in [city, state] - Section */}
        <FeaturedBabyInstructorsSection />
        {/* Service Locations - Section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </ClientDynamicCityPage>
  );
};

export default withServerSideErrorBoundary(LocalBabyPage, <Error500Page reason={'Database query failed'} />);
