import RegistrationPageLayout from '../../../components/shared/RegistrationPageLayout';

const REGISTRATION_FORM_TYPE = 'J';

export default async function Registration({
  params,
}: {
  params: Promise<{ id: string; secret: string }>;
}) {
  const { id, secret } = await params;
  return <RegistrationPageLayout formId={REGISTRATION_FORM_TYPE} databaseId={id} secret={secret} />;
}
