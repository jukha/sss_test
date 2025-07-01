'use client';

import { MetroAreaEntity } from '@/entities/metro-area.entity';
import { ReactNode } from 'react';
import { LocationCityPageEntity } from '@/entities/location-city-page.entity';
import { CityPageContextProvider } from '@/app/(common)/city/context';

type Props = {
  metroArea: MetroAreaEntity;
  locationCityPage: LocationCityPageEntity | null;
  children: ReactNode;
}

export default function ClientDynamicCityPage({ metroArea, locationCityPage, children }: Props) {
  return (
    <CityPageContextProvider value={{ metroArea, locationCityPage }}>
      {children}
    </CityPageContextProvider>
  )
}
