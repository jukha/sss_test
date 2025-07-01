import React from 'react';
import SectionLinksList from '../../../common/SectionLinksList';
import { LocationStateEntity } from '@/entities/location-state.entity';
import { generateCityServiceUrl } from '@/helpers/generate-city-service-url';
import { LocationCityPage } from '@/__generated__/prisma';

const programsList = [
  'Private Swim Lessons',
  'Baby Swim Lessons',
  'Toddler Swim Lessons',
  'Child Swim Lessons',
  'Teenage Swim Lessons',
  'Adult Swim Lessons',
  'Special Needs Swim Lessons',
  'Swim Schools Near Me',
];

type Props = {
  stateData: LocationStateEntity;
  cityData: LocationCityPage;
};

const TopSwimPrograms: React.FC<Props> = ({ stateData, cityData }) => {
  return (
    <div className='container mx-auto px-4 my-[80px]'>
      <SectionLinksList
        heading={`Top Swim Programs In Your Location: ${cityData.name}`}
        linksList={programsList.map((program) => {
          return {
            label: `${program} ${cityData.name}`,
            href: generateCityServiceUrl(cityData.name, stateData.abbreviation, program),
          };
        })}
      />
    </div>
  );
};

export default TopSwimPrograms;
