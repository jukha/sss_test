import React from 'react';

import { PricingEntity } from '@/entities/locations-and-pricing.entity';
import { generateSunsationalSchoolData, generateSwimSchoolData } from './SwimSchoolCompetitor/utils';
import { LocationCityPageEntity } from '@/entities/location-city-page.entity';
import getNearbySchools from '@/repositories/location_competitor/get-nearby-schools';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';

import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import SwimSchoolCompetitor from './SwimSchoolCompetitor/SwimSchoolCompetitor';

type Props = {
  cityData: LocationCityPageEntity;
  pricing?: PricingEntity;
};

const FindTheBestSchoolSection = async ({ cityData, pricing }: Props) => {
  if (!cityData.lat || !cityData.lng || !cityData.metro_area_id) {
    return null;
  }

  const competitors = await getNearbySchools({
    lat: cityData.lat,
    lng: cityData.lng,
    metroAreaId: cityData.metro_area_id,
    limit: 3,
  });

  if (!competitors.length) {
    return null;
  }

  const minPricePack = pricing?.packagePriceMatrix.find(
    (pack) => pack.lessonQty === 18 && pack.lessonDurationMinutes === 60
  );
  const maxPricePack = pricing?.packagePriceMatrix.find(
    (pack) => pack.lessonQty === 6 && pack.lessonDurationMinutes === 30
  );

  const sunsationalSchoolData = generateSunsationalSchoolData(minPricePack?.price ?? 0, maxPricePack?.price ?? 0);

  const schoolsData = [
    sunsationalSchoolData,
    ...competitors.map((competitor) => {
      return generateSwimSchoolData({
        name: competitor.name,
        lessonType: competitor.lessonTypes ?? '',
        location: competitor.address ?? '',
        ages: competitor.ages ?? '',
        learnToSwimGuarantee: Boolean(competitor.learnToSwimGuarantee),
        flexibleScheduling: Boolean(competitor.flexibleScheduling),
        monthlyMembershipRequired: Boolean(competitor.monthlyMembershipRequired),
        costPerLesson: competitor.costsPerLesson ?? '',
        ratingStars: competitor.starsCount,
        customerReview: competitor.customerReviewText ?? '',
      });
    }),
  ];

  return (
    <div>
      <Container>
        <Typography variant='h2' className='max-w-[837px] mx-auto text-center mb-2'>
          Find the Best Swim School Near You in {cityData.name}: Compare Your Options
        </Typography>
        <Typography variant='custom' className='max-w-[669px] mx-auto text-center'>
          Looking for a swim school near me in {cityData.name} ? Whether you want a traditional swim school or the
          convenience of private, at-home swim lessons, we’ve got you covered. This guide compares top-rated swim
          schools in {cityData.name} so you can find the best fit for your family.
        </Typography>
        <SwimSchoolCompetitor schoolsData={schoolsData} />
      </Container>
    </div>
  );
};

export default withServerSideErrorBoundary(FindTheBestSchoolSection);
