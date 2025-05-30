import LocalKidsHero from './components/LocalKidsHero';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SafeFunTaughtAtHomeSection from './components/SafeFunTaughtAtHomeSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import SkillLevelsSection from '@/components/sections/SkillLevelsSection';
import WhySwimLessonsImportantLocalKids from './components/WhySwimLessonsImportantLocalKids';
import BenefitsOfKidsSwimSection from './components/BenefitsOfKidsSwimSection';
import MembersOfSection from '@/components/sections/MembersOfSection';
import HowItWorksLocalKidsSection from './components/HowItWorksLocalKidsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeLocalKids } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import LocalKidsLessonsPricing from './components/LocalKidsLessonsPricing';
import LocalKidsFaqsSection from './components/LocalKidsFaqsSection';
import FeaturedKidsInstructorsSection from './components/FeaturedKidsInstructorsSection';

export default function LocalPrivate() {
  return (
    <div>
      <main className='flex flex-col'>
        <LocalKidsHero />
        {/* Safe, fun, and taught at home! - section */}
        <SafeFunTaughtAtHomeSection />
        {/* Customer reviews section */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='Check out our 4.9 rating out of 1852 reviews'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
        />
        {/* Skill levels section */}
        <SkillLevelsSection showDecorationElements={false} />
        {/*Why are [city] kids swim lessons so important? - section*/}
        <WhySwimLessonsImportantLocalKids />
        {/*Benefits of kids swimming lessons in [city] - section*/}
        <BenefitsOfKidsSwimSection />
        {/* Members of section */}
        <MembersOfSection />
        {/*How does Sunsational Swim School work?- section*/}
        <HowItWorksLocalKidsSection />
        {/* 100% Satisfaction Guarantee - section */}
        <SatisfactionGuaranteeSection
          bgColor='var(--color-lightBlue)'
          bgCirclesColor='var(--color-blue)'
          image={satisfactionGuaranteeLocalKids}
        />
        {/* Child Lesson prices section */}
        <LocalKidsLessonsPricing />
        {/* Private Vs Group swim lessons section */}
        <PrivateVsGroupLessonsSection />
        {/* Social Media Reviews section */}
        <SocialMediaReviewsSection />
        {/* FAQ section */}
        <LocalKidsFaqsSection />
        {/* Featured kids swim instructors in [city, state] - section */}
        <FeaturedKidsInstructorsSection />
        {/* Are you a swim instructor in [city]? - section */}
        <AreYouInstructor2Section />
        {/*Other Popular swimming lesson programs - section */}
        <TopSwimmingLessonsSection />
        {/* Service locations section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
}
