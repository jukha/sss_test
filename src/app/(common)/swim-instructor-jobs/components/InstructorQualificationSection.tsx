import WhatMakesOurInstructorsSection from '@/components/sections/WhatMakesOurInstructorsSection';
import React from 'react';

const content = {
  sectionHeading: 'The qualifications we’re looking for in a swim instructor',
  title: '',
  reasons: [
    '2+ seasons of experience preferred',
    "Transportation to travel to students' pool location",
    'Passion for teaching and working with children',
    'Professional, courteous, and enthusiastic',
    'Detail oriented, self-motivated and able to work independently',
  ],
};

const InstructorQualificationSection = () => {
  return (
    <WhatMakesOurInstructorsSection
      buttonText='Apply Now'
      buttonShadow={true}
      reasons={content.reasons}
      sectionHeading={content.sectionHeading}
      title={content.title}
    />
  );
};

export default InstructorQualificationSection;
