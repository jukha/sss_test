import { StaticImageData } from "next/image";

export type SwimStepType = {
  title: string; // e.g. "Register online"
  titleMaxWidth?: string;
  description: string; // Paragraph under title
  image: StaticImageData | string; // Step image
  parentCardClasses?: string;
  statWrapperClasses?: string;
  statText?: string; // e.g. "2,000+"
  statCaption?: string; // e.g. "Swim Instructors"
};

export type HowItWorksType = {
  sectionHeader?: string;
  sectionDescription?: string;
  steps?: SwimStepType[];
};