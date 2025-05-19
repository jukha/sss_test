'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import RegistrationPageLayout from './components/shared/RegistrationPageLayout';
import { LocationsAndPricesContextProvider } from '@/context/locations-and-prices.context';
import { useEffect } from 'react';
import { useRegistrationForm } from '@/context/registration-form.context';
import { PaymentDetailsProvider } from '@/context/payment-datails.context';

type Props = {
  registration: RegistrationForm;
  registrationFormType: string;
};

const ClientRegistrationPage = ({
  registration,
  registrationFormType,
}: Props) => {
  const { setRegistrationForm } = useRegistrationForm();

  useEffect(() => {
    setRegistrationForm(registration);
  }, [registration]);

  return (
    <LocationsAndPricesContextProvider>
      <PaymentDetailsProvider>
        <RegistrationPageLayout
          databaseId={registration.id.toString() || ''}
          secret={registration.secret || ''}
          formId={registrationFormType}
        />
      </PaymentDetailsProvider>
    </LocationsAndPricesContextProvider>
  );
};

export default ClientRegistrationPage;
