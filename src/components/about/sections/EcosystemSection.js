import { ABOUT_ECOSYSTEM } from '@/components/data';

const ICONS = {
  Customers: (
    <svg className="w-6 h-6 text-washr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Vendors: (
    <svg className="w-6 h-6 text-washr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4m0 4h4"
      />
    </svg>
  ),
  Drivers: (
    <svg className="w-6 h-6 text-washr-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 102 0 1 1 0 00-2 0zm-7 0a1 1 0 102 0 1 1 0 00-2 0z"
      />
    </svg>
  ),
};

export default function EcosystemSection() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="pill-badge mb-3" style={{ backgroundColor: 'rgba(27,58,92,0.08)', color: 'var(--washr-blue)' }}>
          How Spinny works
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-washr-blue-deep">A three-sided marketplace</h2>
        <p className="mt-3 text-sm md:text-base leading-7 text-washr-text-secondary max-w-2xl">
          Spinny connects three groups into one seamless pickup-to-delivery experience.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {ABOUT_ECOSYSTEM.map((item) => (
          <article key={item.role} className="glass-card p-6 md:p-7">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0E6] flex items-center justify-center mb-5">
              {ICONS[item.role]}
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-washr-orange mb-2">{item.role}</p>
            <h3 className="text-lg font-bold text-washr-blue-deep mb-2">{item.title}</h3>
            <p className="text-sm leading-6 text-washr-text-secondary">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
