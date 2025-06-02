import { RegistrationForm } from '@/entities/registration-form.entity';
import { registrationStepRepository } from '@/repositories/registration/registration-step.repository';
import { convertFormDataToDto } from '@/app/(registration)/registration/logic/validation';
import { GlobalErrorType } from '@/enum/global-error-type.enum';

type SendDataToServerParameters = {
  registrationRecordId: string,
  registrationFormTypeId: string,
  secret: string,
  formData: RegistrationForm | null
  step: number;
  version: number;
};

export async function sendDataToServer ({ registrationRecordId, registrationFormTypeId, secret, formData, step, version } : SendDataToServerParameters) {
  const record = convertFormDataToDto(formData);

  const {data, errorCode} = await registrationStepRepository.post({
    data: record,
    endpoint: `/${step}`,
    headers: {
      'X-RegFormType-Id': registrationFormTypeId,
      'X-Registration-Secret': secret,
      'X-Registration-Id': registrationRecordId,
      'X-Version': version.toString(),
    },
    globalErrorType: GlobalErrorType.RegistrationStepRequest
  });

  if (!data) throw new Error((errorCode || 'unknown').toString());
}
