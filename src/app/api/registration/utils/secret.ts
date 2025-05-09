import cryptoRandomString from 'crypto-random-string';
import {registrationSettings} from '@/app/api/registration/settings';


export const generateRegistrationSecret = () => {
  return cryptoRandomString({ length: registrationSettings.registrationRecordSecretLength });
};
