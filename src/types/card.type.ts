import { FilterClassEnum } from '@/enum/filter-class.enum';
import { StaticImageData } from 'next/image';

export type CardType = {
  text: string;
  person: { name: string; city: string; img?: string, bgColor?: string; };
  textColor: string;
  cardBgSrc: StaticImageData;
  cardFilter: FilterClassEnum;
  cardShadowFilter: FilterClassEnum;
};
