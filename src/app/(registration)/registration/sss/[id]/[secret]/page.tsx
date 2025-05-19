import ClientRegistrationPage from '@/app/(registration)/registration/ClientRegistrationPage';
import {
  createRegistration,
  loadRegistration,
} from '@/app/api/registration/utils/registration-record';
import { redirect } from 'next/navigation';

const REGISTRATION_FORM_TYPE = 'J';

type Props = {
  params: Promise<{ id: string; secret: string }>;
};

export default async function Registration({ params }: Props) {
  const { id, secret } = await params;

  const registration = await loadRegistration({
    secret,
    id: BigInt(id),
    formTypeId: REGISTRATION_FORM_TYPE,
  });

  if (!registration) {
    redirect('/registration');
  }

  const registrationClone = await createRegistration({ ...registration, id: undefined });

  return (
    <ClientRegistrationPage
      registration={registrationClone}
      registrationFormType={REGISTRATION_FORM_TYPE}
    />
  );
}
