'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: 'time-reclaimed',
    title: 'Reclaim 5+ Hours a Week',
    description:
      'Wardrobe laundry, shoe care, ironing, and home-textile upkeep quietly eat a weekend a month. Spinny hands that time back — permanently, not just this once.',
    accent: '#F28C28',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M24 14V24L31 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'entire-living-space',
    title: 'One Service, Entire Living Space',
    description: 'Suits and sneakers. Duvets and diaper bags. Curtains and cashmere. Spinny is the single point of contact for every fabric, leather, and textile surface in your home.',
    accent: '#2A5580',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 44V18L24 6L40 18V44" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="16" y="24" width="8" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="26" y="28" width="8" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'zero-effort-concierge',
    title: 'Zero-Effort Concierge Logistics',
    description: 'Door-to-door pickup and delivery, closet-ready hanging, drawer-ready folding. Nothing to drop off, nothing to carry further than your own front door.',
    accent: '#3A7BC8',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="10" y="18" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M32 24H38L42 29V36H32V24Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="17" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="35" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'investment-grade-care',
    title: 'Investment-Grade Care',
    description: "Your favourite sneakers and your grandmother's duvet don't belong in a machine built for gym socks. Every item goes to a specialist trained for its specific material.",
    accent: '#34a06e',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 5L38 11V22C38 32 32 39 24 43C16 39 10 32 10 22V11L24 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 24L22 29L31 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
      className="py-24 md:py-32 relative bg-white"
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
              a Laundry Service
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
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 md:mb-20 rounded-2xl overflow-hidden border"
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card group relative rounded-2xl p-7 md:p-8 flex flex-col gap-5 transition-all duration-300 cursor-default border"
              style={{
                backgroundColor: 'var(--washr-gray)',
                borderColor: 'var(--washr-gray-mid)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${feature.accent}33`;
                e.currentTarget.style.boxShadow = `0 0 0 1px ${feature.accent}22, 0 16px 40px ${feature.accent}14`;
                e.currentTarget.style.backgroundColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--washr-gray-mid)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'var(--washr-gray)';
              }}
            >
              {/* Icon container */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${feature.accent}12`,
                  color: feature.accent,
                }}
              >
                {feature.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base md:text-lg font-bold leading-snug"
                  style={{ color: 'var(--washr-blue-deep)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--washr-text-secondary)' }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Subtle accent dot */}
              <div
                className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: feature.accent }}
              />
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
