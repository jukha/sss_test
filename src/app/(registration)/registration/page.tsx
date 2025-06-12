import ClientRegistrationPage from './ClientRegistrationPage';
import { createRegistration } from '@/app/api/registration/utils/registration-record';
// import { loadRegistration } from '@/app/api/registration/utils/registration-record';
import { CustomerRegistration } from '@/__generated__/prisma';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { RegistrationFormEntityBuilder } from '@/entity_builders/registration-form.entity-builder';

export const dynamic = 'force-dynamic';

const REGISTRATION_FORM_TYPE = 'J';

const RegistrationPage = async () => {
  let registrationData: CustomerRegistration | undefined;

  try {
    //Used for debugging:
    // registrationData = await loadRegistration({
    //   id: '510',
    //   secret: '20ffa5f8e166687824b56de8b5944a',
    //   formTypeId: 'J'
    // });
    registrationData = await createRegistration({
      registrationFormType: REGISTRATION_FORM_TYPE,
      flexibleSchedule: true,
    });
  } catch (e) {
    console.error(e);
  }

  if (!registrationData) return <Error500Page reason={'Database query failed'}/>

  return (
    <ClientRegistrationPage
      registration={new RegistrationFormEntityBuilder().build(registrationData)}
      registrationFormType={REGISTRATION_FORM_TYPE}
    />
  );
};

export default RegistrationPage;
