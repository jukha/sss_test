import { loadRegistration } from '@/app/api/registration/utils/registration-record';
import { RegistrationFormEntityBuilder } from '@/entity_builders/registration-form.entity-builder';
import React from 'react';
import ClientRegistrationPage from '@/app/(registration)/registration/ClientRegistrationPage';
import { getBaseFaqs } from '@/repositories/faq/base.faq';
import { FaqCategoryEnum } from '@/enum/faq-category.enum';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { FaqEntity } from '@/entities/faq.entity';
import { CustomerRegistration } from '@/__generated__/prisma';
import { redirect } from 'next/navigation';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';

const REGISTRATION_FORM_TYPE = 'J';

type Props = {
  searchParams: Promise<Record<string, string>>;
};

const RegistrationOrderConfirmedPage = async ({ searchParams }: Props) => {
  const { id, secret } = await searchParams;

  let registration: CustomerRegistration | undefined | null;
  let faqs: FaqEntity[] = [];
  let customerReviews: CustomerReviewEntity[] = [];

  try {
    registration = await loadRegistration({ secret, id, formTypeId: REGISTRATION_FORM_TYPE });
  } catch {
    return <Error500Page reason={'Database query failed'} />;
  }

  try {
    faqs = await getBaseFaqs({ categoryName: FaqCategoryEnum.RegistrationForm });
  } catch (e) {
    console.error('Unable to fetch faqs', e);
  }

  try {
    const response = await getBaseCustomerReviews({ limit: 30, offset: 0 });
    customerReviews = response.data;
  } catch (e) {
    console.error('Unable to fetch customer reviews', e);
  }

  if (!registration) redirect('/registration');

  return (
    <ClientRegistrationPage
      registration={new RegistrationFormEntityBuilder().build(registration)}
      registrationFormType={REGISTRATION_FORM_TYPE}
      faqs={faqs}
      customerReviews={customerReviews}
      isConfirmationPage={true}
    />
  );
};

export default RegistrationOrderConfirmedPage;
