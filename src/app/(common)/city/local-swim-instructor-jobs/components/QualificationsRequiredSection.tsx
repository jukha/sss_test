import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import React from 'react';
const content = {
  heading: 'The qualifications we’re looking for in a swim instructor',
  title: '',
  reasons: [
    '2+ seasons of experience preferred',
    'Transportation to travel to students’ pool location',
    'Passion for teaching and working with children',
    'Professional, courteous, and enthusiastic',
    'Detail oriented, self-motivated and able to work independently',
  ],
};

const QualificationsRequiredSection = () => {
  return (
    <WhatMakesOurInstructorsSection
      reasons={content.reasons}
      title={content.title}
      sectionHeading={content.heading}
    />
  );
};

export default QualificationsRequiredSection;
