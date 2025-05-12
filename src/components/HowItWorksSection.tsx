import Image from 'next/image';
import Container from './Container';
import Typography from './Typography';
import FlexWrapper from './FlexWrapper';
import {
  howItWorksSectionImage1,
  howItWorksSectionImage2,
  howItWorksSectionImage3,
} from '@/assets';

const content = [
  {
    header: (
      <>
        register
        <br />
        online
      </>
    ),
    description:
      'Tell us your needs so we can match you with the perfect Sunsational Instructor.',
    image: howItWorksSectionImage1,
    decorationElementClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] -bottom-[40px] md:bottom-0 lg:right-0',
    parentCardClasses: 'pb-[66px] lg:pb-[unset]',
    stats: {
      name: 'cities served',
      count: '1,500+',
    },
  },
  {
    header: 'get matched',
    description:
      'Shortly after registering, we introduce you to your handpicked instructor, who will contact you to schedule lessons.',
    image: howItWorksSectionImage2,
    decorationElementClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] -bottom-[40px] lg:bottom-0 lg:left-0',
    parentCardClasses: 'pb-18',
    stats: {
      name: 'sunsational swim instructors',
      count: '2,000+',
    },
  },
  {
    header: (
      <>
        start
        <br />
        lessons
      </>
    ),
    description:
      'Dive in and help your students learn to be safe and confident in the water!',
    image: howItWorksSectionImage3,
    decorationElementClasses:
      'right-1/2 transform translate-x-1/2 lg:translate-x-[unset] -bottom-[40px] lg:bottom-0 lg:right-0',
    stats: {
      name: 'swimmers since 2009',
      count: '100,000+',
    },
  },
];

const HowItWorksSection = () => {
  return (
    <Container>
      <div className='lg:px-20'>
        <Typography
          variant='h2'
          className='max-w-[837px] text-center mx-auto mb-9'
        >
          Get private swimming lessons at home!
        </Typography>
        <Typography
          variant='custom'
          className='text-2xl font-bold leading-[125%] font-secondary text-darkBlue max-w-[559px] text-center mx-auto'
        >
          Start America’s #1 rated swimming lessons at your home pool as easy as
          1,2,3
        </Typography>
        {content.map((item, i) => (
          // ==================
          // Parent Card Starts
          // ==================
          <FlexWrapper
            className={item.parentCardClasses}
            stackOrder='second-top'
            direction={i % 2 === 0 ? 'row' : 'row-reverse'}
            key={i}
          >
            <div className='flex flex-wrap gap-4 lg:gap-12 items-start mt-20 lg:mt-0'>
              {/* ============ */}
              {/* Step No */}
              {/* ============ */}
              <div className='relative z-0 grid grid-items-center justify-items-center'>
                <svg
                  width='60'
                  height='52'
                  style={{ gridArea: '1/1' }}
                  viewBox='0 0 60 52'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M58.0439 36.4632C58.8766 34.8233 59.4762 26.9039 59.1174 24.6853C58.719 22.2218 57.7175 15.0413 56.0434 12.4633C52.103 6.39236 46.2609 3.93779 39.4585 1.26568C35.4601 -0.30355 31.8573 0.0437943 28.6574 0.666374C16.7956 2.97872 9.15822 6.59524 3.04492 14.9628C1.31998 17.3253 0.631164 29.4231 1.11561 32.9625C2.39548 42.3074 16.9221 51.2625 27.4642 51.6619C42.0691 52.2185 53.1742 46.0418 58.0439 36.4632Z'
                    fill='var(--color-orange)'
                  />
                </svg>
                <div style={{ gridArea: '1/1' }}>
                  <Typography
                    variant='custom'
                    className='text-[42px] font-bold font-primary text-white'
                  >
                    {i + 1}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant='h3'
                  className='font-primary capitalize mb-3'
                >
                  {item.header}
                </Typography>
                <Typography
                  variant='h5'
                  className='font-secondary lg:max-w-[298px] leading-[120%]'
                >
                  {item.description}
                </Typography>
              </div>
            </div>
            <div className='max-w-[840px] relative z-0'>
              <div
                className={`z-10 flex flex-col px-8 py-4 lg:pt-10 lg:pb-4 lg:min-w-[416px] justify-center items-center absolute ${item.decorationElementClasses}`}
              >
                <svg
                  width='100%'
                  height='100%'
                  className='absolute inset-0 -z-[10]'
                  preserveAspectRatio='none'
                  viewBox='0 0 417 176'
                  fill='#110241'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M364.187 0.0421755C266.115 0.737915 168.069 3.21128 70.2051 7.45386C52.3687 8.22828 32.6072 9.64605 20.792 18.2799C13.7222 23.4484 10.7944 30.3931 8.52038 37.1206C-2.77704 70.6827 -2.80032 105.785 8.47359 139.347C11.7103 148.985 16.4729 159.123 28.2574 165.436C41.3015 172.417 59.6591 173.052 76.6119 173.338C147.414 174.547 218.228 175.397 289.055 175.88C320.877 176.093 353.318 176.181 383.649 169.994C396.374 167.402 409.68 162.983 414.461 154.969C417.05 150.628 416.734 145.83 416.393 141.19C413.667 104.787 410.941 68.3925 408.215 31.9897L408.75 37.5394C409.229 24.2445 407.08 8.02972 388.442 2.2698C381.018 -0.022504 372.433 -0.0276455 364.199 0.0338397L364.187 0.0421755Z'
                    fill='#110241'
                  />
                </svg>

                <Typography
                  variant='custom'
                  className='font-primary text-[48px] leading-[115%] xl:text-[80px] xl:leading-[113%] text-white font-bold'
                >
                  {item.stats.count}
                </Typography>
                <Typography
                  variant='custom'
                  className='text-base lg:text-[28px] -translate-y-3 capitalize font-secondary font-medium text-white whitespace-nowrap'
                >
                  {item.stats.name}
                </Typography>
              </div>
              <Image src={item.image} alt='' />
            </div>
          </FlexWrapper>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorksSection;
