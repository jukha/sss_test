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

export default function LocalSwimInstructorJobs() {
  return (
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
        <LocalInstructorFaqsSection />
      </main>
  );
}
