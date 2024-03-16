import '@fontsource-variable/nunito-sans';
import type { Metadata } from 'next';

import './globals.css';
import NavBar from '@/components/NavBar';
import NewArrivalSection from '@/components/NewArrivalSection';
import { SHOE_LIST } from '@/constant';

export const metadata: Metadata = {
  title: 'Shoes Shop',
  description: 'Project Shoes Shop is built with tailwind, react and nextjs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="animate-fadeIn p-10 xl:px-24">
        <NavBar />
        {children}
        <NewArrivalSection items={SHOE_LIST} />
      </body>
    </html>
  );
}
