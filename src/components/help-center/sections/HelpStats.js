import { HELP_STATS } from '@/components/data';

export default function HelpStats() {
  return (
    <section className="grid gap-6 md:grid-cols-3 mt-16">
      {HELP_STATS.map((item) => (
        <article key={item.label} className="glass-card p-6 border border-white/70">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-washr-text-muted">{item.label}</p>
          <p className="mt-2 text-sm leading-7 text-washr-text-secondary">{item.value}</p>
        </article>
      ))}
    </section>
  );
}
