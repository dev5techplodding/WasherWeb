'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: 'commercial-grade',
    title: 'Commercial-Grade Processing',
    description:
      'Every garment treated by certified commercial facilities — industrial precision, personal attention. Never residential machines.',
    accent: '#2A5580',
    span: 'lg:col-span-2',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <rect x="10" y="14" width="28" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="22" cy="18" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Conscious Cleaning',
    description: 'Hypoallergenic detergents and low-water commercial systems. Premium care for your garments and the planet.',
    accent: '#34a06e',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 6C24 6 10 18 10 30C10 38 16 44 24 44C32 44 38 38 38 30C38 18 24 6 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 32C18 32 20 28 24 28C28 28 30 32 30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M24 20L24 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'transparent-pricing',
    title: 'No Subscriptions. Ever.',
    description: 'Pay only for what you use. No monthly passes, no lock-in. Crystal-clear per-pound pricing, always.',
    accent: '#F28C28',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="12" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="26" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="36" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="33" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="700">$</text>
      </svg>
    ),
  },
  {
    id: 'doorstep',
    title: 'Doorstep Convenience',
    description: 'Schedule pickups around your life. Our vetted drivers handle everything — you never leave home.',
    accent: '#3A7BC8',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 44V18L24 6L40 18V44" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="18" y="28" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="26" cy="36" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'quality-guarantee',
    title: '100% Quality Guarantee',
    description: "Every order inspected before delivery. If anything isn't perfect, we'll re-process it at zero cost.",
    accent: '#F28C28',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      </svg>
    ),
  },
  {
    id: 'real-time-tracking',
    title: 'Real-Time Order Tracking',
    description: 'Follow your garments from pickup to processing to delivery. Live status updates at every step.',
    accent: '#2A5580',
    span: 'lg:col-span-2',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="10" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 22V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="30" r="2" fill="currentColor" opacity="0.4" />
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
            Built for People Who{' '}
            <span
              className="relative"
              style={{ color: 'var(--washr-orange)' }}
            >
              Value Their Time
            </span>
          </h2>

          <p
            className="animate-in text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            Spinny connects you with vetted, commercial-grade laundry facilities — not residential gig workers.
            The result: consistently exceptional garment care, every single time.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card group relative rounded-2xl p-7 md:p-8 flex flex-col gap-5 transition-all duration-300 cursor-default border ${feature.span}`}
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
            { label: 'Free First Pickup', icon: '⚡' },
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
