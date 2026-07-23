import CommonHeroSection from '@/components/CommonHeroSection';
import { SERVICES_HERO_CONTENT } from '@/components/data';
import ServicesCarousel from '@/components/ServicesCarousel';

export const metadata = {
  title: 'Our Services | Spinny',
  description:
    'From everyday wash & fold to delicate dry cleaning, we handle your laundry with expert care and precision.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={SERVICES_HERO_CONTENT} />
      <ServicesCarousel />
    </main>
  );
}
