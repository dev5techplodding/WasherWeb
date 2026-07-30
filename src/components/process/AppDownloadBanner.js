'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppStoreButtons from '@/components/AppStoreButtons';

gsap.registerPlugin(ScrollTrigger);

export default function AppDownloadBanner() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 my-16 md:my-24 relative z-10"
      aria-label="Download the Spinny App"
    >
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#FFF5F6] via-[#FFF0F3] to-[#FFEBEF] border border-[#FCE2E6] overflow-hidden p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 shadow-[0_20px_50px_rgba(239,68,68,0.06)]">
        
        {/* ─── Background Concentric Circle Accents ─── */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] pointer-events-none opacity-35 text-[#F8A0B0]">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="280" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="280" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="280" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="280" cy="200" r="230" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* ─── Left Side: Heading, Subtitle & App Badges ─── */}
        <div ref={textRef} className="flex-1 text-left z-10 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1B232E] tracking-tight leading-[1.2] mb-4">
            Download the app now!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8">
            Experience seamless online ordering only on the Spinny app
          </p>

          {/* Download Badges */}
          <AppStoreButtons className="justify-start" />
        </div>

        {/* ─── Right Side: Phone Mockup with QR Code ─── */}
        <div ref={phoneRef} className="relative z-10 w-full max-w-[310px] sm:max-w-[340px] self-end -mb-8 sm:-mb-12 md:-mb-16">
          {/* Phone Frame */}
          <div className="relative mx-auto rounded-t-[44px] bg-[#1E242B] p-3 pt-3 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-t-4 border-x-4 border-[#2A323D]">
            {/* Speaker / Notch Bar */}
            <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0D1117]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#161B22]" />
            </div>

            {/* Screen Content */}
            <div className="bg-white rounded-t-[32px] pt-8 pb-10 px-5 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold text-[#334155] leading-snug mb-5 max-w-[200px]">
                Scan the QR code to download the app
              </p>

              {/* QR Code Container */}
              <div className="p-3.5 bg-white rounded-2xl border border-pink-200/80 shadow-[0_10px_25px_rgba(239,68,68,0.1)] relative">
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-32 h-32 sm:w-36 sm:h-36"
                >
                  {/* Top-Left Corner Marker */}
                  <rect x="5" y="5" width="26" height="26" rx="6" fill="#F43F5E" />
                  <rect x="9" y="9" width="18" height="18" rx="4" fill="white" />
                  <rect x="13" y="13" width="10" height="10" rx="2" fill="#F43F5E" />

                  {/* Top-Right Corner Marker */}
                  <rect x="69" y="5" width="26" height="26" rx="6" fill="#F43F5E" />
                  <rect x="73" y="9" width="18" height="18" rx="4" fill="white" />
                  <rect x="77" y="13" width="10" height="10" rx="2" fill="#F43F5E" />

                  {/* Bottom-Left Corner Marker */}
                  <rect x="5" y="69" width="26" height="26" rx="6" fill="#F43F5E" />
                  <rect x="9" y="73" width="18" height="18" rx="4" fill="white" />
                  <rect x="13" y="77" width="10" height="10" rx="2" fill="#F43F5E" />

                  {/* QR Data Grid Matrix */}
                  <g fill="#1E293B">
                    <rect x="36" y="5" width="5" height="5" rx="1.5" />
                    <rect x="45" y="5" width="5" height="5" rx="1.5" />
                    <rect x="55" y="5" width="5" height="5" rx="1.5" />

                    <rect x="36" y="14" width="5" height="5" rx="1.5" />
                    <rect x="49" y="14" width="5" height="5" rx="1.5" />
                    <rect x="58" y="14" width="5" height="5" rx="1.5" />

                    <rect x="36" y="24" width="5" height="5" rx="1.5" />
                    <rect x="45" y="24" width="5" height="5" rx="1.5" />
                    <rect x="55" y="24" width="5" height="5" rx="1.5" />

                    <rect x="5" y="36" width="5" height="5" rx="1.5" />
                    <rect x="14" y="36" width="5" height="5" rx="1.5" />
                    <rect x="24" y="36" width="5" height="5" rx="1.5" />
                    <rect x="36" y="36" width="5" height="5" rx="1.5" />
                    <rect x="45" y="36" width="5" height="5" rx="1.5" />
                    <rect x="58" y="36" width="5" height="5" rx="1.5" />
                    <rect x="69" y="36" width="5" height="5" rx="1.5" />
                    <rect x="78" y="36" width="5" height="5" rx="1.5" />

                    <rect x="5" y="45" width="5" height="5" rx="1.5" />
                    <rect x="18" y="45" width="5" height="5" rx="1.5" />
                    <rect x="28" y="45" width="5" height="5" rx="1.5" />
                    <rect x="41" y="45" width="5" height="5" rx="1.5" />
                    <rect x="50" y="45" width="5" height="5" rx="1.5" />
                    <rect x="64" y="45" width="5" height="5" rx="1.5" />
                    <rect x="74" y="45" width="5" height="5" rx="1.5" />
                    <rect x="88" y="45" width="5" height="5" rx="1.5" />

                    <rect x="12" y="55" width="5" height="5" rx="1.5" />
                    <rect x="24" y="55" width="5" height="5" rx="1.5" />
                    <rect x="36" y="55" width="5" height="5" rx="1.5" />
                    <rect x="45" y="55" width="5" height="5" rx="1.5" />
                    <rect x="58" y="55" width="5" height="5" rx="1.5" />
                    <rect x="78" y="55" width="5" height="5" rx="1.5" />
                    <rect x="88" y="55" width="5" height="5" rx="1.5" />

                    <rect x="36" y="69" width="5" height="5" rx="1.5" />
                    <rect x="45" y="69" width="5" height="5" rx="1.5" />
                    <rect x="58" y="69" width="5" height="5" rx="1.5" />
                    <rect x="72" y="69" width="5" height="5" rx="1.5" />
                    <rect x="82" y="69" width="5" height="5" rx="1.5" />

                    <rect x="36" y="78" width="5" height="5" rx="1.5" />
                    <rect x="49" y="78" width="5" height="5" rx="1.5" />
                    <rect x="64" y="78" width="5" height="5" rx="1.5" />
                    <rect x="78" y="78" width="5" height="5" rx="1.5" />

                    <rect x="36" y="88" width="5" height="5" rx="1.5" />
                    <rect x="45" y="88" width="5" height="5" rx="1.5" />
                    <rect x="55" y="88" width="5" height="5" rx="1.5" />
                    <rect x="69" y="88" width="5" height="5" rx="1.5" />
                    <rect x="85" y="88" width="5" height="5" rx="1.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
