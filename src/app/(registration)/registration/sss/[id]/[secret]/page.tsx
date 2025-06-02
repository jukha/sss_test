import ClientRegistrationPage from '@/app/(registration)/registration/ClientRegistrationPage';
import {
  createRegistration,
  loadRegistration,
} from '@/app/api/registration/utils/registration-record';
import { redirect } from 'next/navigation';
import { CustomerRegistration } from '@/__generated__/prisma';
import { Error500Page } from '@/components/error_pages/Error500Page';

const REGISTRATION_FORM_TYPE = 'J';

type Props = {
  params: Promise<{ id: string; secret: string }>;
};

export default async function Registration({ params }: Props) {
  const { id, secret } = await params;
  let registration: CustomerRegistration | undefined | null;

  try {
    registration = await loadRegistration({
      secret,
      id: BigInt(id),
      formTypeId: REGISTRATION_FORM_TYPE,
    });
  } catch {
    return <Error500Page reason={'Database query failed'}/>
  }

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
