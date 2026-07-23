import { CORE_VALUES } from '@/components/data';

export default function CoreValues() {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-3">
      {CORE_VALUES.map((item) => (
        <article key={item.title} className="glass-card p-6 border border-white/70 h-full">
          <h2 className="text-xl font-bold text-washr-blue-deep">{item.title}</h2>
          <p className="mt-3 text-sm leading-7 text-washr-text-secondary">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
