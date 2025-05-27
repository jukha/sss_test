import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { ArrowButtonType } from './button.type';

export type SellingReasonType = {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
  iconFrameColor: string;
  iconRotateDeg: string;
};

export type SellingPointsSectionType = {
  sectionTitle: string;
  sectionTitleMaxWidth?: string;
  sectionDescription?: string;
  image: StaticImageData;
  sellingReasons: SellingReasonType[];
  arrowButtonProps?: ArrowButtonType;
};
