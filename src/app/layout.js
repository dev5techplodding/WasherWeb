import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Spinny — Premium On-Demand Laundry | Expert Garment Care',
  description:
    'Spinny delivers seamless, expert garment care to your doorstep. Schedule a pickup, and we handle the rest — commercial-grade processing by vetted professionals.',
  keywords: 'laundry, dry cleaning, garment care, pickup, delivery, premium, on-demand',
  openGraph: {
    title: 'Spinny — Premium On-Demand Laundry',
    description:
      'Reclaim your time with Spinny. Expert commercial-grade garment care, delivered seamlessly.',
    type: 'website',
    url: 'https://spinny.ca',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        <SmoothScroller>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
