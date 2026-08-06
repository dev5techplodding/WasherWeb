'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICE_ECOSYSTEM } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_META = {
  wardrobe: {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'WARDROBE CARE',
    stat: '⚡ No Sunday Ironing',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a2.5 2.5 0 00-2.5 2.5c0 .7.29 1.33.76 1.78L3.5 13.5A1.5 1.5 0 004.5 16h15a1.5 1.5 0 001-2.5l-6.76-4.72c.47-.45.76-1.08.76-1.78A2.5 2.5 0 0012 4.5zM12 16v5" />
      </svg>
    ),
  },
  footwear: {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'FOOTWEAR REVIVAL',
    stat: '⚡ Skip Cobbler Queue',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  home: {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'HOME SANCTUARY',
    stat: '⚡ Zero Heavy Carrying',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  'special-care': {
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    badge: 'SPECIAL CARE',
    stat: '⚡ Material Specialist',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 0A3 3 0 104.879 4.879a3 3 0 004.242 4.242zm0 0L12 12m-7.121 7.121a3 3 0 104.242-4.242 3 3 0 00-4.242 4.242z" />
      </svg>
    ),
  },
};

export default function ServiceEcosystem() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  const handleCardClick = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/services#services';
    }
  };

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
      className="py-15 md:py-25 relative bg-slate-50/50"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headingRef} className="max-w-2xl mb-14 md:mb-16">
          <span
            className="animate-in pill-badge mb-4 inline-flex"
            style={{
              color: 'var(--washr-orange)',
              backgroundColor: 'rgba(242,140,40,0.1)',
              border: '1px solid rgba(242,140,40,0.2)',
            }}
          >
            THE SERVICE ECOSYSTEM
          </span>

          <h2
            id="ecosystem-heading"
            className="animate-in text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{
              color: 'var(--washr-blue)',
              fontFamily: 'AvenirNext, var(--font-sans)',
            }}
          >
            Everything you own,<br />
            organized <span style={{ color: 'var(--washr-orange)' }}>by what it needs.</span>
          </h2>

          <p
            className="animate-in text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            Not a single-category menu — a map of your household, grouped by lifestyle need instead of item type.
          </p>
        </div>

        {/* ── Category Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {SERVICE_ECOSYSTEM.map((category) => {
            const meta = CATEGORY_META[category.id] || CATEGORY_META.wardrobe;
            return (
              <article
                key={category.id}
                onClick={handleCardClick}
                className="eco-card group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(27,58,92,0.14)] hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top Accent Gradient Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)`,
                  }}
                />

                {/* Ambient Radial Glow Blob */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: meta.accent }}
                />

                {/* Card Main Top Section */}
                <div>
                  {/* Header Row: Icon Left & Badge + Stat Right */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Icon Box */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-sm border border-slate-100"
                      style={{
                        backgroundColor: `rgba(${meta.glowRgb}, 0.1)`,
                        color: meta.accent,
                        borderColor: `rgba(${meta.glowRgb}, 0.2)`,
                      }}
                    >
                      {meta.icon}
                    </div>

                    {/* Badge & Stat */}
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border shadow-2xs"
                        style={{
                          color: meta.accent,
                          backgroundColor: `rgba(${meta.glowRgb}, 0.08)`,
                          borderColor: `rgba(${meta.glowRgb}, 0.2)`,
                        }}
                      >
                        {meta.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {meta.stat}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#122840] tracking-tight group-hover:text-[#1B3A5C] transition-colors leading-snug">
                      {category.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Sub-item Pills & Explore Service Button */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  {/* Item Badges */}
                  <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100/80 text-slate-600 group-hover:bg-slate-100 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Explore Service Button */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0E243A] text-white text-xs font-bold shrink-0 shadow-md group-hover:bg-[#F28C28] transition-all duration-300"
                  >
                    <span>Explore </span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

