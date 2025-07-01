import LocalInstructorJobsHero from './components/LocalInstructorJobsHero';
import LocalInstructorFaqsSection from './components/LocalInstructorFaqsSection';
import TeachSwimChangeSection from './components/TeachSwimChangeSection';
import PartnerPerksSection from '@/components/sections/PartnerPerksSection';
import InlineRegistrationForm from '@/components/sections/InlineRegistrationForm';
import InstructorsLoveTeachingSection from './components/InstructorsLoveTeachingSection';
import FeaturedSwimInstructorsLocalJobsSection from './components/FeaturedSwimInstructorsLocalJobsSection';
import SwimInstructorsJobsInCitySection from './components/SwimInstructorsJobsInCitySection';
import ComeMeetTeamSection from './components/ComeMeetTeamSection';
import QualificationsRequiredSection from './components/QualificationsRequiredSection';
import HowItWorksLocalJobsSection from './components/HowItWorksLocalJobsSection';
import BenefitsOfSwimInstructorSection from './components/BenefitsOfSwimInstructorSection';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import React from 'react';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import ClientDynamicCityPage from '@/app/(common)/city/[slug]/ClientDynamicCityPage';
import { FeaturedSwimInstructorsMap } from '@/app/(common)/city/common/FeaturedSwimInstructorsMap';
import {
  FeaturedSwimInstructorsTextSection
} from '@/app/(common)/city/local-swim-instructor-jobs/components/FeaturedSwimInstructorsTextSection';

async function LocalSwimInstructorJobsPage({ metroArea, locationCityPage }: CityPageProps) {
  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalInstructorJobsHero />
        <TeachSwimChangeSection />
        <PartnerPerksSection />
        <InlineRegistrationForm title='Apply Now' />
        <InstructorsLoveTeachingSection />
        <FeaturedSwimInstructorsLocalJobsSection />
        <SwimInstructorsJobsInCitySection />
        <ComeMeetTeamSection />
        <QualificationsRequiredSection />
        <HowItWorksLocalJobsSection />
        <BenefitsOfSwimInstructorSection />
        <FeaturedSwimInstructorsTextSection/>
        <FeaturedSwimInstructorsMap />
        <LocalInstructorFaqsSection />
      </main>
    </ClientDynamicCityPage>
  );
}

export default withServerSideErrorBoundary(LocalSwimInstructorJobsPage, <Error500Page reason={'Database query failed'} />);
