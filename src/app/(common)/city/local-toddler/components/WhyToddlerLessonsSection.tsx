import { SwimLessonFact } from '@/types/swim-lesson.types';
import WhySwimLessonsSection from '../../common/WhySwimLessonsSection';
import { localToddlerWhySwimLessons } from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';

const data = {
  heading: 'Why are swimming lessons so important for toddlers?',
  descriptionTop:
    'Drowning is the #1 leading cause of accidental death in the U.S. among children under 5, and in most cases, it happens in just minutes – even when a caregiver is nearby. In fact:',
  descriptionBottom:
    'Swimming lessons can save lives. Give your toddler the gift of swimming which lasts a lifetime!',
  image: localToddlerWhySwimLessons,
  imageAlt: 'Why Swim lessons important image',
  bgColor: 'var(--color-white)',
  facts: [
    {
      title: 'Drowning',
      text: 'is the 1# leading cause of accidental death in the U.S. among children under 5 years old',
      position: 'top-right',
      color: 'var(--color-lightBlue)',
    },
    {
      title: '9 out of 10',
      text: 'drowning deaths occur while an adult is present',
      position: 'bottom-left',
      color: 'var(--color-lightBlue)',
    },
    {
      title: '75%',
      text: 'of children who drown were out of sight for five minutes or less',
      position: 'top-right',
      color: 'var(--color-lightBlue)',
    },
  ] as SwimLessonFact[],
};

const WhyToddlerLessonsSection = () => {
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

export default WhyToddlerLessonsSection;
