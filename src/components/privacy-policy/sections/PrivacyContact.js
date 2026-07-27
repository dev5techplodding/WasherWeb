'use client';

import Link from 'next/link';
import { PRIVACY_CONTACT } from '@/components/data';

export default function PrivacyContact() {
  const getIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes('email')) {
      return (
        <svg className="w-5 h-5 text-[#F28C28] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  };

  return (
    <section className="mt-16 sm:mt-24 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Official Privacy Contact Details */}
        <article className="lg:col-span-7 rounded-[32px] bg-gradient-to-br from-[#122840] via-[#1B3A5C] to-[#0F2035] p-8 sm:p-10 text-white shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Contact details</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-3">
              Have questions about your data or privacy rights?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Our privacy team is dedicated to safeguarding your personal information. Reach out directly for data access, corrections, or policy inquiries.
            </p>

            <div className="space-y-4">
              {PRIVACY_CONTACT.map((item) => {
                const isEmail = item.label.toLowerCase().includes('email');
                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/12 p-4 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 group-hover:scale-105 transition-transform">
                      {getIcon(item.label)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-0.5">
                        {item.label}
                      </p>
                      {isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-sm sm:text-base font-semibold text-white hover:text-[#F28C28] transition-colors break-all flex items-center gap-1.5"
                        >
                          <span>{item.value}</span>
                          <svg className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
            <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Compliant with Canadian PIPEDA and applicable provincial privacy legislation.</span>
          </div>
        </article>

        {/* Right Column: Data Request Action Card */}
        <article className="lg:col-span-5 rounded-[32px] bg-gradient-to-br from-[#0F1E30] via-[#162D47] to-[#0B1726] p-8 sm:p-10 text-white shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Data Requests</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-4">
              Need a privacy review or data request?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8">
              Submit your formal inquiry or data portability request. We will verify your identity and process your ticket within 48 business hours.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Full access, correction & deletion support</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Strict verification protecting account data</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="mailto:privacy@spinny.example?subject=Privacy%20Data%20Request"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#F28C28] to-[#E07B17] hover:from-[#E07B17] hover:to-[#C66708] shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Privacy Team</span>
            </a>

            <Link
              href="/help-center"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-[0.98]"
            >
              <span>Back to Help Center</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

