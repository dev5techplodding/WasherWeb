'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

/* ─────────────────────────────────────────────────
   NEW HERO SECTION (Inspired by Rinse style)
   ───────────────────────────────────────────────── */
export default function HeroSection() {
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const logoBarRef = useRef(null);
  const [address, setAddress] = useState('');

  // GSAP animations for entrance
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
      )
        .fromTo(formRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(logoBarRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.0 },
          '-=0.2'
        );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Starting booking for address: ${address || 'Not specified'}`);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 pt-24 pb-8 px-6 md:px-12 lg:px-16"
      aria-label="Washr Premium On-Demand Laundry"
    >
      {/* ─── Background Video ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
        />
        {/* Gradient overlay — full dark on mobile, left-to-right on desktop */}
        <div className="absolute inset-0 bg-[rgba(8,16,24,0.7)] md:bg-transparent" />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: 'linear-gradient(to right, rgba(8, 16, 24, 0.85) 0%, rgba(8, 16, 24, 0.6) 35%, rgba(8, 16, 24, 0.2) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* ─── Main Content Area ─── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-2xl w-full">
        <div ref={contentRef} className="flex flex-col items-start text-left gap-0">
          {/* Main big headlines */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.08] mb-1 font-sans text-white"
            style={{ fontFamily: 'AvenirNext, var(--font-sans)' }}
          >
            WE&apos;LL TAKE THE LAUNDRY.
          </h1>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.08] mb-5 font-sans"
            style={{
              color: 'var(--washr-orange)',
              fontFamily: 'AvenirNext, var(--font-sans)',
            }}
          >
            YOU TAKE THE TIME.
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 sm:mb-8 max-w-md text-slate-300">
            Washr picks up, cleans, and delivers your laundry and dry cleaning.
          </p>

          {/* Interactive Search / Address Input Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-row items-stretch bg-white p-1.5 rounded-full w-full max-w-sm shadow-2xl mb-6 gap-0"
          >
            {/* Pickup tomorrow read-only */}
            <div className="flex-1 flex flex-col justify-center px-3 sm:px-5 py-1.5 border-r border-slate-100 text-left">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-400">Pickup</span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-800">Tomorrow</span>
            </div>

            {/* Address input */}
            <div className="flex-[2] flex flex-col justify-center px-3 sm:px-5 py-1.5 text-left min-w-0">
              <label htmlFor="hero-address-input" className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-400">
                Where
              </label>
              <input
                id="hero-address-input"
                type="text"
                placeholder="Add address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-[11px] sm:text-xs font-bold text-slate-800 bg-transparent placeholder-slate-400 focus:outline-none w-full"
              />
            </div>

            {/* Submit arrow button */}
            <button
              type="submit"
              aria-label="Start your order"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white self-center transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 ml-1"
              style={{
                backgroundColor: 'var(--washr-orange)',
                boxShadow: '0 4px 14px rgba(242, 140, 40, 0.35)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          {/* Rating Badge block */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* App Icons */}
            <div className="flex items-center gap-1">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white text-xs sm:text-sm" aria-hidden="true"></span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold" aria-hidden="true">G</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs" aria-hidden="true">★</span>
            </div>
            {/* Stars & review counts */}
            <div className="flex items-center gap-1.5">
              <div className="star-rating text-[10px] sm:text-xs" aria-label="5 stars">★★★★★</div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300">6,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Trusted Partner Logos Bar ─── */}
      <div
        ref={logoBarRef}
        className="relative z-10 w-full pt-4 sm:pt-6 border-t border-white/10 mt-auto select-none overflow-x-auto scrollbar-hide"
      >
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10 w-max sm:w-full justify-start sm:justify-between px-0">
          {['BBC', 'BUSINESS INSIDER', 'Forbes', 'Inc.', 'npr', 'TC', 'USA TODAY', 'CNN', 'WSJ'].map((logo) => (
            <span
              key={logo}
              className="text-[9px] sm:text-[11px] font-black tracking-wider uppercase text-white/45 font-mono whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

