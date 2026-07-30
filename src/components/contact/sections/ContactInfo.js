'use client';

import { useEffect } from 'react';
import { PRIVACY_CONTACT } from '@/components/data';

const INFOS = [
  {
    label: 'Email Support',
    value: 'hi@spinnylaundry.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+1 (800) 555-WASH',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Office HQ',
    value: '1840 King Street West, Suite 402, Toronto, ON M5V 1X6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-20 scroll-mt-28">
      <div className="grid gap-6 md:grid-cols-3">
        {INFOS.map((item) => (
          <article
            key={item.label}
            className="glass-card p-6 flex flex-col items-center text-center"
          >
            <div className="h-12 w-12 rounded-2xl bg-washr-blue-deep/5 text-washr-blue-deep flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-washr-text-muted">{item.label}</h3>
            <p className="mt-3 text-sm md:text-base font-semibold text-washr-blue-deep leading-relaxed">
              {item.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-[32px] bg-washr-blue-deep p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(18,40,64,0.22)] border border-white/10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="pill-badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#fff' }}>
              Priority Service
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Need specialized care for your wardrobe or home items?
            </h2>
            <p className="mt-4 text-sm md:text-base leading-7 text-white/75 max-w-3xl">
              From delicate garments and designer footwear to large home textiles, our personal concierge team is here to help. Send us a note via the form above or email our support team directly.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:hi@spinnylaundry.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-washr-blue-deep transition hover:bg-slate-50 active:scale-[0.98]"
            >
              Email Customer Care
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
