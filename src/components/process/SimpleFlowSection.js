'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const FLOW_STEPS = [
  {
    step: '01',
    title: 'Schedule Pickup',
    subtitle: '30-Sec Booking',
    desc: 'Select your preferred 2-hour window and specify what needs care — clothes, footwear, or home textiles.',
    image: '/icons/flow_step1.png',
    badge: 'Quick & Easy',
    details: 'Choose custom wash temperatures, eco-detergent preferences, and buzzer/concierge instructions in under 30 seconds.',
    accent: '#F28C28',
  },
  {
    step: '02',
    title: 'Doorstep Collection',
    subtitle: 'Driver Arrives',
    desc: 'An independent Spinny driver collects your items directly from your front door or concierge desk.',
    image: '/icons/flow_step2.png',
    badge: 'Zero Effort',
    details: 'Real-time GPS tracking and live driver text alerts notify you the moment your pickup tote is secured.',
    accent: '#3B82F6',
  },
  {
    step: '03',
    title: 'Specialist Care',
    subtitle: 'Material Matched',
    desc: 'Your items are routed to vetted specialist facilities — laundry, cobbler, leather studio, or rug cleaner.',
    image: '/icons/flow_step3.png',
    badge: 'Investment Care',
    details: 'Material inspection, tailored stain treatment, and commercial-grade eco cleaning protect your investments.',
    accent: '#10B981',
  },
  {
    step: '04',
    title: 'Get delivery',
    subtitle: '5+ Hours Reclaimed',
    desc: 'Receive a notification when your items are on the way back — clean, folded, and ready to put away.',
    image: '/icons/flow_step4.png',
    badge: 'Time Bought Back',
    details: 'Enjoy your time back with the peace of mind that your wardrobe and home textiles are professionally cared for.',
    accent: '#8B5CF6',
  },
];

export default function SimpleFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 relative overflow-hidden text-[#0E3A66]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6] border border-[#FFE0D1] text-[#F28C28] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
            </svg>
            Simple 4-Step Process
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#122840] tracking-tight leading-tight mb-4">
            How Spinny Works in <span className="text-[#F28C28]">4 Easy Steps</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Understand the complete concierge workflow from your phone to your closet at a single glance.
          </p>
        </div>

        {/* ─── Flow Diagram Steps Container ─── */}
        <div className="relative">
          {/* Connecting Flow Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-300 via-sky-300 to-purple-300 z-0 rounded-full opacity-60" />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {FLOW_STEPS.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer rounded-[28px] p-6 sm:p-7 bg-white border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${isActive
                    ? 'border-[#F28C28] shadow-[0_20px_45px_rgba(242,140,40,0.18)] scale-[1.02]'
                    : 'border-slate-100 shadow-[10px_14px_30px_rgba(210,215,228,0.4),-10px_-10px_25px_rgba(255,255,255,0.9)] hover:shadow-[14px_18px_35px_rgba(195,202,218,0.5)] hover:-translate-y-1.5'
                    }`}
                >
                  {/* Top Bar: Icon + Step Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      {/* 3D Icon Box */}
                      <div className="w-14 h-14 rounded-2xl bg-[#F8F9FC] flex items-center justify-center p-1.5 shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.06),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.9)] border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>

                      {/* Step Number Badge */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black tracking-tighter shadow-sm transition-all"
                        style={{
                          backgroundColor: isActive ? '#F28C28' : '#F1F5F9',
                          color: isActive ? '#FFFFFF' : '#475569',
                        }}
                      >
                        {item.step}
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F28C28]">
                        {item.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-[#122840] leading-snug group-hover:text-[#F28C28] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom Connector Indicator */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>Step {item.step} of 04</span>
                    <span className="text-[#F28C28] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Interactive Step Details Card Banner ─── */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-[#122840] via-[#1B3A5C] to-[#0E2238] p-7 sm:p-9 text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F28C28] font-black text-lg">
              {FLOW_STEPS[activeStep].step}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-xl font-bold text-white">
                  {FLOW_STEPS[activeStep].title}
                </h4>
                <span className="px-3 py-0.5 rounded-full bg-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {FLOW_STEPS[activeStep].badge}
                </span>
              </div>
              <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-2xl">
                {FLOW_STEPS[activeStep].details}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="/process"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F28C28] to-[#E07B17] hover:from-[#E07B17] hover:to-[#C66708] text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
            >
              View Process →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
