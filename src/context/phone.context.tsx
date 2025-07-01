'use client';

import { createContext, ReactNode, useContext } from 'react';
import { DEFAULT_PHONE_NUMBER } from '@/settings';

const PhoneContext = createContext(DEFAULT_PHONE_NUMBER);

type ProviderProps = {
  children: ReactNode;
  value: string;
}

export const PhoneContextProvider = ({ children, value }: ProviderProps) => {
  return (
    <PhoneContext.Provider value={value}>
      {children}
    </PhoneContext.Provider>
  )
}

export const useLocalPhoneNumber = () => {
  const context = useContext(PhoneContext);

  return {
    formatted: context,
    telLink: `tel:${context.replaceAll('-', '')}`,
  };
}
