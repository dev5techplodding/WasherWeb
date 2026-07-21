'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

/* ─────────────────────────────────────────────────
   Navigation Links
   ───────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works-trigger', section: 'cinematic-scroll-section' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
  { label: 'Pricing', href: '#', section: null },
];

/* ─────────────────────────────────────────────────
   Navbar — Sticky header with scroll-aware styling
   Enhancements:
   - Scroll spy via IntersectionObserver (active link)
   - Magnetic CTA button (elastic snap)
   - Sliding underline on nav links (scaleX from center)
   - Dark mobile full-screen overlay with stagger animation
   ───────────────────────────────────────────────── */
export default function Navbar() {
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
            <a href="#hero" className="flex-shrink-0 relative z-10" aria-label="Washr home">
              <Image
                src="/logoLogin.png"
                alt="Washr"
                width={120}
                height={36}
                priority
                className="h-9 w-auto transition-all duration-300"
                style={{
                  filter: scrolled || mobileOpen ? 'none' : 'brightness(0) invert(1)',
                }}
              />
            </a>

            {/* ─── Desktop Links ─── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.section;
                const textColor = scrolled ? 'var(--washr-blue)' : 'var(--washr-white)';

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 group cursor-pointer overflow-hidden"
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
                  </a>
                );
              })}
            </div>

            {/* ─── Desktop CTA ─── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
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
                Log In
              </a>

              {/* Magnetic CTA */}
              <div
                className="relative"
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
              >
                <a
                  ref={ctaBtnRef}
                  href="#"
                  id="nav-cta"
                  className="block text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:shadow-[0_4px_20px_rgba(242,140,40,0.45)] active:scale-[0.96] cursor-pointer"
                  style={{
                    backgroundColor: 'var(--washr-orange)',
                    boxShadow: '0 2px 12px rgba(242, 140, 40, 0.3)',
                    willChange: 'transform',
                  }}
                >
                  Schedule Pickup
                </a>
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
                <a
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
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="mobile-cta-group flex flex-col gap-3 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <a
                href="#"
                onClick={handleLinkClick}
                className="mobile-link w-full py-4 rounded-full text-white font-bold text-center text-base transition-all duration-300 active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--washr-orange)',
                  boxShadow: '0 4px 24px rgba(242, 140, 40, 0.4)',
                }}
              >
                Schedule Pickup
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="mobile-link w-full py-4 rounded-full font-semibold text-center text-base transition-all duration-300"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                }}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
