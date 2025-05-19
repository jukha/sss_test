import {NextResponse} from 'next/server';
import {prismaClient} from '@/prisma';

export const GET = async () => {
  const instructors = await prismaClient.instructor.findMany();
  return NextResponse.json(instructors)
}
