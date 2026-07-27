import { CORE_VALUES } from '@/components/data';

const METADATA = [
  {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'Time Buyback',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'Unified Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M3 21h18M5 21V9l7-6 7 6v12" strokeLinejoin="round" />
        <path d="M9 21v-8h6v8" />
      </svg>
    ),
  },
  {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'Concierge',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'Specialist Care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {CORE_VALUES.map((item, idx) => {
        const meta = METADATA[idx] || METADATA[0];
        return (
          <article
            key={item.title}
            className="group relative rounded-3xl p-6 sm:p-7 bg-white/90 border border-slate-200/80 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(27,58,92,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)` }}
            />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `rgba(${meta.glowRgb}, 0.1)`,
                    color: meta.accent,
                  }}
                >
                  {meta.icon}
                </div>
                <span
                  className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border"
                  style={{
                    color: meta.accent,
                    backgroundColor: `rgba(${meta.glowRgb}, 0.08)`,
                    borderColor: `rgba(${meta.glowRgb}, 0.2)`,
                  }}
                >
                  {meta.badge}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-[#122840] leading-snug group-hover:text-[#1B3A5C] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

