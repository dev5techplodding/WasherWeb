'use client';

import { motion } from 'framer-motion';

const JOURNEYS = [
  {
    id: 'customer-journey',
    role: 'Customer',
    time: '2 Mins',
    title: 'Customer Onboarding',
    description:
      'Schedule pickups, select custom garment preferences, track order status in real-time, and manage automated deliveries.',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800&auto=format&fit=crop',
    tag: 'On-Demand Laundry',
  },
  {
    id: 'vendor-journey',
    role: 'Vendor',
    time: '5 Mins',
    title: 'Commercial Partner',
    description:
      'Connect your commercial facility, receive optimized order batches, streamline capacity, and grow revenue predictably.',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop',
    tag: 'Facility SaaS',
  },
  {
    id: 'driver-journey',
    role: 'Driver',
    time: '3 Mins',
    title: 'Delivery Partner',
    description:
      'Drive flexible high-density neighborhood routes with integrated GPS navigation, automated dispatch, and weekly payouts.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    tag: 'Route Logistics',
  },
];

export default function JourneyIntroCards() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey-intro" className="py-24 bg-white text-[#0E3A66]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-[#0E3A66] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Registration Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3A66] tracking-tight">
            Three Onboarding Journeys
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Select your role below to explore the registration procedure, required details, and platform access.
          </p>
        </div>

        {/* 3 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNEYS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Header Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E3A66] text-xs font-bold border border-white">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                      ⏱️ {item.time}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0E3A66] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#0E3A66] text-[#0E3A66] hover:text-white font-semibold text-sm transition-all duration-200 border border-slate-200 hover:border-transparent flex items-center justify-center space-x-2"
                >
                  <span>Explore {item.role} Flow</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
