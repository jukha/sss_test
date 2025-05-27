import ClientRegistrationPage from './ClientRegistrationPage';
import { createRegistration } from '@/app/api/registration/utils/registration-record';
import { CustomerRegistration } from '@/__generated__/prisma';
import { Error500Page } from '@/components/error_pages/Error500Page';

export const dynamic = 'force-dynamic';

const REGISTRATION_FORM_TYPE = 'J';

const RegistrationPage = async () => {
  let registrationData: CustomerRegistration | undefined;

  try {
    registrationData = await createRegistration({
      registrationFormType: REGISTRATION_FORM_TYPE,
    });
  } catch (e) {
    console.error(e);
  }

  if (!registrationData) return <Error500Page reason={'Database query failed'}/>

  return (
    <ClientRegistrationPage
      registration={registrationData}
      registrationFormType={REGISTRATION_FORM_TYPE}
    />
  );
};

export default RegistrationPage;
