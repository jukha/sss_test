import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocalTeenHero from './components/LocalTeenHero';
import BringYourPrivateSection from './components/BringYourPrivateSection';
import IntermediateSwimLessonsSection from './components/IntermediateSwimLessonsSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import WhyChooseUsForTeenSection from './components/WhyChooseUsForTeenSection';
import MembersOfSection from '@/components/sections/MembersOfSection';
import HowItWorksLocalTeenSection from './components/HowItWorksLocalTeenSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { localTeenSatisfactionGuarantee } from '@/assets';
import LocalTeensLessonsPricing from './components/LocalteensLessonsPricing';
import SocialMediaReviewsSection from '@/components/sections/SocialMediaReviewsSection';
import LocalTeenFaqsSection from './components/LocalTeenFaqsSection';
import AdvancedAndCompetetiveSummersSection from './components/AdvancedAndCompetetiveSummersSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import WeBackFeaturedLocalTeenSection from './components/WeBackFeaturedLocalTeenSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';

const LocalTeen = () => {
  return (
    <div>
      <main>
        <LocalTeenHero />
        {/*Bring your private swim lessons home with Sunsational Swim School* - section*/}
        <BringYourPrivateSection />
        {/* Intermediate swimming lessons for teens* - section*/}
        <IntermediateSwimLessonsSection />
        {/* Sunsation clients love our swimming lessons - sections */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
        />
        {/* Why choose Sunsational Swim School for your teen swim lessons in [city] - section*/}
        <WhyChooseUsForTeenSection />
        {/* Members of - section*/}
        <MembersOfSection />
        {/* How does Sunsational Swim School work? - section*/}
        <HowItWorksLocalTeenSection />
        {/* 100% Satisfaction Guarantee - section*/}
        <SatisfactionGuaranteeSection
          bgColor='var(--color-lightYellow)'
          image={localTeenSatisfactionGuarantee}
          bgCirclesColor='#fdcba0'
        />
        {/* Teens lesson Pricing - section*/}
        <LocalTeensLessonsPricing />
        {/* 4000+ 5-Star Ratings from Happy Swimmers - section*/}
        <SocialMediaReviewsSection />
        {/* FAQ - section*/}
        <LocalTeenFaqsSection />
        {/* Advanced and competitive swimmers benefit from private lessons too - section*/}
        <AdvancedAndCompetetiveSummersSection />
        {/* Other Popular swimming lesson programs- section*/}
        <TopSwimmingLessonsSection showButton={false} />
        {/* Search nearby instructors - section TO BE ADDED WHEN API INTEGRATION IS READY*/}

        {/* Featured Banner - section*/}
        <WeBackFeaturedLocalTeenSection />
        {/* Are you a swim instructor?  - section*/}
        <AreYouInstructor2Section />
        {/* Service Locations Section - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
};

export default LocalTeen;
