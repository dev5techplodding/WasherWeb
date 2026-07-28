'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function AboutHero() {
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
      className="relative overflow-hidden pt-36 pb-32 md:pt-44 md:pb-40 bg-[#0B1726] text-white flex items-center justify-center min-h-[65vh]"
    >
      {/* ─── Background Banner Image (/banner3.png) ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/banner3.png"
          alt="Spinny Wardrobe & Textile Care Background Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65 scale-105"
        />
        {/* Dark Overlay Gradient for Optimal Text Legibility */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0B1726]/85 via-[#0B1726]/70 to-[#0B1726]" /> */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

        {/* Ambient Grid Overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" /> */}

        {/* Ambient Glow Orb */}
        {/* <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none" /> */}
      </div>

      {/* ─── Main Full-Width Text Content Area ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div ref={contentRef} className="flex flex-col items-center max-w-4xl mx-auto">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
            <span>ABOUT SPINNY</span>
          </div>

          {/* Reduced Full-Width Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl">
            Less Laundry.{' '}
            <span className="text-[#F7941D] block sm:inline">More Life.</span>
          </h1>

          {/* Reduced Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            Spinny is the concierge service that gives your weekend back.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-bold bg-[#F7941D] hover:bg-orange-600 text-white shadow-xl shadow-[#F7941D]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            >
              <span>Contact Us</span>
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
            </Link>

            <Link
              href="/procedure"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-bold bg-white/10 hover:bg-white hover:text-slate-950 text-white border border-white/20 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            >
              <span>See Procedure</span>
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
            </Link>
          </div>

          {/* Trust Strip */}
          {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400 text-xs sm:text-sm font-medium">
            <span>6,000+ five-star reviews</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-600" aria-hidden="true" />
            <span>99.2% customer satisfaction</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-600" aria-hidden="true" />
            <span>200+ vendor partners across Canada</span>
          </div> */}
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
