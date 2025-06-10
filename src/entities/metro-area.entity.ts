export type MetroAreaEntity = {
  id: number;
  name: string;
  stateAbbreviation: string;
  packagePriceTierId: number | null;
  haveSIWithPool: boolean | null;
  serviceAvailable: boolean | null;
};
