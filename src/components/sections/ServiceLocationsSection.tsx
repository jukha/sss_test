import React from 'react';

import { searchOurServiced } from '@/app/(common)/(home)/data';
import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import CustomInputForm from '../shapes/CustomInputForm';
import MapWithStates from '../widgets/MapWithStates';

const ServiceLocationsSection = () => {
  return (
    <Container className='w-full py-28'>
      <Typography
        variant='h2'
        className='max-w-[593px] text-center mx-auto mb-9'
      >
        {searchOurServiced.title}
      </Typography>
      <Typography
        variant='body1'
        className='text-brown max-w-[382px] text-center mx-auto mb-16 font-bold'
      >
        {searchOurServiced.desc}
      </Typography>
      {/* Map */}
      <div className='relative z-0 flex justify-center'>
        <div className='absolute top-[20%] lg:top-36 max-w-[80%] mx-auto lg:max-w-full'>
          <CustomInputForm placeholder='Your Zip Code' submitText='Search' />
        </div>
        <MapWithStates />
        <div className='map-search-background top-2.5 -z-[1] absolute inset-0 h-full bg-blueSky'></div>
      </div>
    </Container>
  );
};

export default ServiceLocationsSection;
