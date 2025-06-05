import InstructorQualitiesSection from '@/components/sections/InstructorQualitiesSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import AreasWeServiceHero from './components/AreasWeServiceHero';
import GetSwimLessonsNearSection from './components/GetSwimLessonsNearSection';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import { BackgroundCircles } from '@/components/decoration';
import PrivateSwimLessonBenefitsSection from './components/PrivateSwimLessonBenefitsSection';

export default function AreasWeService() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <AreasWeServiceHero />
        {/* Find Swim Lessons Near Me */}
        {/*Service Locations - Section*/}
        <ServiceLocationsSection
          content={{
            title: 'Find Swim Lessons Near Me',
            desc: "Join thousands of other happy families who are learning to swim with America's #1 rated swim school.",
          }}
        />
        <LocationsListSection />
        {/* Get Swim Lessons Near Me, In Any Pool Of Your Choice - Section */}
        <GetSwimLessonsNearSection />
        {/* Popular Swimming Lesson Programs - Section */}
        <TopSwimmingLessonsSection />
        {/* Thousands of Five Star Reviews and counting! - Section */}
        <CustomerReviewsSection
          bgDecorationIcon=''
          bgColor='var(--color-lightBlue)'
          decorationIconLeft={<BackgroundCircles />}
          decorationIconLeftClasses='absolute lg:w-[803px] lg:scale-[1.5] h-1/2 max-lg:right-0 max-lg:top-[10%] lg:bottom-[15%] lg:left-[7vw]'
          decorationIconRightClasses='absolute lg:w-[803px] lg:scale-[1.5] h-1/2 max-lg:right-0 bottom-0 lg:top-[15%] lg:right-[7vw]'
          decorationIconRight={<BackgroundCircles />}
        />
        {/* What makes our Swim instructors Sunsational - Section */}
        <InstructorQualitiesSection page='areasWeService' />
        {/* Top Benefits of Private Swim Lessons - Section */}
        <PrivateSwimLessonBenefitsSection />
      </main>
    </div>
  );
}
