import React from 'react';
import GiftCertificateHero from './components/GiftCertificateHero';
import CustomerReviewsSection from '@/components/sections/CustomerReviewsSection';
import TopSwimmingLessonsSection from '@/components/sections/TopSwimmingLessonsSection';
import PrivateVsGroupLessonsSection from '../city/common/PrivateVsGroupLessonsSection';
import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import LocationsListSection from '@/components/sections/LocationsListSection';
import SunsationalGiftCertificatesSection from './components/SunsationalGiftCertificatesSection';
import PerfectGiftSection from './components/PerfectGiftSection';
import LessonsForWaterSafetySection from './components/LessonsForWaterSafetySection';
import WhyChooseToBuyGiftCertificate from './components/WhyChooseToBuyGiftCertificate';

const GiftCertificate = () => {
  return (
    <div>
      <main>
        <GiftCertificateHero />
        <SunsationalGiftCertificatesSection />
        <PerfectGiftSection />
        <LessonsForWaterSafetySection />
        <CustomerReviewsSection
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
    </div>
  );
};

export default GiftCertificate;
