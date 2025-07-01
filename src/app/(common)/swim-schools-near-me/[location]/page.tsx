import React from 'react';
import { notFound } from 'next/navigation';

import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import InlineRegistrationForm from '@/components/sections/InlineRegistrationForm';
import StackedSections from '@/components/layout/StackedSections';
import { ServerCustomerReviewsSection } from '@/components/sections/customer_reviews';
import getLocationsAndPricing from '@/repositories/locations_and_pricing/base.locations-and-pricing';
import getStateByAbbreviation from '@/repositories/location_states/get-state-by-abbreviation';
import getCityPageByNameAndStateAbbr from '@/repositories/location_city_page/get-city-page-by-name-and-state-abbr';
import { LocationCityPageEntityBuilder } from '@/entity_builders/location-city-page.entity-builder';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';

import SwimSchoolsNearMeHeroSection from '../components/SwimSchoolsNearMeHero';
import FindTheBestSchoolSection from '../components/FindTheBestSchoolSection';
import HaveHomeOrSwimmingPoolSection from '../components/HaveHomeOrSwimmingPoolSection';
import WhatOthersConsiderSection from '../components/WhatOthersConsiderSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import WeBackOurInstructorsSection from '../components/WeBackOurInstructorsSection';

async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const [city, state] = location.split('--');

  const stateData = await getStateByAbbreviation(state);
  const cityData = await getCityPageByNameAndStateAbbr(city.replaceAll('-', ' '), state);

  if (!stateData || !cityData) {
    return notFound();
  }

  const locationAndPricing = await getLocationsAndPricing();
  const metroArea = locationAndPricing.metroAreas.find((metroArea) => metroArea.id === cityData.metro_area_id);
  const pricing = locationAndPricing.pricing.find((pricing) => pricing.id === metroArea?.packagePriceTierId);

  return (
    <main className='flex flex-col gap-20 lg:gap-26'>
      {/* Hero Section */}
      <SwimSchoolsNearMeHeroSection city={cityData.name} />
      {/* Find the Best Swim School Near You in [City]: Compare Your Options - Section */}
      <FindTheBestSchoolSection pricing={pricing} cityData={new LocationCityPageEntityBuilder().build(cityData)} />
      <StackedSections>
        {/* Have a home or community pool? Consider Private At-Home Swim Lessons! - Section */}
        <HaveHomeOrSwimmingPoolSection city={cityData.name} />
        {/* What Others Consider When Choosing A Swim School in [city, state]! - Section */}
        <WhatOthersConsiderSection city={cityData.name} state={stateData.name} />
      </StackedSections>
      {/* Inline Register Form */}
      <InlineRegistrationForm
        title='Ready to Get Started?'
        description={`Spots Fill Fast in ${cityData.name}, ${stateData.name}!`}
      />
      {/* Why Choose Sunsational Swim School in [city, state] - Section */}
      <WhyChooseUsSection city={cityData.name} state={stateData.name} />
      {/* Customer reviews section */}
      <ServerCustomerReviewsSection
        heading={`What Parents Are Saying About Sunsational Swim School in ${cityData.name}, ${stateData.name}`}
        description=''
        buttonText='Book Swimming Lessons'
        buttonClasses='bg-yellow'
        buttonIconColor='var(--color-white)'
        buttonIconClasses='bg-offBlack'
        shadowClasses='bg-orange'
        decorationIconRight={<ThreeStareSlim />}
        decorationIconRightClasses='hidden lg:block absolute z-[10] w-[96px] scale-x-[-1] right-0'
      />
      {/* INSTRUCTORS MAPS section will be added after api integration*/}
      {/* We back their expertise with a  100% satisfaction guarantee. - Section */}
      <WeBackOurInstructorsSection />
    </main>
  );
}

export default withServerSideErrorBoundary(Page, <Error500Page reason={'Database query failed'} />);
