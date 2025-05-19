import { CreditCardData } from '@/entities/payment-details.entity';
import { createContext, useContext, useState } from 'react';

export interface PaymentDetailsContextType {
  creditCardData?: CreditCardData;
  setCreditCardData: (data: CreditCardData) => void;
  creditCardErrors: Partial<Record<keyof CreditCardData, string>>;
  setCreditCardErrors: (
    errors: Partial<Record<keyof CreditCardData, string>>
  ) => void;
}

const PaymentDetailsContext = createContext<
  PaymentDetailsContextType | undefined
>(undefined);

export const PaymentDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [creditCardData, internalSetCreditCardData] = useState<CreditCardData>();
  const [creditCardErrors, setCreditCardErrors] = useState({});

  const setCreditCardData = (data: CreditCardData) => {
    internalSetCreditCardData({
      cardNumber: data.cardNumber.replace(/\s/g, ''),
      expiry: data.expiry,
      cvv: data.cvv,
      name: data.name,
    });
  };

  return (
    <PaymentDetailsContext.Provider
      value={{
        creditCardData,
        setCreditCardData,
        creditCardErrors,
        setCreditCardErrors,
      }}
    >
      {children}
    </PaymentDetailsContext.Provider>
  );
};

export const usePaymentDetails = () => {
  const context = useContext(PaymentDetailsContext);
  if (!context) {
    throw new Error('context is undefined');
  }
  return context;
};
