import {NextResponse} from 'next/server';
import {prismaClient} from '@/prisma';

export const POST = async () => {
  const zipCodesServiced = await prismaClient.locationZipCodeServiced.findMany();
  const metroAreas = await prismaClient.locationMetroArea.findMany();
  const pricing = await prismaClient.packagePriceTier.findMany({include: {package_price_matrix: true}});
  const promoCodes = await prismaClient.packagePromoCode.findMany();

  const payload  ={
    zipCodesServiced,
    metroAreas,
    pricing,
    promoCodes,
  }

  return NextResponse.json(payload)
}
