import { PRIVACY_SECTIONS } from '@/components/data';

export default function PrivacyGrid() {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-2">
      {PRIVACY_SECTIONS.map((section) => (
        <article key={section.title} className="glass-card p-6 md:p-7 border border-white/70 h-full">
          <h2 className="text-xl font-bold text-washr-blue-deep">{section.title}</h2>
          <p className="mt-3 text-sm md:text-base leading-7 text-washr-text-secondary">{section.body}</p>
        </article>
      ))}
    </section>
  );
}
