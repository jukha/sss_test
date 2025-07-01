import ClientRegistrationPage from '@/app/(registration)/registration/ClientRegistrationPage';
import { createRegistration, loadRegistration } from '@/app/api/registration/utils/registration-record';
import { redirect } from 'next/navigation';
import { CustomerRegistration } from '@/__generated__/prisma';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { RegistrationFormEntityBuilder } from '@/entity_builders/registration-form.entity-builder';
import { FaqEntity } from '@/entities/faq.entity';
import { getBaseFaqs } from '@/repositories/faq/base.faq';
import { FaqCategoryEnum } from '@/enum/faq-category.enum';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';

const REGISTRATION_FORM_TYPE = 'J';

type Props = {
  params: Promise<{ id: string; secret: string }>;
};

export default async function Registration({ params }: Props) {
  const { id, secret } = await params;

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
    const response = await getBaseCustomerReviews({limit: 30, offset: 0});
    customerReviews = response.data;
  } catch (e) {
    console.error('Unable to fetch customer reviews', e);
  }

  if (!registration) redirect('/registration');
  const registrationClone = await createRegistration({ ...registration, id: undefined });

  return (
    <ClientRegistrationPage
      registration={new RegistrationFormEntityBuilder().build(registrationClone)}
      registrationFormType={REGISTRATION_FORM_TYPE}
      faqs={faqs}
      customerReviews={customerReviews}
    />
  );
}
