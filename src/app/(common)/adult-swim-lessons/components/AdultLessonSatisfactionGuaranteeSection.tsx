import { satisfactionGuaranteeAdultSwimLesson } from '@/assets';
import SatisfactionGuaranteeSection from '@/components/sections/SatisfactionGuaranteeSection';
import React from 'react';

const AdultLessonSatisfactionGuaranteeSection = () => {
  return (
    <section className='-mb-40 z-10'>
      <SatisfactionGuaranteeSection
        image={satisfactionGuaranteeAdultSwimLesson}
        bgCirclesColor='teal'
        bgColor='var(--color-lightBlue)'
      />
    </section>
  );
};

export default AdultLessonSatisfactionGuaranteeSection;
