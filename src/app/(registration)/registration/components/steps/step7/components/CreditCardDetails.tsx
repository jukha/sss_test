import { useState } from 'react';
import { personIcon, calendarIcon, cardVerificationValueIcon } from '@/assets';
import CustomInput from '@/components/CustomInput';
import CreditCardNumberInput from './CreditCardNumberInput';
import {
  formatCardNumber,
  formatCvv,
  formatExpiryDate,
} from '@/helpers/credit-card';

type Details = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
};

type Props = {
  initialDetails?: Details;
  errors?: Details;
  onChange?: (v: Details) => void;
};

const CreditCardDetails: React.FC<Props> = ({
  initialDetails,
  errors,
  onChange,
}) => {
  const [state, setState] = useState<Details>({
    cardNumber: initialDetails?.cardNumber
      ? formatCardNumber(initialDetails?.cardNumber)
      : '',
    expiry: initialDetails?.expiry
      ? formatExpiryDate(initialDetails?.expiry)
      : '',
    cvv: initialDetails?.cvv ? formatCvv(initialDetails?.cvv) : '',
    name: initialDetails?.name ?? '',
  });

  const setFieldValue = (key: keyof Details, value: string) => {
    let v = value;

    switch (key) {
      case 'cardNumber': v = formatCardNumber(v);
      break;

      case 'expiry': v = formatExpiryDate(v);
      break;

      case 'cvv': v = formatCvv(v);
      break;
    }
    // if (key === 'cardNumber') {
    //   v = formatCardNumber(v);
    // }
    //
    // if (key === 'expiry') {
    //   v = formatExpiryDate(v);
    // }
    //
    // if (key === 'cvv') {
    //   v = formatCvv(v);
    // }

    const newData = { ...state, [key]: v };
    setState(newData);
    onChange?.(newData);
  };

  return (
    <div className='flex flex-col gap-5'>
      <CreditCardNumberInput
        value={state.cardNumber}
        onChange={(v) => setFieldValue('cardNumber', v)}
        error={errors?.cardNumber}
      />

      <div className='flex items-center gap-3.5'>
        <CustomInput
          value={state.expiry}
          onChange={(e) => setFieldValue('expiry', e.target.value)}
          text='Expiration'
          inputMode='numeric'
          placeholder='MM/YY'
          icon={calendarIcon}
          error={errors?.expiry}
          name='cc-exp'
          autoComplete='cc-exp'
        />
        <CustomInput
          value={state.cvv}
          onChange={(e) => setFieldValue('cvv', e.target.value)}
          text='Security Code'
          inputMode='numeric'
          placeholder='CVV'
          icon={cardVerificationValueIcon}
          error={errors?.cvv}
          name='cc-cvv'
          autoComplete='cc-cvv'
        />
      </div>

      <CustomInput
        value={state.name}
        onChange={(e) => setFieldValue('name', e.target.value)}
        text='Cardholder Name'
        icon={personIcon}
        error={errors?.name}
        name='cc-name'
        autoComplete='cc-name'
      />
    </div>
  );
};

export default CreditCardDetails;
