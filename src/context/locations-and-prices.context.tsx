import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LocationsAndPricingEntity } from '@/entities/locations-and-pricing.entity';
import clientDataApi from '@/actions/data/client-data-api';

const LocationsAndPricesContext = createContext<LocationsAndPricingEntity | null>(null);

export const LocationsAndPricesContextProvider = ({children}: {children: ReactNode}) => {
  const [state, setState] = useState<LocationsAndPricingEntity | null>(null);

  useEffect(() => {
    clientDataApi.registration.locationsAndPricing.get().then(setState);
  }, [])

  return(
    <LocationsAndPricesContext.Provider value={state}>
      {children}
    </LocationsAndPricesContext.Provider>
  )
}

export const useLocationsAndPricing = () => {
  const locationsAndPricing = useContext(LocationsAndPricesContext);

  if (!locationsAndPricing) return {data: null, loading: true};
  return {data: locationsAndPricing, loading: false};
}
