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
      { label: 'Wash & Fold', href: '#' },
      { label: 'Dry Cleaning', href: '#' },
      { label: 'Bulky Items', href: '#' },
      { label: 'Alterations', href: '#' },
      { label: 'Commercial Accounts', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Spinny', href: '/about' },
      { label: 'How It Works', href: '/#how-it-works-trigger' },
      { label: 'Pricing', href: '#' },
      { label: 'Vendor Partners', href: '/procedure' },
      { label: 'Careers', href: '#' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help-center' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/help-center#faq' },
      { label: 'Service Areas', href: '#' },
      { label: 'Status Page', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
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
        className="relative pt-16 md:pt-24 overflow-hidden"
        style={{ backgroundColor: 'var(--washr-blue-deep)' }}
        aria-label="Site footer"
      >
        {/* ─── WASHR Watermark ─── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-extrabold uppercase tracking-[0.3em] whitespace-nowrap"
            style={{
              fontSize: 'clamp(80px, 20vw, 260px)',
              color: 'rgba(255,255,255,0.025)',
              lineHeight: 1,
            }}
          >
            SPINNY
          </span>
        </div>

        {/* ─── Wavy SVG Top ─── */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120.9C67.81,97.78,144.29,105.39,214.34,86.91Z"
              fill="rgba(18, 40, 64, 0.4)"
            />
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="var(--washr-blue-deep)"
            />
          </svg>
        </div>

        {/* ─── Main footer content ─── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* ─── Brand column ─── */}
            <div ref={brandRef} className="lg:col-span-4">
              <div className="mb-5">
                <Image
                  src="/Logo.png"
                  alt="Spinny"
                  width={130}
                  height={40}
                  className="h-auto w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
              >
                Premium on-demand laundry and garment care.
                Commercial-grade quality from vetted professionals,
                delivered seamlessly to your doorstep.
              </p>

              {/* Social icons with spring bounce */}
              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                    onMouseEnter={handleSocialEnter}
                    onMouseLeave={handleSocialLeave}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ─── Link columns with sliding underline ─── */}
            <div ref={linksRef} className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {Object.values(FOOTER_LINKS).map((column) => (
                <div key={column.title} className="footer-col">
                  <h3
                    className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
                    style={{ color: 'rgba(255, 255, 255, 0.35)' }}
                  >
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="footer-link group relative inline-block text-sm transition-colors duration-200"
                          style={{ color: 'rgba(255, 255, 255, 0.55)' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--washr-orange)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
                          }}
                        >
                          {link.label}
                          {/* Sliding underline */}
                          <span
                            className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 origin-left"
                            style={{ backgroundColor: 'var(--washr-orange)' }}
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

        {/* ─── Bottom bar ─── */}
        <div
          className="border-t relative z-10"
          style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-xs text-center md:text-left"
              style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            >
              © {currentYear}{' '}
              <span
                className="font-semibold"
                style={{ color: 'var(--washr-orange)', opacity: 0.8 }}
              >
                Spinny Inc.
              </span>
              {' '}All rights reserved. Premium garment care, delivered across Canada.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200 group relative"
                  style={{ color: 'rgba(255, 255, 255, 0.3)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.3)'; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
