import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { STRIPE_SECRET_KEY } from '../constants';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export type CreateCustomerResponse = {
  id: Stripe.Customer['id'];
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { firstName, lastName, orderId, email } = data;

    if (!firstName || !lastName || !orderId || !email) {
      return NextResponse.json({ message: 'invalid data' }, { status: 400 });
    }

    const customer = await stripe.customers.create({
      email,
      description: `${firstName} ${lastName} Order#${orderId}`,
    });

    return NextResponse.json({ id: customer.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
};
