import { kidsWhySwimLessonImportant } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import { SwimLessonFact } from '@/types/swim-lesson.types';
import WhySwimLessonsSection from '../../city/common/WhySwimLessonsSection';

const data = {
  heading: 'Why are kids swimming lessons so important?',
  descriptionTop:
    'Drowning is the #2 leading cause of accidental death in the US for children under 14, and in most cases, it happens in just minutes – even when a caregiver is nearby. In fact:',
  descriptionBottom:
    'Enrolling your child in swimming lessons is one of the best ways to prevent drowning by teaching them essential water safety skills.',
  image: kidsWhySwimLessonImportant,
  imageAlt: 'Why Swim lessons important image',
  bgColor: 'var(--color-white)',
  facts: [
    {
      title: '75%',
      text: 'of children who drown were out of sight for five minutes or less',
      position: 'top-right',
      color: 'var(--color-yellow)',
    },
    {
      title: '9 out of 10',
      text: 'drowning deaths occur while an adult is present',
      position: 'bottom-left',
      color: 'var(--color-yellow)',
    },
  ] as SwimLessonFact[],
};

const WhyKidsLessonImportantSection = () => {
  return (
    <>
      <WhySwimLessonsSection {...data} />
      <div className='flex justify-center'>
        <ArrowButton
          text='Book Now'
          link='/registration'
          buttonClasses='bg-offBlack text-white min-w-[300px] gap-12 mx-auto'
          IconClasses='bg-yellow'
          iconColor='var(--color-black)'
          shadow={true}
          shadowClasses='bg-blue'
        />
      </div>
    </>
  );
};

export default WhyKidsLessonImportantSection;
