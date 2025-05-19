import {NextRequest, NextResponse} from 'next/server';
import {prismaClient} from '@/prisma';

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const latStr = searchParams.get('lat');
  const lngStr = searchParams.get('lng');
  const radiusStr = searchParams.get('radius');

  if (!latStr || !lngStr || !radiusStr) {
    return NextResponse.json({error: 'lat, lng and radius search params must be provided'}, {status: 400});
  }

  const lat = Number(latStr);
  const lng = Number(lngStr);
  const radius = Number(radiusStr);

  const result = await prismaClient.$queryRaw<unknown[]>`
    SELECT *,
    ROUND((3959 * acos(cos(radians(${lat}))* cos( radians(lat)) *
    cos(radians(lng) - radians(${lng}) ) + sin ( radians(${lat}))
    * sin(radians(lat))))) AS distance, zip
    FROM instructor WHERE lat IS NOT NULL AND lng IS NOT NULL
    AND is_public = 1 AND activity_status = 'Active'
    HAVING distance < ${radius} ORDER BY distance ASC, ISNULL(profile_pic_sm) ASC
  `

  return NextResponse.json(result)
}
