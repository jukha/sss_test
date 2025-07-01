import React from 'react';

import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import MapWithStates from '../widgets/MapWithStates';
import { ServiceLocations } from '@/enum/service-locations.enum';
import { ZipCodeInput } from '@/components/ZipCodeInput';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

type ServiceLocationsProps = {
  content?: {
    title?: string;
    desc?: string;
  };
  locationsToShow?: ServiceLocations[];
};

const searchOurServiced = {
  title: 'Search our Serviced Locations',
  desc: 'Find out if a Sunsational Swim instructor is in your area',
};

const ServiceLocationsSection = ({
  content,
  locationsToShow = [ServiceLocations.All],
}: ServiceLocationsProps) => {
  return (
    <Container className='w-full'>
      <Typography
        variant='h2'
        className='max-w-[982px] text-center mx-auto mb-9'
      >
        {content?.title || searchOurServiced.title}
      </Typography>
      <Typography
        variant='body1'
        className='text-offBlack max-w-[982px] text-center mx-auto mb-16 font-bold whitespace-pre-wrap'
      >
        {content?.desc || searchOurServiced.desc}
      </Typography>
      {/* Map */}
      <div className='relative z-0 flex justify-center'>
        <div className='absolute top-[20%] lg:top-36 max-w-[80%] mx-auto lg:max-w-full'>
          <ZipCodeInput autoNavigate={true}/>
        </div>
        <MapWithStates locationsToShow={locationsToShow} />
        <div className='map-search-background top-2.5 -z-[1] absolute inset-0 h-full bg-lightBlue'></div>
      </div>
    </Container>
  );
};

export default withClientErrorBoundary(ServiceLocationsSection);
