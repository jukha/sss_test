import SwimSchoolComparisonDesktopSection from "./SwimSchoolComparisonDesktopSection";
import SwimSchoolComparisonMobileSection from "./SwimSchoolComparisonMobileSection";


export type SwimSchoolFeature = {
  label: string;
  value: string;
  symbol?: 'tick' | 'cross';
};

export type SwimSchool = {
  name: string;
  logo?: string;
  highlight?: boolean;
  features: SwimSchoolFeature[];
};


const swimSchools: SwimSchool[] = [
  {
    name: 'Sunsational Swim School',
    logo: '/images/sunsational-logo.png',
    highlight: true,
    features: [
      { label: 'Lesson Type', value: 'Private, 1-on-1' },
      { label: 'Location', value: 'Your Home Pool' },
      { label: 'Ages', value: '6 months – adult' },
      { label: 'Learn to Swim Guarantee', value: 'Yes', symbol: 'tick' },
      {
        label: 'Flexible Scheduling',
        value: 'Yes – Create your own schedule 6am–8pm',
        symbol: 'tick',
      },
      { label: 'Monthly Membership Required?', value: 'No', symbol: 'cross' },
      { label: 'Cost per Lesson', value: '$XX – $XX', symbol: 'cross' },
      { label: 'Customer Reviews (Google / Yelp)', value: '⭐⭐⭐⭐⭐'},
      {
        label: 'What customers are saying',
        value: '"Quote about this swim school"',
      },
    ],
  },
  {
    name: 'Swim School A',
    features: [
      { label: 'Lesson Type', value: 'Group Lessons' },
      { label: 'Location', value: 'Address' },
      { label: 'Ages', value: '3 years+' },
      { label: 'Learn to Swim Guarantee', value: 'No', symbol:"cross" },
      { label: 'Flexible Scheduling', value: 'Fixed times', symbol:"cross" },
      { label: 'Monthly Membership Required?', value: 'Yes', symbol:'tick' },
      { label: 'Cost per Lesson', value: '$XX – $XX' },
      { label: 'Customer Reviews (Google / Yelp)', value: '⭐⭐⭐⭐' },
      {
        label: 'What customers are saying',
        value: '"Quote about this swim school"',
      },
    ],
  },
  {
    name: 'Swim School B',
    features: [
      { label: 'Lesson Type', value: 'Group Lessons' },
      { label: 'Location', value: 'Address' },
      { label: 'Ages', value: '6 months – 12 years' },
      { label: 'Learn to Swim Guarantee', value: 'No', symbol:"cross"  },
      { label: 'Flexible Scheduling', value: 'Fixed times', symbol:"cross"  },
      { label: 'Monthly Membership Required?', value: 'Yes', symbol:"tick" },
      { label: 'Cost per Lesson', value: '$XX – $XX' },
      { label: 'Customer Reviews (Google / Yelp)', value: '⭐⭐⭐⭐⭐' },
      {
        label: 'What customers are saying',
        value: '"Quote about this swim school"',
      },
    ],
  },
  {
    name: 'Swim School C',
    features: [
      { label: 'Lesson Type', value: 'Group Lessons' },
      { label: 'Location', value: 'Address' },
      { label: 'Ages', value: '4 years+' },
      { label: 'Learn to Swim Guarantee', value: 'No', symbol:"cross"  },
      { label: 'Flexible Scheduling', value: 'Fixed times', symbol:"cross"  },
      { label: 'Monthly Membership Required?', value: 'Yes', symbol:"tick" },
      { label: 'Cost per Lesson', value: '$XX – $XX' },
      { label: 'Customer Reviews (Google / Yelp)', value: '⭐⭐⭐⭐' },
      {
        label: 'What customers are saying',
        value: '"Quote about this swim school"',
      },
    ],
  },
];

const SwimSchoolComparison = () => {
  return (
    <>
      <SwimSchoolComparisonDesktopSection data={swimSchools} />
      <SwimSchoolComparisonMobileSection data={swimSchools} />
    </>
  );
};

export default SwimSchoolComparison;
