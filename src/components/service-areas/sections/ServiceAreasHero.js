'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { SERVICE_AREAS_HERO_CONTENT } from '@/components/data';

export default function ServiceAreasHero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full pt-32 pb-24 md:pt-40 md:pb-28 bg-[#0B1726] text-white flex items-center justify-center min-h-[55vh]"
    >
      {/* ─── Background Ambient Glows & Grids ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.22)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div ref={contentRef} className="flex flex-col items-center max-w-3xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
            <span>{SERVICE_AREAS_HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl">
            {SERVICE_AREAS_HERO_CONTENT.heading}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            {SERVICE_AREAS_HERO_CONTENT.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {SERVICE_AREAS_HERO_CONTENT.buttons?.map((btn) => (
              <Link
                key={btn.label}
                href={btn.url}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                  btn.variant === 'secondary'
                    ? 'bg-white/10 hover:bg-white hover:text-slate-950 text-white border border-white/20 shadow-md backdrop-blur-md'
                    : 'bg-[#F7941D] hover:bg-orange-600 text-white shadow-xl shadow-[#F7941D]/30'
                }`}
              >
                <span>{btn.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom Curve Divider ─── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[56px]" fill="white">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
