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
  ribbonColor?: string;
  cardColor: string;
};
