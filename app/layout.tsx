import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Fleurs from './components/home/Fleurs';
import Banner from './components/home/Banner';
import Resine from './components/home/Resine';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green hornet',
  description: 'CBD Shop',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Banner/>
        <Fleurs/>
        <Resine/>
      </body>
    </html>
  );
}