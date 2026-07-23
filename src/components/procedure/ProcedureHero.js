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
    <section className="relative w-full pt-36 pb-28 lg:pt-44 lg:pb-36 bg-gradient-to-b from-[#0B2239] via-[#0E3A66] to-[#0B2239] text-white border-b border-slate-800 overflow-hidden">
      {/* Dark Ambient Glowing Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-[#F7941D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Spinny Registration Procedure
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Getting Started is{' '}
              <span className="text-[#F7941D] underline decoration-[#F7941D]/60 underline-offset-8">
                Surprisingly Simple.
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F7941D] hover:bg-amber-600 text-white font-semibold text-base shadow-xl shadow-[#F7941D]/20 hover:shadow-[#F7941D]/40 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Registration</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onExploreClick || (() => handleScrollTo('customer-journey'))}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 shadow-md backdrop-blur-md transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Process</span>
                <svg className="w-4 h-4 text-[#F7941D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Dark Glass Framed Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop"
                  alt="Spinny Garment Care Visual"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239] via-transparent to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B2239]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Commercial Grade Handling</p>
                    <p className="text-[11px] text-slate-300">Pickup, Care & Delivery Ecosystem</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                    100% Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Floating Stat Pill */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B2239] p-4 rounded-2xl shadow-2xl border border-white/20 hidden sm:flex items-center space-x-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-[#F7941D] text-white flex items-center justify-center font-bold text-sm shadow-md">
                ⏱️
              </div>
              <div>
                <p className="text-xs font-bold text-white">Rapid Registration</p>
                <p className="text-[11px] text-slate-300">Under 5 Mins for All Roles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
