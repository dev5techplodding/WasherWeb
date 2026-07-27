'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICE_ECOSYSTEM } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_ICONS = {
  wardrobe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a2.5 2.5 0 00-2.5 2.5c0 .7.29 1.33.76 1.78L3.5 13.5A1.5 1.5 0 004.5 16h15a1.5 1.5 0 001-2.5l-6.76-4.72c.47-.45.76-1.08.76-1.78A2.5 2.5 0 0012 4.5zM12 16v5" />
    </svg>
  ),
  footwear: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  'special-care': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 0A3 3 0 104.879 4.879a3 3 0 004.242 4.242zm0 0L12 12m-7.121 7.121a3 3 0 104.242-4.242 3 3 0 00-4.242 4.242z" />
    </svg>
  ),
};

export default function ServiceEcosystem() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

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
        gridRef.current?.querySelectorAll('.eco-card'),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: 'var(--washr-gray)' }}
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headingRef} className="max-w-2xl mb-14 md:mb-16">
          <span
            className="animate-in pill-badge mb-4 inline-flex"
            style={{
              color: 'var(--washr-orange)',
              backgroundColor: 'rgba(242,140,40,0.08)',
              border: '1px solid rgba(242,140,40,0.18)',
            }}
          >
            The Service Ecosystem
          </span>

          <h2
            id="ecosystem-heading"
            className="animate-in text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5"
            style={{ color: 'var(--washr-blue-deep)' }}
          >
            Everything you own, organized{' '}
            <span style={{ color: 'var(--washr-orange)' }}>by what it needs.</span>
          </h2>

          <p
            className="animate-in text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            Not a laundry menu — a map of your household, grouped by lifestyle need instead of wash type.
          </p>
        </div>

        {/* ── Category Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {SERVICE_ECOSYSTEM.map((category) => (
            <article
              key={category.id}
              className="eco-card group relative overflow-hidden rounded-2xl p-7 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:border-amber-300/80 hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col gap-4">
                {/* Header Row: Icon & Tag Count */}
                <div className="flex items-center justify-between">
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 border border-amber-500/20 text-amber-600 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-orange-500/20 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {CATEGORY_ICONS[category.id] || (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    )}
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-600 transition-colors">
                    {category.items.length} Specialties
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-snug text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {category.tagline}
                  </p>
                </div>

                {/* Item Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200/80 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-300 transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Time Back Callout Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 shrink-0 border border-amber-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                  <span className="font-bold text-amber-600 mr-1.5 uppercase tracking-wide text-[11px]">Time back:</span>
                  {category.timeBack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
