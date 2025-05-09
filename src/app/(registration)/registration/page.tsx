'use client';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { startRegistrationRepository } from '@/repositories/registration/start-registration.repository';
import { useEffect, useState } from 'react';
import RegistrationPageLayout from './RegistrationPageLayout';

const REGISTRATION_FORM_TYPE = 'J';

const RegistrationWrapper = () => {
  const [data, setData] = useState<RegistrationForm | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await startRegistrationRepository.post({
        data: null,
        headers: { 'X-RegFormType-Id': REGISTRATION_FORM_TYPE },
      });

      if (!data) {
        setHasError(true);
        return;
      }

      setData(data);
    })();
  }, []);

  if (hasError) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-yellow'>
        <h2 className='text-red'>Error</h2>
      </div>
    );
  }

  return (
    <RegistrationPageLayout
      databaseId={data?.id.toString() || ''}
      secret={data?.secret || ''}
      formId={REGISTRATION_FORM_TYPE}
    />
  );
};

export default RegistrationWrapper;
