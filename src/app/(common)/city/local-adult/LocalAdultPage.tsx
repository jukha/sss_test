import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { localAdultSatisfactionGuarantee } from '@/assets';
import PrivateVsGroupLessonsSection from '../common/PrivateVsGroupLessonsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocalAdultHero from './components/LocalAdultHero';
import ForTotalBeginnersSection from './components/ForTotalBeginnersSection';
import StartSwimmingFasterSection from './components/StartSwimmingFasterSection';
import PrivateAdultLessonsAreGreatSection from './components/PrivateAdultLessonsAreGreatSection';
import WhyChooseSwimSchoolSection from './components/WhyChooseSwimSchoolSection';
import BenefitsOfAdultSwimSection from './components/BenefitsOfAdultSwimSection';
import NotTooOldToLearnSection from './components/NotTooOldToLearnSection';
import RecommendedLessonsSection from './components/RecommendedLessonsSection';
import LocalAdultLessonsPricing from './components/LocalAdultLessonsPricing';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import ClientDynamicCityPage from '@/app/(common)/city/[slug]/ClientDynamicCityPage';
import { CityPageProps } from '@/app/(common)/city/[slug]/page';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';
import getLessonPackages from '@/repositories/lesson_packages/get-lesson-packages';

async function LocalAdultPage({ metroArea, locationCityPage }: CityPageProps) {
  const priceMatrices = await getLessonPackages({
    type: 'private',
    metroAreaId: metroArea.id,
    durations: [60]
  });

  return (
    <ClientDynamicCityPage metroArea={metroArea} locationCityPage={locationCityPage}>
      <main className='flex flex-col gap-20 lg:gap-26'>
        <LocalAdultHero />
        {/* For total beginners or advanced swimmers! - section */}
        <ForTotalBeginnersSection />
        {/* Start swimming faster with a Sunsational private swim instructor in [city] - section */}
        <StartSwimmingFasterSection />
        {/* Private adult swimming lessons are great for… - section */}
        <PrivateAdultLessonsAreGreatSection />
        {/* Why choose Sunsational Swim School to learn to swim? - section */}
        <WhyChooseSwimSchoolSection />
        {/* Benefits of adult swimming lessons with Sunsational - section */}
        <BenefitsOfAdultSwimSection />
        {/* You’re never too old to learn - section */}
        <NotTooOldToLearnSection />
        {/* Recommended lesson plans for adult Swim Lessons - section */}
        <RecommendedLessonsSection />
        {/* 100% Satisfaction Guarantee - section */}
        <SatisfactionGuaranteeSection
          bgColor='var(--color-lightBlue)'
          bgCirclesColor='var(--color-teal)'
          image={localAdultSatisfactionGuarantee}
        />
        {/* Adult Lessons Pricing - section */}
        {priceMatrices &&
          <LocalAdultLessonsPricing lessonPackages={priceMatrices} />
        }
        {/* Private swim lessons vs. Group swim lessons - section */}
        <PrivateVsGroupLessonsSection />
        {/* Sunsational clients love our swimming lessons - section */}
        <ServerCustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='Check out our 4.9 rating out of 1852 reviews'
          buttonText='Book Swimming Lessons'
          shadowClasses='bg-orange'
          ageGroup={'adult'}
          metroAreaId={metroArea.id}
        />
        {/* Service Locations - section */}
        <ServiceLocationsSection />
        <LocationsListSection />
      </main>
    </ClientDynamicCityPage>
  );
}

export default withServerSideErrorBoundary(LocalAdultPage, <Error500Page reason={'Database query failed'}/>);
