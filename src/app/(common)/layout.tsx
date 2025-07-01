import type { Metadata } from 'next';
import '../globals.css';
import './layout.css';
import '../../utils/styles/common.path.css';
import MainNavigation from '@/components/layout/MainNavigation';
import MainFooter from '@/components/layout/MainFooter';
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import getLocationAndMetroAreaByCityAndState from '@/repositories/location_metro_area/get-location-for-city-page';
import { PhoneContextProvider } from '@/context/phone.context';
import { DEFAULT_PHONE_NUMBER } from '@/settings';

export const metadata: Metadata = {
  title: 'Sunsational Swim School - At-Home Private Swimming Lessons',
  description: `America's #1 rated private at-home swim lessons. Get an experienced swim teacher for your baby, adult, beginner or special needs swim lessons. Start today!`,
};

type Props = {
  children: ReactNode
}

const getCityPageData = (pathname: string) => {
  const slug = pathname.split('/')[1];
  const [city, state] = slug.split('--');
  return { city: city.replace('-', ' '), state };
}

const getLocalPhoneNumber = async (pathname: string | null) => {
  if (!pathname || !/\/.+--[A-z]{2}--.+/.test(pathname)) return DEFAULT_PHONE_NUMBER;

  const cityPageData = getCityPageData(pathname);
  const data = await getLocationAndMetroAreaByCityAndState(cityPageData);

  if (data && data.metroArea?.local_phone) {
    return data.metroArea?.local_phone;
  }

  return DEFAULT_PHONE_NUMBER;
}

export default async function CommonLayout({ children }: Props) {
  const headersRecord = await headers();
  const pathname = headersRecord.get('x-pathname');

  const localPhone = await getLocalPhoneNumber(pathname);

  return (
    <PhoneContextProvider value={localPhone}>
      <MainNavigation />
      {children}
      <MainFooter />
    </PhoneContextProvider>
  );
}
