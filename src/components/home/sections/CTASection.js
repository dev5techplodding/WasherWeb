'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppStoreButtons from '@/components/AppStoreButtons';

gsap.registerPlugin(ScrollTrigger);

const TRUST_ITEMS = [
  {
    label: 'No credit card required',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: 'Cancel anytime',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
  },
  {
    label: 'Priority launch access',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function CTASection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const checkmarkRef = useRef(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* ─── Content entrance ─── */
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );

      /* ─── Image entrance + parallax ─── */
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.92, x: 40 },
        {
          opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
        }
      );
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });

      /* ─── Animated drifting orbs ─── */
      [
        { ref: orb1Ref, x: 35, y: -25, dur: 9 },
        { ref: orb2Ref, x: -30, y: 20, dur: 11 },
        { ref: orb3Ref, x: 20, y: 30, dur: 7 },
      ].forEach(({ ref, x, y, dur }) => {
        if (!ref.current) return;
        gsap.to(ref.current, { x, y, duration: dur, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animate out form
    const form = e.currentTarget;
    if (!prefersReduced) {
      gsap.to(form, {
        opacity: 0, y: -20, scale: 0.95, duration: 0.3, ease: 'power2.in',
        onComplete: () => {
          setSubmitted(true);
          // Draw checkmark SVG
          setTimeout(() => {
            if (checkmarkRef.current) {
              gsap.fromTo(
                checkmarkRef.current.querySelector('path'),
                { strokeDashoffset: 80 },
                { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' }
              );
              gsap.fromTo(
                checkmarkRef.current,
                { scale: 0.7, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
              );
            }
          }, 50);
        },
      });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--washr-blue-deep) 0%, var(--washr-blue) 55%, var(--washr-blue-light) 100%)',
      }}
      aria-labelledby="cta-heading"
    >
      {/* ─── Animated drifting orbs ─── */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,140,40,0.22) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />
      <div
        ref={orb3Ref}
        className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,140,40,0.16) 0%, transparent 70%)', filter: 'blur(30px)' }}
        aria-hidden="true"
      />

      {/* ─── Ambient grid texture (echoes hero/why-spinny dark sections) ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
        aria-hidden="true"
      />

      {/* ─── Multi-layer Wavy SVG Top ─── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[70px]">
          <path d="M0,40 C200,90 400,10 600,50 C800,90 1000,10 1200,50 L1200,120 L0,120 Z" fill="#FFFFFF" opacity="0.06" />
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#FFFFFF" opacity="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ─── Content ─── */}
          <div ref={contentRef} className="flex-1 max-w-xl text-center lg:text-left">
            <span
              className="pill-badge mb-6 inline-flex"
              style={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
              }}
            >
              Now Accepting New Customers
            </span>

            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
            >
              Ready to Reclaim{' '}<br />
              <span style={{ color: 'var(--washr-orange)' }}>Your Time?</span>
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Download the Spinny app and start buying back your time today. Schedule pickups for your wardrobe, footwear, or home textiles, track orders, and manage preferences — all without lifting a finger.
            </p>

            {/* App Download Buttons */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <AppStoreButtons className="!justify-start" />
            </div>

            {/* Social proof ticker */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-white/90">
                <span style={{ color: 'var(--washr-orange)' }}>⚡</span> 10,000+ app downloads this month
              </span>
            </div>

            {/* Trust indicators with SVG icons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Image ─── */}
          <div ref={imageRef} className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative">
              <div className="relative aspect-square">
                <Image
                  src="/timesave.png"
                  alt="Washing machine animation — Spinny premium garment care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Floating stat card with ticker animation */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
