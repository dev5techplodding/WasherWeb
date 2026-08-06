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
  title: 'Spinny — Buy Back Your Weekend | Any Specialist, Any Service, Your Whole City',
  description:
    'We\'ll take the chores, you take the time. Spinny is the concierge time-buyback platform for your whole wardrobe, footwear, and home — pick your own care specialist by preference, budget, and availability.',
  keywords: 'buy back your weekend, time-buyback service, wardrobe care, footwear care, home textile care, pickup and delivery, dry cleaning, garment care, choose your specialist',
  openGraph: {
    title: 'Spinny — Buy Back Your Weekend',
    description:
      'The easiest chore you\'ll never do again. Spinny handles pickup, care, and delivery for your whole wardrobe and home — you choose the specialist, we handle everything else.',
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
