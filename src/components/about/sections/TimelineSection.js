import { MILESTONES } from '@/components/data';

export default function TimelineSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <p className="pill-badge mb-3" style={{ backgroundColor: 'rgba(27,58,92,0.08)', color: 'var(--washr-blue)' }}>
            Our story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-washr-blue-deep">A short timeline of growth</h2>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {MILESTONES.map((item) => (
          <article key={item.year} className="rounded-[28px] bg-white p-6 border border-washr-gray-mid shadow-[0_12px_36px_rgba(27,58,92,0.06)]">
            <p className="text-3xl font-black tracking-tight text-washr-orange">{item.year}</p>
            <p className="mt-4 text-sm leading-7 text-washr-text-secondary">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
