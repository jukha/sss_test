import React from 'react';
import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import Image from 'next/image';
import ArrowButton from '../kit/buttons/ArrowButton';
import { GeneralFirstSectionType } from '@/types/general-section.types';
import VideoFrame from '../widgets/VideoFrame';

type TextBlockProps = {
  text?: string | React.ReactNode;
  variant?: 'h2' | 'custom';
  className?: string;
};

const GeneralFirstSection = ({
  heading1,
  descriptionTop,
  descriptionsBottom,
  media,
  mediaAlt,
  posterImage,
  buttonType = 'black',
  buttonText,
  buttonLink,
}: GeneralFirstSectionType) => {
  const styleClasses = {
    buttonClasses: {
      yellow: 'bg-yellow text-black',
      black: 'bg-offBlack text-white',
    },
    shadowClasses: {
      yellow: 'bg-orange',
      black: 'bg-blue',
    },
    iconClasses: {
      yellow: 'bg-offBlack',
      black: 'bg-yellow',
    },
    iconColor: {
      yellow: 'white',
      black: 'black',
    },
  };

  const TextBlock = ({
    text,
    variant = 'custom',
    className,
  }: TextBlockProps) => {
    if (!text) return null;

    return (
      <Typography variant={variant} className={className}>
        {text}
      </Typography>
    );
  };

  // Function to render the appropriate media component
  const renderMedia = () => {
    if (!media) return null;

    if (typeof media === 'string') {
      return <VideoFrame src={media} posterImage={posterImage} />;
    }

    return <Image alt={mediaAlt || 'Section media'} src={media} />;
  };

  return (
    <Container className='flex flex-col gap-10 justify-start items-center'>
      <TextBlock
        text={heading1}
        variant='h2'
        className='text-center max-w-[911px]'
        // className='text-center max-w-[837px]'
      />
      <TextBlock
        text={descriptionTop}
        className='text-[18px] text-off-black md:text-black md:text-[20px] font-medium leading-[120%] font-secondary max-w-[735px] whitespace-break-spaces text-center'
      />

      {/* Media content - video or image */}
      {renderMedia()}
      {descriptionsBottom?.map((desc, index) => {
        return (
          <TextBlock
            key={index}
            className='text-[18px] text-off-black md:text-black md:text-[20px] font-medium leading-[120%] font-secondary max-w-[735px] whitespace-break-spaces text-center'
            text={desc}
          />
        );
      })}

      {buttonText && buttonLink &&
        <ArrowButton
          text={buttonText}
          link={buttonLink}
          buttonClasses={`text-[20px] font-semiBold leading-[120%] ${styleClasses.buttonClasses[buttonType]}`}
          shadowClasses={`${styleClasses.shadowClasses[buttonType]}`}
          shadow={true}
          IconClasses={`${styleClasses.iconClasses[buttonType]}`}
          iconColor={`${styleClasses.iconColor[buttonType]}`}
        />
      }
    </Container>
  );
};

export default GeneralFirstSection;
