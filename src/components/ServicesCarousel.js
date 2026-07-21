'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: 'wash-fold',
    title: 'Premium Wash & Fold',
    category: 'Everyday Laundry',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dry-cleaning',
    title: 'Eco-Friendly Dry Clean',
    category: 'Delicate Care',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bulky-items',
    title: 'Bulky Linens & Duvets',
    category: 'Heavy Load',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'alterations',
    title: 'Tailoring & Alterations',
    category: 'Bespoke Service',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesCarousel() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--washr-gray)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-8 h-px"
                style={{ backgroundColor: 'var(--washr-orange)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--washr-text-muted)' }}
              >
                Our Services
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15]"
              style={{ color: 'var(--washr-blue-deep)' }}
            >
              Explore Our{' '}
              <span style={{ color: 'var(--washr-orange)' }}>Premium</span>
              <br className="hidden sm:block" />
              Garment Care Services
            </h2>
          </div>

          <a
            href="#cta"
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105 self-start md:self-auto"
            style={{
              borderColor: 'var(--washr-blue-deep)',
              color: 'var(--washr-blue-deep)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--washr-blue-deep)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--washr-blue-deep)';
            }}
          >
            View All Services
          </a>
        </div>

        {/* 2×2 Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'var(--washr-gray)',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(18, 40, 64, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image with overlapping info bar */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating info bar — overlaps bottom of image */}
                <div
                  className="absolute bottom-12 left-3 right-3 translate-y-1/2 bg-white rounded-xl px-5 py-3.5 flex items-center justify-between z-10"
                  style={{
                    boxShadow: '0 4px 20px rgba(18, 40, 64, 0.08)',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="w-4 h-px"
                        style={{ backgroundColor: 'var(--washr-text-muted)' }}
                      />
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: 'var(--washr-text-muted)' }}
                      >
                        {service.category}
                      </span>
                    </div>
                    <h3
                      className="text-sm md:text-base font-extrabold leading-tight"
                      style={{ color: 'var(--washr-blue-deep)' }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow button */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--washr-orange)',
                      boxShadow: '0 3px 10px rgba(242, 140, 40, 0.3)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Spacer for the overlapping bar */}
              <div className="h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
