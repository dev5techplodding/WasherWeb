'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = {
  services: {
    title: 'Services',
    links: [
      { label: 'Wardrobe & Workwear', href: '/services#ecosystem' },
      { label: 'Footwear & Leather', href: '/services#ecosystem' },
      { label: 'Home & Sanctuary', href: '/services#ecosystem' },
      { label: 'Special Care & Tailoring', href: '/services#ecosystem' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Spinny', href: '/about' },
      { label: 'How It Works', href: '/#how-it-works-trigger' },
      { label: 'Vendor Partners', href: '/procedure' },
      { label: 'Get the App', href: '/app' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help-center' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/help-center#faq' },
      { label: 'Service Areas', href: '/service-areas' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
};

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 2L7.5 9.5L2 16H4L8.5 11L12 16H16L10.5 8.5L16 2H14L9.5 7L6 2H2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 7V13M5 5V5.01M8 13V9.5C8 8.5 9 7.5 10.5 7.5C12 7.5 13 8.5 13 9.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 17V10H13L13.5 7H10V5.5C10 4.5 10.5 4 11.5 4H13.5V1.5C13.5 1.5 12 1 11 1C9 1 7.5 2.5 7.5 5V7H5V10H7.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  /* ─── Back-to-top visibility ─── */
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─── Footer entrance animation ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none none' },
        }
      );

      const cols = linksRef.current?.querySelectorAll('.footer-col');
      if (cols) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
            scrollTrigger: { trigger: linksRef.current, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* ─── Social icon spring hover ─── */
  const handleSocialEnter = (e) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    e.currentTarget.style.color = 'var(--washr-orange)';
    e.currentTarget.style.backgroundColor = 'rgba(242, 140, 40, 0.1)';
    e.currentTarget.style.borderColor = 'rgba(242, 140, 40, 0.2)';
    if (!prefersReduced) {
      gsap.fromTo(
        e.currentTarget,
        { scale: 1 },
        { scale: 1.2, duration: 0.2, ease: 'power2.out', yoyo: true, repeat: 1 }
      );
    }
  };
  const handleSocialLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Back to Top Button ─── */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 z-[999] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: 'var(--washr-blue)',
          color: 'white',
          boxShadow: showBackToTop
            ? '0 4px 20px rgba(27,58,92,0.4), 0 0 0 3px rgba(242,140,40,0.15)'
            : '0 4px 20px rgba(27,58,92,0.2)',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--washr-orange)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(242,140,40,0.45)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--washr-blue)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,58,92,0.4), 0 0 0 3px rgba(242,140,40,0.15)';
        }}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <footer
        ref={footerRef}
        id="footer"
        className="relative pt-16 md:pt-24 overflow-hidden bg-[#0B1726] text-white"
        aria-label="Site footer"
      >
        {/* Ambient Glow Orb */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,148,29,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        {/* ─── Main Footer Content ─── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 items-start">

            {/* ─── Brand Column ─── */}
            <div ref={brandRef} className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="mb-5">
                <Image
                  src="/darklogo.png"
                  alt="Spinny"
                  width={130}
                  height={40}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-300 font-normal">
                <strong className="text-white font-semibold block mb-1">Laundry Done, Life On.</strong>
                The easiest chore you&apos;ll never do again — complete wardrobe, footwear, and home care delivered seamlessly to your doorstep.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white bg-white/5 hover:bg-[#F7941D] border border-white/10 shadow-sm group"
                    onMouseEnter={handleSocialEnter}
                    onMouseLeave={handleSocialLeave}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ─── Link Columns ─── */}
            <div ref={linksRef} className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 text-left">
              {Object.values(FOOTER_LINKS).map((column) => (
                <div key={column.title} className="footer-col flex flex-col items-start">
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-4 text-[#F7941D]">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="footer-link group relative inline-block text-sm transition-colors duration-200 text-slate-300 hover:text-white font-normal"
                        >
                          {link.label}
                          <span
                            className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 origin-left bg-[#F7941D]"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="border-t relative z-10 border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-400 font-normal">
              © {currentYear}{' '}
              <span className="font-semibold text-[#F7941D]">
                Spinny Inc.
              </span>
              {' '}All rights reserved. Buying back time, one pickup at a time, across Canada.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy', href: '/privacy-policy' },
                { label: 'Terms', href: '/terms-of-service' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs transition-colors duration-200 text-slate-400 hover:text-white font-normal"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
