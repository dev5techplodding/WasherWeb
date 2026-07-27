'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: 'time-reclaimed',
    title: 'Reclaim 5+ Hours a Week',
    badge: 'Time Buyback',
    stat: '⚡ ~5 hrs saved/wk',
    description:
      'Wardrobe laundry, shoe care, ironing, and home-textile upkeep quietly eat a weekend a month. Spinny hands that time back — permanently, not just this once.',
    tags: ['No Weekend Chores', 'Autopilot Care'],
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 13V24L31 29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'entire-living-space',
    title: 'One Service, Entire Living Space',
    badge: 'Unified Care',
    stat: '🏠 100% Home Textiles',
    description:
      'Suits and sneakers. Duvets and diaper bags. Curtains and cashmere. Spinny is the single point of contact for every fabric, leather, and textile surface in your home.',
    tags: ['Garments', 'Footwear', 'Textiles'],
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
        <path d="M8 44V18L24 6L40 18V44" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="16" y="24" width="8" height="20" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="28" width="8" height="16" rx="1.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'zero-effort-concierge',
    title: 'Zero-Effort Concierge Logistics',
    badge: 'Concierge',
    stat: '🚚 0 Door Drop-offs',
    description:
      'Door-to-door pickup and delivery, closet-ready hanging, drawer-ready folding. Nothing to drop off, nothing to carry further than your own front door.',
    tags: ['Door-to-Door', 'Closet Ready'],
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
        <rect x="8" y="16" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 22H38L43 27V36H32V22Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="16" cy="38" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="38" r="3.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'investment-grade-care',
    title: 'Investment-Grade Care',
    badge: 'Garment Specialist',
    stat: '🛡️ Material-Specific',
    description:
      "Your favourite sneakers and your grandmother's duvet don't belong in a machine built for gym socks. Every item goes to a specialist trained for its specific material.",
    tags: ['Fabric Specific', 'Hand Inspection'],
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
        <path d="M24 5L38 11V22C38 32 32 39 24 43C16 39 10 32 10 22V11L24 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 24L22 29L31 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '4.9', suffix: '★', label: 'Average Rating' },
  { value: '10K+', label: 'Orders Completed' },
  { value: '99.2%', label: 'On-Time Delivery' },
  { value: '24h', label: 'Turnaround Time' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Eyebrow + heading entrance
      gsap.fromTo(
        headingRef.current?.querySelectorAll('.animate-in'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      // Stats entrance
      gsap.fromTo(
        statsRef.current?.querySelectorAll('.stat-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: statsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );

      // Feature cards
      gsap.fromTo(
        gridRef.current?.querySelectorAll('.feature-card'),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative bg-slate-50/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headingRef} className="max-w-3xl mb-14 md:mb-20">
          <span
            className="animate-in inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              color: 'var(--washr-orange)',
              backgroundColor: 'rgba(242,140,40,0.08)',
              border: '1px solid rgba(242,140,40,0.18)',
            }}
          >
            Why Spinny
          </span>

          <h2
            id="about-heading"
            className="animate-in text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: 'var(--washr-blue-deep)' }}
          >
            Four Reasons This Is Not{' '}
            <span
              className="relative"
              style={{ color: 'var(--washr-orange)' }}
            >
              Just a Laundry Service
            </span>
          </h2>

          <p
            className="animate-in text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            Spinny connects you with vetted specialists across garments, footwear, and home textiles — not residential gig workers.
            The result: your time back, every single time, without a drop in quality.
          </p>
        </div>

        {/* ── Stats Bar ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 md:mb-20 rounded-2xl overflow-hidden border shadow-sm"
          style={{ borderColor: 'var(--washr-gray-mid)', backgroundColor: 'var(--washr-gray-mid)' }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-item flex flex-col items-center justify-center py-8 px-4 bg-white text-center gap-1"
            >
              <span
                className="text-3xl md:text-4xl font-black tabular-nums"
                style={{ color: 'var(--washr-blue-deep)' }}
              >
                {stat.value}
                {stat.suffix && (
                  <span style={{ color: 'var(--washr-orange)' }}>{stat.suffix}</span>
                )}
              </span>
              <span
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: 'var(--washr-text-muted)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bento Feature Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 cursor-default border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(27,58,92,0.14)] hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
                }}
              />

              {/* Ambient radial glow background blob */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: feature.accent }}
              />

              {/* Card Content Top */}
              <div>
                {/* Top Header: Icon + Badges */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Icon Container */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-sm border border-slate-100"
                    style={{
                      backgroundColor: `rgba(${feature.glowRgb}, 0.1)`,
                      color: feature.accent,
                      borderColor: `rgba(${feature.glowRgb}, 0.2)`,
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Badge & Stat */}
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border shadow-2xs"
                      style={{
                        color: feature.accent,
                        backgroundColor: `rgba(${feature.glowRgb}, 0.08)`,
                        borderColor: `rgba(${feature.glowRgb}, 0.2)`,
                      }}
                    >
                      {feature.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {feature.stat}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#122840] tracking-tight group-hover:text-[#1B3A5C] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tags & Arrow indicator */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100/80 text-slate-600 group-hover:bg-slate-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive indicator button */}
                <div
                  className="w-9 h-9 rounded-full bg-slate-100/90 group-hover:bg-[#122840] text-slate-500 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md"
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom trust badge ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { label: 'No Credit Card Required', icon: '🔒' },
            { label: 'Cancel Anytime', icon: '✓' },
            { label: 'Time Back, Fast', icon: '⚡' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0"
                style={{ backgroundColor: 'rgba(242,140,40,0.1)', color: 'var(--washr-orange)' }}
              >
                {item.icon}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: 'var(--washr-text-muted)' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
