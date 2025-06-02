import {
  recommendedLessonPlanImg,
  recommendedLessonPlanImg2,
  recommendedLessonPlanImg3,
} from '@/assets';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import { HowItWorksType } from '@/types/city-how-it-works.type';
import LessonPlanCard from '@/components/shapes/LessonPlanCard';

const content = {
  sectionHeading: 'Recommended lesson plans for adult Swim Lessons',
  sectionDescription:
    'After teaching thousands of adults how to swim, we’ve found that these lesson plans work best based on skill levels and goals:',
  steps: [
    {
      title: 'For beginner adult swim students',
      description:
        'If you’re new to swimming or overcoming a fear of water, our 6-pack of 1-hour lessons is ideal for building your confidence. For adult beginners looking to master basic skills and progress to strokes like freestyle, our 12-pack offers extended practice and faster results.',
      lessonLength: '60 minutes',
      recommendedLessons: '12-18',
      image: recommendedLessonPlanImg3,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
    },
    {
      title: 'For advanced adult swim students',
      description:
        'For advanced swimmers training for competition, tests, or triathlons, as well as those who just want to improve their swimming skills, our 12 or 18-pack provides focused practice to refine your stroke technique. Better technique will help you swim faster with less effort.',
      lessonLength: '60 minutes',
      recommendedLessons: '6-12',
      image: recommendedLessonPlanImg2,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:left-0',
    },
    {
      title: 'Where and when you learn is up to you',
      image: recommendedLessonPlanImg,
      statWrapperClasses:
        'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] top-[80%] lg:right-0',
      conditions: [
        'All ages',
        'Service over 40 Metro Areas Nationwide',
        'Flexible scheduling',
      ],
    },
  ],
};

const AdultRecommendedLessonsSection: React.FC<HowItWorksType> = () => {
  return (
    <Container className='py-[120px_200px]'>
      <div className='lg:px-20 flex flex-col gap-12'>
        <div className='flex flex-col items-center gap-6  md:mb-8'>
          <Typography
            variant='h2'
            className='max-w-[900px] text-center mx-auto'
          >
            {content.sectionHeading}
          </Typography>
          <Typography
            variant='custom'
            className='text-base md:[20px] font-medium leading-[125%] font-secondary max-w-[735px] text-center'
          >
            {content.sectionDescription}
          </Typography>
        </div>

        {content.steps.map((item, i) => (
          <LessonPlanCard
            key={i}
            index={i}
            title={item.title}
            description={item.description}
            lessonLength={item.lessonLength}
            recommendedLessons={item.recommendedLessons}
            image={item.image}
            conditions={item.conditions}
          />
        ))}
      </div>
    </Container>
  );
};

export default AdultRecommendedLessonsSection;
