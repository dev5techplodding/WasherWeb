'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOURS_LEDGER_ROWS, HOURS_LEDGER_TOTAL, HOURS_LEDGER_FOOTNOTE } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

export default function HoursLedger() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll('.animate-in'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: tableRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hours-ledger"
      className="py-14 md:py-24 relative bg-white"
      aria-labelledby="ledger-heading"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headingRef} className="max-w-2xl mb-12 md:mb-14">
          <span
            className="animate-in pill-badge mb-4 inline-flex"
            style={{
              color: 'var(--washr-blue)',
              backgroundColor: 'rgba(27,58,92,0.08)',
              border: '1px solid rgba(27,58,92,0.15)',
            }}
          >
            The Hours Ledger
          </span>

          <h2
            id="ledger-heading"
            className="animate-in text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5"
            style={{ color: 'var(--washr-blue-deep)' }}
          >
            Where your weekend{' '}
            <span style={{ color: 'var(--washr-orange)' }}>actually goes.</span>
          </h2>

          <p
            className="animate-in text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            A typical household&rsquo;s monthly maintenance load, done alone versus bought back.
          </p>
        </div>

        {/* ── Ledger Table ── */}
        <div
          ref={tableRef}
          className="rounded-2xl border overflow-x-auto"
          style={{ borderColor: 'var(--washr-gray-mid)', boxShadow: 'var(--washr-shadow-card)' }}
        >
          <table className="w-full min-w-[560px] border-collapse" style={{ fontVariantNumeric: 'tabular-nums' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--washr-blue-deep)' }}>
                <th className="text-left py-4 px-6 text-xs font-bold uppercase tracking-wider text-white/70">
                  Task
                </th>
                <th className="text-right py-4 px-6 text-xs font-bold uppercase tracking-wider text-white/70">
                  Doing It Yourself
                </th>
                <th className="text-right py-4 px-6 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--washr-orange)' }}>
                  The Spinny Way
                </th>
              </tr>
            </thead>
            <tbody>
              {HOURS_LEDGER_ROWS.map((row, idx) => (
                <tr
                  key={row.task}
                  style={{
                    backgroundColor: idx % 2 === 0 ? 'white' : 'var(--washr-gray)',
                    borderBottom: '1px solid var(--washr-gray-mid)',
                  }}
                >
                  <td className="py-4 px-6 text-sm font-semibold" style={{ color: 'var(--washr-blue-deep)' }}>
                    {row.task}
                  </td>
                  <td className="py-4 px-6 text-sm text-right" style={{ color: 'var(--washr-text-muted)' }}>
                    {row.diy}
                  </td>
                  <td className="py-4 px-6 text-sm text-right font-semibold" style={{ color: 'var(--washr-blue)' }}>
                    {row.spinny}
                  </td>
                </tr>
              ))}
              <tr style={{ borderTop: '2px solid var(--washr-orange)' }}>
                <td className="py-5 px-6 text-sm md:text-base font-extrabold" style={{ color: 'var(--washr-blue-deep)' }}>
                  {HOURS_LEDGER_TOTAL.task}
                </td>
                <td className="py-5 px-6 text-sm md:text-base font-extrabold text-right" style={{ color: 'var(--washr-blue-deep)' }}>
                  {HOURS_LEDGER_TOTAL.diy}
                </td>
                <td className="py-5 px-6 text-sm md:text-base font-extrabold text-right" style={{ color: 'var(--washr-orange)' }}>
                  {HOURS_LEDGER_TOTAL.spinny}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-relaxed max-w-xl" style={{ color: 'var(--washr-text-muted)' }}>
          {HOURS_LEDGER_FOOTNOTE}
        </p>
      </div>
    </section>
  );
}
