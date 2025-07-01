'use client';

import { createContext, ReactNode, useContext } from 'react';
import { MetroAreaEntity } from '@/entities/metro-area.entity';
import { LocationCityPageEntity } from '@/entities/location-city-page.entity';

type CityPageContextType = {
  metroArea: MetroAreaEntity;
  locationCityPage: LocationCityPageEntity | null;
}

const CityPageContext = createContext<CityPageContextType | undefined>(undefined);

type ProviderProps = {
  children: ReactNode;
  value: CityPageContextType;
}

export const CityPageContextProvider = ({ value, children }: ProviderProps) => {
  return (
    <CityPageContext.Provider value={value}>
      {children}
    </CityPageContext.Provider>
  )
}

export const useCityPageContext = () => {
  const { metroArea, locationCityPage } = useContext(CityPageContext)!;

  return {
    metroArea,
    locationCityPage,
    cityName: locationCityPage?.name || metroArea.name,
  };
}
