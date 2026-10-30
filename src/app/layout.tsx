import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tulyo: Daily Safe Ceiling & Private Bill Splitting',
  description:
    'Tulyo pre-deducts your rent, EMIs, and bills first so you know your exact daily spending ceiling with zero guilt. Fair bill splitting with Largest Remainder math. 100% private, on-device local storage.',
  keywords: [
    'Tulyo',
    'daily safe ceiling',
    'bill splitter',
    'expense tracker',
    'private budgeting',
    'offline finance',
    'largest remainder split',
    'zero-server finance',
  ],
  authors: [{ name: 'Xorvanta Technologies' }],
  metadataBase: new URL('https://tulyo.vercel.app'),
  openGraph: {
    title: 'Tulyo — Your Daily Safe Ceiling. Shared Without Friction.',
    description:
      'Know your safe daily spending runway every morning. Fair bill splitting, zero servers, 100% on-device private financial storage.',
    url: 'https://tulyo.vercel.app',
    siteName: 'Tulyo',
    images: [
      {
        url: '/images/feature-graphic.jpg',
        width: 1024,
        height: 500,
        alt: 'Tulyo Safe Ceiling App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/app-icon-512.png',
    apple: '/images/app-icon-512.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#080C14] text-slate-100 antialiased selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
