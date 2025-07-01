import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeKidsSwimLesson } from '@/assets';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import KidsSwimmingLessonHero from './components/KidSwimLessonHero';
import KidsSafeFunSection from './components/kidsSafeFunSection';
import WhyKidsLessonImportantSection from './components/WhyKidsLessonImportantSection';
import BenefitsOfKidsLessonsSection from './components/BenefitsOfKidsLessonsSection';
import WhyChooseUsForKidsLessonSection from './components/WhyChooseUsForKidsLessonSection';
import KidLessonsFaqSection from './components/KidLessonsFaqSection';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';

export default function KidSwimLessons() {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      <KidsSwimmingLessonHero />
      {/*Safe, fun, and taught at home! - section*/}
      <KidsSafeFunSection />
      {/*Bring your kids swimming lessons home with Sunsational Swim School - section */}
      <ServerCustomerReviewsSection
        ageGroup='kid'
        heading='Bring your kids swimming lessons home with Sunsational Swim School'
        description='Check out our 4.9 rating out of 1852 reviews'
      />
      {/* Why are kids swimming lessons so important? - section */}
      <WhyKidsLessonImportantSection />
      {/* Benefits of kids swimming lessons- section */}
      <BenefitsOfKidsLessonsSection />
      {/* Why choose Sunsational Swim School for kids swimming lessons? - section */}
      <WhyChooseUsForKidsLessonSection />
      {/* Swim Lessons With Local Swim Instructors You Can Trust - section */}
      <WhatMakesOurInstructorsSection />
      {/* 100% Satisfaction Guarantee - section */}
      <SatisfactionGuaranteeSection
        bgColor='var(--color-lightYellow)'
        bgCirclesColor='var(--color-teal)'
        image={satisfactionGuaranteeKidsSwimLesson}
      />
      {/*4000+ 5-Star Ratings from Thousands of Happy Customers - section */}
      <ServerSocialMediaReviewsSection />
      {/* Get private swimming lessons at home! - section */}
      <HowItWorksSection />
      {/*Faq - section */}
      <KidLessonsFaqSection />
      {/* Search locations - section */}
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
}
