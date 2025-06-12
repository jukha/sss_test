import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LocationsAndPricingEntity } from '@/entities/locations-and-pricing.entity';
import { apiClient } from '@/api_client/api.client';

const LocationsAndPricesContext = createContext<LocationsAndPricingEntity | null>(null);

export const LocationsAndPricesContextProvider = ({children}: {children: ReactNode}) => {
  const [state, setState] = useState<LocationsAndPricingEntity | null>(null);

  useEffect(() => {
    apiClient.registration.locationsAndPricing.get().then(({ data }) => setState(data))
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
