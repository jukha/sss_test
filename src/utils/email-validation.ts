'use server';
import { sendgrid } from '@/sendgrid';


export type EmailsMap = Record<string, string | null>;

export type EmailRecord = {
  email: string | null,
  fieldName?: string | null,
};

export type ValidationRecord = {
  record: EmailRecord,
  isValid?: boolean,
  serviceFailure?: boolean,
  errorMessage?: string,
};


export const validateEmailsMap = async (emailsMap: EmailsMap): Promise<ValidationRecord[]> => {
  const emailRecords = Object.entries(emailsMap).map(([key, value]) => {
    return {
      fieldName: key,
      email: value,
    };
  });

  return await validateEmails(emailRecords);
};


export const validateOneEmail = async (email: string): Promise<ValidationRecord> => {
  const result = await validateEmails([{ email }]);
  return result[0];
};


export const validateEmails = async (emailRecords: EmailRecord[]): Promise<ValidationRecord[]> => {
  const emailValidationPromises = await Promise.allSettled(
    emailRecords.map((emailRecord) => {
      if (!emailRecord || !emailRecord.email) {
        return Promise.resolve({
          isValid: false,
          message: 'Required',
        });
      }

      // console.log('ER:', emailRecord);
      return sendgrid.validateEmailOnServer(emailRecord.email);
    })
  );

  const validationResults = emailValidationPromises.map((promise, idx) => {
    // console.log('P:', promise);

    if (promise.status === 'rejected') {
      return {
        record: emailRecords[idx],
        serviceFailure: true,
      };
    }

    const validationRecord = {
      record: emailRecords[idx],
      isValid: promise.value?.isValid === true,
      errorMessage: promise.value?.message,
    };

    // console.log('VR:', validationRecord);
    return validationRecord;
  });

  return validationResults;
};
