type SwimLessonFactPosition = "top-right" | "bottom-left" | "bottom-right" | "left-center";

export type SwimLessonFact = {
  title: string;
  text: string;
  position: SwimLessonFactPosition;
  color?: string;
};
