'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'How fast can I start using Spinny after registering as a customer?',
    a: 'Registration takes under 2 minutes. Once your mobile number and address are verified, you can immediately schedule your first pickup window!',
  },
  {
    q: 'What documents do commercial vendors need to submit?',
    a: 'Vendors submit registered business details, facility location, and commercial liability insurance certificates. Verification is completed by our operations team within 24 hours.',
  },
  {
    q: 'How do driver payouts and routing work?',
    a: 'Drivers receive automated high-density neighborhood routes via the Spinny Driver app. Earnings are deposited weekly with options for direct transfers.',
  },
  {
    q: 'Can I change my account role later or hold multiple accounts?',
    a: 'Yes. You can operate as a customer while registering your facility as a vendor or signing up as a delivery partner using unified profile credentials.',
  },
  {
    q: 'What happens if a pickup window needs to be rescheduled?',
    a: 'Both customers and drivers receive live notifications. You can adjust pickup windows directly in the app up to 30 minutes before your route window opens.',
  },
];

export default function ProcedureFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-b border-slate-200/80 text-[#0E3A66]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
            Common Inquiries
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-normal">
            Everything you need to know about joining the Spinny ecosystem.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0E3A66] hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
