import { NextResponse } from 'next/server';
import getLocationsAndPricing from '@/repositories/locations_and_pricing/base.locations-and-pricing';

export const GET = async () => {
  const locationsAndPricing = await getLocationsAndPricing();
  return NextResponse.json(locationsAndPricing);
}
