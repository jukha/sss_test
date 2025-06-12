import { NextRequest, NextResponse } from 'next/server';
import createUnservicedLeads from '@/repositories/unserviced_leads/create.unserviced-leads';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json(await createUnservicedLeads(data));
}
