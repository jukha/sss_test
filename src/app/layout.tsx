import type { Metadata } from 'next';
import './globals.css';
import '@/utils/styles/embla.css';
import '@/utils/styles/cards.path.css';
import { RegistrationFormProvider } from '@/context/registration-form.context';
import '@/utils/styles/common.path.css';
import '@/utils/styles/buttons.css';
import '@/utils/styles/embla.review-section.css';
import '@/utils/styles/embla.social-media-reviews-section.css';
import '@/utils/styles/embla.feature-swim-instructor-section.css';
import GlobalErrors from '@/components/GlobalErrors';

export const metadata: Metadata = {
  title: 'Sunsational Swim School - At-Home Private Swimming Lessons',
  description: `America's #1 rated private at-home swim lessons. Get an experienced swim teacher for your baby, adult, beginner or special needs swim lessons. Start today!`,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang='en' className='orangeScroll'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <RegistrationFormProvider>
          {children}
        </RegistrationFormProvider>
        <GlobalErrors/>
      </body>
    </html>
  );
}
