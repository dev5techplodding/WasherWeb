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
    image: '/icons/time_buyback.png',
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
    image: '/icons/unified_care.png',
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
    image: '/icons/concierge.png',
  },
  {
    id: 'investment-grade-care',
    title: 'Investment-Grade Care',
    badge: 'Specialist Care',
    stat: '🛡️ Material-Specific',
    description:
      "Your favourite sneakers and your grandmother's duvet don't belong in a machine built for gym socks. Every item goes to a specialist trained for its specific material.",
    tags: ['Fabric Specific', 'Hand Inspection'],
    accent: '#F28C28',
    glowRgb: '242, 140, 40',
    image: '/icons/specialist_care.png',
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card group relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-default border border-slate-100 bg-white shadow-[10px_14px_30px_rgba(210,215,228,0.45),-10px_-10px_25px_rgba(255,255,255,0.95)] hover:shadow-[16px_20px_40px_rgba(195,202,218,0.6),-12px_-12px_30px_rgba(255,255,255,1)] hover:-translate-y-1.5"
            >
              {/* Card Content Top */}
              <div>
                {/* Top Header: Icon + Badges */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Realistic 3D Icon Container */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F8F9FC] flex items-center justify-center shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.06),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.9)] p-1.5 border border-slate-100 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.badge}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>

                  {/* Soft Neumorphic Pill Badge */}
                  <span className="px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#FFF0E6] text-[#F28C28] border border-[#FFE0D1]/80 shadow-[inset_1px_1px_2px_rgba(242,140,40,0.08)]">
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-[#122840] leading-snug tracking-tight mb-3 group-hover:text-[#F28C28] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Card Footer: Tags */}
              <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
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
