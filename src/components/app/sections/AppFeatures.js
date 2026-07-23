import Image from 'next/image';
import { APP_FEATURES } from '@/components/data';

export default function AppFeatures() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="app-features-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span
            className="pill-badge mb-4"
            style={{ color: 'var(--washr-orange)', backgroundColor: 'rgba(242,140,40,0.08)', border: '1px solid rgba(242,140,40,0.15)' }}
          >
            Everything, in one app
          </span>
          <h2
            id="app-features-heading"
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15]"
            style={{ color: 'var(--washr-blue-deep)' }}
          >
            Less time managing laundry. More time for everything else.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {APP_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="glass-card p-6 md:p-7 border border-white/70 flex gap-4 items-start"
            >
              <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                <Image src={feature.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--washr-blue-deep)' }}>{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--washr-text-secondary)' }}>{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
