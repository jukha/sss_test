'use client';

import CustomInputForm from '@/components/shapes/CustomInputForm';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  onSubmit?: (zipCode: string) => void;
  outlineColor?: string;
  autoNavigate?: boolean;
  defaultValue?: string;
}

export const ZipCodeInput = ({ onSubmit, outlineColor, autoNavigate, defaultValue }: Props) => {
  const router = useRouter();
  const [inputError, setInputError] = useState('');
  const [value, setValue] = useState(defaultValue || '');

  const handleSubmit = (zip: string) => {
    if (zip.length !== 5) {
      setInputError('Please enter 5-digit zip');
      return;
    }

    if (autoNavigate) router.push(`/swim-instructors/nearby/${zip}`);
    else onSubmit?.(zip);
  }

  const onChange = (newValue: string) => {
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  }

  return (
    <CustomInputForm
      placeholder='Your Zip Code'
      submitText='Search'
      onSubmit={handleSubmit}
      maxLength={5}
      error={inputError}
      onErrorReset={() => setInputError('')}
      outlineColor={outlineColor}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  )
}
