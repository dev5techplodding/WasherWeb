import { CORE_VALUES } from '@/components/data';

const METADATA = [
  {
    badge: 'TIME BUYBACK',
    image: '/icons/time_buyback.png',
  },
  {
    badge: 'UNIFIED CARE',
    image: '/icons/unified_care.png',
  },
  {
    badge: 'CONCIERGE',
    image: '/icons/concierge.png',
  },
  {
    badge: 'SPECIALIST CARE',
    image: '/icons/specialist_care.png',
  },
];

export default function CoreValues() {
  return (
    <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CORE_VALUES.map((item, idx) => {
        const meta = METADATA[idx] || METADATA[0];
        return (
          <article
            key={item.title}
            className="group relative rounded-[28px] p-7 sm:p-8 bg-white border border-slate-100/90 shadow-[10px_14px_30px_rgba(210,215,228,0.45),-10px_-10px_25px_rgba(255,255,255,0.95)] hover:shadow-[16px_20px_40px_rgba(195,202,218,0.6),-12px_-12px_30px_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                {/* Realistic 3D Icon Container */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F8F9FC] flex items-center justify-center shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.06),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.9)] p-1.5 border border-slate-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src={meta.image}
                    alt={meta.badge}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                {/* Soft Neumorphic Pill Badge */}
                <span className="px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#FFF0E6] text-[#F28C28] border border-[#FFE0D1]/80 shadow-[inset_1px_1px_2px_rgba(242,140,40,0.08)]">
                  {meta.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#122840] leading-snug tracking-tight mb-3 group-hover:text-[#F28C28] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}



