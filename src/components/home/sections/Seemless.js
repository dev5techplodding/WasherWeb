'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────
   SVG Tab Icons (replacing emojis)
   ───────────────────────────────────────────────── */
const BookingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const TrackingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>
);
const PrefsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TABS = [
  { id: 'booking', label: 'Booking', Icon: BookingIcon },
  { id: 'tracking', label: 'Operations', Icon: TrackingIcon },
  { id: 'preferences', label: 'Preferences', Icon: PrefsIcon },
];

export default function Seemless() {
  const containerRef = useRef(null);
  const mockupRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);
  const tabContentRef = useRef(null);

  // Spring mouse position using gsap.quickTo
  const badge1Quick = useRef(null);
  const badge2Quick = useRef(null);
  const badge3Quick = useRef(null);

  const [hoveringCta, setHoveringCta] = useState(false);
  const [activeTab, setActiveTab] = useState('booking');
  const [bagCount, setBagCount] = useState(1);
  const [serviceType, setServiceType] = useState('wash-fold');
  const [detergent, setDetergent] = useState('eco');
  const [foldMethod, setFoldMethod] = useState('folded');
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  /* ─── Spring parallax for badges using gsap.quickTo ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (!badge1Ref.current || !badge2Ref.current || !badge3Ref.current) return;

    // quickTo creates a spring-based setter for smooth lag
    badge1Quick.current = {
      x: gsap.quickTo(badge1Ref.current, 'x', { duration: 0.8, ease: 'power3.out' }),
      y: gsap.quickTo(badge1Ref.current, 'y', { duration: 0.8, ease: 'power3.out' }),
    };
    badge2Quick.current = {
      x: gsap.quickTo(badge2Ref.current, 'x', { duration: 1.0, ease: 'power3.out' }),
      y: gsap.quickTo(badge2Ref.current, 'y', { duration: 1.0, ease: 'power3.out' }),
    };
    badge3Quick.current = {
      x: gsap.quickTo(badge3Ref.current, 'x', { duration: 0.6, ease: 'power3.out' }),
      y: gsap.quickTo(badge3Ref.current, 'y', { duration: 0.6, ease: 'power3.out' }),
    };

    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = (e.clientX - cx) / 30;
      const ry = (e.clientY - cy) / 30;

      badge1Quick.current.x(-rx * 0.6);
      badge1Quick.current.y(-ry * 0.6);
      badge2Quick.current.x(rx * 0.9);
      badge2Quick.current.y(ry * 0.9);
      badge3Quick.current.x(rx * 0.4);
      badge3Quick.current.y(ry * 0.4);

      // Mockup parallax
      gsap.to(mockupRef.current, {
        x: rx,
        y: ry,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* ─── GSAP entrance animations ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power4.out' },
      });

      tl.fromTo(leftTextRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 0.12, duration: 1.2 })
        .fromTo(rightTextRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 0.12, duration: 1.2 }, '<')
        .fromTo(mockupRef.current, { y: 80, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.2)' }, '-=0.8')
        .fromTo(
          [badge1Ref.current, badge2Ref.current, badge3Ref.current],
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.8)' },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ─── Tab transition with GSAP cross-fade ─── */
  const switchTab = useCallback((tabId) => {
    if (tabId === activeTab || !tabContentRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setActiveTab(tabId);
      return;
    }

    // Animate out then switch
    gsap.to(tabContentRef.current, {
      opacity: 0, x: -16, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        setActiveTab(tabId);
        gsap.fromTo(tabContentRef.current, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' });
      },
    });
  }, [activeTab]);

  const getPricePerBag = () => {
    if (serviceType === 'wash-fold') return 25;
    if (serviceType === 'dry-clean') return 39;
    return 32;
  };
  const getEstimatedDays = () => serviceType === 'dry-clean' ? '36 Hours' : '24 Hours';
  const totalEstimate = getPricePerBag() * bagCount;

  return (
    <section
      ref={containerRef}
      id="seamless-tactile"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white py-24 px-4 md:px-6"
      aria-label="Spinny Tactile Interactive Experience"
    >
      {/* ─── Background Split text ─── */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none px-4 md:px-12">
        <h2
          ref={leftTextRef}
          className="text-[12vw] sm:text-[15vw] font-black uppercase leading-none tracking-tighter"
          style={{ color: 'var(--washr-blue)', opacity: 0.12, fontFamily: 'AvenirNext, var(--font-sans)' }}
          aria-hidden="true"
        >
          SEAM
        </h2>
        <h2
          ref={rightTextRef}
          className="text-[12vw] sm:text-[15vw] font-black uppercase leading-none tracking-tighter"
          style={{ color: 'var(--washr-blue)', opacity: 0.12, fontFamily: 'AvenirNext, var(--font-sans)' }}
          aria-hidden="true"
        >
          LESS
        </h2>
      </div>

      {/* ─── Center Interactive Content Stack ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
        {/* Eyebrow */}
        <span
          className="pill-badge mb-6"
          style={{
            color: 'var(--washr-orange)',
            backgroundColor: 'rgba(242, 140, 40, 0.08)',
            border: '1px solid rgba(242, 140, 40, 0.15)',
          }}
        >
          Tactile Interaction
        </span>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          style={{ color: 'var(--washr-blue)' }}
        >
          Sensing is Believing.
          <br />
          <span style={{ color: 'var(--washr-orange)' }}>Interact & Feel the Difference.</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Explore our live dashboard. Customize fabric formulas, calculate bag pricing, and see real-time dispatch routing.
        </p>

        {/* Central overlapping mockup */}
        <div
          ref={mockupRef}
          className="relative w-full max-w-[600px] aspect-[16/11] mb-12 will-change-transform"
        >
          {/* Main Dashboard Widget */}
          <div className="w-full h-full glass-card overflow-hidden p-5 bg-white/90 flex flex-col gap-4 text-left shadow-[0_24px_64px_rgba(27,58,92,0.12)] border border-slate-200/60 relative">
            {/* Header Tabs */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex gap-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => switchTab(tab.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: activeTab === tab.id ? 'var(--washr-blue)' : 'transparent',
                      color: activeTab === tab.id ? 'white' : 'rgb(100,116,139)',
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = 'rgb(241,245,249)';
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <tab.Icon />
                    {tab.label}
                  </button>
                ))}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                Spinny Engine v2.4
              </span>
            </div>

            {/* Tab Content with transition ref */}
            <div ref={tabContentRef} className="flex-1 flex flex-col justify-between gap-4">
              {/* TAB 1: BOOKING SIMULATOR */}
              {activeTab === 'booking' && (
                <div className="flex-1 flex flex-col justify-between gap-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Service Mode</label>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { id: 'wash-fold', label: 'Wash & Fold Care', price: '$25/bag' },
                          { id: 'dry-clean', label: 'Dry Clean Press', price: '$39/bag' },
                          { id: 'wash-iron', label: 'Wash & Iron Press', price: '$32/bag' },
                        ].map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setServiceType(s.id)}
                            className="w-full p-2 rounded-xl text-xs font-bold border flex items-center justify-between transition-all duration-250 cursor-pointer"
                            style={{
                              borderColor: serviceType === s.id ? 'var(--washr-orange)' : '#f1f5f9',
                              backgroundColor: serviceType === s.id ? 'rgba(242,140,40,0.05)' : '#f8fafc',
                              color: serviceType === s.id ? 'var(--washr-blue)' : '#64748b',
                            }}
                          >
                            <span>{s.label}</span>
                            <span className="text-[10px] opacity-75">{s.price}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-center bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block text-center">Bag Quantity</span>
                      <div className="flex items-center justify-center gap-5">
                        <button
                          onClick={() => setBagCount(Math.max(1, bagCount - 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-base font-bold flex items-center justify-center cursor-pointer transition-colors"
                        >-</button>
                        <span className="text-2xl font-black w-8 text-center" style={{ color: 'var(--washr-blue)' }}>{bagCount}</span>
                        <button
                          onClick={() => setBagCount(Math.min(10, bagCount + 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-base font-bold flex items-center justify-center cursor-pointer transition-colors"
                        >+</button>
                      </div>
                      <p className="text-[10px] text-center text-slate-400 mt-1">Holds approx. 12-15 lbs per bag</p>
                    </div>
                  </div>

                  <div className="bg-[var(--washr-blue-deep)] text-white p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase text-slate-400">Total Estimate</span>
                      <h3 className="text-xl font-black" style={{ color: 'var(--washr-orange)' }}>${totalEstimate}.00</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-black uppercase text-slate-400 block">Turnaround</span>
                      <span className="text-xs font-extrabold">{getEstimatedDays()} Guarantee</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: OPERATIONS */}
              {activeTab === 'tracking' && (
                <div className="flex-1 flex flex-col justify-between gap-4 font-sans">
                  <div className="relative h-24 bg-slate-100 rounded-xl overflow-hidden border border-slate-200/50 flex items-center p-4">
                    <div className="absolute left-8 right-1/3 h-1 bg-[var(--washr-orange)] rounded-full" />
                    <div className="absolute inset-x-8 h-1 bg-[var(--washr-orange)]/20 rounded-full" />
                    <div className="absolute left-2/3 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--washr-blue)" aria-hidden="true">
                        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-9 12h12a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <span className="bg-[var(--washr-blue)] text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow">Transit</span>
                    </div>
                    <div className="absolute left-8 w-3 h-3 rounded-full bg-[var(--washr-blue)] border-2 border-white shadow" />
                    <div className="absolute right-8 w-3 h-3 rounded-full bg-slate-400 border-2 border-white shadow" />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span style={{ color: 'var(--washr-blue)' }}>Route Optimization Engine</span>
                      <span className="text-[10px] font-black text-emerald-600 uppercase">EV Active</span>
                    </div>
                    <div className="h-[1px] bg-slate-200/60" />
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Our platform automatically schedules and dispatches orders into custom, carbon-neutral EV delivery loops, clustered geographically to minimize emissions.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: PREFERENCES */}
              {activeTab === 'preferences' && (
                <div className="flex-1 flex flex-col justify-between gap-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Detergent Formula</label>
                      {[
                        { id: 'eco', title: 'Eco-Friendly Bio-Clean', desc: 'Hypoallergenic plant extracts' },
                        { id: 'sensitive', title: 'Ultra Sensitive Zero Scent', desc: '100% dye-free & safe for infants' },
                        { id: 'heavy', title: 'Heavy Duty Deep Clean', desc: 'Enzyme-boosted odor removal' },
                      ].map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDetergent(d.id)}
                          className="p-2.5 rounded-xl border text-left flex flex-col transition-all duration-250 cursor-pointer"
                          style={{
                            borderColor: detergent === d.id ? 'var(--washr-orange)' : '#f1f5f9',
                            backgroundColor: detergent === d.id ? 'rgba(242,140,40,0.05)' : '#f8fafc',
                          }}
                        >
                          <span className="text-[11px] font-extrabold" style={{ color: 'var(--washr-blue)' }}>{d.title}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5">{d.desc}</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Fold Finishing</label>
                      {[
                        { id: 'folded', label: 'Standard Neat Fold', desc: 'Tuck and stack, sealed fresh' },
                        { id: 'hung', label: 'Hanger Wrapped', desc: 'Shirts and dresses on wire hangers' },
                      ].map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFoldMethod(f.id)}
                          className="p-3 rounded-xl border flex items-center gap-3 transition-all duration-250 cursor-pointer text-left"
                          style={{
                            borderColor: foldMethod === f.id ? 'var(--washr-blue)' : '#f1f5f9',
                            backgroundColor: foldMethod === f.id ? 'rgba(27,58,92,0.05)' : '#f8fafc',
                          }}
                        >
                          <div className="text-left">
                            <p className="text-xs font-bold" style={{ color: 'var(--washr-blue)' }}>{f.label}</p>
                            <p className="text-[9px] text-slate-400">{f.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] text-center text-slate-500 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                    Settings saved! Your preferences will apply to all future pickups.
                  </div>
                </div>
              )}
            </div>

            {/* Hotspots */}
            <div
              onMouseEnter={() => setHoveredHotspot('nfc')}
              onMouseLeave={() => setHoveredHotspot(null)}
              className="absolute top-1/4 right-6 flex items-center justify-center cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-[var(--washr-orange)] border-2 border-white ring-4 ring-[var(--washr-orange-glow)]" style={{ animation: 'pulse 2s infinite' }} />
              {hoveredHotspot === 'nfc' && (
                <div className="absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-48 bg-slate-900/95 text-white p-2.5 rounded-xl text-[10px] leading-relaxed shadow-lg border border-slate-800 z-30">
                  <span className="font-black uppercase block mb-1" style={{ color: 'var(--washr-orange)' }}>NFC Tracking</span>
                  Every garment bag receives a unique NFC chip upon doorstep pickup, ensuring 100% item matching.
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredHotspot('facility')}
              onMouseLeave={() => setHoveredHotspot(null)}
              className="absolute bottom-1/3 left-6 flex items-center justify-center cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-[var(--washr-orange)] border-2 border-white ring-4 ring-[var(--washr-orange-glow)]" style={{ animation: 'pulse 2s 0.7s infinite' }} />
              {hoveredHotspot === 'facility' && (
                <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-48 bg-slate-900/95 text-white p-2.5 rounded-xl text-[10px] leading-relaxed shadow-lg border border-slate-800 z-30">
                  <span className="font-black uppercase block mb-1" style={{ color: 'var(--washr-orange)' }}>Cleanroom Facility</span>
                  Clothes are washed exclusively in certified commercial grade facilities utilizing soft water filters.
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setHoveredHotspot('routing')}
              onMouseLeave={() => setHoveredHotspot(null)}
              className="absolute bottom-6 right-1/4 flex items-center justify-center cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-[var(--washr-orange)] border-2 border-white ring-4 ring-[var(--washr-orange-glow)]" style={{ animation: 'pulse 2s 1.4s infinite' }} />
              {hoveredHotspot === 'routing' && (
                <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-48 bg-slate-900/95 text-white p-2.5 rounded-xl text-[10px] leading-relaxed shadow-lg border border-slate-800 z-30">
                  <span className="font-black uppercase block mb-1" style={{ color: 'var(--washr-orange)' }}>Eco Transport</span>
                  Optimized cluster routes minimize transit time. Deliveries dispatched using carbon-neutral fleets.
                </div>
              )}
            </div>
          </div>

          {/* Floating badge 1 */}
          <div
            ref={badge1Ref}
            className="absolute -top-6 -left-6 md:-left-12 tactile-sticker w-20 h-20 rounded-full flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: 'var(--washr-orange)', transform: 'rotate(-12deg)', willChange: 'transform' }}
          >
            <span className="text-xs font-black tracking-tight leading-none">24H</span>
            <span className="text-[9px] font-bold opacity-80 uppercase tracking-tighter">SPEED</span>
          </div>

          {/* Floating badge 2 */}
          <div
            ref={badge2Ref}
            className="absolute -bottom-6 -right-6 md:-right-12 tactile-sticker w-24 h-24 flex items-center justify-center text-center"
            style={{
              backgroundColor: 'var(--washr-blue)',
              color: 'white',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: 'rotate(15deg)',
              willChange: 'transform',
            }}
          >
            <div className="text-[9px] font-black leading-tight tracking-wide">100%<br />ECO-CARE</div>
          </div>

          {/* Floating badge 3 */}
          <div
            ref={badge3Ref}
            className="absolute bottom-6 -left-8 md:-left-14 glass-card px-4 py-2 border border-white/60 flex items-center gap-2"
            style={{ boxShadow: 'var(--washr-shadow-lg)', transform: 'rotate(-5deg)', willChange: 'transform' }}
          >
            <span className="text-xs font-black" style={{ color: 'var(--washr-orange)' }}>★</span>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">FREE PICKUP</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#how-it-works-trigger"
            onMouseEnter={() => setHoveringCta(true)}
            onMouseLeave={() => setHoveringCta(false)}
            className="group relative px-10 py-5 rounded-full text-white font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] text-center cursor-pointer"
            style={{
              backgroundColor: 'var(--washr-orange)',
              boxShadow: '0 4px 24px rgba(242, 140, 40, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Your First Pickup
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href="#about"
            className="px-10 py-5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] text-center border-2 bg-transparent hover:bg-slate-50 cursor-pointer"
            style={{ color: 'var(--washr-blue)', borderColor: 'var(--washr-gray-mid)' }}
          >
            Explore Services
          </a>

          {/* "First order free!" floating tooltip */}
          <div
            className="absolute top-1/2 left-[calc(100%+12px)] -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out hidden lg:block"
            style={{
              opacity: hoveringCta ? 1 : 0,
              transform: hoveringCta ? 'translateY(-50%) scale(1) rotate(-8deg)' : 'translateY(-40%) scale(0.8) rotate(0deg)',
            }}
          >
            <div
              className="tactile-sticker px-4 py-2.5 rounded-2xl text-xs font-black text-white"
              style={{ backgroundColor: 'var(--washr-blue)', boxShadow: 'var(--washr-shadow-lg)' }}
            >
              First order free!
            </div>
          </div>
        </div>

        {/* Mobile tooltip */}
        <div
          className="mt-4 lg:hidden transition-all duration-300"
          style={{ opacity: hoveringCta ? 1 : 0.7 }}
        >
          <span
            className="pill-badge text-[11px]"
            style={{
              backgroundColor: 'rgba(27,58,92,0.06)',
              color: 'var(--washr-blue)',
              border: '1px solid rgba(27,58,92,0.1)',
            }}
          >
            First order free!
          </span>
        </div>
      </div>

      {/* Decorative background blurs — enhanced opacity */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" style={{ background: 'var(--washr-orange)' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none" style={{ background: 'var(--washr-blue)' }} aria-hidden="true" />
    </section>
  );
}
