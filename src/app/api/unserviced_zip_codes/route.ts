import { NextRequest, NextResponse } from 'next/server';
import { createUnservicedZipCode } from '@/repositories/unserviced_zip_codes/create.unserviced-zip-code';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json(await createUnservicedZipCode(data));
}
