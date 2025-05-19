export enum TimesEnum {
  Am6ToAm8 = '6am-8am',
  Am8ToAm10 = '8am-10am',
  Am10ToPm12 = '10am-12pm',
  Am12ToPm2 = '12pm-2pm',
  Pm2ToPm4 = '2pm-4pm',
  Pm4ToPm6 = '4pm-6pm',
  Pm6ToPm8 = '6pm-8pm',
}

export const ALL_TIMES_ARRAY: TimesEnum[] = [
  TimesEnum.Am6ToAm8,
  TimesEnum.Am8ToAm10,
  TimesEnum.Am10ToPm12,
  TimesEnum.Am12ToPm2,
  TimesEnum.Pm2ToPm4,
  TimesEnum.Pm4ToPm6,
  TimesEnum.Pm6ToPm8,
];
