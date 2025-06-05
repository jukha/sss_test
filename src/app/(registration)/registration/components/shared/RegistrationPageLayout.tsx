import Link from 'next/link';
import Wave from '@/components/icons/Wave';
import { calendar, fiveStar, logo, logoMobile, poolStairs, waterBg, yellowCoin, yellowLike } from '@/assets';
import RegistrationFormWrapper from './RegistrationFormWrapper';
import '../../styles/registration-styles.css';
import SmallCardSlider from './SmallCardSlider';
import LessonsPackageSummary from './LessonsPackageSummary';
import { useRegistrationForm } from '@/context/registration-form.context';
import ReviewsSlider from './ReviewsSlider';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import Image from 'next/image';
import CollapsibleList, { CollapsibleListItem } from '@/components/CollapsedList';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { useEffect } from 'react';
import { Prisma } from '@/__generated__/prisma';
import { extractStudentAges } from '../../logic/utils/lesson-package/extract-students-data';
import { generateLessonPackageSelectionOptions } from '../../logic/utils/lesson-package/lesson-packages-selection';
import {
  extractLocationPackages,
  extractLocationPricing,
} from '../../logic/utils/lesson-package/extract-location-data';
import {
  extractContactDetails,
  generateLessonPackageSummary,
} from '../../logic/utils/lesson-package/lesson-packages-summary';
import { LessonType } from '@/entities/lesson-package.entity';

const additionalCardsData = [
  { text: 'Thousands of 5-star reviews ', image: fiveStar },
  { text: '1# rated swim school in America', image: yellowLike },
  { text: 'Get final quote before checkout', image: yellowCoin },
  { text: 'Personalized swim lesson plans', image: poolStairs },
  { text: 'Flexible Scheduling', image: calendar },
];

// TODO update list
const faqList: CollapsibleListItem[] = [
  {
    title: 'How long does it take to learn how to swim with private lessons?',
    description: (
      <p>
        We require that a parent or guardian be present during all lessons. Parents can supervise lessons, either from
        inside the house, or from the pool deck. If your child starts acting out, we would recommend watching the
        lessons out of their sight, since young children perform better if there is only one authority figure to focus
        on at a time.
        <br />
        <br />
        For children under 2 years we recommend a parent is in the water for the child to be the most comfortable.
        Children 2 years and older get the most out of lessons without the parent in the water and often with the parent
        out of direct sight (preschoolers often act up when the parent is in view).
      </p>
    ),
  },
  {
    title: 'Where is your pool located?',
    description: '',
  },
  {
    title: 'What happens if I don’t have a pool at home?',
    description: '',
  },
  {
    title: 'What qualifications do your instructors have?',
    description: '',
  },
  {
    title: 'What is your Learn to Swim Guarantee?',
    description: '',
  },
  {
    title: 'What is the cost and how many lessons are typically required?',
    description: '',
  },
  {
    title: 'When can I register? How?',
    description: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
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
  const { registrationForm, setRegistrationFormField, registrationStep } = useRegistrationForm();
  const { zip, lessonType, lessonTime, packageSize } = registrationForm ?? {};
  const { data } = useLocationsAndPricing();

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
  });

  const selectedLessonPackage = packageSelectionOptions.packages.find((pack) => pack.lessonQty === packageSize);
  const pricing = extractLocationPricing({
    zip,
    zipCodesServiced: data?.zipCodesServiced,
    metroAreas: data?.metroAreas,
    pricing: data?.pricing,
  });

  const lessonPackageSummary = generateLessonPackageSummary({
    studentsCount,
    lessonPrice: selectedLessonPackage?.price || null,
    registrationFee: pricing?.registrationFee || null,
    availableLessonsPackages: packageSelectionOptions.packages,
    selectedLessonPackage,
  });

  const contactDetails = extractContactDetails(registrationForm);

  useEffect(() => {
    setRegistrationFormField('orderTotal', lessonPackageSummary.orderTotal as unknown as Prisma.Decimal);
    setRegistrationFormField('lessonCostBeforeDiscount', lessonPackageSummary.lessonPrice as unknown as Prisma.Decimal);
    setRegistrationFormField(
      'packageDiscount',
      lessonPackageSummary.lessonDiscountPercent as unknown as Prisma.Decimal
    );
  }, [lessonPackageSummary.orderTotal, lessonPackageSummary.lessonDiscountPercent, lessonPackageSummary.lessonPrice]);

  return (
    <div className='relative desktop:h-[100vh] desktop:overflow-hidden'>
      <Image src={waterBg} alt='' className='w-full absolute top-0 left-0 desktop:w-[60vw] desktop:h-full -z-1' />
      <div className='absolute bg-yellow w-full h-full -z-2'></div>

      <div className='relative flex flex-col desktop:flex-row desktop:max-w-[1440px] desktop:mx-auto desktop:h-[100vh]'>
        <Link href='/' className='absolute top-0 left-0 z-2 desktop:translate-x-[100%]'>
          <Image src={logoMobile} alt='' className='w-[180px] desktop:hidden' />
          <Image src={logo} alt='' className='w-[80px] hidden desktop:block ' />
        </Link>

        {/* left */}
        <div className='relative desktop:w-[55%]'>
          <div className='absolute right-0 top-0 hidden desktop:block h-full w-6'>
            <Wave className='text-yellow w-[110vh] h-6 absolute right-[15px] -top-1 origin-top-right rotate-[270deg]' />
          </div>

          <div className='flex px-6 desktop:px-28 pt-[90px] desktop:h-[280px]'>
            <h1 className='font-bold font-primary max-w-[200px] leading-[1.15] sm:mx-auto xl:mx-[0] desktop:max-w-[300px]'>
              <span className='block text-yellow text-[32px] desktop:text-5xl'>Register Now</span>
              <span className='block text-off-white text-2xl desktop:text-[32px]'>
                for At-Home Swim Lessons with Sunsational
              </span>
            </h1>
          </div>

          <div className='mt-12 mx-auto sm:max-w-[640px] desktop:h-[calc(100vh-280px)]'>
            <RegistrationFormWrapper databaseId={databaseId} secret={secret} formId={formId} />
          </div>
        </div>

        {/* right */}
        <div className='relative bg-yellow pt-16 px-2 desktop:w-[45%] desktop:px-6 desktop:pt-[185px] desktop:mt-0 desktop:h-full desktop:overflow-y-auto desktop:pb-14 orangeScroll'>
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
              <ReviewsSlider withAutoplay={withAutoPlay} />
            )}

            <div className='w-max mx-[auto] mt-10 desktop:mt-28'>
              <SmallCardSlider cards={additionalCardsData} withAutoplay={withAutoPlay} />
            </div>

            <section className='mt-[60px] flex flex-col gap-[30px] items-center'>
              <h2 className='text-[40px] desktop:text-[48px]'>FAQ</h2>
              <CollapsibleList items={faqList} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageLayout;
