import LocationsListSection from '@/components/sections/LocationsListSection';
import LocalPrivateFaqsSection from '../local-private/components/LocalPrivateFaqsSection';
import SpecialNeedsHero from './components/SpecialNeedsHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeSpecialNeedsImg } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import PrivateSpecialNeedsSwimSection from './components/PrivateSpecialNeedsSwimSection';
import CaterManyNeedsSection from './components/CaterManyNeedsSection';
import WhySnapSwimLessonsImportantSection from './components/WhySnapSwimLessonsImportantSection';
import FeatureSwimInstructorsSpecialNeeds from './components/FeatureSwimInstructorsSpecialNeeds';
import StartSwimmingFasterSection from './components/StartSwimmingFasterSection';
import BenefitsOfSwimLessonsSpecialNeedsSection from './components/BenefitsOfSwimLessonsSpecialNeedsSection';
import SpecialNeedsAndAbilitiesPricingSection from './components/SpecialNeedsAndAbilitiesPricingSection';
import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import StackedSections from '@/components/layout/StackedSections';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import React from 'react';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import ClientDynamicCityPage from '@/app/(common)/city/[slug]/ClientDynamicCityPage';
import getLessonPackages from '@/repositories/lesson_packages/get-lesson-packages';

async function LocalSpecialNeedsPage({ metroArea, locationCityPage }: CityPageProps) {
  const lessonPackages = await getLessonPackages({
    type: 'private',
    metroAreaId: metroArea.id,
    durations: [30, 60]
  })

  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <SpecialNeedsHero />
        {/* Private special needs swim lessons in [city, state] - section */}
        <PrivateSpecialNeedsSwimSection />
        {/* Sunsational clients love our swimming lessons - section */}
        <ServerCustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='Check out our 4.9 rating out of 1852 reviews'
          shadowClasses='bg-orange'
          designation={'special_needs'}
          metroAreaId={metroArea.id}
        />
        {/* We cater to many needs - section */}
        <CaterManyNeedsSection />
        {/* Why are [city] SNAP swim lessons so important? - section */}
        <WhySnapSwimLessonsImportantSection />
        {/* Featured kids swim instructors in [city, state] - section */}
        <FeatureSwimInstructorsSpecialNeeds />
        <StackedSections>
          {/* 100% Satisfaction Guarantee - section */}
          <SatisfactionGuaranteeSection
            image={satisfactionGuaranteeSpecialNeedsImg}
          />
          {/* Start swimming faster with personalized special needs swim lessons in [city] - section */}
          <StartSwimmingFasterSection />
        </StackedSections>
        {/* Benefits of swimming lessons for special needs students - section */}
        <BenefitsOfSwimLessonsSpecialNeedsSection />
        {/* Special Needs And Abilities/SNAP Swim Lesson Pricing - section */}
        {lessonPackages &&
          <SpecialNeedsAndAbilitiesPricingSection lessonPackages={lessonPackages}/>
        }
        {/* 4000+ 5-Star Ratings from Happy Swimmers - section */}
        <ServerSocialMediaReviewsSection designation={'special_needs'} metroAreaId={metroArea.id} />
        {/* What makes our Swim instructors Sunsational? - section */}
        <WhatMakesOurInstructorsSection />
        {/* Private swim lessons vs. Group swim lessons - section */}
        <PrivateVsGroupLessonsSection />
        <ServiceLocationsSection />
        <LocationsListSection />
        <LocalPrivateFaqsSection />
      </main>
    </ClientDynamicCityPage>
  );
}

export default withServerSideErrorBoundary(LocalSpecialNeedsPage, <Error500Page reason={'Database query failed'} />);
