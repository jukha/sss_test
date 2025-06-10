/*
  Make Step7 be never detached in order to Stripe PaymentElement iframe to always stay attached and never re-load.
  Otherwise it looses CC data previously entered. And loads slowly, BTW. :)
*/

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptionsMode } from '@stripe/stripe-js';

import { BuildOnFieldFocusLostHandlerFunction } from '../../../types';
import RegistrationForm7Internals from './RegistrationForm7Internals';

const STRIPE_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '';
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
};

const RegistrationForm7: React.FC<Props> = ({ onNextClicked, onPreviousClicked, buildOnFieldFocusLostHandler }) => {
  const stripeOptions: StripeElementsOptionsMode = {
    mode: 'setup',
    currency: 'usd',
    paymentMethodCreation: 'manual',
    loader: 'always',
    fonts: [
      {
        cssSrc:
          'https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap',
      },
    ],
    appearance: {
      theme: 'stripe',
      variables: {
        borderRadius: '10px',
        fontFamily: '"Rethink Sans", san-serif, Arial, Helvetica, sans-serif',
      },
      rules: {
        '.Input': {
          borderColor: '#8e8e8e',
          borderWidth: '2px',
        },
        '.Input:focus': {
          borderColor: '#fedf46',
          boxShadow: 'none',
        },
        '.Input--invalid': {
          borderColor: '#d60009',
        },
        '.Label': {
          color: '#110241',
          lineHeight: '2',
          fontSize: '16px',
          fontWeight: '500',
        },
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={stripeOptions}>
      <RegistrationForm7Internals onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler} />
    </Elements>
  );
};

export default RegistrationForm7;
