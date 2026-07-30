'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function ServicesHero() {
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

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full min-h-svh pt-28 pb-16 bg-[#0B1726] text-white flex items-center justify-center"
    >

      {/* ─── Background Banner Image (/banner2.png) ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/banner2.png"
          alt="Spinny Services Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[95%_center] opacity-100"
        />
        {/* Soft Dark Gradient on Far Left for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726]/90 via-[#0B1726]/40 to-transparent md:w-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-[#0B1726]/40" />
      </div>

      {/* ─── Main Content Area (Anchored to Viewport Far-Left Edge) ─── */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 text-left">
        <div ref={contentRef} className="flex flex-col items-start text-left max-w-2xl lg:max-w-3xl">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
            <span>OUR SERVICES</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] text-left">
            One Pickup.{' '}
            <span className="text-[#F7941D] block sm:inline">Everything Handled.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl text-left drop-shadow-sm">
            Shirts, suits, sneakers, duvets, and bags — all cleaned and cared for by specialists, then returned ready to use.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-start gap-4">
            <button
              onClick={() => handleScrollTo('ecosystem')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-[#F7941D] hover:bg-orange-600 text-white shadow-xl shadow-[#F7941D]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
            >
              <span>Explore Services</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
