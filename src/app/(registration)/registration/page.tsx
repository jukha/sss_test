import ClientRegistrationPage from './ClientRegistrationPage';
import { createRegistration } from '@/app/api/registration/utils/registration-record';
// import { loadRegistration } from '@/app/api/registration/utils/registration-record';
import { CustomerRegistration } from '@/__generated__/prisma';
import { Error500Page } from '@/components/error_pages/Error500Page';
import { RegistrationFormEntityBuilder } from '@/entity_builders/registration-form.entity-builder';
import { getBaseFaqs } from '@/repositories/faq/base.faq';
import { FaqEntity } from '@/entities/faq.entity';
import { FaqCategoryEnum } from '@/enum/faq-category.enum';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';

const REGISTRATION_FORM_TYPE = 'J';

type Props = {
  searchParams: Promise<Record<string, string>>;
};

const RegistrationPage = async ({ searchParams }: Props) => {
  const { instructor: preferredInstructorId } = await searchParams;

  let registrationData: CustomerRegistration | undefined;
  let faqs: FaqEntity[] = [];
  let customerReviews: CustomerReviewEntity[] = [];

  try {
    //Used for debugging:
    // registrationData = await loadRegistration({
    //   id: '510',
    //   secret: '20ffa5f8e166687824b56de8b5944a',
    //   formTypeId: 'J'
    // });
    registrationData = await createRegistration({
      registrationFormType: REGISTRATION_FORM_TYPE,
      flexibleSchedule: true,
      requestedInstructor: preferredInstructorId || null,
    });

    faqs = await getBaseFaqs({ categoryName: FaqCategoryEnum.RegistrationForm });
    const response = await getBaseCustomerReviews({ limit: 30, offset: 0 })
    customerReviews = response && response.data;
  } catch (e) {
    console.error(e);
  }

  if (!registrationData) return <Error500Page reason={'Database query failed'} />;

  return (
    <ClientRegistrationPage
      registration={new RegistrationFormEntityBuilder().build(registrationData)}
      registrationFormType={REGISTRATION_FORM_TYPE}
      faqs={faqs}
      customerReviews={customerReviews}
    />
  );
};

export default RegistrationPage;
