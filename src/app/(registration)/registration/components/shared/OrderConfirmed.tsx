import React from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { blackArrow, orderConfirmed } from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import { CurvySubstrate } from '@/components/icons';
import { useRegistrationForm } from '@/context/registration-form.context';

const CONTACTS = {
  email: 'office@sunsationalswimschool.com',
  phone: '1-888-788-2140',
};

const NEXT_STEPS_LIST = [
  {
    discColor: '#D60009',
    text: 'A member of our matching team will review your registration and personally select the best-fit Sunsational swim instructor based on your registration details (usually 2 to 14 days).',
  },
  {
    discColor: '#F86008',
    text: "Once our matching team selects a swim teacher for your lessons, we'll email you the profile and contact details of your Sunsational swim teacher.",
  },
  {
    discColor: '#FEDF46',
    discTextColor: '#110241',
    text: 'Your private swimming instructor will reach out to you within 24 hours from the date you are matched to finalize your lesson schedule, or you can use the profile information you receive to contact them.',
  },
  {
    discColor: '#00ACB6',
    text: 'Your card on file will be billed for your full lesson package amount within 24 to 48 hours from the date you receive your matching confirmation email.',
  },
  {
    discColor: '#033D9A',
    text: 'Start your swimming lessons with your Sunsational swim instructor!',
  },
];

const OrderConfirmed: React.FC = () => {
  const router = useRouter();

  const { registrationForm } = useRegistrationForm();
  const { email } = registrationForm ?? {};

  const onBackToHomepageClicked = () => {
    router.push('/');
  };

  const StepListElem: React.FC<{
    text: string;
    number: number;
    numberColor?: string;
    numberBgColor?: string;
    isLastItem?: boolean;
  }> = ({ text, number, numberColor, numberBgColor, isLastItem }) => {
    return (
      <li className='relative flex items-start gap-6 leading-[1.2]'>
        <div className='w-[34px] h-[28px] relative flex items-center justify-center shrink-0 desktop:absolute desktop:top-0 -left-[58px]'>
          <CurvySubstrate
            className='absolute w-full h-full top-0 left-0'
            style={{ color: numberBgColor }}
          />
          <span
            className='relative z-1 font-bold font-primary text-[22px] text-white'
            style={{ color: numberColor }}
          >
            {number}
          </span>
        </div>

        <p
          className={clsx(
            'font-secondary',
            isLastItem ? 'font-bold text-[20px] text-darkBlue' : 'font-medium '
          )}
        >
          {text}
        </p>
      </li>
    );
  };

  return (
    <div className='leading-[1.2] flex flex-col gap-8'>
      <section>
        <h3>
          <span className='text-2xl text-offBlack desktop:text-[32px]'>
            Order Confirmed
          </span>
        </h3>
        <p className='font-medium'>
          We&apos;ve received your registration and you will be contacted as
          soon as our expert matching team has selected a Sunsational swim
          teacher for your lessons. Usually, it takes 2 to 14 days* for our team
          to sort and select the best-fit instructor for you.
        </p>

        <Image src={orderConfirmed} alt='' />

        {/*
        TODO condition visibility?
        `Use match_rate_30_day field of MetroArea taken from the useLocationsAndPricing.`
        */}
        <p className='font-medium'>
          *High demand is resulting in longer wait times in some cases. Our
          matching team will contact you with an update if you are on the
          waitlist for longer than 5 days. You can also contact us anytime at{' '}
          {CONTACTS.email} or M-F 830am-5pm PST at {CONTACTS.phone} to request
          an update on your swim instructor match.
        </p>
      </section>

      <div className='max-w-[410px] mx-auto'>
        <section>
          <h3>
            <span className='block text-2xl text-offBlack text-center'>
              What happens next
            </span>
          </h3>
          <div className='relative mt-2'>
            <div className='absolute top-1 left-[15px] w-[3px] h-[90%] bg-gray desktop:-left-[42px]' />
            <ul className='flex flex-col gap-6'>
              {NEXT_STEPS_LIST.map((step, idx) => (
                <StepListElem
                  key={idx}
                  number={idx + 1}
                  text={step.text}
                  numberColor={step.discTextColor}
                  numberBgColor={step.discColor}
                  isLastItem={idx === NEXT_STEPS_LIST.length - 1}
                />
              ))}
            </ul>
          </div>
        </section>

        <section className='mt-12'>
          <h3>
            <span className='block text-2xl text-offBlack text-center'>
              Thank you
            </span>
          </h3>
          <p className='font-medium mt-3'>
            A confirmation has been sent to {email}.<br />
            If you have any questions, we can be reached at {CONTACTS.email} or
            M-F 830am-5pm PST at {CONTACTS.phone}. We look forward to getting
            started in the water with you!
          </p>
        </section>
      </div>

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton
            text='Back to Homepage'
            icon={blackArrow}
            iconWrapperClass='rotate-[180deg]'
            iconSide='left'
            onClick={onBackToHomepageClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
