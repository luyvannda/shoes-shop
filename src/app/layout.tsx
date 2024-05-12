import '@fontsource-variable/nunito-sans';
import type { Metadata } from 'next';

import './globals.css';
import NewArrivalSection from '@/components/NewArrivalSection';
import { SHOE_LIST } from '@/constant';
import ClientComponent from '@/components/ClientComponent';

export const metadata: Metadata = {
  title: 'Shoes Shop',
  description: 'Project Shoes Shop is built with NextJS and tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="animate-fadeIn p-10 dark:bg-night xl:px-24">
        <ClientComponent />
        {children}
        <NewArrivalSection items={SHOE_LIST} />
      </body>
    </html>
  );
}
