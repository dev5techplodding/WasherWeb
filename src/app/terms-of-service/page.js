import CommonHeroSection from '@/components/CommonHeroSection';
import { TERMS_HERO_CONTENT, TERMS_SECTIONS } from '@/components/data';

export const metadata = {
  title: 'Terms of Service | Spinny',
  description: 'The terms that govern bookings, payments, and the vendor/driver relationship on the Spinny platform.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <CommonHeroSection content={TERMS_HERO_CONTENT} />

      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 space-y-10">
        {TERMS_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--washr-blue-deep)' }}>{section.title}</h2>
            <p className="text-sm leading-7" style={{ color: 'var(--washr-text-secondary)' }}>{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
