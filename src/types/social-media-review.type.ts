import { StaticImageData } from 'next/image';

export type SocialMediaReviewCardType = {
  image: StaticImageData;
  name: string;
  rating: number;
  review: string;
  platform: string;
  cardColor?: string; // Optional property for card background color
};

export type SocialMediaReviewSectionType = {
  heading?: string;
  description?: string;
  reviews: SocialMediaReviewCardType[];
};
