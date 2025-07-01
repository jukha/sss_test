/**
 * InstructorQualitiesSection
 *
 * Displays a section highlighting the key qualities of Sunsational swim instructors.
 * Dynamically renders icons and feature images based on the `page` prop.
 * Icons, colors, and images adapt to match the context of different pages (e.g., homepage, areas we service).
 *
 * Props:
 * - page?: 'homepage' | 'nearbySwimInstructor' | 'areasWeService' - Optional context to control icons and images.
 *
 * Usage:
 * <InstructorQualitiesSection page="areasWeService" />
 */

import Image, { StaticImageData } from 'next/image';
import Container from '@/components/layout/Container';
import { ZoomOutIcon, OkHandIcon, ProtectIcon } from '@/components/icons';
import {
  whatMakesUsSunsationalFeatureImage,
  areasWeServiceFeatureImage,
} from '@/assets';
import Typography from '@/components/semantics/Typography';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

type Props = {
  page?: 'homepage' | 'nearbySwimInstructor' | 'areasWeService';
};

const instructorQualities = {
  title: 'What makes our Swim instructors Sunsational',
  qualities: [
    {
      image: <ZoomOutIcon />,
      headerTextColor: 'text-offBlack',
      headerBgColor: 'bg-yellow',
      title: 'Vetted Swim Instructors',
      desc: 'Sunsational Swim School carefully screens each instructor to ensure they have the certifications, experience, and expertise needed to deliver effective swim lessons. Every swim instructor must also pass an extensive background check and be CPR certified.',
    },
    {
      image: <ProtectIcon hasWhiteBg={true} />,
      headerTextColor: 'text-white',
      headerBgColor: 'bg-orange',
      title: 'Fully Insured for Peace of Mind',
      desc: 'Our company and our instructors are fully insured under a multi-million dollar general liability insurance policy, ensuring water safety and peace of mind for every lesson.',
    },
    {
      image: <OkHandIcon />,
      headerTextColor: 'text-white',
      headerBgColor: 'bg-red',
      title: 'Risk-Free Guarantee',
      desc: 'Your satisfaction is our priority! If you’re not completely happy with your instructor after the first lesson, we’ll either restart your entire package with a new instructor or refund your purchase (minus the cost of one lesson) – the choice is yours!',
    },
  ],
};

const InstructorQualitiesSection: React.FC<Props> = ({ page = 'homepage' }) => {
  const imageConfig: Record<string, null | StaticImageData> = {
    homepage: whatMakesUsSunsationalFeatureImage,
    nearbySwimInstructor: null, // No image
    areasWeService: areasWeServiceFeatureImage,
  };

  const featureImage = imageConfig[page];

  return (
    <Container>
      <div>
        <Typography
          variant='h2'
          className='text-center mb-2 max-w-[842px] mx-auto'
        >
          {instructorQualities.title}
        </Typography>
        {featureImage && (
          <div className='mt-6 mb-11 lg:mt-24 lg:mb-20'>
            <Image
              src={featureImage}
              className='max-w-7xl w-full'
              alt='Feature Image'
            />
          </div>
        )}
        <div className='mt-6 mb-11 lg:mt-24 lg:mb-20'>
          {instructorQualities.qualities.map((reason, idx) => (
            <div
              key={idx}
              className='flex gap-8 items-start mb-10 pr-10 lg:pr-0'
            >
              <span className='w-full max-h-[60px] max-w-[60px] lg:max-h-[104px] lg:max-w-[104px] hidden lg:block'>
                {reason.image}
              </span>
              <div>
                <div className='relative max-w-max flex items-center'>
                  <Typography
                    variant='h3'
                    className={`font-primary background-decoration py-4 pl-6 pr-16 lg:py-[22px] lg:px-9 ${reason.headerTextColor} ${reason.headerBgColor}`}
                  >
                    {reason.title}
                  </Typography>
                  <span className='absolute -right-[30px] inline-block h-[60px] w-[60px] lg:hidden'>
                    {reason.image}
                  </span>
                </div>
                <Typography
                  variant='body1'
                  className='font-secondary font-medium mt-5 pl-9 max-w-[1003px]'
                >
                  {reason.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default withClientErrorBoundary(InstructorQualitiesSection);
