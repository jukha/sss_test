export enum DaysEnum {
  Mon = 'Mon',
  Tue = 'Tue',
  Wed = 'Wed',
  Thu = 'Thu',
  Fri = 'Fri',
  Sat = 'Sat',
  Sun = 'Sun',
}

export const WEEKDAYS_ARRAY = [
  DaysEnum.Mon,
  DaysEnum.Tue,
  DaysEnum.Wed,
  DaysEnum.Thu,
  DaysEnum.Fri,
];

export const WEEKENDS_ARRAY = [DaysEnum.Sat, DaysEnum.Sun];

export const ALL_DAYS_ARRAY = [...WEEKDAYS_ARRAY, ...WEEKENDS_ARRAY];
