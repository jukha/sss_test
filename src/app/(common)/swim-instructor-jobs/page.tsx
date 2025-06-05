import LocalPrivateFaqsSection from '../city/local-private/components/LocalPrivateFaqsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import SwimInstructorJobsHero from './components/SwimInstructorJobsHero';
import PartnerPerksSection from '@/components/sections/PartnerPerksSection';
import InlineRegistrationForm from '@/components/sections/InlineRegistrationForm';
import OurInstructorsLoveTeachingSection from './components/OurInstructorsLoveTeachingSection';
import SwimInstructorJobsSection from './components/SwimInstructorJobsSection';
import SwimInstructorBenefitsSection from './components/SwimInstructorBenefitsSection';
import InstructorQualificationSection from './components/InstructorQualificationSection';
import FeaturedSwimInstructorJobSection from './components/FeaturedSwimInstructorJobSection';
import GotQuestionsSection from './components/GotQuestionsSection';
import AboutFounderSection from './components/AboutFounderSection';
import StepsToJoinSection from './components/StepsToJoinSection';

export default function InstructorJobs() {
  return (
    <div>
      <main className='flex flex-col'>
        {/* Hero section for swim instructor jobs - grabs attention with headline and call to action */}
        <SwimInstructorJobsHero />
        {/* Information on partnering with Sunsational - encourages instructors to join the platform */}
        <PartnerPerksSection />
        {/* Inline registration form for instructors to apply - easy access to sign up */}
        <InlineRegistrationForm />
        {/* Highlights testimonials or reasons why current instructors enjoy teaching */}
        <OurInstructorsLoveTeachingSection />
        {/* Overview of available swim instructor job opportunities */}
        <SwimInstructorJobsSection />
        {/* Lists the benefits and perks of becoming a Sunsational instructor */}
        <SwimInstructorBenefitsSection />
        {/* Describes the qualifications required to become a swim instructor */}
        <InstructorQualificationSection />
        {/* Showcases a featured job opening to draw extra attention */}
        <FeaturedSwimInstructorJobSection />
        {/* FAQ or contact section for addressing common instructor questions */}
        <GotQuestionsSection />
        {/* Information about the founder of Sunsational - builds trust and brand story */}
        <AboutFounderSection />
        {/* Outlines the step-by-step process to become a Sunsational instructor */}
        <StepsToJoinSection />
        {/* FAQs specifically about local and private swim instruction */}
        <LocalPrivateFaqsSection />
        {/* Search our serviced locations Section - locations with map */}
        <ServiceLocationsSection />
        {/* Available all across the USA - Lists all locations */}
        <LocationsListSection />
      </main>
    </div>
  );
}
