import AboutHero from '@/components/about/sections/AboutHero';
import CoreValues from '@/components/about/sections/CoreValues';
import StatsSection from '@/components/about/sections/StatsSection';
import MissionSection from '@/components/about/sections/MissionSection';
import EcosystemSection from '@/components/about/sections/EcosystemSection';
import TimelineSection from '@/components/about/sections/TimelineSection';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'About Us | Spinny',
  description:
    'Learn about Spinny, our mission, core values, and the service model that sets our premium garment care platform apart.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <AboutHero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <CoreValues />
        <StatsSection />
        <MissionSection />
        <EcosystemSection />
        <TimelineSection />

        <div className="mt-16">
          <PageCTA
            title="Ready to buy back your time?"
            description="Schedule your first pickup in under 30 seconds, or see exactly how the process works before you book."
            primary={{ label: 'Contact Us', url: '/contact' }}
            secondary={{ label: 'See process', url: '/process' }}
          />
        </div>
      </div>
    </main>
  );
}