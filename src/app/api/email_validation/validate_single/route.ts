import { NextRequest, NextResponse } from 'next/server';
import { validateOneEmail } from '@/utils/email-validation';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json(await validateOneEmail(data.email));
}
