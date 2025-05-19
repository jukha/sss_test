import {NextRequest, NextResponse} from 'next/server';
import {prismaClient} from '@/prisma';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const entity = await prismaClient.unservicedLeads.create({data: {...data, timestamp: new Date()}});
  return NextResponse.json(entity);
}
