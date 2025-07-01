import { blogArticleAboutUsSectionImg } from '@/assets';
import FeatureSection from '@/components/FeatureSection';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';
import Image from 'next/image';

const content = {
  title: 'About Sunsational Swim School',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim quis tellus consequat aliquam non eget nulla. Cras feugiat nec justo nec ullamcorper. Etiam sit amet magna non justo dignissim tincidunt. Nunc condimentum velit semper lobortis rhoncus. Donec mi mauris, blandit sed augue sed, consequat venenatis massa.',
};

const AboutSunsationalSchoolSection = () => {
  return (
    <FeatureSection
      waveColor='var(--color-off-white)'
      backgroundColor='var(--color-off-white)'
    >
      <FlexWrapper>
        {/* Column Left: Image */}
        <div className='flex-1 max-lg:pt-[66px]'>
          <Image src={blogArticleAboutUsSectionImg} alt='' />
        </div>
        {/* Column Right: Text Content */}
        <div className='flex-1 max-lg:pb-[66px]'>
          <Typography
            variant='h3'
            className='font-primary text-off-black max-w-[465px]'
          >
            {content.title}
          </Typography>
          <Typography variant='body2' className='mt-9 mb-8 max-w-[465px]'>{content.description}</Typography>
          <div className='inline-flex'>
            <ArrowButton
              text={'Read More'}
              buttonClasses='bg-offBlack text-white'
              IconClasses='bg-yellow'
              iconColor='var(--color-offBlack)'
              shadow={true}
              shadowClasses='bg-transparent'
              link='/registration'
            />
          </div>
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default withClientErrorBoundary(AboutSunsationalSchoolSection);
