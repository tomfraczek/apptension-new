'use client';
import { useEffect } from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const roboto = Roboto({
  weight: ['400', '700'],
  preload: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <Header />
        <section>
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
