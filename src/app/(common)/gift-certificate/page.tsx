import React from 'react';
import GiftCertificateHero from './components/GiftCertificateHero';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import PrivateVsGroupLessonsSection from '../city/common/PrivateVsGroupLessonsSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SunsationalGiftCertificatesSection from './components/SunsationalGiftCertificatesSection';
import PerfectGiftSection from './components/PerfectGiftSection';
import LessonsForWaterSafetySection from './components/LessonsForWaterSafetySection';
import WhyChooseToBuyGiftCertificate from './components/WhyChooseToBuyGiftCertificate';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';

const GiftCertificate = () => {
  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      <GiftCertificateHero />
      <SunsationalGiftCertificatesSection />
      <PerfectGiftSection />
      <LessonsForWaterSafetySection />
      <ServerCustomerReviewsSection
        heading='Why our students and parents love us!'
        description='Check out our 4.9 rating out of 1852 reviews'
        hideButton={true}
      />
      <TopSwimmingLessonsSection showButton={false} />
      <PrivateVsGroupLessonsSection />
      <WhyChooseToBuyGiftCertificate />
      <ServiceLocationsSection />
      <LocationsListSection />
    </main>
  );
};

export default GiftCertificate;
