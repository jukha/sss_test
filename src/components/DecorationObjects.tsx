import {
  cardBgLeftTilt,
  singleStar,
  starFish,
  circles,
  threeStars,
} from '@/assets';
import Image from 'next/image';
import React from 'react';

interface Props {
  variant: 'threeStars' | 'starFish' | 'circles' | 'singleStar';
  width?: number;
  height?: number;
}

const DecorationObject = (props: Props) => {
  const getDetails = (variant: string) => {
    switch (variant) {
      case 'threeStars':
        return { src: threeStars, alt: 'Three Stars' };
      case 'cardBgLeftTilt':
        return { src: cardBgLeftTilt, alt: 'Card Background Left Tilt' };
      case 'starFish':
        return { src: starFish, alt: 'Star Fish' };
      case 'circles':
        return { src: circles, alt: 'Three Circles' };
      case 'singleStar':
        return { src: singleStar, alt: 'Single Star' };
      default:
        return { src: '', alt: 'Decoration' };
    }
  };

  const { src, alt } = getDetails(props.variant);
  return (
    <Image
      width={props.width ? props.width : undefined}
      height={props.height ? props.height : undefined}
      src={src}
      alt={alt}
    />
  );
};

export default DecorationObject;
