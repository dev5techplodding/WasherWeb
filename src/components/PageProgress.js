'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────
   PageProgress — Thin orange scroll progress bar
   Fixed at the very top, fills 0% → 100% as user scrolls
   ───────────────────────────────────────────────── */
export default function PageProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Use GSAP ScrollTrigger for progress tracking
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99997] h-[3px] pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, var(--washr-orange), #F5A623)',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          boxShadow: '0 0 8px rgba(242, 140, 40, 0.6)',
        }}
      />
    </div>
  );
}
