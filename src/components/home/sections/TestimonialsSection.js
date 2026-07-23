'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────
   Star Component
   ───────────────────────────────────────────────── */
function StarIcon({ filled = true }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 1.5L9.8 5.9L14.5 6.3L10.9 9.5L11.9 14.1L8 11.8L4.1 14.1L5.1 9.5L1.5 6.3L6.2 5.9L8 1.5Z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   Testimonials Data
   ───────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 'review-1',
    name: 'Sarah Chen',
    initials: 'SC',
    role: 'Marketing Director',
    location: 'Toronto, ON',
    rating: 5,
    quote: 'I\'ve tried every laundry service in the city. Spinny is the only one that actually delivers commercial-grade quality. My dry cleaning comes back flawless — every single time.',
    avatarColor: '#1B3A5C',
    featured: true,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'review-2',
    name: 'Marcus Thompson',
    initials: 'MT',
    role: 'Software Engineer',
    location: 'Vancouver, BC',
    rating: 5,
    quote: 'As someone who works 12-hour days, Spinny gave me back my weekends. The pickup and delivery is seamless — I literally set a schedule and forget about laundry entirely.',
    avatarColor: '#2A5580',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'review-3',
    name: 'Priya Patel',
    initials: 'PP',
    role: 'Pediatric Nurse',
    location: 'Calgary, AB',
    rating: 5,
    quote: 'The hypoallergenic detergent option is a game-changer for my family. My daughter has sensitive skin and Spinny is the first service that actually accommodates that without upcharging.',
    avatarColor: '#F28C28',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'review-4',
    name: 'David Lavoie',
    initials: 'DL',
    role: 'Restaurant Owner',
    location: 'Montreal, QC',
    rating: 5,
    quote: 'We use Spinny for all our restaurant linens and staff uniforms. The quality is consistently perfect and the turnaround time is unmatched. It\'s become essential to our operation.',
    avatarColor: '#1B3A5C',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'review-5',
    name: 'Emily Rodriguez',
    initials: 'ER',
    role: 'Real Estate Agent',
    location: 'Ottawa, ON',
    rating: 5,
    quote: 'First impressions matter in my line of work. Spinny keeps my wardrobe looking impeccable. Transparent pricing means no surprises — just expert care at a fair price.',
    avatarColor: '#2A5580',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'review-6',
    name: 'James Park',
    initials: 'JP',
    role: 'University Professor',
    location: 'Edmonton, AB',
    rating: 5,
    quote: 'The real-time tracking is brilliant. I can see exactly where my garments are in the process. It\'s the kind of transparency you\'d expect from a premium service — and Spinny delivers.',
    avatarColor: '#F28C28',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

/* ─────────────────────────────────────────────────
   Animated Counter Hook
   ───────────────────────────────────────────────── */
function AnimatedStat({ value, suffix = '', label, triggerRef }) {
  const elRef = useRef(null);
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (!triggerRef?.current || !elRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isFloat = String(value).includes('.');
    const numericVal = parseFloat(value);

    const animate = () => {
      if (prefersReduced) {
        setDisplayed(String(value));
        return;
      }
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = numericVal * eased;
        setDisplayed(isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString());
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { animate(); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(triggerRef.current);

    return () => obs.disconnect();
  }, [value, triggerRef]);

  return (
    <div className="text-center">
      <div
        ref={elRef}
        className="text-2xl md:text-3xl font-extrabold tabular-nums"
        style={{ color: 'var(--washr-blue)' }}
      >
        {displayed}{suffix}
      </div>
      <div className="text-xs font-medium mt-1 tracking-wide uppercase" style={{ color: 'var(--washr-text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   3D Tilt Card
   ───────────────────────────────────────────────── */
function TestimonialCard({ review, index, isFeatured, cardRef }) {
  const innerRef = useRef(null);

  const onMouseMove = (e) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(innerRef.current, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  };

  const onMouseLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power3.out',
      transformPerspective: 800,
    });
  };

  return (
    <div
      ref={cardRef}
      className="break-inside-avoid mb-6"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={innerRef}
        className="glass-card p-7 transition-shadow duration-300 hover:shadow-xl group will-change-transform"
        style={{
          border: isFeatured
            ? '1px solid rgba(242, 140, 40, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: isFeatured
            ? '0 8px 32px rgba(242,140,40,0.08), 0 2px 8px rgba(27,58,92,0.06)'
            : 'var(--washr-shadow-sm)',
          borderLeft: isFeatured ? '3px solid var(--washr-orange)' : undefined,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Featured badge */}
        {isFeatured && (
          <div className="mb-4">
            <span
              className="pill-badge"
              style={{
                backgroundColor: 'rgba(242, 140, 40, 0.1)',
                color: 'var(--washr-orange)',
                border: '1px solid rgba(242,140,40,0.2)',
                fontSize: '10px',
              }}
            >
              ✦ Featured Review
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="star-rating mb-4" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, j) => (
            <StarIcon key={j} filled={j < review.rating} />
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className={`leading-relaxed mb-6 ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}
          style={{ color: 'var(--washr-text-secondary)' }}
        >
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: '1px solid var(--washr-gray-mid)' }}
        >
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-full"
            style={{
              width: isFeatured ? 48 : 40,
              height: isFeatured ? 48 : 40,
              backgroundColor: review.avatarColor,
              boxShadow: isFeatured
                ? `0 0 0 3px rgba(242,140,40,0.25), 0 0 0 6px rgba(242,140,40,0.06)`
                : 'none',
            }}
          >
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes={isFeatured ? '48px' : '40px'}
              className="object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">
              {review.initials}
            </span>
          </div>

          <div className="min-w-0">
            <div className="text-sm font-bold truncate" style={{ color: 'var(--washr-blue)' }}>
              {review.name}
            </div>
            <div className="text-xs truncate" style={{ color: 'var(--washr-text-muted)' }}>
              {review.role} · {review.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   TestimonialsSection — Trust & Social Proof
   ───────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards with 3D entrance (rotateX fold-up)
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, rotateX: 15 },
          {
            opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: 'power3.out',
            transformPerspective: 1200,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
            delay: (i % 3) * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--washr-white)' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative orange glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 10%, rgba(242,140,40,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className="pill-badge mb-5 inline-flex"
            style={{
              color: 'var(--washr-orange)',
              backgroundColor: 'rgba(242, 140, 40, 0.08)',
              border: '1px solid rgba(242, 140, 40, 0.15)',
            }}
          >
            Trusted by Thousands
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5"
            style={{ color: 'var(--washr-blue)' }}
          >
            What Our Customers{' '}
            <span style={{ color: 'var(--washr-orange)' }}>Say</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--washr-text-secondary)' }}
          >
            Real experiences from real people who made the switch to expert-level garment care.
          </p>
        </div>

        {/* Masonry grid — CSS columns */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          style={{ columnGap: '1.5rem' }}
        >
          {TESTIMONIALS.map((review, i) => (
            <TestimonialCard
              key={review.id}
              review={review}
              index={i}
              isFeatured={review.featured}
              cardRef={(el) => { cardRefs.current[i] = el; }}
            />
          ))}
        </div>

        {/* Social proof stats bar with animated counters */}
        <div
          ref={statsRef}
          className="mt-16 pt-12 border-t"
          style={{ borderColor: 'var(--washr-gray-mid)' }}
        >
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <AnimatedStat value="4.9" suffix="/5" label="Average Rating" triggerRef={statsRef} />
            <AnimatedStat value="10000" suffix="+" label="Orders Completed" triggerRef={statsRef} />
            <AnimatedStat value="99.2" suffix="%" label="On-Time Delivery" triggerRef={statsRef} />
            <AnimatedStat value="24" suffix="h" label="Avg. Turnaround" triggerRef={statsRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
