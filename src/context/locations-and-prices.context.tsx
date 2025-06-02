import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LocationsAndPricingEntity } from '@/entities/locations-and-prices.entity';
import { locationsAndPricingRepository } from '@/repositories/locations-and-pricing.repository';

const LocationsAndPricesContext = createContext<LocationsAndPricingEntity | null>(null);

export const LocationsAndPricesContextProvider = ({children}: {children: ReactNode}) => {
  const [state, setState] = useState<LocationsAndPricingEntity | null>(null);

  useEffect(() => {
    // @ts-expect-error We use POST to retrieve data and not to send
    locationsAndPricingRepository.post<LocationsAndPricingEntity>({data: {}}).then(({data}) => setState(data));
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
