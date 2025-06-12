import { NextRequest, NextResponse } from 'next/server';
import { validateEmails } from '@/utils/email-validation';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json(await validateEmails(data.emailRecords));
}
