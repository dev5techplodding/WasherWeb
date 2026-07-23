import CommonHeroSection from '@/components/CommonHeroSection';
import { SERVICE_AREAS_HERO_CONTENT, SERVICE_AREAS } from '@/components/data';

export const metadata = {
  title: 'Service Areas | Spinny',
  description: 'Spinny is live in major Canadian metro areas including Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton.',
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={SERVICE_AREAS_HERO_CONTENT} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6">
          {SERVICE_AREAS.map((area) => (
            <article key={area.city} className="glass-card p-6 border border-white/70 text-center">
              <h2 className="text-lg font-bold" style={{ color: 'var(--washr-blue-deep)' }}>{area.city}</h2>
              <p className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'var(--washr-text-muted)' }}>{area.region}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
