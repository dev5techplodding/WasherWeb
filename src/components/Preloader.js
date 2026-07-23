'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

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
    const logo = logoRef.current;
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

    // Favicon logo fade/scale & tagline text animation
    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.85, y: 12 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
      }
    )
      .fromTo(
        text,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.4'
      )
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
      <div className="flex flex-col items-center gap-5">
        {/* Favicon Logo */}
        <div
          ref={logoRef}
          style={{ opacity: 0 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
        >
          <Image
            src="/favicon.png"
            alt="Spinny Logo"
            width={128}
            height={128}
            priority
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Text tagline */}
        <div
          ref={textRef}
          style={{ opacity: 0 }}
          className="text-white text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-center mt-1"
        >
          Laundry Done. Life On.
        </div>
      </div>
    </div>
  );
}
