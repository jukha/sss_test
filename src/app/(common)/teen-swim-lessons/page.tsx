import MembersOfSection from '@/components/sections/MembersOfSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import { satisfactionGuaranteeTeenSwimLessonImg } from '@/assets';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import TeenSwimLessonsHero from './components/TeenSwimLessonsHero';
import WhyTeensSwimLessonsImportantSection from './components/WhyTeensSwimLessonsImportantSection';
import IntermediateSwimLessonsForTeenSection from './components/IntermediateSwimLessonsForTeenSection';
import AdvancedBenefitsFromPrivateLessonSection from './components/AdvancedBenefitsFromPrivateLessonSection';
import HowDoesSunsationalSwimSchoolWork from './components/HowDoesSunsationalSwimSchoolWork';
import FeaturedTeenSwimInstructorsSection from './components/FeaturedTeenSwimInstructorsSection';
import WeBackFeaturedLocalTeenSection from '../city/local-teen/components/WeBackFeaturedLocalTeenSection';
import TeenLessonsLocation from './components/TeenLessonsLocation';
import LocationsListSection from '@/components/sections/LocationsListSection';

export default function TeenSwimLessons() {
  return (
      <main className='flex flex-col gap-20 lg:gap-26'>
        <TeenSwimLessonsHero />
        {/* Why are teen swimming lessons so important? - section */}
        <WhyTeensSwimLessonsImportantSection />
        {/* Intermediate swimming lessons for teens - section */}
        <IntermediateSwimLessonsForTeenSection />
        {/* Advanced and competitive swimmers benefit from private lessons too - section */}
        <AdvancedBenefitsFromPrivateLessonSection />
        {/* Members of - section */}
        <MembersOfSection />
        {/* Swimming lesson for a teenager near me - section */}
        <TeenLessonsLocation />
        <LocationsListSection />
        {/* Sunsational clients love our swimming lessons - section */}
        <CustomerReviewsSection
          heading='Sunsational clients love our swimming lessons'
          description='Check out our 4.9 rating out of 1852 reviews'
          buttonClasses='bg-red text-white font-primary font-semiBold text-lg'
          shadowClasses='bg-orange'
          buttonText='Book Swimming Lessons'
        />
        {/* How does Sunsational Swim School work? - section */}
        <HowDoesSunsationalSwimSchoolWork />
        {/* 100% Satisfaction Guarantee - section */}
        <SatisfactionGuaranteeSection
          image={satisfactionGuaranteeTeenSwimLessonImg}
          bgColor='var(--color-off-white)'
          bgCirclesColor='var(--color-orange)'
        />

        {/* Featured teen swim instructors - section */}
        <FeaturedTeenSwimInstructorsSection />

        {/* Featured swim instructors in [city, state] - section TO BE ADDED WHEN API IS FIXED*/}

        {/* Featured Banner - section*/}
        <WeBackFeaturedLocalTeenSection />
        {/* Other Popular swimming lesson programs - section*/}
        <TopSwimmingLessonsSection
          sectionHeader='Other Popular swimming lesson programs'
          showButton={false}
        />
      </main>
  );
}
