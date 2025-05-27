import { StaticImageData } from 'next/image';
import React from 'react';

type GeneralFirstSectionButtonType = 'yellow' | 'black';

export type GeneralFirstSectionType = {
  heading1?: string;
  descriptionTop?: string | React.ReactNode;
  descriptionsBottom?: (string | React.ReactNode)[]; // Array of strings or React nodes for multiple descriptions sometime need react nodes to render links
  media?: StaticImageData | string;
  mediaAlt?: string;
  posterImage?: StaticImageData;
  buttonType?: GeneralFirstSectionButtonType;
  buttonText?: string;
  buttonLink?: string;
};
