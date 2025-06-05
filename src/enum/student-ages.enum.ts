export enum AgeInfantsEnum {
  '6-8 Months' = '6-8 Months',
  '10-12 Months' = '10-12 Months',
  '12-18 Months' = '12-18 Months',
}

export enum AgeToddlersEnum {
  '19-23 Months' = '19-23 Months',
  '2 Years' = '2 Years',
  '2.5 Years' = '2.5 Years',
}

export enum AgePreschoolersEnum {
  '3 Years' = '3 Years',
  '3.5 Years' = '3.5 Years',
}

export enum AgeSchoolAgeEnum {
  '4-7 Years' = '4-7 Years',
  '8-12 Years' = '8-12 Years',
}

export enum AgeTeensEnum {
  '13-17 Years' = '13-17 Years',
}

export enum AgeAdultsEnum {
  '18+ Years' = '18+ Years',
}

export type StudentsAges =
  | AgeInfantsEnum
  | AgeToddlersEnum
  | AgePreschoolersEnum
  | AgeSchoolAgeEnum
  | AgeTeensEnum
  | AgeAdultsEnum;

export const Weight30StudentsAges = [
  ...Object.values(AgeInfantsEnum),
  ...Object.values(AgeToddlersEnum),
  ...Object.values(AgePreschoolersEnum),
];

export const Weight45StudentsAges = [...Object.values(AgeSchoolAgeEnum)];

export const Weight60StudentsAges = [...Object.values(AgeTeensEnum), ...Object.values(AgeAdultsEnum)];
