'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VENDOR_STEPS = [
  {
    id: 1,
    title: 'Facility & Business Profile',
    badge: 'Business ID',
    desc: 'Submit legal business details, corporate registration, tax identification, and plant facility address.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0V7m0 4h4m-4 0H7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Compliance & Insurance Review',
    badge: 'SLA Audit',
    desc: 'Upload commercial general liability documentation, environment compliance certificates, and operating licenses.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Service & Capacity Mapping',
    badge: 'Capacity Map',
    desc: 'Configure processing specialties (Dry Cleaning, Commercial Wash & Fold, Bedding) and daily bag capacity.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Partner Orientation',
    badge: 'SLA Standard',
    desc: 'Review Spinny garment care standards, turnaround SLA windows, and barcode tracking procedures.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'SaaS Hub Credentialing',
    badge: 'Tablet Access',
    desc: 'Unlock facility tablet app access, batch dispatch software, and automated revenue accounting.',
    image: '/F1.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'First Batch Activation',
    badge: 'Live Dispatch',
    desc: 'Receive initial neighborhood batch assignments and start commercial order processing.',
    image: '/F2.jpg',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function VendorJourneySection() {
  const [activeVendorStep, setActiveVendorStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch steps every 4000ms unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveVendorStep((prev) => (prev % VENDOR_STEPS.length) + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="vendor-journey" className="py-24 bg-white text-[#0E3A66]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 text-[#0E3A66] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Commercial Laundry Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
              Scale Facility Throughput
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base font-normal">
            Join Canada&apos;s network of vetted garment care specialists. Optimize capacity with automated batch routing.
          </p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-base font-bold text-[#0E3A66] mb-2">Automated Batch Routing</h4>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Receive organized neighborhood order batches dispatched directly to your facility schedule.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-base font-bold text-[#0E3A66] mb-2">SaaS Capacity Dashboard</h4>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Track daily volume, monitor turnaround SLAs, and manage staff processing queues effortlessly.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-base font-bold text-[#0E3A66] mb-2">Predictable Settlement</h4>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Transparent per-pound and per-garment revenue accounting deposited directly to your business account.
            </p>
          </div>
        </div>

        {/* Main 2-Column Onboarding Flow (Swapped: Timeline on Left, Phone Mockup on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Timeline Stepper UI */}
          <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
            <div
              className="relative pl-12 sm:pl-16 space-y-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Thin Vertical Spine Track Line */}
              <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-[2px] bg-indigo-200/80 rounded-full" />

              {VENDOR_STEPS.map((step) => {
                const isActive = activeVendorStep === step.id;
                return (
                  <div key={step.id} className="relative">
                    {/* Node Badge Aligned on Left Spine Line */}
                    <div className="absolute -left-12 sm:-left-16 top-3 flex items-center justify-center z-10">
                      {isActive ? (
                        <motion.div
                          layoutId="active-vendor-node"
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
                      onClick={() => setActiveVendorStep(step.id)}
                      className={`relative cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-white border-2 border-indigo-400/80 ring-4 ring-indigo-500/10 p-5 sm:p-6 shadow-lg'
                          : 'bg-white border border-indigo-100/90 hover:border-indigo-200 hover:shadow px-5 py-4 shadow-sm'
                      }`}
                    >
                      {/* Active Top Progress Line */}
                      {isActive && (
                        <motion.div
                          key={`progress-vendor-${activeVendorStep}-${isPaused}`}
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
          </div>

          {/* Right Column: Fixed Phone Frame Mockup & Screenshot Swapper */}
          <div className="lg:col-span-5 sticky top-28 space-y-5 flex flex-col items-center order-1 lg:order-2">
            {/* Phone Frame Div */}
            <div className="relative w-full max-w-[290px] sm:max-w-[300px] aspect-[9/19] rounded-[42px] shadow-2xl p-2 flex items-center justify-center overflow-hidden">
              {/* Inner Screen Container for Screenshots */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeVendorStep}
                    src={VENDOR_STEPS[activeVendorStep - 1].image}
                    alt={VENDOR_STEPS[activeVendorStep - 1].title}
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

            {/* Partner Portal Options Box */}
            <div className="w-full max-w-[290px] sm:max-w-[300px] rounded-2xl p-4 bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3A66]">
                  Partner Portal Options
                </h4>
                <span className="text-[10px] font-semibold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active SLA
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Auto Dispatch', 'Capacity SLA', 'Dry Cleaning', 'SaaS Reports'].map((pref) => (
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
        </div>
      </div>
    </section>
  );
}


