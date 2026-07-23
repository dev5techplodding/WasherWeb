'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  {
    id: 1,
    title: 'Create Account',
    badge: 'Quick Setup',
    desc: 'Provide your name, mobile number, and email address for fast profile setup.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Verify Identity',
    badge: '2FA Shield',
    desc: 'Confirm your phone number using a 4-digit security verification code.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pickup Location & Window',
    badge: 'Smart Geocode',
    desc: 'Enter your address, preferred service window, and concierge desk or buzzer notes.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Garment Preferences',
    badge: 'Fabric Care',
    desc: 'Select wash temperature, eco-detergents, and fold or hanger options.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Encrypted Checkout',
    badge: 'Encrypted',
    desc: 'Transparent itemized billing with Apple Pay, Google Pay, or Card setup.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Live Driver Tracking',
    badge: 'Real-time GPS',
    desc: 'Track your assigned valet driver in real-time as they arrive for pickup.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function CustomerJourneySection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPrefs, setSelectedPrefs] = useState(['Cold Wash', 'Hypoallergenic', 'Neat Fold']);

  // Auto-switch steps every 4000ms unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % STEPS.length) + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const togglePref = (pref) => {
    if (selectedPrefs.includes(pref)) {
      setSelectedPrefs(selectedPrefs.filter((p) => p !== pref));
    } else {
      setSelectedPrefs([...selectedPrefs, pref]);
    }
  };

  return (
    <section id="customer-journey" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80 text-[#0E3A66]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Customer Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
              Six Steps to Seamless Care
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base font-normal">
            From registration to driver pickup confirmation, experience predictable garment care.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Fixed Phone Frame Mockup */}
          <div className="lg:col-span-5 sticky top-28 space-y-5 flex flex-col items-center">
            {/* Phone Frame Div */}
            <div className="relative w-full max-w-[290px] sm:max-w-[300px] aspect-[9/19] rounded-[42px] shadow-2xl p-2 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={STEPS[activeStep - 1].image}
                    alt={STEPS[activeStep - 1].title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>
              <img
                src="/frame1.avif"
                alt="Phone Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30 drop-shadow-lg"
              />
            </div>

            {/* Fabric Preferences Toggle Card */}
            <div className="w-full max-w-[290px] sm:max-w-[300px] rounded-2xl p-4 bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3A66]">
                  Fabric Care Preferences
                </h4>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  Saved
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Cold Wash', 'Hypoallergenic', 'Neat Fold', 'Hang Dry'].map((pref) => {
                  const isSel = selectedPrefs.includes(pref);
                  return (
                    <button
                      key={pref}
                      onClick={() => togglePref(pref)}
                      className={`py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border text-left ${
                        isSel
                          ? 'bg-[#0E3A66] text-white border-[#0E3A66] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isSel ? '✓ ' : '+ '}
                      {pref}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline UI Matching User's Reference Screenshot */}
          <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:mx-0">
            {/* Timeline Stepper Container */}
            <div
              className="relative pl-12 sm:pl-16 space-y-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Thin Vertical Spine Track Line */}
              <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-[2px] bg-indigo-200/80 rounded-full" />

              {STEPS.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div key={step.id} className="relative">
                    {/* Node Badge Aligned on Left Spine Line */}
                    <div className="absolute -left-12 sm:-left-16 top-3 flex items-center justify-center z-10">
                      {isActive ? (
                        <motion.div
                          layoutId="active-node-icon"
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#059669] text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300"
                        >
                          {step.icon}
                        </motion.div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-500 font-bold text-xs flex items-center justify-center shadow-sm">
                          {step.id}
                        </div>
                      )}
                    </div>

                    {/* Step Card */}
                    <div
                      onClick={() => setActiveStep(step.id)}
                      className={`relative cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-white border-2 border-indigo-400/80 ring-4 ring-indigo-500/10 p-5 sm:p-6 shadow-lg'
                          : 'bg-white border border-indigo-100/90 hover:border-indigo-200 hover:shadow px-5 py-4 shadow-sm'
                      }`}
                    >
                      {/* Active Top Progress Line */}
                      {isActive && (
                        <motion.div
                          key={`progress-${activeStep}-${isPaused}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: isPaused ? 0 : 4, ease: 'linear' }}
                          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-indigo-600"
                        />
                      )}

                      {isActive ? (
                        /* Active Card Layout (Icon box + Title + Pill Badge + Paragraph text) */
                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#059669] flex items-center justify-center flex-shrink-0">
                                {step.icon}
                              </div>
                              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                                {step.title}
                              </h4>
                            </div>

                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100/80 flex-shrink-0">
                              {step.badge}
                            </span>
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed mt-3 font-normal">
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        /* Inactive Card Layout (Title Only) */
                        <div className="flex items-center justify-between py-0.5">
                          <h4 className="text-base sm:text-lg font-bold text-slate-800">
                            {step.title}
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
