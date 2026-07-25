'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MEMBERSHIP_CONTENT } from '@/components/data';

gsap.registerPlugin(ScrollTrigger);

export default function MembershipSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 34 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="membership" className="py-20 md:py-28 bg-white" aria-labelledby="membership-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={cardRef}
          className="rounded-[32px] p-8 md:p-12 lg:p-14 text-white grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center"
          style={{ backgroundColor: 'var(--washr-blue-deep)', boxShadow: '0 30px 80px rgba(18,40,64,0.25)' }}
        >
          <div>
            <span
              className="pill-badge mb-5 inline-flex"
              style={{ backgroundColor: 'rgba(242,140,40,0.15)', color: 'var(--washr-orange)', border: '1px solid rgba(242,140,40,0.3)' }}
            >
              {MEMBERSHIP_CONTENT.eyebrow}
            </span>

            <h2 id="membership-heading" className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              {MEMBERSHIP_CONTENT.heading}
            </h2>

            <p className="mt-5 text-sm md:text-base leading-7 text-white/75 max-w-xl">
              {MEMBERSHIP_CONTENT.description}
            </p>

            <Link
              href={MEMBERSHIP_CONTENT.cta.url}
              className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 active:scale-[0.98]"
              style={{ backgroundColor: 'var(--washr-orange)', color: '#fff', boxShadow: '0 8px 24px rgba(242,140,40,0.35)' }}
            >
              {MEMBERSHIP_CONTENT.cta.label} — Buy Back Your Time for Good
            </Link>
          </div>

          <ul className="flex flex-col gap-4">
            {MEMBERSHIP_CONTENT.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--washr-orange)' }}
                  aria-hidden="true"
                />
                <span className="text-sm md:text-base text-white/85 leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
