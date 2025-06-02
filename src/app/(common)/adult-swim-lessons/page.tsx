import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import AdultsSwimmingLessonsHero from './components/AdultsSwimmingLessonsHero';
import AdultLessonsToYouSection from './components/AdultLessonsToYouSection';
import AdultRecommendedLessonsSection from './components/AdultRecommendedLessonsSection';
import GetYourVictoryTopSection from './components/GetYourVictoryTopSection';
import GetYourVictoryBottomSection from './components/GetYourVictoryBottomSection';
import AdultsLessonsWhyChooseUsSection from './components/AdultsLessonsWhyChooseUsSection';
import AdultsLessonsBenefitsSection from './components/AdultsLessonsBenefitsSection';
import NeverTooOldToLearnSection from './components/NeverTooOldToLearnSection';
import PrivateLessonsAreGreatSection from './components/PrivateLessonsAreGreatSection';
import AdultLessonSatisfactionGuaranteeSection from './components/AdultLessonSatisfactionGuaranteeSection';

const AdultsSwimmingLessons = () => {
  return (
    <div>
      <main>
        <AdultsSwimmingLessonsHero />
        {/* Adult swim lessons that come to you! - sections  */}
        <AdultLessonsToYouSection />
        {/* Get to your victory lap faster with a dedicated Sunsational private swim instructor - sections  */}
        <GetYourVictoryTopSection />
        {/* Get to your victory lap Bottom - sections  */}
        <GetYourVictoryBottomSection />
        {/* Why choose Sunsational Swim School to learn to swim - sections  */}
        <AdultsLessonsWhyChooseUsSection />
        {/* Benefits of adult swimming lessons with Sunsational - sections  */}
        <AdultsLessonsBenefitsSection />
        {/* You’re never too old to learn - sections  */}
        <NeverTooOldToLearnSection />
        {/* Private adult swimming lessons are great for… - sections  */}
        <PrivateLessonsAreGreatSection />
        {/* Recommended lesson plans for adult Swim Lessons - sections  */}
        <AdultRecommendedLessonsSection />
        {/* 100% Satisfaction Guarantee - sections  */}
        <AdultLessonSatisfactionGuaranteeSection />
        {/* Sunsational clients love our swimming lessons - sections  */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='Check out our 4.9 rating out of 1852 reviews'
          buttonClasses='bg-red text-white font-primary font-semiBold text-lg'
          shadowClasses='bg-orange'
          buttonText='Book Swimming Lessons'
        />
        {/* Search our Serviced Locations - sections  */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </div>
  );
};

export default AdultsSwimmingLessons;
