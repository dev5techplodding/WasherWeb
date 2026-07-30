'use client';

import { motion } from 'framer-motion';
import AppStoreButtons from '@/components/AppStoreButtons';

export default function processCTA() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 'customer-journey',
      title: 'Register as Customer',
      role: 'For Households & Individuals',
      desc: 'Book pickups in under 30 seconds. Full concierge care for clothes, footwear & home textiles.',
      badge: 'Time Bought Back',
      buttonText: 'Get Started',
      buttonStyle:
        'bg-gradient-to-r from-[#F28C28] to-[#E07B17] hover:from-[#E07B17] hover:to-[#C66708] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40',
      icon: (
        <svg className="w-6 h-6 text-[#F28C28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 'vendor-journey',
      title: 'Become a Vendor Partner',
      role: 'For Local Cleaning Specialists',
      desc: 'Connect your store online, increase high-margin orders, and utilize Spinny delivery infrastructure.',
      badge: 'Grow Your Business',
      buttonText: 'Partner With Us',
      buttonStyle:
        'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-md shadow-lg',
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4m0 4h4"
          />
        </svg>
      ),
    },
    {
      id: 'driver-journey',
      title: 'Become a Delivery Partner',
      role: 'For Independent Drivers',
      desc: 'Flexible hours, optimized batch routes, and competitive earnings across Canadian metro areas.',
      badge: 'Flexible Earnings',
      buttonText: 'Apply to Drive',
      buttonStyle:
        'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-md shadow-lg',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 102 0 1 1 0 00-2 0zm-7 0a1 1 0 102 0 1 1 0 00-2 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#0A1828] text-white py-24 sm:py-32">
      {/* ─── Ambient Glow Blobs & Background Texture ─── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F28C28]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Background Image Layer with Blend */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1600&auto=format&fit=crop"
          alt="Garment Care Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Spinny Ecosystem
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to Join{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#F28C28] bg-clip-text text-transparent">
                Spinny?
              </span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300/90 font-normal leading-relaxed max-w-2xl mx-auto">
              Select your path and become part of Canada&apos;s premier wardrobe & home care ecosystem.
            </p>
          </motion.div>
        </div>

        {/* ─── 3 Role Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-amber-500/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-[#F28C28] mb-3">{card.role}</p>
                <p className="text-sm text-slate-300 font-normal leading-relaxed mb-8">{card.desc}</p>
              </div>

              <button
                onClick={() => handleScrollTo(card.id)}
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn ${card.buttonStyle}`}
              >
                <span>{card.buttonText}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* ─── App Store Footer CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 border-t border-white/10 flex flex-col items-center gap-5 text-center"
        >
          <p className="text-sm sm:text-base font-semibold text-slate-300">
            Or manage everything on the go from the Spinny mobile app.
          </p>
          <AppStoreButtons />
        </motion.div>
      </div>
    </section>
  );
}

