import { BackgroundCircles, Bubbles } from '@/components/decoration';
import Typography from '@/components/semantics/Typography';
import PrivateVsGroupComparisonRow from './PrivateVsFroupComparisonRow';

const categories = ['Private', 'Group'];
const features = [
  {
    private: {
      featureHighlight: 'Quick Results',
      description: ' with 30+ minutes of individualised instruction',
    },
    group: {
      featureHighlight: 'Slow Progress',
      description: ' with limited 1-on-1 attention',
    },
  },
  {
    private: {
      featureHighlight: 'Flexible scheduling',
      description: ', book multiple kids back-to-back',
    },
    group: {
      featureHighlight: 'Flexible scheduling',
      description: ', may vary for each child',
    },
  },
  {
    private: {
      featureHighlight: 'Save time',
      description: ' lessons at your home or community pool',
    },
    group: {
      featureHighlight: 'Time-Consuming',
      description: ' - travel required to and from lessons',
    },
  },
  {
    private: {
      featureHighlight: 'Faster Progression',
      description: ' saves money in the long run',
    },
    group: {
      featureHighlight: 'More Sessions Needed',
      description: ' Needed to see real progress',
    },
  },
];

const PrivateVsGroupLessonsSection = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-[91px_116px] lg:py-[152px_148px]'>
      {/* ************* */}
      {/* Section Title */}
      {/* ************* */}
      <Typography
        variant='h2'
        className='max-w-[817px] mx-auto px-4 text-center'
      >
        Private swim lessons <span className='text-red'>vs.</span> Group swim
        lessons
      </Typography>

      {/* *************** */}
      {/* Section Subtext */}
      {/* *************** */}
      <Typography
        variant='body2'
        className='text-black max-w-[417px] text-center mx-auto mt-2 mb-9 lg:mt-10 lg:mb-14 font-bold'
      >
        Learn about why parents choose Sunsational for their Private Swimming
        Lessons
      </Typography>

      {/* *********************** */}
      {/* Comparison Card Wrapper */}
      {/* *********************** */}
      <div className='py-28 lg:py-36 lg:px-14 relative z-10'>
        {/* Background layers */}
        <div className='absolute z-[-1] inset-0 slider-card-center max-lg:scale-x-[-1] bg-lightBlue'></div>
        <div className='absolute z-[-1] w-[98%] h-[95%] top-1/2 left-1/2 max-lg:scale-x-[-1] translate-x-[-50%] translate-y-[-50%] slider-card-center bg-white/80'></div>

        {/* Decorative bubbles (top right) */}
        <div className='hidden lg:block lg:absolute w-[146px] h-[111px] scale-x-[-1] rotate-[150deg] top-[45px] right-[25px]'>
          <Bubbles />
        </div>

        {/* Decorative background circles (bottom left) */}
        <div className='absolute w-[214px] h-[214px] rotate-[70deg] -left-12 bottom-0 -z-[1]'>
          <BackgroundCircles circlesColor='#fff' />
        </div>

        {/* ********************* */}
        {/* Header Comparison Row */}
        {/* ********************* */}
        <div className='text-center'>
          <div className='px-4 pb-[18px] lg:grid grid-cols-[1fr_118px_1fr]'>
            {/* Private Label */}
            <Typography
              variant='h5'
              className='text-[32px] font-primary !font-bold leading-[120%] text-teal'
            >
              {categories[0]} <span className='text-green'>Swim Lessons</span>
            </Typography>

            {/* VS Text */}
            <Typography
              variant='h5'
              className='text-[32px] font-primary !font-bold leading-[120%] text-black'
            >
              vs
            </Typography>

            {/* Group Label */}
            <Typography
              variant='h5'
              className='text-[32px] font-primary !font-bold leading-[120%] text-red'
            >
              {categories[1]} <span className='text-darkRed'>Swim Lessons</span>
            </Typography>
          </div>
          <hr className='border-b-4 border-[lightBlue] max-w-[90%] mx-auto mt-4 opacity-70' />
          {/* Decorative underline */}
          <span className='inline-block background-decoration bg-blueSky w-full h-[4px]'></span>
        </div>

        {/* *********************** */}
        {/* Feature Comparison Rows */}
        {/* *********************** */}
        {features.map((feature, i) => (
          <PrivateVsGroupComparisonRow key={i} feature={feature} index={i} />
        ))}
      </div>
    </div>
  );
};

export default PrivateVsGroupLessonsSection;
