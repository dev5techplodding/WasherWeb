'use client';

import { useEffect } from 'react';

const INFOS = [
  {
    label: 'Email Support',
    value: 'hi@spinnylaundry.com',
    subtext: 'Fast response within 24 hours',
    href: 'mailto:hi@spinnylaundry.com',
    actionText: 'Send Email',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Chat Support',
    value: 'In-App Live Chat 24/7',
    subtext: 'Instant concierge assistance anytime',
    href: 'https://play.google.com/store',
    actionText: 'Download App',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="8" cy="10" r="1.2" fill="currentColor" />
        <circle cx="12" cy="10" r="1.2" fill="currentColor" />
        <circle cx="16" cy="10" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Office Address',
    value: 'Unit 120, 5710 201 Street, Langley, BC V3A 8A8',
    subtext: 'Spinny Headquarters, Canada',
    href: 'https://maps.google.com/?q=Unit+120,+5710+201+Street,+Langley,+BC+V3A+8A8',
    actionText: 'View on Map',
    external: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
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
    <section className="mt-12 sm:mt-16 scroll-mt-28">
      <div className="grid gap-6 md:grid-cols-3">
        {INFOS.map((item) => {
          const Tag = item.href ? 'a' : 'div';
          return (
            <Tag
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="group rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,30,48,0.04)] hover:shadow-[0_20px_40px_rgba(15,30,48,0.08)] hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-[#F7941D] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F7941D] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F7941D]">
                  {item.label}
                </span>
                <h3 className="text-lg font-black text-[#0E3A66] mt-2 leading-snug group-hover:text-[#F7941D] transition-colors">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[#F7941D] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>{item.actionText}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
