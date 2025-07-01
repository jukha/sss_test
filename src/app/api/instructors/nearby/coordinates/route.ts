import { NextRequest, NextResponse } from 'next/server';
import getInstructorsNearbyLatLng from '@/repositories/instructors/nearby-lat-lng.instructors';

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;

  const latStr = params.get('lat');
  const lngStr = params.get('lng');
  const radiusStr = params.get('radius');
  const limitStr = params.get('limit');
  const offsetStr = params.get('offset');
  const coordinatesOnly = params.get('coordinatesOnly') === 'true';

  if (!latStr || !lngStr) return NextResponse.json({error: 'Lat and Lng are required'}, {status: 400});

  const lat = Number(latStr);
  const lng = Number(lngStr);
  const radius = radiusStr ? Number(radiusStr) : undefined;

  const instructors = await getInstructorsNearbyLatLng({
    lat,
    lng,
    radius,
    coordinatesOnly,
    limit: limitStr ? Number(limitStr) : undefined,
    offset: offsetStr ? Number(offsetStr) : undefined,
  });

  return NextResponse.json(instructors);
}
