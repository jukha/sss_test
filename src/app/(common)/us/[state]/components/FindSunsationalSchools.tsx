import React from 'react';
import SectionLinksList from '../../common/SectionLinksList';
import { LocationStateEntity } from '@/entities/location-state.entity';
import { generateUrlLocationName } from '@/helpers/generate-city-service-url';
import { LocationCityPage } from '@/__generated__/prisma';

type Props = {
  stateData: LocationStateEntity;
  cities: LocationCityPage[];
};

const FindSunsationalSchools: React.FC<Props> = ({ stateData, cities }) => {
  return (
    <div className='container mx-auto px-4'>
      <SectionLinksList
        heading='Find Sunsational Swim School In Your Neighborhood'
        linksList={cities.map((city) => {
          return {
            label: city.name,
            href: `/us/${generateUrlLocationName(stateData.abbreviation)}/${generateUrlLocationName(city.name)}`,
          };
        })}
        columnCount={6}
      />
    </div>
  );
};

export default FindSunsationalSchools;
