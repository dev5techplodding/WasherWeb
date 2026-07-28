import { PRIVACY_SECTIONS } from '@/components/data';

export default function PrivacyGrid() {
  return (
    <section className="mt-16 sm:mt-20">
      {/* Policy Header Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Official Compliance Document
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Spinny Privacy Policy
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Applicable to the Spinny Platform across Canada • Governed by Canadian & Provincial Privacy Legislation
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-slate-200">
            18 Articles • Complete Privacy Framework
          </span>
        </div>
      </div>

      {/* Grid of 18 Privacy Policy Articles */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        {PRIVACY_SECTIONS.map((section) => (
          <article
            key={section.title}
            className="group rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] hover:shadow-[0_20px_40px_rgba(15,30,48,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Bar: Section Title & Subtitle Badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-black text-[#0E3A66] tracking-tight group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 flex-shrink-0">
                    {section.subtitle}
                  </span>
                )}
              </div>

              {/* Main Body Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal whitespace-pre-line">
                {section.body}
              </p>

              {/* Optional Bullet Points */}
              {section.bullets && (
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

