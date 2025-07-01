import { NextResponse } from 'next/server';
import getLocationCompetitors from '@/repositories/location_competitor/base.location-competitor';

export const GET = async () => {
  const locationCompetitors = await getLocationCompetitors();
  return NextResponse.json(locationCompetitors);
};
