'use client';

import Link from 'next/link';
import Wave from '@/components/icons/Wave';
import { calendar, fiveStar, logo, logoMobile, poolStairs, waterBg, yellowCoin, yellowLike, starBg } from '@/assets';
import RegistrationFormWrapper from './RegistrationFormWrapper';
import '../../styles/registration-styles.css';
import SmallCardSlider from './SmallCardSlider';
import LessonsPackageSummary from './LessonsPackageSummary';
import { useRegistrationForm } from '@/context/registration-form.context';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import Image from 'next/image';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { useContext, useEffect } from 'react';
import { extractStudentAges } from '../../logic/utils/lesson-package/extract-students-data';
import { generateLessonPackageSelectionOptions } from '../../logic/utils/lesson-package/lesson-packages-selection';
import {
  extractLocationMetroArea,
  extractLocationPackages,
  extractLocationPricing,
} from '../../logic/utils/lesson-package/extract-location-data';
import {
  extractContactDetails,
  generateLessonPackageSummary,
} from '../../logic/utils/lesson-package/lesson-packages-summary';
import { LessonType } from '@/entities/lesson-package.entity';
import { RegistrationFaqContext } from '@/context/registration-faq.context';
import CustomerReviewsSection from '@/components/sections/customer_reviews/CustomerReviewsSection';
import { RegistrationCustomerReviewContext } from '@/context/registration-customer-review.context';
import FAQsSection from '@/components/sections/faq_section/FaqSection';

const additionalCardsData = [
  { text: 'Thousands of 5-star reviews ', image: fiveStar },
  { text: '1# rated swim school in America', image: yellowLike },
  { text: 'Get final quote before checkout', image: yellowCoin },
  { text: 'Personalized swim lesson plans', image: poolStairs },
  { text: 'Flexible Scheduling', image: calendar },
];

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

const stepWithAutoPlaySliders = [
  RegistrationStepEnum.Step1,
  RegistrationStepEnum.Step1NoPoolsError,
  RegistrationStepEnum.Step1OutsideAreaError,
  RegistrationStepEnum.Step1Success,
];

const RegistrationPageLayout: React.FC<Props> = ({ databaseId, secret, formId }) => {
  const { registrationForm, setRegistrationFormField, registrationStep, isUpgradedTo25LessonPackageSize } =
    useRegistrationForm();
  const {
    zip,
    lessonType,
    lessonTime,
    packageSize,
    promoDiscount,
    freeLessons,
    upsell_from,
    customerHasAccessToPool,
  } = registrationForm ?? {};
  const { data } = useLocationsAndPricing();
  const faqs = useContext(RegistrationFaqContext);
  const customerReviews = useContext(RegistrationCustomerReviewContext);

  const studentAges = extractStudentAges(registrationForm);
  const studentsCount = studentAges.length;
  const isOrderConfirmed = registrationStep === RegistrationStepEnum.Step7OrderConfirmed;

  const withAutoPlay = stepWithAutoPlaySliders.includes(registrationStep);

  const packageSelectionOptions = generateLessonPackageSelectionOptions({
    packages: extractLocationPackages({
      zip,
      zipCodesServiced: data?.zipCodesServiced,
      metroAreas: data?.metroAreas,
      pricing: data?.pricing,
    }),
    studentAges,
    selectedLessonType: lessonType as LessonType,
    selectedLessonLength: lessonTime,
    include25LessonsPackages: isUpgradedTo25LessonPackageSize,
  });

  const selectedLessonPackage = packageSelectionOptions.packages.find((pack) => pack.lessonQty === packageSize);

  const pricing = extractLocationPricing({
    zip,
    zipCodesServiced: data?.zipCodesServiced,
    metroAreas: data?.metroAreas,
    pricing: data?.pricing,
  });

  const metroArea = extractLocationMetroArea({
    zip,
    zipCodesServiced: data?.zipCodesServiced,
    metroAreas: data?.metroAreas,
  });

  const lessonPackageSummary = generateLessonPackageSummary({
    studentsCount,
    lessonPrice: selectedLessonPackage?.price || null,
    registrationFee: pricing?.registrationFee || null,
    availableLessonsPackages: packageSelectionOptions.packages,
    selectedLessonPackage,
    promocodeSalePrice: promoDiscount ? (promoDiscount as unknown as number) : null,
    freeLessons,
    upgradedFromPackageSize: upsell_from ? Number(upsell_from) : undefined,
  });

  const contactDetails = extractContactDetails(registrationForm);

  useEffect(() => {
    setRegistrationFormField('orderTotal', lessonPackageSummary.orderTotal);
    setRegistrationFormField('lessonCostBeforeDiscount', lessonPackageSummary.lessonPrice);
    setRegistrationFormField('packageDiscount', lessonPackageSummary.lessonDiscountPercent);

    setRegistrationFormField('basePay', lessonPackageSummary.basePay);
    setRegistrationFormField('totalBasePay', lessonPackageSummary.totalBasePay);
  }, [
    lessonPackageSummary.orderTotal,
    lessonPackageSummary.lessonDiscountPercent,
    lessonPackageSummary.lessonPrice,
    lessonPackageSummary.basePay,
    lessonPackageSummary.totalBasePay,
  ]);

  useEffect(() => {
    const haveSIWithPool = metroArea?.haveSIWithPool ?? null;
    const canWeServe = (metroArea?.serviceAvailable && (customerHasAccessToPool || haveSIWithPool)) ?? null;

    setRegistrationFormField('doWeHaveSIWithPool', haveSIWithPool);
    setRegistrationFormField('canWeServe', canWeServe);
  }, [customerHasAccessToPool, metroArea?.haveSIWithPool, metroArea?.serviceAvailable]);

  useEffect(() => {
    if (registrationForm) {
      setRegistrationFormField('registrationDate', new Date().toISOString());
    }
  }, [registrationForm?.id]);

  return (
    <div className='relative desktop:h-[100vh] desktop:overflow-hidden'>
      <Image src={waterBg} alt='' className='w-full absolute top-0 left-0 desktop:w-[60vw] desktop:h-full -z-1' />
      <div className='absolute bg-yellow w-full h-full -z-2'></div>

      <div className='relative flex flex-col desktop:flex-row desktop:max-w-[1440px] desktop:mx-auto desktop:h-[100vh]'>
        <Link href='/' className='z-2 h-0'>
          <Image src={logoMobile} alt='' className='w-[180px] desktop:hidden' />
          <Image src={logo} alt='' className='w-[80px] hidden desktop:block ' />
        </Link>

        <div className='absolute top-0 left-[calc(55%+1px)] hidden desktop:block h-full w-6'>
          <Wave className='text-yellow w-[110vh] h-6 absolute right-[15px] -top-1 origin-top-right rotate-[270deg]' />
        </div>

        {/* left */}
        <div className='relative flex flex-col desktop:pb-16 desktop:w-[55%] desktop:overflow-y-auto desktop:overflow-x-hidden orangeScroll'>
          <div className='flex px-6 desktop:px-28 pt-[90px] desktop:h-[280px]'>
            <h1 className='font-bold font-primary max-w-[200px] leading-[1.15] sm:mx-auto xl:mx-[0] desktop:max-w-[300px]'>
              <span className='block text-yellow text-[32px] desktop:text-5xl'>Register Now</span>
              <span className='block text-off-white text-2xl desktop:text-[32px]'>
                for At-Home Swim Lessons with Sunsational!
              </span>
            </h1>
          </div>

          <div className='w-full grow mt-12 mx-auto sm:max-w-[640px]'>
            <RegistrationFormWrapper databaseId={databaseId} secret={secret} formId={formId} />
          </div>
        </div>

        {/* right */}
        <div className='relative bg-yellow pt-16 pb-8 px-2 desktop:w-[45%] desktop:px-6 desktop:pt-[185px] desktop:mt-0 desktop:h-full desktop:overflow-y-auto desktop:pb-14 orangeScroll mobile:mb-[6px]'>
          <div className='absolute left-0 top-0 w-full -translate-y-[90%] desktop:hidden'>
            <Wave className='text-yellow w-full h-full' />
          </div>
          <div>
            {registrationForm?.packageSize ? (
              <LessonsPackageSummary
                studentsCount={studentsCount}
                summary={lessonPackageSummary}
                contactDetails={contactDetails}
                isOrderConfirmed={isOrderConfirmed}
              />
            ) : (
              <CustomerReviewsSection
                reviews={customerReviews}
                bgColor='#fedf45'
                slidesToShow={1}
                hideButton={true}
                withAutoplay={withAutoPlay}
                bgDecorationImage={starBg.src}
              />
            )}

            <div className='w-max mx-[auto] mt-10 desktop:mt-28'>
              <SmallCardSlider cards={additionalCardsData} withAutoplay={withAutoPlay} />
            </div>

            <section className='mt-[60px] flex flex-col gap-[30px] items-center'>
              <h2 className='text-[40px] desktop:text-[48px]'>FAQ</h2>
              <FAQsSection data={faqs} variant={'registration'} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageLayout;
