import type { Metadata } from 'next';

import './globals.css';
import NavBar from '@/components/NavBar';

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
      <body className="p-10 xl:px-24">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
