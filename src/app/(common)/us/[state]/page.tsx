import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/widgets/Breadcrumbs';
import getLocationStates from '@/repositories/location_states/base.location_states';
import getCitiesPagesByStateId from '@/repositories/location_city_page/get-cities-pages-by-state-id';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { Error500Page } from '@/components/error_pages/Error500Page';

import TopSwimPrograms from './components/TopSwimPrograms';
import FindSunsationalSchools from './components/FindSunsationalSchools';
import SectionHero from '../common/SectionHero';

async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const states = await getLocationStates();
  const stateData = states.find((stateData) => stateData.abbreviation.toLowerCase() === state);

  if (!stateData) {
    return notFound();
  }

  const cities = await getCitiesPagesByStateId(stateData.id);

  return (
    <main className='flex flex-col'>
      <SectionHero titleHighlight={stateData.name} />
      <Breadcrumbs
        className='mt-5'
        color='var(--color-darkBlue)'
        rootCrumbLabel='Swim School'
        customCrumbs={[
          {
            label: stateData.name,
            href: '',
          },
        ]}
      />
      <TopSwimPrograms stateData={stateData} cities={cities} />
      <FindSunsationalSchools stateData={stateData} cities={cities} />
    </main>
  );
}

export default withServerSideErrorBoundary(Page, <Error500Page reason={'Database query failed'} />);
