'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const POLAROIDS = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    caption: 'Certified fabric experts',
    rotation: -4,
    zIndex: 6,
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=400&h=400&q=80',
    caption: 'Soft, hygienic fiber folds',
    rotation: 3,
    zIndex: 7,
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&h=400&q=80',
    caption: 'Eco dry purification',
    rotation: -2,
    zIndex: 8,
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&h=400&q=80',
    caption: 'Master seamstress care',
    rotation: 5,
    zIndex: 9,
  },
];

const DATA_CHIPS = [
  { label: '30°C Optimal', sub: 'Fabric-safe temperature', icon: '🌡️' },
  { label: '800 RPM', sub: 'Anti-stretch spin cycle', icon: '🔄' },
  { label: '0 Grain Water', sub: 'Ultra-pure soft water', icon: '💧' },
];

const TECHNIQUES = [
  { label: 'Fabric-specific temperature mapping' },
  { label: 'Mineral-controlled purified soft water' },
  { label: 'Active enzymatic suspension formulas' },
];

export default function ScienceSection() {
  const containerRef = useRef(null);
  const polaroidRefs = useRef([]);
  const textRef = useRef(null);
  const chipsRef = useRef(null);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* ─── Text entrance ─── */
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      /* ─── Data chips entrance ─── */
      gsap.fromTo(
        chipsRef.current?.querySelectorAll('.data-chip'),
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)', stagger: 0.1,
          scrollTrigger: { trigger: chipsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );

      /* ─── Polaroid fan entrance ─── */
      polaroidRefs.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.8, rotate: 0 },
          {
            opacity: 1, y: 0, scale: 1, rotate: POLAROIDS[idx].rotation,
            duration: 0.9, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
            delay: idx * 0.12,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ─── Polaroid hover: straighten + elevate + siblings spread ─── */
  const handlePolaroidEnter = (idx) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    setHoveredPolaroid(idx);

    polaroidRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === idx) {
        gsap.to(el, {
          rotate: 0, scale: 1.08, zIndex: 20, duration: 0.35, ease: 'power3.out',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        });
      } else {
        const spread = i < idx ? -8 : 8;
        gsap.to(el, {
          x: spread, scale: 0.96, opacity: 0.7, duration: 0.35, ease: 'power3.out',
        });
      }
    });
  };

  const handlePolaroidLeave = (idx) => {
    setHoveredPolaroid(null);
    polaroidRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        x: 0, scale: 1, opacity: 1, rotate: POLAROIDS[i].rotation, zIndex: POLAROIDS[i].zIndex,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        duration: 0.4, ease: 'power3.out',
      });
    });
  };

  return (
    <section
      ref={containerRef}
      id="science"
      className="pt-24 md:pt-32 pb-32 md:pb-48 relative overflow-hidden"
      style={{ backgroundColor: 'var(--washr-blue-deep)' }}
      aria-labelledby="science-heading"
    >
      {/* Orange gradient border-top connector */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--washr-orange), transparent)' }}
        aria-hidden="true"
      />

      {/* Background crosshatch texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* ─── Left: Text Content ─── */}
          <div ref={textRef} className="flex-1 max-w-lg">
            <span
              className="pill-badge mb-6 inline-flex"
              style={{
                color: 'var(--washr-orange)',
                backgroundColor: 'rgba(242, 140, 40, 0.12)',
                border: '1px solid rgba(242, 140, 40, 0.25)',
              }}
            >
              Scientific Precision
            </span>
            {/* Bold claim */}
            <h2
              id="science-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white"
            >
              The Science Behind <br />
              <span style={{ color: 'var(--washr-orange)' }}>Perfect Freshness.</span>
            </h2>
            {/* Supporting detail */}
            <p className="text-base leading-relaxed mb-4 text-slate-300">
              We do not believe in standard laundry cycles. Our partner commercial facilities utilize customized fabric-specific algorithms — optimal temperature mapping, mineral-controlled purified water, and active enzymatic suspensions.
            </p>
            <p className="text-sm leading-relaxed mb-8 text-slate-400">
              Balanced fiber care protects clothes from shrinking, pilling, or fading. Your garments are returned feeling softer and cleaner than the day you bought them.
            </p>

            {/* Technique bullet list */}
            <ul className="flex flex-col gap-3 mb-10">
              {TECHNIQUES.map((t) => (
                <li key={t.label} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(242,140,40,0.2)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5L4 7L8 3" stroke="var(--washr-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{t.label}</span>
                </li>
              ))}
            </ul>

            {/* Data chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-3">
              {DATA_CHIPS.map((chip) => (
                <div
                  key={chip.label}
                  className="data-chip px-4 py-3 rounded-xl border flex items-center gap-3"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-lg">{chip.icon}</span>
                  <div>
                    <div className="text-sm font-black leading-tight" style={{ color: 'var(--washr-orange)' }}>{chip.label}</div>
                    <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{chip.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Polaroid Photo Fan Grid ─── */}
          <div className="flex-1 w-full flex flex-wrap justify-center gap-6 relative py-8">
            {POLAROIDS.map((p, idx) => (
              <div
                key={p.id}
                ref={(el) => { polaroidRefs.current[idx] = el; }}
                className="polaroid-frame w-40 sm:w-44 md:w-48 aspect-[3/4] flex-shrink-0 relative will-change-transform cursor-pointer"
                style={{
                  transform: `rotate(${p.rotation}deg)`,
                  zIndex: p.zIndex,
                }}
                onMouseEnter={() => handlePolaroidEnter(idx)}
                onMouseLeave={() => handlePolaroidLeave(idx)}
              >
                <div className="relative w-full h-[80%] rounded-[2px] overflow-hidden bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.caption}
                    fill
                    sizes="200px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div
                  className="text-[10px] font-bold text-center mt-3 tracking-wide uppercase"
                  style={{ color: 'var(--washr-blue)' }}
                >
                  {p.caption}
                </div>
              </div>
            ))}

            {/* Decorative SVG star accents (replacing emoji) */}
            <svg
              width="32" height="32" viewBox="0 0 32 32" fill="none"
              className="absolute bottom-2 right-2 opacity-20 pointer-events-none"
              aria-hidden="true"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            >
              <path d="M16 2L19 11L28 11L21 17L23.5 27L16 21L8.5 27L11 17L4 11L13 11L16 2Z" fill="white" />
            </svg>
            <svg
              width="20" height="20" viewBox="0 0 32 32" fill="none"
              className="absolute top-2 right-6 opacity-15 pointer-events-none"
              aria-hidden="true"
              style={{ animation: 'pulse 3s 1.5s ease-in-out infinite' }}
            >
              <path d="M16 2L19 11L28 11L21 17L23.5 27L16 21L8.5 27L11 17L4 11L13 11L16 2Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
