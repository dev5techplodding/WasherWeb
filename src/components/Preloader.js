'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsDone(true);
      return;
    }

    const container = containerRef.current;
    const text = textRef.current;
    if (!container) return;

    // Body overflow lock
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        document.body.style.overflow = '';
      },
    });

    // Drawing trace + text fade in
    tl.to(text, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to(container, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut',
      delay: 0.8,
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#122840]"
      style={{ willChange: 'transform' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Drawing SVG Logo */}
        <svg
          ref={logoRef}
          width="160"
          height="160"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outermost circular swoosh */}
          <path
            className="draw-path-animated"
            d="M 50 10 A 40 40 0 1 1 20 28"
            stroke="var(--washr-orange)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Inner brush-like W shape */}
          <path
            className="draw-path-animated"
            style={{ animationDelay: '0.4s' }}
            d="M 30 45 C 33 55 38 65 42 65 C 46 65 48 50 50 48 C 52 46 54 62 58 62 C 62 62 68 42 72 45"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dot above W (similar to logoLogin.png) */}
          <circle
            cx="46"
            cy="36"
            r="5"
            fill="var(--washr-orange)"
            className="draw-path-animated"
            style={{ animationDelay: '1s', animationDuration: '0.6s' }}
          />
        </svg>

        {/* Text tagline */}
        <div
          ref={textRef}
          style={{ opacity: 0 }}
          className="text-white text-xs font-bold tracking-[0.25em] uppercase text-center mt-2"
        >
          Seamless Garment Care
        </div>
      </div>
    </div>
  );
}
