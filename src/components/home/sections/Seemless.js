'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Seemless() {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  /* ─── GSAP entrance animations ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power4.out' },
      });

      tl.fromTo(leftTextRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 0.12, duration: 1.2 })
        .fromTo(rightTextRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 0.12, duration: 1.2 }, '<');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="seamless-tactile"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white py-24 px-4 md:px-6"
      aria-label="Spinny Tactile Interactive Experience"
    >
      {/* ─── Background Split text ─── */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none px-4 md:px-12">
        <h2
          ref={leftTextRef}
          className="text-[12vw] sm:text-[15vw] font-black uppercase leading-none tracking-tighter"
          style={{ color: 'var(--washr-blue)', opacity: 0.12, fontFamily: 'AvenirNext, var(--font-sans)' }}
          aria-hidden="true"
        >
          SEAM
        </h2>
        <h2
          ref={rightTextRef}
          className="text-[12vw] sm:text-[15vw] font-black uppercase leading-none tracking-tighter"
          style={{ color: 'var(--washr-blue)', opacity: 0.12, fontFamily: 'AvenirNext, var(--font-sans)' }}
          aria-hidden="true"
        >
          LESS
        </h2>
      </div>

      {/* ─── Center Interactive Content Stack ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
        {/* Eyebrow */}
        <span
          className="pill-badge mb-6"
          style={{
            color: 'var(--washr-orange)',
            backgroundColor: 'rgba(242, 140, 40, 0.08)',
            border: '1px solid rgba(242, 140, 40, 0.15)',
          }}
        >
          Seamless Laundry Experience
        </span>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          style={{ color: 'var(--washr-blue)' }}
        >
          Sensing is Believing.
          <br />
          <span style={{ color: 'var(--washr-orange)' }}>Effortless Laundry, Delivered Seamlessly.</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Schedule pickups, select custom garment care preferences, track your order in real-time, and reclaim your time.
        </p>

        {/* CTA Buttons */}
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/procedure"
            className="group relative px-10 py-5 rounded-full text-white font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] text-center cursor-pointer"
            style={{
              backgroundColor: 'var(--washr-orange)',
              boxShadow: '0 4px 24px rgba(242, 140, 40, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Your First Pickup
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          <Link
            href="/services"
            className="px-10 py-5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] text-center border-2 bg-transparent hover:bg-slate-50 cursor-pointer"
            style={{ color: 'var(--washr-blue)', borderColor: 'var(--washr-gray-mid)' }}
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Decorative background blurs — enhanced opacity */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" style={{ background: 'var(--washr-orange)' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none" style={{ background: 'var(--washr-blue)' }} aria-hidden="true" />
    </section>
  );
}
