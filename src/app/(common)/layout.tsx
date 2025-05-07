import type { Metadata } from 'next';
import '../globals.css';
import MainNavigation from '@/components/MainNavigation';
import MainFooter from '@/components/MainFooter';

export const metadata: Metadata = {
  title: 'Sunsational Swim School - At-Home Private Swimming Lessons',
  description: `America's #1 rated private at-home swim lessons. Get an experienced swim teacher for your baby, adult, beginner or special needs swim lessons. Start today!`,
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className='min-h-screen min-w-full'>
      <MainNavigation />
      {children}
      <MainFooter />
    </body>
  );
}
