import { redirect } from 'next/navigation';
import LocalAdultPage from '@/app/(common)/city/local-adult/LocalAdultPage';
import LocalBabyPage from '@/app/(common)/city/local-baby/LocalBabyPage';
import LocalKidsPage from '@/app/(common)/city/local-kids/LocalKidsPage';
import LocalPrivatePage from '@/app/(common)/city/local-private/LocalPrivatePage';
import LocalSpecialNeedsPage from '@/app/(common)/city/local-special-needs/LocalSpecialNeedsPage';
import LocalSwimInstructorJobsPage from '@/app/(common)/city/local-swim-instructor-jobs/LocalSwimInstructorJobsPage';
import LocalTeenPage from '@/app/(common)/city/local-teen/LocalTeenPage';
import LocalToddlerPage from '@/app/(common)/city/local-toddler/LocalToddlerPage';
import { JSX } from 'react';
import { MetroAreaEntityBuilder } from '@/entity_builders/metro-area.entity-builder';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { LocationCityPageEntityBuilder } from '@/entity_builders/location-city-page.entity-builder';
import getLocationAndMetroAreaByCityAndState from '@/repositories/location_metro_area/get-location-for-city-page';
import { MetroAreaEntity } from '@/entities/metro-area.entity';
import { LocationCityPageEntity } from '@/entities/location-city-page.entity';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';

type Props = {
  params: Promise<Record<string, string>>
}

export type CityPageProps = {
  metroArea: MetroAreaEntity;
  locationCityPage: LocationCityPageEntity | null;
}

const pageToComponentMapping: Record<string, (props: CityPageProps) => Promise<JSX.Element | null>> = {
  'adult-swimming-lessons': LocalAdultPage,
  'baby-swim-lessons': LocalBabyPage,
  'kids-swimming-lessons': LocalKidsPage,
  'private-swim-lessons': LocalPrivatePage,
  'special-needs-swim-lessons': LocalSpecialNeedsPage,
  'swim-instructor-jobs': LocalSwimInstructorJobsPage,
  'teen-swim-lessons': LocalTeenPage,
  'toddler-swim-lessons': LocalToddlerPage,
}

async function DynamicCityPage(props: Props) {
  const params = await props.params;
  const [city, state, page] = params.slug.split('--');

  if (!city || !state || !page) redirect('/');
  if (!Object.keys(pageToComponentMapping).includes(page)) redirect('/');

  const cityFormatted = city.replaceAll('-', ' ');
  const data = await getLocationAndMetroAreaByCityAndState({city: cityFormatted, state});

  if (!data) throw new Error(); // will be caught in error boundary

  const { locationCityPage, metroArea } = data;
  if (!metroArea) redirect('/');

  const metroAreaEntity = new MetroAreaEntityBuilder().build(metroArea);
  const locationCityPageEntity = locationCityPage ? new LocationCityPageEntityBuilder().build(locationCityPage) : null

  return pageToComponentMapping[page]({ metroArea: metroAreaEntity, locationCityPage: locationCityPageEntity });
}

export default withServerSideErrorBoundary(DynamicCityPage, <Error500Page reason={'Database query failed'} />);
