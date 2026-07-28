'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppStoreButtons from '@/components/AppStoreButtons';

const DRIVER_STEPS = [
  {
    id: 1,
    title: 'Registration',
    badge: 'Step 1',
    desc: 'Sign up as a driver partner with your mobile number and email verification.',
    image: '/screens/csplash.png',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Complete Profile',
    badge: 'Step 2',
    desc: 'Fill out your personal information, contact address, emergency contacts, and vehicle type.',
    image: '/screens/cprofile.jpeg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Document Upload',
    badge: 'Step 3',
    desc: 'Upload your driver license, vehicle registration, and valid vehicle insurance policy.',
    image: '/screens/vendrorDocumentation.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Waiting for Approval',
    badge: 'Step 4',
    desc: 'Our operations team completes a background check and document approval within 24 hours.',
    image: '/screens/vendorapproval.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Accept Order',
    badge: 'Step 5',
    desc: 'Receive live route notifications on your driver app and accept available order dispatch requests.',
    image: '/screens/corder.jpeg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Pickup the Order',
    badge: 'Step 6',
    desc: 'Arrive at customer doorstep, collect items, scan laundry bag barcodes, and confirm pickup.',
    image: '/screens/orderDetails.jpeg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Navigate Through Map',
    badge: 'Step 7',
    desc: 'Follow live turn-by-turn GPS navigation maps to facility drop points and delivery locations.',
    image: '/screens/drivertracking.jpeg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Get Delivery Done',
    badge: 'Step 8',
    desc: 'Hand over freshly cleaned closet-ready garments, capture customer confirmation, and mark order delivered.',
    image: '/screens/dashboard.jpeg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const REQUIREMENTS = [
  { label: 'Government Issued ID' },
  { label: 'Valid Driver License' },
  { label: 'Proof of Vehicle Insurance' },
  { label: 'Compatible Smartphone' },
];

export default function DriverJourneySection() {
  const [activeDriverStep, setActiveDriverStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch steps every 4000ms unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveDriverStep((prev) => (prev % DRIVER_STEPS.length) + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="driver-journey" className="py-24 bg-slate-50 border-t border-b border-slate-200/80 text-[#0E3A66]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Delivery Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
              Flexible Route Dispatch
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base font-normal">
            Drive with Spinny. Enjoy high-density neighborhood routes, automated GPS dispatching, and dependable weekly payouts.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-xs font-bold text-[#0E3A66] uppercase tracking-wider mb-4">
            Required Documents & Equipment
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {REQUIREMENTS.map((req) => (
              <div
                key={req.label}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-3"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0E3A66]">{req.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main 2-Column Onboarding Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Fixed Phone Frame Mockup & Screenshot Swapper (Same as Customer/Vendor Section) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5 flex flex-col items-center">
            {/* Phone Frame Div */}
            <div className="relative w-full max-w-[290px] sm:max-w-[300px] aspect-[9/19] rounded-[42px] shadow-2xl p-2 flex items-center justify-center overflow-hidden">
              {/* Inner Screen Container for Screenshots */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeDriverStep}
                    src={DRIVER_STEPS[activeDriverStep - 1].image}
                    alt={DRIVER_STEPS[activeDriverStep - 1].title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              {/* Static Phone Frame Overlay (frame1.avif) */}
              <img
                src="/frame1.avif"
                alt="Phone Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30 drop-shadow-lg"
              />
            </div>

            {/* Driver Fleet Features Box */}
            <div className="w-full max-w-[290px] sm:max-w-[300px] rounded-2xl p-4 bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3A66]">
                  Driver Fleet Features
                </h4>
                <span className="text-[10px] font-semibold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  GPS Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Live GPS Route', 'Batch Pickup', 'Instant Payout', 'In-App Chat'].map((pref) => (
                  <div
                    key={pref}
                    className="py-1.5 px-2 rounded-xl text-xs font-semibold transition-all border text-left bg-[#0E3A66] text-white border-[#0E3A66] shadow-sm"
                  >
                    ✓ {pref}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Stepper UI Matching Customer & Vendor Sections */}
          <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:mx-0">
            <div
              className="relative pl-12 sm:pl-16 space-y-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Thin Vertical Spine Track Line */}
              <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-[2px] bg-indigo-200/80 rounded-full" />

              {DRIVER_STEPS.map((step) => {
                const isActive = activeDriverStep === step.id;
                return (
                  <div key={step.id} className="relative">
                    {/* Node Badge Aligned on Left Spine Line */}
                    <div className="absolute -left-12 sm:-left-16 top-3 flex items-center justify-center z-10">
                      {isActive ? (
                        <motion.div
                          layoutId="active-driver-node"
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
                      onClick={() => setActiveDriverStep(step.id)}
                      className={`relative cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-white border-2 border-indigo-400/80 ring-4 ring-indigo-500/10 p-5 sm:p-6 shadow-lg'
                          : 'bg-white border border-indigo-100/90 hover:border-indigo-200 hover:shadow px-5 py-4 shadow-sm'
                      }`}
                    >
                      {/* Active Top Progress Line */}
                      {isActive && (
                        <motion.div
                          key={`progress-driver-${activeDriverStep}-${isPaused}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: isPaused ? 0 : 4, ease: 'linear' }}
                          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-indigo-600"
                        />
                      )}

                      {isActive ? (
                        /* Active Card Layout */
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

            {/* App Download Buttons aligned right below the steps timeline */}
            <div className="mt-6 sm:mt-8 pl-12 sm:pl-16">
              <AppStoreButtons className="justify-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

