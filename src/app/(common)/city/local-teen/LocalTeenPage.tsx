import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocalTeenHero from './components/LocalTeenHero';
import BringYourPrivateSection from './components/BringYourPrivateSection';
import IntermediateSwimLessonsSection from './components/IntermediateSwimLessonsSection';
import WhyChooseUsForTeenSection from './components/WhyChooseUsForTeenSection';
import MembersOfSection from '@/components/sections/MembersOfSection';
import HowItWorksLocalTeenSection from './components/HowItWorksLocalTeenSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { localTeenSatisfactionGuarantee } from '@/assets';
import LocalTeensLessonsPricing from './components/LocalteensLessonsPricing';
import LocalTeenFaqsSection from './components/LocalTeenFaqsSection';
import AdvancedAndCompetetiveSummersSection from './components/AdvancedAndCompetetiveSummersSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import WeBackFeaturedLocalTeenSection from './components/WeBackFeaturedLocalTeenSection';
import AreYouInstructor2Section from '@/components/sections/AreYouInstructor2Section';
import { ServerSocialMediaReviewsSection } from '@/components/sections/customer_reviews';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import React from 'react';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import ClientDynamicCityPage from '../[slug]/ClientDynamicCityPage';
import getLessonPackages from '@/repositories/lesson_packages/get-lesson-packages';
import { FeaturedSwimInstructorsMap } from '@/app/(common)/city/common/FeaturedSwimInstructorsMap';

async function LocalTeenPage({ metroArea, locationCityPage }: CityPageProps) {
  const lessonPackages = await getLessonPackages({
    type: 'private',
    durations: [30, 60],
    metroAreaId: metroArea.id,
  })

  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalTeenHero />
        {/*Bring your private swim lessons home with Sunsational Swim School* - section*/}
        <BringYourPrivateSection />
        {/* Intermediate swimming lessons for teens* - section*/}
        <IntermediateSwimLessonsSection />
        {/* Sunsation clients love our swimming lessons - sections */}
        <ServerCustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='5-star rated by parents and swimmers alike'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
          ageGroup={'teen'}
          metroAreaId={metroArea.id}
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
        {lessonPackages &&
          <LocalTeensLessonsPricing lessonPackages={lessonPackages}/>
        }
        {/* 4000+ 5-Star Ratings from Happy Swimmers - section*/}
        <ServerSocialMediaReviewsSection ageGroup={'teen'} metroAreaId={metroArea.id} />
        {/* FAQ - section*/}
        <LocalTeenFaqsSection />
        {/* Advanced and competitive swimmers benefit from private lessons too - section*/}
        <AdvancedAndCompetetiveSummersSection />
        {/* Other Popular swimming lesson programs- section*/}
        <TopSwimmingLessonsSection showButton={false} />
        {/* Search nearby instructors - section TO BE ADDED WHEN API INTEGRATION IS READY*/}
        <FeaturedSwimInstructorsMap/>
        {/* Featured Banner - section*/}
        <WeBackFeaturedLocalTeenSection />
        {/* Are you a swim instructor?  - section*/}
        <AreYouInstructor2Section />
        {/* Service Locations Section - section*/}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </ClientDynamicCityPage>
  );
};

export default withServerSideErrorBoundary(LocalTeenPage, <Error500Page reason={'Database query failed'} />);
