import { StaticImageData } from 'next/image';
import { Property } from 'csstype';

export type LessonOption = {
  rate: string; // e.g., '30 minutes', '45 minutes'
  price: number; // Price per lesson for this option
  discount?: number; // Percentage discount
};

export type LessonPackage = {
  id: number;
  noOfLessons: number;
  options: LessonOption[];
  ribbonText?: string;
  ribbonColor?: Property.Color;
  cardColor: Property.Color;
  blurPrice?: boolean; // Optional property to control blur effect on price
};

export type LessonPricingSectionType = {
  image: StaticImageData;
  title?: string;
  description?: string;
  noOfStudent?: string;
  lessonType?: string;
  lessonPlainCardInfo?: string[];
  lessonsPackages?: LessonPackage[];
  requirements?: string[];
  guaranteeTerms?: string[];
  headerLessonSplitInfo?: string;
  footerLessonSplitInfo?: string;
  showHelpText?: boolean;
};

type LessonFactPosition =
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-center';

export type LessonFact = {
  title: string;
  text: string;
  position: LessonFactPosition;
  color?: string;
};
