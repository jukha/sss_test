export type MetroAreaEntity = {
  id: number;
  name: string;
  stateAbbreviation: string;
  packagePriceTierId: number | null;
  haveSIWithPool: boolean | null;
  serviceAvailable: boolean | null;
  matchRate30Day: number | null;
};
