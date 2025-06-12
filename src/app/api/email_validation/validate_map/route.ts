import { NextRequest, NextResponse } from 'next/server';
import { validateEmailsMap } from '@/utils/email-validation';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json(await validateEmailsMap(data.emailsMap));
}
