import React from 'react';

import { LocationStateEntity } from '@/entities/location-state.entity';
import { generateCityServiceUrl } from '@/helpers/generate-city-service-url';
import { LocationCityPage } from '@/__generated__/prisma';

import SectionLinksList from '../../common/SectionLinksList';

const topProgramsList = ['Private Swim Lessons', 'Baby Swim Lessons'];

type Props = {
  stateData: LocationStateEntity;
  cities: LocationCityPage[];
};

const getLinkDataForStateCities = (stateAbbr: string, cityName: string) => {
  return topProgramsList.map((program) => {
    return {
      label: `${program} ${cityName}`,
      href: generateCityServiceUrl(cityName, stateAbbr, program),
    };
  });
};

const TopSwimPrograms: React.FC<Props> = ({ stateData, cities }) => {
  return (
    <div className='container mx-auto px-4 my-[80px]'>
      <SectionLinksList
        heading={`Top Swim Programs In Your Location: ${stateData.name}`}
        linksList={cities.map((city) => getLinkDataForStateCities(stateData.abbreviation, city.name)).flat()}
      />
    </div>
  );
};

export default TopSwimPrograms;
