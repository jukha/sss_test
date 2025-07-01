import { LocationCityPage, LocationMetroArea } from '@/__generated__/prisma';

export type LocationStateEntity = {
  id: number;
  name: string;
  abbreviation: string;
  locationCityPage: LocationCityPage[];
  locationMetroArea: LocationMetroArea[];
};
