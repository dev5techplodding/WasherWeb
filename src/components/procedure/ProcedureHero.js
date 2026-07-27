'use client';

import { motion } from 'framer-motion';

export default function ProcedureHero({ onExploreClick, onStartClick }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-36 pb-28 lg:pt-44 lg:pb-36 bg-[#0B1726] text-white overflow-hidden">
      {/* ─── Background Ambient Glows & Grid Pattern (Same as About Page Hero) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Orange Radial Glow Orb */}
        <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.22)_0%,transparent_70%)] blur-3xl" />

        {/* Cyan/Blue Radial Glow Orb */}
        <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Eyebrow Badge / Logo */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#F7941D] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_2px_12px_rgba(247,148,29,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              <span className="font-extrabold tracking-widest text-[#F7941D]">SPINNY GO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white mb-6">
              Spinny is the{' '}
              <span className="text-[#F7941D] font-black">
                freedom to care for your entire closet, on your schedule.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-normal">
              Whether you&apos;re scheduling your first pickup, joining as a trusted laundry partner, or becoming a delivery professional, Spinny makes every step seamless.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartClick || (() => handleScrollTo('journey-intro'))}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F7941D] hover:bg-orange-600 text-white font-bold text-base shadow-xl shadow-[#F7941D]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Log in to get access</span>
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onExploreClick || (() => handleScrollTo('customer-journey'))}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white hover:text-slate-950 text-white font-bold text-base border border-white/20 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Explore Process</span>
                <svg className="w-4 h-4 text-[#F7941D] group-hover:text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3-Image Asymmetrical Grid Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center max-w-lg mx-auto lg:max-w-none">
              {/* Left Column: 2 Stacked Images */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* Top Left Image */}
                <div className="relative aspect-[4/4.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#F7941D]/40 transition-colors group bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
                    alt="Lifestyle with music headphones"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Bottom Left Image */}
                <div className="relative aspect-[4/4.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#F7941D]/40 transition-colors group bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
                    alt="Active outdoors stretching"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column: Single Tall Image */}
              <div className="relative aspect-[3/5.2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#F7941D]/40 transition-colors group bg-slate-900 my-auto">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"
                  alt="Family outdoor quality time"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Curve Divider ─── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[56px]" fill="white">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
