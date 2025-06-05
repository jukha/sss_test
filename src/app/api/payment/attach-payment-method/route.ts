import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { STRIPE_SECRET_KEY } from '../constants';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export type AttachPaymentMethodResponse = {
  success: boolean;
  customerId: Stripe.Customer['id'];
  paymentMethodId: Stripe.PaymentMethod['id'];
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { paymentMethodId, customerId } = data;

    if (!paymentMethodId || !customerId) {
      return NextResponse.json({ message: 'invalid data' }, { status: 400 });
    }

    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });

    await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    return NextResponse.json({ success: true, customerId, paymentMethodId }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
};
