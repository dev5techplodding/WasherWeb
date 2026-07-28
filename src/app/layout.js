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
  title: 'Spinny — Laundry Done, Life On | The Easiest Chore You\'ll Never Do Again',
  description:
    'Laundry Done, Life On. Spinny is the easiest chore you\'ll never do again — complete wardrobe, footwear, and home care, picked up and delivered by vetted specialists.',
  keywords: 'laundry done life on, time-buyback service, wardrobe care, footwear care, home textile care, pickup and delivery, laundry, dry cleaning, garment care',
  openGraph: {
    title: 'Spinny — Laundry Done, Life On',
    description:
      'The easiest chore you\'ll never do again. Spinny handles pickup, care, and delivery for your whole wardrobe and home — you handle everything else.',
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
