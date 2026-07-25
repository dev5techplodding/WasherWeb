import CommonHeroSection from '@/components/CommonHeroSection';
import { SERVICES_HERO_CONTENT } from '@/components/data';
import ServiceEcosystem from '@/components/home/sections/ServiceEcosystem';
import ServicesCarousel from '@/components/ServicesCarousel';
import HoursLedger from '@/components/home/sections/HoursLedger';

export const metadata = {
  title: 'Our Services | Spinny',
  description:
    'From everyday wardrobe care to footwear revival and home textiles, Spinny handles your entire household with expert care and precision.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={SERVICES_HERO_CONTENT} />
      <ServiceEcosystem />
      <ServicesCarousel />
      <HoursLedger />
    </main>
  );
}
