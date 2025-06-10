import React from 'react';
import Link from 'next/link';
import Container from '../layout/Container';
import Typography from '../semantics/Typography';

const locations = [
  { name: 'Atlanta', href: '/atlanta' },
  { name: 'Austin', href: '/austin' },
  { name: 'Boston', href: '/boston' },
  { name: 'Charlotte', href: '/charlotte' },
  { name: 'Chicago', href: '/chicago' },
  { name: 'Dallas', href: '/dallas' },
  { name: 'Denver', href: '/denver' },
  { name: 'Fort Lauderdale', href: '/fort-lauderdale' },
  { name: 'Fort Myers', href: '/fort-myers' },
  { name: 'Gainesville', href: '/gainesville' },
  { name: 'Honolulu', href: '/honolulu' },
  { name: 'Houston', href: '/houston' },
  { name: 'Inland Empire', href: '/inland-empire' },
  { name: 'Jacksonville', href: '/jacksonville' },
  { name: 'Kansas City', href: '/kansas-city' },
  { name: 'Las Vegas', href: '/las-vegas' },
  { name: 'Los Angeles', href: '/los-angeles' },
  { name: 'Miami', href: '/miami' },
  { name: 'New York City', href: '/new-york-city' },
  { name: 'Orange County', href: '/orange-county' },
  { name: 'Orlando', href: '/orlando' },
  { name: 'Palm Beach', href: '/palm-beach' },
  { name: 'Philadelphia', href: '/philadelphia' },
  { name: 'Phoenix', href: '/phoenix' },
  { name: 'Pittsburgh', href: '/pittsburgh' },
  { name: 'Sacramento', href: '/sacramento' },
  { name: 'San Antonio', href: '/san-antonio' },
  { name: 'San Bernardino', href: '/san-bernardino' },
  { name: 'San Diego', href: '/san-diego' },
  { name: 'San Fernando Valley', href: '/san-fernando-valley' },
  { name: 'San Francisco', href: '/san-francisco' },
  { name: 'San Jose', href: '/san-jose' },
  { name: 'Santa Barbara', href: '/santa-barbara' },
  { name: 'Sarasota', href: '/sarasota' },
  { name: 'Seattle', href: '/seattle' },
  { name: 'South Florida', href: '/south-florida' },
  { name: 'Tallahassee', href: '/tallahassee' },
  { name: 'Tampa', href: '/tampa' },
  { name: 'Tucson', href: '/tucson' },
  { name: 'Ventura', href: '/ventura' },
  { name: 'Virginia Beach', href: '/virginia-beach' },
  { name: 'Walnut Creek', href: '/walnut-creek' },
  { name: 'Washington DC', href: '/washington-dc' },
];

const LocationsListSection = () => {
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
          {locations.map((location, index) => (
            <div
              key={index}
              className='flex  justify-start items-center relative'
            >
              <Link
                href={location.href}
                className='  leading-[180%] font-secondary  text-mediumGray font-medium  text-base  opacity-80 relative whitespace-nowrap underline'
              >
                {location.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LocationsListSection;
