'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

/* ─────────────────────────────────────────────────
   Navigation Links
   ───────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home', href: '/', section: null },
  { label: 'Services', href: '/services', section: null },
  { label: 'Why Spinny ?', href: '/why-spinny', section: null },
  { label: 'The Spinny 4', href: '/the-spinny-4', section: null },
  { label: 'About Us', href: '/about', section: null },
  { label: 'How it Works', href: '/process', section: null },
];

/* ─────────────────────────────────────────────────
   Navbar — Sticky header with scroll-aware styling
   Enhancements:
   - Scroll spy via IntersectionObserver (active link)
   - Magnetic CTA button (elastic snap)
   - Sliding underline on nav links (scaleX from center)
   - Dark mobile full-screen overlay with stagger animation
   - Active page detection via pathname
   ───────────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const magneticAnimRef = useRef(null);

  /* ─── Scroll detection ─── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─── Scroll spy via IntersectionObserver ─── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.section).filter(Boolean);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ─── GSAP entrance ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  /* ─── Mobile menu animation ─── */
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      if (!prefersReduced) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll('.mobile-link'),
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out', stagger: 0.06, delay: 0.1 }
        );
        gsap.fromTo(
          mobileMenuRef.current.querySelector('.mobile-cta-group'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.35 }
        );
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ─── Magnetic CTA button ─── */
  const handleCtaMouseMove = useCallback((e) => {
    if (!ctaBtnRef.current) return;
    const rect = ctaBtnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * 0.35;
    const dy = (e.clientY - centerY) * 0.35;

    gsap.to(ctaBtnRef.current, {
      x: dx,
      y: dy,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, []);

  const handleCtaMouseLeave = useCallback(() => {
    gsap.to(ctaBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1.1, 0.5)',
      overwrite: 'auto',
    });
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--washr-gray-mid)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 16px rgba(27, 58, 92, 0.08)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">

            {/* ─── Logo ─── */}
            <Link href="/" className="flex-shrink-0 relative z-10" aria-label="Spinny home">
              <Image
                src={scrolled && !mobileOpen ? '/Logo.png' : '/darklogo.png'}
                alt="Spinny"
                width={120}
                height={36}
                priority
                className="h-9 w-auto transition-all duration-300"
              />
            </Link>

            {/* ─── Desktop Links ─── */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const textColor = scrolled ? 'var(--washr-blue)' : 'var(--washr-white)';

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-semibold rounded-lg transition-colors duration-200 group cursor-pointer overflow-hidden whitespace-nowrap"
                    style={{ color: textColor }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = scrolled
                        ? 'var(--washr-gray)'
                        : 'rgba(255,255,255,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {link.label}
                    {/* Sliding underline — scaleX from center, orange */}
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-center"
                      style={{
                        backgroundColor: 'var(--washr-orange)',
                        transform: isActive ? 'scaleX(0.65)' : 'scaleX(0)',
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 group-hover:scale-x-100 scale-x-0 transition-all duration-250 origin-center"
                      style={{ backgroundColor: 'var(--washr-orange)' }}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>

            {/* ─── Desktop CTA ─── */}
            <div className="hidden md:flex items-center gap-2">
              {/* Google Play Navbar Icon Button */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
                style={{
                  backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.15)',
                  border: scrolled ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.25)',
                }}
                aria-label="Google Play Store"
                title="Google Play Store"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.83C3.37 2.07 3.25 2.45 3.25 2.96V21.04C3.25 21.55 3.37 21.93 3.6 22.17L3.68 22.24L13.79 12.13V11.87L3.68 1.76L3.6 1.83Z" fill="#00A0FF" />
                  <path d="M17.15 15.5L13.79 12.13V11.87L17.15 8.5L17.23 8.55L21.2 10.81C22.33 11.45 22.33 12.55 21.2 13.19L17.23 15.45L17.15 15.5Z" fill="#FFCC00" />
                  <path d="M17.23 15.45L13.79 12L3.6 22.17C3.97 22.57 4.59 22.62 5.3 22.22L17.23 15.45Z" fill="#FF3A44" />
                  <path d="M17.23 8.55L5.3 1.78C4.59 1.38 3.97 1.43 3.6 1.83L13.79 12L17.23 8.55Z" fill="#00E676" />
                </svg>
              </a>

              {/* App Store Navbar Icon Button */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
                style={{
                  backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.15)',
                  color: scrolled ? 'var(--washr-blue)' : '#fff',
                  border: scrolled ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(255, 255, 255, 0.25)',
                }}
                aria-label="Apple App Store"
                title="Apple App Store"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.84-.99 2.94 1.07.08 2.15-.54 2.8-1.34z" />
                </svg>
              </a>

              <Link
                href="/help-center"
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
                style={{ color: scrolled ? 'var(--washr-blue)' : 'var(--washr-white)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = scrolled
                    ? 'var(--washr-gray)'
                    : 'rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--washr-orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <span>Help Center</span>
              </Link>

              {/* Magnetic CTA */}
              <div
                className="relative"
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
              >
                <Link
                  ref={ctaBtnRef}
                  href="https://spinnylaundry.com/login"
                  id="nav-cta"
                  className="block text-xs font-bold px-4 py-2 rounded-full text-white transition-all duration-200 hover:shadow-[0_4px_20px_rgba(242,140,40,0.45)] active:scale-[0.96] cursor-pointer"
                  style={{
                    backgroundColor: 'var(--washr-orange)',
                    boxShadow: '0 2px 12px rgba(242, 140, 40, 0.3)',
                    willChange: 'transform',
                  }}
                >
                  Login
                </Link>
              </div>
            </div>

            {/* ─── Mobile Hamburger ─── */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer"
              style={{ backgroundColor: mobileOpen ? 'var(--washr-gray)' : 'transparent' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    backgroundColor: scrolled || mobileOpen ? 'var(--washr-blue)' : 'var(--washr-white)',
                    transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                    width: '100%',
                  }}
                />
                <span
                  className="block h-[2px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: scrolled || mobileOpen ? 'var(--washr-blue)' : 'var(--washr-white)',
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? 'translateX(10px)' : 'none',
                  }}
                />
                <span
                  className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    backgroundColor: scrolled || mobileOpen ? 'var(--washr-blue)' : 'var(--washr-white)',
                    transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                    width: mobileOpen ? '100%' : '66%',
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Menu Overlay ─── */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="fixed inset-0 z-40 md:hidden flex flex-col"
          style={{
            backgroundColor: 'rgba(18, 40, 64, 0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Decorative background blob */}
          <div
            className="absolute top-20 right-8 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(242,140,40,0.12) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Spacer for navbar height */}
          <div className="h-[72px]" />

          <div className="px-8 py-10 flex flex-col h-[calc(100%-72px)]">
            {/* Links */}
            <div className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="mobile-link text-2xl font-bold py-4 px-4 rounded-2xl transition-colors duration-200 cursor-pointer border border-transparent"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="mobile-cta-group flex flex-col gap-3 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="grid grid-cols-2 gap-2.5 mb-1">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="mobile-link flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/15"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.83C3.37 2.07 3.25 2.45 3.25 2.96V21.04C3.25 21.55 3.37 21.93 3.6 22.17L3.68 22.24L13.79 12.13V11.87L3.68 1.76L3.6 1.83Z" fill="#00A0FF" />
                    <path d="M17.15 15.5L13.79 12.13V11.87L17.15 8.5L17.23 8.55L21.2 10.81C22.33 11.45 22.33 12.55 21.2 13.19L17.23 15.45L17.15 15.5Z" fill="#FFCC00" />
                    <path d="M17.23 15.45L13.79 12L3.6 22.17C3.97 22.57 4.59 22.62 5.3 22.22L17.23 15.45Z" fill="#FF3A44" />
                    <path d="M17.23 8.55L5.3 1.78C4.59 1.38 3.97 1.43 3.6 1.83L13.79 12L17.23 8.55Z" fill="#00E676" />
                  </svg>
                  <span>Google Play</span>
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="mobile-link flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/15"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.84-.99 2.94 1.07.08 2.15-.54 2.8-1.34z" />
                  </svg>
                  <span>App Store</span>
                </a>
              </div>

              <Link
                href="https://spinnylaundry.com/login"
                onClick={handleLinkClick}
                className="mobile-link w-full py-4 rounded-full text-white font-bold text-center text-base transition-all duration-300 active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--washr-orange)',
                  boxShadow: '0 4px 24px rgba(242, 140, 40, 0.4)',
                }}
              >
                Login
              </Link>
              <Link
                href="/help-center"
                onClick={handleLinkClick}
                className="mobile-link w-full py-4 rounded-full font-semibold text-center text-base transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--washr-orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <span>Help Center</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
