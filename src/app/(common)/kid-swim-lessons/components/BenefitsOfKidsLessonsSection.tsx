import {
  kidsSwimLessonBenefitsImg1,
  kidsSwimLessonBenefitsImg2,
} from '@/assets';
import {
  GraduationCapIcon,
  HappyIcon,
  MedalFirstPlaceIcon,
  MuscleIcon,
  SnorkelIcon,
  SwimmingPoolIcon,
} from '@/components/icons';
import BenefitsShowCaseSection from '@/components/sections/BenefitsShowCaseSection';

const benefitsShowCaseSectionData = {
  heading: 'Benefits of adult swimming lessons with Sunsational',
  buttonText: 'Book Now',
  buttonLink: '/registration',
  data: [
    {
      title: 'Kids swimming lessons reduce the risk of drowning',
      icon: <SwimmingPoolIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'A 2009 study found that children who take kids swimming lessons have a significantly lower risk of accidental drowning. Learning to swim is essential for your kid’s safety and confidence in the water.',
    },
    {
      img: kidsSwimLessonBenefitsImg1,
      imageScale: 1.3,
    },
    {
      title: 'Swimming is a lifelong activity',
      icon: <MedalFirstPlaceIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'Unlike many sports, swimming is something kids can start at any age, and continue throughout their lives. Swim classes introduce young swimmers to a skill that is best developed early.',
    },
    {
      title: 'Swimming builds strength and endurance',
      icon: <MuscleIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'Obesity is a rising problem in America, and swimming lessons for children might just be the answer. Swimming is a great full-body workout that improves cardiovascular health and builds muscle strength.',
    },
    {
      title: 'Important skill for fun and safety',
      icon: <HappyIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'Swimming isn’t just about safety, it’s about enjoying the time in the water with confidence. Kids swimming lessons teach children lifesaving skills while also helping kids learn to enjoy swimming for the rest of their lives.',
    },
    {
      title: 'Kids who swim do better in school',
      icon: <GraduationCapIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'This might surprise parents, but studies have shown children who undertake swim lessons at an early age develop stronger cognitive and motor skills, which can help them succeed in school. This means they might do better!',
    },
    {
      img: kidsSwimLessonBenefitsImg2,
      // imageScale: 1.05,
    },
    {
      title: 'A fun way to stay active and healthy',
      icon: <SnorkelIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        "Swimming isn't just a fun activity and an important life skill, it's also a fantastic form of exercise. Non-weight bearing and able to work out every single muscle group, starting swim lessons will keep them fit until they're grown!",
    },
  ],
};

const BenefitsOfKidsLessonsSection = () => {
  return (
    <div>
      <BenefitsShowCaseSection {...benefitsShowCaseSectionData} />;
    </div>
  );
};

export default BenefitsOfKidsLessonsSection;
