'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import RegistrationPageLayout from './components/shared/RegistrationPageLayout';
import { LocationsAndPricesContextProvider } from '@/context/locations-and-prices.context';
import { useEffect, useLayoutEffect } from 'react';
import { useRegistrationForm } from '@/context/registration-form.context';
import { FaqEntity } from '@/entities/faq.entity';
import { RegistrationFaqContext } from '@/context/registration-faq.context';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { RegistrationCustomerReviewContext } from '@/context/registration-customer-review.context';
import { apiClient } from '@/api_client/api.client';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';

type Props = {
  registration: RegistrationForm;
  registrationFormType: string;
  isConfirmationPage?: boolean;
  faqs: FaqEntity[];
  customerReviews: CustomerReviewEntity[];
};

const ClientRegistrationPage = ({ registration, registrationFormType, faqs, customerReviews, isConfirmationPage }: Props) => {
  const {
    setRegistrationForm,
    setRegistrationStep,
    setIsConfirmationPage
  } = useRegistrationForm();

  useEffect(() => {
    const initialStep = isConfirmationPage ? RegistrationStepEnum.Step7OrderConfirmed : RegistrationStepEnum.Step1;
    setRegistrationStep(initialStep)

    setIsConfirmationPage(isConfirmationPage || false);
    setRegistrationForm(registration);

    // we need it to restore form state if user navigates via back/forward browser buttons
    // nextjs router behaviour is strange - if user navigates via browser buttons,
    // page.tsx is not reloaded, i.e. request is not send again. so here you will have an empty reg form
    // (that one that was created in page.tsx earlier). so we need to re-request the actual state
    apiClient.registration.byCredentials.get({
      id: registration.id,
      secret: registration.secret!,
      formTypeId: registrationFormType
    }).then(({data}) => {
      setRegistrationForm(data || registration);
    })
  }, [registration, isConfirmationPage]);

  useLayoutEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    const savedOnBeforeUnload = window.onbeforeunload;

    window.onbeforeunload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = true;
      return true;
    };

    return () => {
      window.onbeforeunload = savedOnBeforeUnload;
    };
  }, []);

  return (
    <LocationsAndPricesContextProvider>
      <RegistrationFaqContext value={faqs}>
        <RegistrationCustomerReviewContext value={customerReviews}>
          <RegistrationPageLayout
            databaseId={registration.id.toString() || ''}
            secret={registration.secret || ''}
            formId={registrationFormType}
          />
        </RegistrationCustomerReviewContext>
      </RegistrationFaqContext>
    </LocationsAndPricesContextProvider>
  );
};

export default ClientRegistrationPage;
