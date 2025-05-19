export type LocationsAndPricingEntity = {
  zipCodesServiced: ZipCodesServiced[];
  metroAreas: MetroAreas[];
}

export type ZipCodesServiced = {
  id: bigint;
  zip: string;
  metro_area_id: bigint;
}

export type MetroAreas = {
  id: bigint;
  name: string;
  state_abbreviation: string;
}
