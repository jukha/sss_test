import RegistrationPageLayout from '../../../RegistrationPageLayout';

const FORM_ID = 'J';

export default async function Registration({
  params,
}: {
  params: Promise<{ id: string; secret: string }>;
}) {
  const { id, secret } = await params;
  return <RegistrationPageLayout formId={FORM_ID} databaseId={id} secret={secret} />;
}
