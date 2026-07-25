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
  title: 'Spinny — Buy Back Your Time | Wardrobe, Footwear & Home Care',
  description:
    'Spinny is a time-buyback service for your entire wardrobe and home — garments, footwear, leather, and home textiles, picked up and delivered by vetted specialists.',
  keywords: 'time-buyback service, wardrobe care, footwear care, home textile care, pickup and delivery, laundry, dry cleaning, garment care, on-demand',
  openGraph: {
    title: 'Spinny — Buy Back Your Time',
    description:
      'Reclaim your evenings and weekends. Spinny handles pickup, care, and delivery for your whole wardrobe and home — you handle everything else.',
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
