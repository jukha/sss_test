import {
  areasWeServiceLessonBenefitsImg1,
  areasWeServiceLessonBenefitsImg2,
  areasWeServiceLessonBenefitsImg3,
  areasWeServiceLessonBenefitsImg4,
  areasWeServiceLessonBenefitsImg5,
  areasWeServiceLessonBenefitsImg6,
} from '@/assets';
import StarSparkleIcon from '@/components/decoration/StarSparkle';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';

const content = {
  title: 'Top Benefits of Private Swim Lessons',
  reasons: [
    {
      img: areasWeServiceLessonBenefitsImg1,
      title: 'Age-Appropriate Fun Lessons',
      description:
        'Sunsational Swim Lessons keep learning fun with engaging games and activities for all ages. Each student receives a Skill Chart and Certificate to track progress and celebrate achievements.',
    },
    {
      img: areasWeServiceLessonBenefitsImg2,
      title: 'Quickest Way to Learn to Swim',
      description:
        'Private swim lessons provide focused, consistent instruction for faster results. With our Learn-to-Swim Guarantee, your child can master essential skills in weeks, not months.',
    },
    {
      img: areasWeServiceLessonBenefitsImg3,
      title: 'Convenience of Your Location & Schedule',
      description:
        'Skip the long drives — our instructors come to you! Choose your pool, preferred days, and ideal lesson times for a schedule that fits your family.',
    },
    {
      img: areasWeServiceLessonBenefitsImg4,
      title: 'Lessons Adapted to Individual Needs',
      description:
        'Private lessons adjust to your child’s pace. Whether they’re ready to advance quickly or need extra time on certain skills, our instructors adapt each session.',
    },
    {
      img: areasWeServiceLessonBenefitsImg5,
      title: 'Better Value than Group Lessons',
      description:
        'With private lessons, your child gets 1-on-1 attention — no sharing time with large groups. Faster progress means fewer lessons, saving you time and money.',
    },
    {
      img: areasWeServiceLessonBenefitsImg6,
      title: 'No Lesson Time Wasted',
      description:
        'Private lessons are focused and efficient. With the instructor’s full attention, your child stays engaged, learns faster, and avoids common distractions.',
    },
  ],
};

const PrivateSwimLessonBenefitsSection = () => {
  return (
    <Container className='lg:relative'>
      <Typography
        variant='h2'
        className='max-w-[842px] mx-auto text-center mb-20 lg:mb-[100px]'
      >
        {content.title}
      </Typography>
      {/* Reasons */}
      <div className='grid  xl:grid-cols-2 gap-[29px] max-lg:relative z-[2]'>
        {/* Decorations */}
        
        {/* Top Right */}
        <div className='max-lg:w-[99px] absolute top-0 lg:-top-40 right-0'>
          <StarSparkleIcon />
        </div>

        {/* Bottom Left */}
        <div className='max-lg:w-[99px] absolute bottom-16 lg:bottom-0 left-0 scale-x-[-1] lg:z-[-1]'>
          <StarSparkleIcon />
        </div>
        {content.reasons.map((reason, idx) => {
          return (
            <div key={idx} className='lg:flex justify-center gap-[32px]'>
              <div className='flex-1 flex-wrap max-lg:mb-[33px]'>
                <Image src={reason.img} alt='' />
              </div>
              <div className='flex-1'>
                <Typography
                  variant='h4'
                  className='text-offBlack font-primary font-bold leading-[125%] mb-2'
                >
                  {reason.title}
                </Typography>
                <Typography
                  variant='custom'
                  className='font-secondary text-offBlack leading-[120%] font-medium'
                >
                  {reason.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center items-center gap-4 ml-[30px] mt-[88px]'>
        <ArrowButton
          text={'Book Now'}
          buttonClasses='bg-offBlack text-white'
          iconColor='var(--color-black)'
          IconClasses='bg-yellow'
          shadow={true}
          shadowClasses='bg-blue'
          link='/registration'
        />
      </div>
    </Container>
  );
};

export default PrivateSwimLessonBenefitsSection;
