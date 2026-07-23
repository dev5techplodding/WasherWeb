import PageCTA from '@/components/PageCTA';
import { PRIVACY_CONTACT } from '@/components/data';

export default function PrivacyContact() {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-start">
      <article className="rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.22)]">
        <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
          Contact details
        </p>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">Questions about privacy go here.</h2>
        <div className="mt-6 space-y-4">
          {PRIVACY_CONTACT.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/8 border border-white/12 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">{item.label}</p>
              <p className="mt-2 text-sm md:text-base font-semibold text-white leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </article>

      <PageCTA
        title="Need a privacy review or data request?"
        description="Contact us with your question or request and we’ll route it to the appropriate team for review."
        primary={{ label: 'Email privacy', url: 'mailto:privacy@washr.example' }}
        secondary={{ label: 'Back to help center', url: '/help-center' }}
      />
    </section>
  );
}
