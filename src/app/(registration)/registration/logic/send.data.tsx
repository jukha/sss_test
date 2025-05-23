import { RegistrationForm } from '@/entities/registration-form.entity';
import { registrationStepRepository } from '@/repositories/registration/registration-step.repository';

function convertFormDataToRecord (formData: Partial<RegistrationForm> | null): Record<string, unknown> {
  const record: Record<string, unknown> = {};

  if (!formData) {
    return record;
  }

  for (const [k, v] of Object.entries(formData)) {
    if (v !== null || (typeof v === 'string' && v !== '')) {
      record[k] = v;
    }
  }

  return record;
}


type SendDataToServerParameters = {
  registrationRecordId: string,
  registrationFormTypeId: string,
  secret: string,
  formData: RegistrationForm | null
};


export async function sendDataToServer ({ registrationRecordId, registrationFormTypeId, secret, formData } : SendDataToServerParameters) {
  const record = convertFormDataToRecord(formData);

  try {
    await registrationStepRepository.post({
      data: record,
      endpoint: `/1`,
      headers: {
        'X-RegFormType-Id': registrationFormTypeId,
        'X-Registration-Secret': secret,
        'X-Registration-Id': registrationRecordId,
      },
    }); // todo add error handling?
  } catch (error) {
    console.log(error);
  }
}
