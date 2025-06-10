import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import LocalPrivateHero from './components/LocalPrivateHero';
import BringYourPrivateSwimSection from './components/BringYourPrivateSwimSection';
import WhySwimLessonsImportantSection from './components/WhySwimLessonsImportantSection';
import BenefitsOfPrivateSwimSection from './components/BenefitsOfPrivateSwimSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import { SkillTitle } from '@/enum/skill-title.enum';
import MembersOfSection from '@/components/sections/MembersOfSection';
import HowItWorksLocalPrivateSection from './components/HowItWorksLocalPrivateSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionLocalPrivateImg } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import LocalPrivateFaqsSection from './components/LocalPrivateFaqsSection';
import WeBackFeaturedLocalPrivateSection from './components/WeBackFeaturedLocalPrivateSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';

export default function LocalPrivate() {
  return (
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalPrivateHero />
        {/* Bring Your Private Swim Lesson home  */}
        <BringYourPrivateSwimSection />
        <CustomerReviewsSection
          heading='Why our students and parents love us!'
          description='5-star rated by parents and swimmers alike'
          hideButton
        />
        {/*Popular Swimming Lesson Programs - Section*/}
        <TopSwimmingLessonsSection showButton={false} />
        {/* Levels we teach on our Swim Lesson Programs */}
        <SkillLevelsSection
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
        {/* Why Swim Lessons are Important Section */}
        <WhySwimLessonsImportantSection />
        {/* Benefits of Private Swim Lessons Section */}
        <BenefitsOfPrivateSwimSection />
        {/*Members of - section */}
        <MembersOfSection />
        <HowItWorksLocalPrivateSection />
        {/* 100% satisfaction guarantee - Section */}
        <SatisfactionGuaranteeSection
          image={satisfactionLocalPrivateImg}
          bgColor='var(--color-lightYellow)'
          bgCirclesColor='var(--color-yellow)'
        />
        {/*Private swim lessons vs group - section */}
        <PrivateVsGroupLessonsSection />
        {/* 4000+ 5-Star Ratings from happy swimmers - Section*/}
        <SocialMediaReviewsSection />
        
        {/* Search Instructors with Map will be added here when its api is ready */}

        {/* FAQs Section */}
        <LocalPrivateFaqsSection />
        {/* Featured Banner Section */}
        <WeBackFeaturedLocalPrivateSection />
        {/* Are you an instructor? Section */}
        <AreYouInstructor2Section />
        {/* Service Locations Section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
  );
}
