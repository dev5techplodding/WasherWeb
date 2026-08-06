'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_MOTTO } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

const CHOICE_CHIPS = [
  { label: 'Preference', icon: '✨' },
  { label: 'Budget', icon: '💸' },
  { label: 'Availability', icon: '⏱️' },
];

export default function MottoMapSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-in'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );

      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-motto"
      className="my-15 py-24 md:py-32 relative bg-white overflow-hidden"
      aria-labelledby="motto-heading"
    >
      {/* ─── Background Map Image ─── */}
      <div ref={mapRef} className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/map.png"
          alt="Spinny Service Area Map"
          fill
          className="object-cover object-right"
          priority
        />
        {/* White background fade anchored to left side for crisp text contrast */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-gradient-to-r from-white via-white to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Top gradient fade to merge cleanly with section above */}
        <div
          className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        {/* Bottom gradient fade to merge cleanly with section below */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        {/* Motto content */}
        <div ref={contentRef} className="max-w-lg text-left flex flex-col items-start">
          <span
            className="animate-in inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{
              color: 'var(--washr-orange)',
              backgroundColor: 'rgba(242,140,40,0.08)',
              border: '1px solid rgba(242,140,40,0.18)',
            }}
          >
            {BRAND_MOTTO.eyebrow}
          </span>

          <h2
            id="motto-heading"
            className="animate-in text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight leading-[1.08] mb-5 text-left"
            style={{ color: 'var(--washr-blue-deep)' }}
          >
            {BRAND_MOTTO.headingLead} <br className="hidden sm:inline" />
            <span style={{ color: 'var(--washr-orange)' }}>{BRAND_MOTTO.headingAccent}</span>
          </h2>

          {/* Subheadline lead */}
          <p
            className="animate-in text-base sm:text-lg font-medium leading-snug mb-3 text-left"
            style={{ color: 'var(--washr-blue-deep)', opacity: 0.85 }}
          >
            {BRAND_MOTTO.full}
          </p>

          {/* Description body paragraph */}
          <p
            className="animate-in text-sm sm:text-base leading-relaxed mb-7 text-left max-w-md"
            style={{ color: 'var(--washr-text-muted)' }}
          >
            Spinny connects you with the best care specialists near you in seconds — see who&apos;s available, compare, and pick the one that fits, faster.
          </p>

          {/* Preference / Budget / Availability chips */}
          <div className="animate-in flex flex-wrap gap-2.5 mb-8 justify-start items-center">
            {CHOICE_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  color: 'var(--washr-blue-deep)',
                  backgroundColor: 'var(--washr-gray)',
                  border: '1px solid var(--washr-gray-mid)',
                }}
              >
                <span aria-hidden="true">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTA Button & live status info */}
          <div className="animate-in flex flex-col items-start gap-3">
            <Link
              href="/process"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--washr-orange)',
                boxShadow: '0 8px 25px rgba(242, 140, 40, 0.35)',
              }}
            >
              Find a Specialist Near You
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--washr-text-muted)' }}>
                4 specialists active in your area right now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
