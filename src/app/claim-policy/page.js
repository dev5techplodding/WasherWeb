import { CLAIM_POLICY_HERO, CLAIM_CATEGORIES, DEPRECIATION_TABLE, SLA_MATRIX } from '@/components/data';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Claim Policy | Dispute Resolution & Refund | Spinny',
  description:
    'Spinny official Claim Policy covering Categorization & Resolution SLAs, Depreciation & Compensation Policy, Vendor non-response rules, and High-Value Garment protocols.',
};

export default function ClaimPolicyPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <ScrollToTop />

      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden w-full pt-32 pb-24 md:pt-40 md:pb-28 bg-[#0B1726] text-white flex items-center justify-center min-h-[50vh]">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.22)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              <span>{CLAIM_POLICY_HERO.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl">
              {CLAIM_POLICY_HERO.heading}
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              {CLAIM_POLICY_HERO.description}
            </p>
          </div>
        </div>

        {/* Bottom Curve Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[56px]" fill="white">
            <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ─── Main Content Container ─── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">

        {/* ─── SECTION 1: CATEGORIZATION & RESOLUTION SLA ─── */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">Section I</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E3A66] tracking-tight mt-1">
              Categorization & Resolution SLA
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              All support tickets are automatically categorized upon submission to enforce strict resolution timelines and operational protocols.
            </p>
          </div>

          <div className="space-y-6">
            {CLAIM_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0E3A66] tracking-tight">
                    {cat.category}
                  </h3>
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-500/10 text-[#F7941D] border border-orange-500/20 w-fit shrink-0">
                    SLA Target: {cat.sla}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Applicable To</span>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                      {cat.applicable}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Resolution Process</span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {cat.process}
                    </p>
                  </div>

                  {cat.privacyNote && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span><strong className="text-slate-900 font-bold">Privacy Protocol:</strong> {cat.privacyNote}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 2: DEPRECIATION & COMPENSATION POLICY ─── */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">Section II</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E3A66] tracking-tight mt-1">
              Depreciation & Compensation Policy
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              In cases where an investigation confirms laundry partner liability for lost or damaged garments, financial compensation is evaluated based on the original purchase receipt value and the age of the garment.
            </p>
          </div>

          {/* Mandatory Provision Alert */}
          <div className="mb-8 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-950 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#F7941D] text-white flex items-center justify-center font-bold text-xl shrink-0">
              !
            </div>
            <div>
              <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-wide">Mandatory Provision</h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                A valid purchase receipt (billing receipt or credit card statement detailing purchase value and date) is strictly required to process cash compensation claims. If no valid receipt is provided, the claim is declined for cash compensation.
              </p>
            </div>
          </div>

          {/* Depreciation Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white mb-6">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6">Garment Age</th>
                  <th className="py-4 px-6 text-center">Depreciation Applied (%)</th>
                  <th className="py-4 px-6 text-right">Approved Compensation (% of Receipt)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {DEPRECIATION_TABLE.map((row, idx) => (
                  <tr key={idx} className={row.age.includes('No Receipt') ? 'bg-rose-50/70 font-semibold' : 'hover:bg-slate-50/80 transition-colors'}>
                    <td className="py-4 px-6 text-slate-900 font-bold">{row.age}</td>
                    <td className="py-4 px-6 text-center text-slate-600">{row.depreciation}</td>
                    <td className={`py-4 px-6 text-right font-extrabold ${row.age.includes('No Receipt') ? 'text-rose-600' : 'text-[#0E3A66]'}`}>
                      {row.compensation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic">
            Note: Maximum payable amounts shall not exceed the defined percentage brackets under any circumstances.
          </p>
        </section>

        {/* ─── SECTION 3: VENDOR NON-RESPONSE & HIGH-VALUE GARMENT ─── */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vendor non-response */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">Section III</span>
              <h3 className="text-2xl font-black text-[#0E3A66] tracking-tight mt-1 mb-4">
                Vendor Non-Response & Adjudication
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F7941D] mt-2 shrink-0" />
                  <span><strong className="text-slate-900">Vendor SLA Window:</strong> Laundry Partners are mandated to investigate and respond to claims within 48 hours of dispatch notice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F7941D] mt-2 shrink-0" />
                  <span><strong className="text-slate-900">Independent Resolution:</strong> If the partner fails to respond within 48 hours, Platform Support will independently evaluate existing customer evidence, pickup photos, and logs to render a final binding decision.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F7941D] mt-2 shrink-0" />
                  <span><strong className="text-slate-900">Financial Adjustment:</strong> Approved claims resulting from vendor liability or non-responsiveness are automatically deducted from subsequent vendor payout cycles.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* High-Value Garment Protocol */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">Section IV</span>
              <h3 className="text-2xl font-black text-[#0E3A66] tracking-tight mt-1 mb-4">
                High-Value Garment Protocol
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                During order placement on the mobile application, customers are provided specific fields to declare high-value garments.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-1">Captured Attributes:</strong>
                Brand Name, Year of Purchase, Estimated Garment Value, and Special Care Instructions (e.g., Dry Clean Only, Hand Wash).
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Declared details are utilized during investigation audits to assess handling compliance and enforce partner standards.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: SUMMARY SLA MATRIX ─── */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">Section V</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E3A66] tracking-tight mt-1">
              Summary SLA Matrix
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear operational benchmarks across every phase of dispute resolution and claim processing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6">Operational Stage</th>
                  <th className="py-4 px-6 text-right">Defined SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {SLA_MATRIX.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{item.stage}</td>
                    <td className="py-4 px-6 text-right font-extrabold text-[#F7941D]">{item.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Official Closing Statement ─── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white text-center border border-slate-800 shadow-lg">
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            This document represents the official <strong className="text-white">Claim Policy for Laundry Services</strong>. Approved refunds will be executed via the original payment gateway or designated platform wallet.
          </p>
        </div>

      </div>
    </main>
  );
}
