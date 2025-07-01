import FeatureValue from './FeatureValue';
import SchoolCardStars from './SchoolCardStars';
import { SwimSchool } from './types';

export const BORDER_COLORS = ['#D60009', '#F86008', '#FEDF46', '#00ACB6'];

export const ROW_CLASS = 'font-primary font-bold text-sm text-offBlack leading-[120%] desktop:min-h-[35px]';

/**
 * On desktop we have white background lines for labels and school data
 * and this block is absolute positioned, some labels in two rows
 * we need to move this lines for full cover
 *
 * it depend on `FIELDS_LABELS`
 */
export const DESKTOP_WHITE_LINE_BACKGROUND_TRANSLATION_Y = ['-5px', 0, '14px', 0, '35px', 0, '55px', 0, '70px'];

export const FIELDS_LABELS = [
  'Feature',
  'Lesson Type',
  'Location',
  'Ages',
  'Learn to Swim Guarantee',
  'Flexible Scheduling',
  'Monthly Membership Required?',
  'Cost per Lesson',
  'Customer Reviews (Google/Yelp)',
  'What customers are saying',
];

type GenerateSwimSchoolDataParams = {
  name: string;
  lessonType: string;
  location: string;
  ages: string;
  learnToSwimGuarantee: boolean;

  flexibleScheduling: boolean;
  flexibleSchedulingText?: string;

  monthlyMembershipRequired: boolean;
  costPerLesson: string;
  customerReview: string;
  ratingStars?: number | null;
};

export const generateSwimSchoolData = ({
  name,
  lessonType,
  location,
  ages,
  learnToSwimGuarantee,
  flexibleScheduling,
  flexibleSchedulingText,
  monthlyMembershipRequired,
  costPerLesson,
  ratingStars,
  customerReview,
}: GenerateSwimSchoolDataParams): SwimSchool => {
  return {
    features: [
      <FeatureValue key={1} value={name} />,
      <FeatureValue key={2} value={lessonType ? `${lessonType} Lessons` : ''} />,
      <FeatureValue key={3} value={location} />,
      <FeatureValue key={4} value={ages} />,
      <FeatureValue
        key={5}
        value={learnToSwimGuarantee ? 'Yes' : 'No'}
        symbol={learnToSwimGuarantee ? 'tick' : 'cross'}
      />,
      <FeatureValue
        key={6}
        value={`${flexibleScheduling ? 'Yes' : 'Fixed time'} ${flexibleSchedulingText ?? ''}`.trim()}
        symbol={flexibleScheduling ? 'tick' : 'cross'}
      />,
      <FeatureValue
        key={7}
        value={monthlyMembershipRequired ? 'Yes' : 'No'}
        symbol={monthlyMembershipRequired ? 'cross' : 'tick'}
      />,
      <FeatureValue key={8} value={costPerLesson} />,
      <FeatureValue key={9} value={ratingStars ? <SchoolCardStars rating={ratingStars} /> : ''} />,
      <FeatureValue key={10} value={customerReview} />,
    ],
  };
};

export const generateSunsationalSchoolData = (minLessonPrice: number, maxLessonPrice: number) => {
  return generateSwimSchoolData({
    name: 'Sunsational Swim School',
    lessonType: 'Private, 1-on-1, Semi-private, Group',
    location: 'Your Home Pool',
    ages: '6 months – adult',
    learnToSwimGuarantee: true,
    flexibleScheduling: true,
    flexibleSchedulingText: '– Create your own schedule 6am–8pm',
    monthlyMembershipRequired: false,
    costPerLesson: `$${minLessonPrice || 'unknown'} - $${maxLessonPrice || 'unknown'}`,
    ratingStars: 4.9,
    customerReview:
      'Amazing instructors and top-notch customer service. Impressed with convenience, personalized lesson plans and fast progress.',
  });
};

export const MOCK_SCHOOL_DATA = generateSwimSchoolData({
  name: 'KIDS FIRST Swim School of Santa Monica',
  lessonType: 'Group, Private, Semi-private',
  location: '2864 S Centinela Ave, Los Angeles, CA 90064',
  ages: '6 months - 12 years',
  learnToSwimGuarantee: false,
  flexibleScheduling: false,
  monthlyMembershipRequired: true,
  costPerLesson: '$30 - $65',
  ratingStars: 3.5,
  customerReview: 'My kids love it here; instructors are patient and caring.',
});
