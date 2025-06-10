'use client';

import Button from '@/components/kit/buttons/Button';
import AlertBox from '@/app/(registration)/registration/components/shared/AlertBox';
import { useState } from 'react';
import ModalLayout from '@/components/modal/ModalLayout';

type Props = {
  text?: string;
  onRetry?: () => Promise<void>;
  onClose: () => void;
}

export const ErrorModal = ({ text, onRetry, onClose }: Props) => {
  const [retrying, setRetrying] = useState(false);

  const retryWithLoading = () => {
    setRetrying(true);
    onRetry?.().finally(() => setRetrying(false));
  }

  return (
    <ModalLayout>
      <div className="flex flex-col gap-[20px]">
        <AlertBox
          type='error'
          text={text}
        />

        {retrying && <p>Retrying, please wait...</p>}

        <div className="flex gap-[20px]">
          <Button text={'Try again'} shadow={true} onClick={retryWithLoading} disabled={retrying}/>
          <Button text={'Cancel'} shadow={true} onClick={onClose} buttonClasses="bg-lightYellow" />
        </div>
      </div>
    </ModalLayout>
  )
}
