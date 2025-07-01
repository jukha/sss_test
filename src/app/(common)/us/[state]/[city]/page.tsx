import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/widgets/Breadcrumbs';
import getLocationStates from '@/repositories/location_states/base.location_states';
import { generateUrlLocationName } from '@/helpers/generate-city-service-url';
import getCityPageByNameAndStateId from '@/repositories/location_city_page/get-city-page-by-name-and-stateId';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';

import TopSwimPrograms from './components/TopSwimPrograms';
import SectionHero from '../../common/SectionHero';

async function Page({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state, city } = await params;
  const states = await getLocationStates();
  const stateData = states.find((stateData) => stateData.abbreviation.toLowerCase() === state);

  if (!stateData) {
    return notFound();
  }

  const cityData = await getCityPageByNameAndStateId(city.replaceAll('-', ' '), stateData?.id);

  if (!cityData) {
    return notFound();
  }

  const stateBreadCrumbLink = `/us/${stateData.abbreviation.toLowerCase()}`;

  return (
    <main className='flex flex-col'>
      <SectionHero titleHighlight={cityData.name} />
      <Breadcrumbs
        className='mt-5'
        color='var(--color-darkBlue)'
        customCrumbs={[
          { label: stateData.name, href: stateBreadCrumbLink },
          {
            label: cityData.name,
            href: `${stateBreadCrumbLink}/${generateUrlLocationName(cityData.name)}`,
          },
        ]}
        rootCrumbLabel='Swim School'
      />
      <TopSwimPrograms stateData={stateData} cityData={cityData} />
    </main>
  );
}

export default withServerSideErrorBoundary(Page, <Error500Page reason={'Database query failed'} />);
