'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function CommonHeroSection({ content = {} }) {
  const {
    eyebrow,
    heading,
    description,
    backgroundImage,
    rightImage,
    buttons = [],
    accentText,
    stats = [],
  } = content;

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered entrance for content elements
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }
        );
      }

      // Visual / Right side card entrance
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.2 }
        );
      }

      // Ambient background drifting orbs
      [
        { ref: orb1Ref, x: 35, y: -25, dur: 9 },
        { ref: orb2Ref, x: -30, y: 30, dur: 11 },
      ].forEach(({ ref, x, y, dur }) => {
        if (!ref.current) return;
        gsap.to(ref.current, {
          x,
          y,
          duration: dur,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28 bg-[#0B1726] text-white"
    >
      {/* ─── Background Ambient Glows & Grids ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Drifting Orange Glow Orb */}
        <div
          ref={orb1Ref}
          className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.22)_0%,transparent_70%)] blur-3xl"
        />

        {/* Drifting Cyan/Blue Glow Orb */}
        <div
          ref={orb2Ref}
          className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl"
        />

        {/* Background Overlay Image (if specified) */}
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15 mix-blend-screen"
          />
        )}
      </div>

      {/* ─── Main Hero Grid Container ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* ─── Left Side Content ─── */}
          <div ref={contentRef} className="max-w-2xl">
            {/* Eyebrow Badge */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
                {eyebrow}
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              {heading}
            </h1>

            {/* Description */}
            {description && (
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Accent Text */}
            {accentText && (
              <p className="mt-3 text-sm font-medium text-slate-400 border-l-2 border-[#F7941D] pl-3.5 py-0.5">
                {accentText}
              </p>
            )}

            {/* CTA Buttons */}
            {buttons.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {buttons.map((button) => {
                  const isPrimary = button.variant !== 'secondary';
                  return (
                    <a
                      key={`${button.label}-${button.url}`}
                      href={button.url}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
                      style={{
                        backgroundColor: isPrimary ? 'var(--washr-orange)' : 'rgba(255,255,255,0.08)',
                        color: '#ffffff',
                        border: isPrimary ? '1px solid transparent' : '1px solid rgba(255,255,255,0.18)',
                        boxShadow: isPrimary
                          ? '0 10px 30px rgba(247,148,29,0.35)'
                          : '0 4px 20px rgba(0,0,0,0.15)',
                        backdropFilter: isPrimary ? 'none' : 'blur(12px)',
                      }}
                    >
                      <span>{button.label}</span>
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
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* ─── Right Side Glass Visual / Stats ─── */}
          <div ref={visualRef} className="relative">
            {rightImage ? (
              <div className="relative rounded-[32px] border border-white/15 bg-white/5 p-3.5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="relative rounded-[24px] overflow-hidden min-h-[340px] md:min-h-[420px]">
                  <Image
                    src={rightImage.src}
                    alt={rightImage.alt || 'Spinny Service Visual'}
                    fill
                    priority={rightImage.priority ?? true}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={rightImage.className || 'object-cover'}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Floating Glass Badge Chip */}
                  {rightImage.badge && (
                    <div className="absolute left-5 bottom-5 rounded-2xl bg-[#0B1726]/85 px-5 py-3.5 shadow-2xl backdrop-blur-md border border-white/15">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#F7941D]">
                        {rightImage.badge.label}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-white tracking-tight">
                        {rightImage.badge.value}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : Array.isArray(stats) && stats.length > 0 ? (
              /* Glassmorphic Stats Grid */
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label || idx}
                    className="group rounded-2xl bg-white/[0.06] border border-white/12 p-6 backdrop-blur-xl hover:bg-white/[0.12] hover:border-orange-500/40 transition-all duration-300 shadow-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-[#F7941D] font-bold mb-3 group-hover:scale-110 transition-transform">
                      ✦
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1.5 text-base sm:text-lg font-bold text-white leading-snug">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback Glass Card */
              <div className="relative rounded-[32px] border border-white/15 bg-white/[0.06] p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl min-h-[300px] flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#F28C28] flex items-center justify-center text-3xl font-black text-white shadow-lg mb-4">
                  S
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Spinny Premium</h3>
                <p className="text-sm font-medium text-slate-300 max-w-[240px] leading-relaxed">
                  Commercial-grade laundry and garment care, delivered to your doorstep.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ─── Bottom Curve Divider ─── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[56px]" fill="white">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
