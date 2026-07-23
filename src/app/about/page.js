import CommonHeroSection from '@/components/CommonHeroSection';
import { ABOUT_HERO_CONTENT } from '@/components/data';
import CoreValues from '@/components/about/sections/CoreValues';
import MissionSection from '@/components/about/sections/MissionSection';
import TimelineSection from '@/components/about/sections/TimelineSection';

export const metadata = {
  title: 'About Us | Spinny',
  description:
    'Learn about Spinny, our mission, core values, and the service model that sets our premium garment care platform apart.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={ABOUT_HERO_CONTENT} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <CoreValues />
        <MissionSection />
        <TimelineSection />
      </div>
    </main>
  );
}