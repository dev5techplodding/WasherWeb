import TermsHero from '@/components/terms-of-service/sections/TermsHero';
import { TERMS_SECTIONS } from '@/components/data';

export const metadata = {
  title: 'Master Consumer Terms of Use | Spinny',
  description: 'Master Consumer Terms of Use (Part A) governing bookings, payments, and platform usage for Spinny',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <TermsHero />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Header Document Summary Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F7941D] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              Official Master Legal Suite • Part A
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Spinny Master Terms of Use
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Unit 120, 5710 201 Street, Langley, BC V3A 8A8, Canada • Operating Territory: Canada
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-slate-200">
              32 Articles • Complete Agreement
            </span>
          </div>
        </div>

        {/* 32 Articles List */}
        <div className="space-y-8">
          {TERMS_SECTIONS.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl sm:text-2xl font-black text-[#0E3A66] tracking-tight">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 flex-shrink-0">
                    {section.subtitle}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal whitespace-pre-line">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
