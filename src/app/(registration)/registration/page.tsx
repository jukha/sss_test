'use server';

import ClientRegistrationPage from './ClientRegistrationPage';
import { createRegistration } from '@/app/api/registration/utils/registration-record';

const REGISTRATION_FORM_TYPE = 'J';

const RegistrationPage = async () => {
  const registrationData = await createRegistration({
    registrationFormType: REGISTRATION_FORM_TYPE,
  });

  return (
    <ClientRegistrationPage
      registration={registrationData}
      registrationFormType={REGISTRATION_FORM_TYPE}
    />
  );
};

export default RegistrationPage;
