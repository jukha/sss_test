import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import React from 'react';
const content = {
  heading: 'What makes our Swim instructors Sunsational?',
  title: '',
  reasons: [
    'Pass National and Local background checks',
    'Minimum 2 years experience',
    'First Aid/CPR Certified',
    'Fully insured',
    'Sunsational Certified',
    'Patient, caring and love kids!',
    'Backed by our 100% satisfaction guarantee!',
  ],
};

const WhatMakesOurInstructorsSunsationalSpecialNeedsSection = () => {
  return (
    <WhatMakesOurInstructorsSection
      reasons={content.reasons}
      title={content.title}
      sectionHeading={content.heading}
    />
  );
};

export default WhatMakesOurInstructorsSunsationalSpecialNeedsSection;
