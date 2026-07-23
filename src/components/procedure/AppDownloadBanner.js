'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          <div className="flex flex-wrap items-center gap-3.5">
            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md group"
              aria-label="Get it on Google Play"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.6 1.83C3.37 2.07 3.25 2.45 3.25 2.96V21.04C3.25 21.55 3.37 21.93 3.6 22.17L3.68 22.24L13.79 12.13V11.87L3.68 1.76L3.6 1.83Z" fill="url(#play_blue)" />
                <path d="M17.15 15.5L13.79 12.13V11.87L17.15 8.5L17.23 8.55L21.2 10.81C22.33 11.45 22.33 12.55 21.2 13.19L17.23 15.45L17.15 15.5Z" fill="url(#play_yellow)" />
                <path d="M17.23 15.45L13.79 12L3.6 22.17C3.97 22.57 4.59 22.62 5.3 22.22L17.23 15.45Z" fill="url(#play_red)" />
                <path d="M17.23 8.55L5.3 1.78C4.59 1.38 3.97 1.43 3.6 1.83L13.79 12L17.23 8.55Z" fill="url(#play_green)" />
                <defs>
                  <linearGradient id="play_blue" x1="12.44" y1="2.9" x2="1.31" y2="14.03" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00A0FF" />
                    <stop offset="1" stopColor="#00A0FF" />
                  </linearGradient>
                  <linearGradient id="play_yellow" x1="22.75" y1="12" x2="3.11" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFCC00" />
                    <stop offset="1" stopColor="#FFAA00" />
                  </linearGradient>
                  <linearGradient id="play_red" x1="18.6" y1="14.08" x2="4.1" y2="28.58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF3A44" />
                    <stop offset="1" stopColor="#C31162" />
                  </linearGradient>
                  <linearGradient id="play_green" x1="3.2" y1="-3.74" x2="17.7" y2="10.76" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E676" />
                    <stop offset="1" stopColor="#12C360" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-left leading-none">
                <span className="block text-[9px] font-semibold tracking-wider text-slate-300 uppercase mb-0.5">GET IT ON</span>
                <span className="block text-sm sm:text-base font-bold text-white tracking-tight">Google Play</span>
              </span>
            </a>

            {/* Apple App Store Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md group"
              aria-label="Download on the App Store"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.84-.99 2.94 1.07.08 2.15-.54 2.8-1.34z" />
              </svg>
              <span className="text-left leading-none">
                <span className="block text-[9px] font-semibold tracking-wider text-slate-300 uppercase mb-0.5">Download on the</span>
                <span className="block text-sm sm:text-base font-bold text-white tracking-tight">App Store</span>
              </span>
            </a>
          </div>
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
