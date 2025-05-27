export enum DaysEnum {
  Mon = 'Mondays',
  Tue = 'Tuesdays',
  Wed = 'Wednesdays',
  Thu = 'Thursdays',
  Fri = 'Fridays',
  Sat = 'Saturdays',
  Sun = 'Sundays',
}

export const WEEKDAYS_ARRAY = [DaysEnum.Mon, DaysEnum.Tue, DaysEnum.Wed, DaysEnum.Thu, DaysEnum.Fri];

export const DAY_ORDER: Record<DaysEnum, number> = {
  [DaysEnum.Mon]: 1,
  [DaysEnum.Tue]: 2,
  [DaysEnum.Wed]: 3,
  [DaysEnum.Thu]: 4,
  [DaysEnum.Fri]: 5,
  [DaysEnum.Sat]: 6,
  [DaysEnum.Sun]: 7,
};

export const WEEKENDS_ARRAY = [DaysEnum.Sat, DaysEnum.Sun];

export const ALL_DAYS_ARRAY = [...WEEKDAYS_ARRAY, ...WEEKENDS_ARRAY];
