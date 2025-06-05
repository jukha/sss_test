import { AttachPaymentMethodResponse } from '@/app/api/payment/attach-payment-method/route';
import { CreateCustomerResponse } from '@/app/api/payment/create-customer/route';

type CreateCustomerArgs = {
  firstName: string;
  lastName: string;
  email: string;
  orderId: string;
};

export const createCustomer = async ({
  firstName,
  lastName,
  email,
  orderId,
}: CreateCustomerArgs): Promise<CreateCustomerResponse> => {
  const response = await fetch('/api/payment/create-customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, orderId }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Create customer error');
  }

  return await response.json();
};

export const attachPaymentMethod = async (
  paymentMethodId: string,
  customerId: string
): Promise<AttachPaymentMethodResponse> => {
  const response = await fetch('/api/payment/attach-payment-method', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentMethodId,
      customerId,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Attach error');
  }

  return await response.json();
};

export const createCustomerAndAttachPaymentMethod = async ({
  firstName,
  lastName,
  email,
  orderId,
  paymentMethodId,
}: CreateCustomerArgs & { paymentMethodId: string }) => {
  try {
    const { id } = await createCustomer({ firstName, lastName, email, orderId });
    return await attachPaymentMethod(paymentMethodId, id);
  } catch (error) {
    console.error(error);
  }
};
