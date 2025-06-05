type PromocodeOffKey = `off${string}`;
type PromocodeFreeKey = `free${string}`;

export type PromocodeEntity = {
  id: number;
  promo: string;
  start_date: Date | null;
  end_date: Date | null;
} & {
  [K in PromocodeOffKey]: number;
} & {
  [K in PromocodeFreeKey]: number;
};
