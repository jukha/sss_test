import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import SwimSchoolComparison from './SwimSchoolComparison';

const content = {
  title: 'Find the Best Swim School Near You in [City]: Compare Your Options',
  descripition:
    'Looking for a swim school near me in City ? Whether you want a traditional swim school or the convenience of private, at-home swim lessons, we’ve got you covered. This guide compares top-rated swim schools in City so you can find the best fit for your family.',
};

const FindTheBestSchoolSection = () => {
  return (
    <div>
      <Container>
        <Typography
          variant='h2'
          className='max-w-[837px] mx-auto text-center mb-2'
        >
          {content.title}
        </Typography>
        <Typography
          variant='custom'
          className='max-w-[669px] mx-auto text-center'
        >
          {content.descripition}
        </Typography>
        <SwimSchoolComparison />
      </Container>
    </div>
  );
};

export default FindTheBestSchoolSection;
