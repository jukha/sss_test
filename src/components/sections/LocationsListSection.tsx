import React from 'react';
import Link from 'next/link';
import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';
import getLocationStates from '@/repositories/location_states/base.location_states';

const LocationsListSection = async () => {
  const states = await getLocationStates();
  const statesLinks = states.sort().map((state) => {
    return {
      name: state.name,
      href: `/us/${state.abbreviation.toLowerCase()}`,
    };
  });

  return (
    <Container>
      <div className='flex flex-col gap-7 justify-start items-center pl-6 md:px-0'>
        <Typography
          className='font-bold font-primary text-offBlack text-center leading-[114%]'
          variant='h4'
        >
          Available all across the USA!
        </Typography>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-[20px] md:gap-x-[80px] gap-y-2'>
          {statesLinks.map((state, index) => (
            <div
              key={index}
              className='flex  justify-start items-center relative'
            >
              <Link
                href={state.href}
                className='leading-[180%] font-secondary  text-mediumGray font-medium  text-base  opacity-80 relative whitespace-nowrap underline'
              >
                {state.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default withClientErrorBoundary(LocationsListSection);
