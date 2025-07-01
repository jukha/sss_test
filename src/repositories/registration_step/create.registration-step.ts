'use server';

import {
  addRegistrationHistoryRecord,
  loadRegistration,
  updateRegistration
} from '@/app/api/registration/utils/registration-record';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { CustomerRegistration } from '@/__generated__/prisma';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';
import sendmail from 'sendmail';
import { promisify } from 'node:util';

const sendmailInstance = sendmail({});
const sendMailAsync = promisify(sendmailInstance);

type Options = {
  registrationIdentifier: RegistrationRecordIdentifier
  version: number;
  data: Partial<RegistrationForm>;
  sendWebhook?: boolean;
}

const sendWebhookRequest = (recordId: number) => {
  const webHookUrl = process.env.REGISTRATION_COMPLETE_WEBHOOK_URL;
  if (!webHookUrl) return;

  fetch(webHookUrl, {
    method: 'POST',
    body: JSON.stringify({ id: recordId })
  })
}

const sendEmailRequest = (recordId: number) => {
  const EMAIL_FROM = process.env.NOTIFY_ME_EMAIL_FROM;
  const EMAIL_TO = process.env.NOTIFY_ME_EMAIL_TO;
  if (!EMAIL_FROM || !EMAIL_TO) return;

  sendMailAsync({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: recordId.toString(),
    html: '',
  });
}

const createRegistrationStep = async ({registrationIdentifier, version, data, sendWebhook = false}: Options) => {
  const registration = await loadRegistration(registrationIdentifier);
  if (!registration) return;

  const newRegistrationVersion = version;
  if (registration.version > newRegistrationVersion) return;

  const freshData = { ...data, version: newRegistrationVersion };

  delete freshData.policiesAgreement;
  delete freshData.youngstersPoliciesAgreement;

  const updatedRegistration = await updateRegistration({
    id: registration.id,
    data: freshData as Partial<CustomerRegistration>
  });

  await addRegistrationHistoryRecord(updatedRegistration);

  if (sendWebhook || data.isRegistrationComplete) sendWebhookRequest(Number(updatedRegistration.id))
  if (data.isRegistrationComplete) sendEmailRequest(Number(updatedRegistration.id))

  return updatedRegistration;
}

export default createRegistrationStep;
