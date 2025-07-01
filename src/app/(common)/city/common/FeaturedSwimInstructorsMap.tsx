import React from 'react';
import SearchNearbyInstructorsSection from '@/components/sections/SearchNearbyInstructorsSection';

export const FeaturedSwimInstructorsMap = () => {
  return (
    <section className='md:px-[4em] relative flex flex-col gap-20 overflow-clip justify-start items-center'>
      <div className="w-full">
        <SearchNearbyInstructorsSection />
      </div>
    </section>
  )
}
