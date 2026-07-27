'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function CommonHeroSection({ content = {} }) {
  const {
    eyebrow = '',
    heading = '',
    highlightText = '',
    badgeLogo = '',
    description = '',
    backgroundImage,
    rightImage,
    gridImages = null,
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
        {/* {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15 mix-blend-screen"
          />
        )} */}
      </div>

      {/* ─── Main Hero Grid Container ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* ─── Left Side Content ─── */}
          <div ref={contentRef} className="max-w-2xl">
            {/* Badge Logo / Icon Chip */}
            {badgeLogo && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm tracking-wider uppercase mb-6 shadow-lg shadow-yellow-400/20">
                <svg className="w-5 h-5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                <span>{badgeLogo}</span>
              </div>
            )}

            {/* Eyebrow Badge (if no badgeLogo) */}
            {!badgeLogo && eyebrow && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
                {eyebrow}
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              {highlightText && heading.includes(highlightText) ? (
                <>
                  {heading.split(highlightText)[0]}
                  <span className="text-[#F2C94C] font-black">{highlightText}</span>
                  {heading.split(highlightText)[1]}
                </>
              ) : (
                heading
              )}
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
                  const isGold = button.variant === 'gold' || button.variant === 'primary-gold';
                  const isPrimary = button.variant !== 'secondary';
                  return (
                    <a
                      key={`${button.label}-${button.url}`}
                      href={button.url}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
                      style={{
                        backgroundColor: isGold ? '#F2C94C' : isPrimary ? 'var(--washr-orange)' : 'rgba(255,255,255,0.08)',
                        color: isGold ? '#0f172a' : '#ffffff',
                        border: isGold ? '1px solid #F2C94C' : isPrimary ? '1px solid transparent' : '1px solid rgba(255,255,255,0.18)',
                        boxShadow: isGold
                          ? '0 10px 25px rgba(242,201,76,0.3)'
                          : isPrimary
                          ? '0 10px 30px rgba(247,148,29,0.35)'
                          : '0 4px 20px rgba(0,0,0,0.15)',
                        backdropFilter: isPrimary || isGold ? 'none' : 'blur(12px)',
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
            {gridImages && gridImages.length >= 3 ? (
              /* ─── 3-Image Asymmetrical Grid Layout (Rinse Go Style) ─── */
              <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center max-w-lg mx-auto lg:max-w-none">
                {/* Left Column: 2 Stacked Images */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Top Left Image */}
                  <div className="relative aspect-[4/4.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
                    <Image
                      src={gridImages[0].src}
                      alt={gridImages[0].alt || 'Lifestyle'}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Bottom Left Image */}
                  <div className="relative aspect-[4/4.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
                    <Image
                      src={gridImages[1].src}
                      alt={gridImages[1].alt || 'Active'}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Right Column: Single Tall Image */}
                <div className="relative aspect-[3/5.2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900 my-auto">
                  <Image
                    src={gridImages[2].src}
                    alt={gridImages[2].alt || 'Family'}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ) : rightImage ? (
              <div className="relative rounded-[32px] overflow-hidden">
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
              <></>
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
