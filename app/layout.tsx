import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Carousel from './components/home/Carousel';
import Fleurs from './components/home/Fleurs';

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
        <Carousel/>
        <Fleurs/>
      </body>
    </html>
  );
}