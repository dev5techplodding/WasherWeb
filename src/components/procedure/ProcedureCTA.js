'use client';

import AppStoreButtons from '@/components/AppStoreButtons';

export default function ProcedureCTA() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white text-[#0E3A66] text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Real Photographic Card Backdrop */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-br from-[#0E3A66] via-blue-900 to-[#0E3A66] text-white shadow-2xl border border-blue-800">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop"
              alt="Background Garments"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              Spinny Ecosystem
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Ready to Join Spinny?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
              Select your path and become part of Canada&apos;s premium laundry ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleScrollTo('customer-journey')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0E3A66] font-bold text-sm shadow-md transition-all duration-200"
              >
                Register as Customer
              </button>

              <button
                onClick={() => handleScrollTo('vendor-journey')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F7941D] hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all duration-200"
              >
                Become a Vendor Partner
              </button>

              <button
                onClick={() => handleScrollTo('driver-journey')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm shadow-md transition-all duration-200 border border-slate-700"
              >
                Become a Delivery Partner
              </button>
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col items-center gap-4">
              <p className="text-sm font-semibold text-slate-300">
                Or manage everything from the Spinny app.
              </p>
              <AppStoreButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
