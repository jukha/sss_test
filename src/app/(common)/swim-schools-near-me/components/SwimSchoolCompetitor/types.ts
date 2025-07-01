export type SwimSchoolFeature = {
  label: string;
  value: string;
  symbol?: 'tick' | 'cross';
};

export type SwimSchool = {
  features: React.ReactNode[];
};
