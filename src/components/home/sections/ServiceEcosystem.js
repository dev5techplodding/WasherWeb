'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICE_ECOSYSTEM } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

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
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICE_ECOSYSTEM.map((category) => (
            <article
              key={category.id}
              className="eco-card group rounded-2xl p-7 md:p-8 flex flex-col gap-4 transition-all duration-300 border bg-white"
              style={{ borderColor: 'var(--washr-gray-mid)', boxShadow: 'var(--washr-shadow-sm)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(242,140,40,0.3)';
                e.currentTarget.style.boxShadow = 'var(--washr-shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--washr-gray-mid)';
                e.currentTarget.style.boxShadow = 'var(--washr-shadow-sm)';
              }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(242,140,40,0.12)' }}
                aria-hidden="true"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--washr-orange)' }} />
              </span>

              <div>
                <h3 className="text-lg md:text-xl font-bold leading-snug" style={{ color: 'var(--washr-blue-deep)' }}>
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--washr-text-secondary)' }}>
                  {category.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ color: 'var(--washr-blue)', backgroundColor: 'var(--washr-gray)', border: '1px solid var(--washr-gray-mid)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p
                className="mt-auto pt-3 text-sm font-semibold border-t"
                style={{ color: 'var(--washr-orange)', borderColor: 'var(--washr-gray-mid)' }}
              >
                Time back: {category.timeBack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
