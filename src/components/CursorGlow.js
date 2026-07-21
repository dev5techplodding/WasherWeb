'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/* ─────────────────────────────────────────────────
   CursorGlow — Custom magnetic cursor
   - Small 10px orange dot that lags behind pointer (spring)
   - Expands to 48px ring on interactive element hover
   - mix-blend-mode: difference for premium feel
   - Hidden on touch/mobile devices
   ───────────────────────────────────────────────── */
export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices or reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide native cursor on body
    document.body.style.cursor = 'none';

    // GSAP quickTo for spring-lag trailing
    const moveDot = gsap.quickTo(dot, 'css', { duration: 0.15, ease: 'power3.out' });
    const moveRing = gsap.quickTo(ring, 'css', { duration: 0.5, ease: 'power3.out' });

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows fast
      gsap.to(dot, {
        x: mouseX - 5,
        y: mouseY - 5,
        duration: 0.08,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      // Ring lags for spring feel
      gsap.to(ring, {
        x: mouseX - 20,
        y: mouseY - 20,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    // Expand ring on interactive elements
    const onEnterInteractive = () => {
      gsap.to(ring, {
        width: 48,
        height: 48,
        x: mouseX - 24,
        y: mouseY - 24,
        opacity: 0.6,
        duration: 0.25,
        ease: 'power2.out',
      });
      gsap.to(dot, {
        opacity: 0,
        scale: 0,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onLeaveInteractive = () => {
      gsap.to(ring, {
        width: 40,
        height: 40,
        x: mouseX - 20,
        y: mouseY - 20,
        opacity: 0.3,
        duration: 0.25,
        ease: 'power2.out',
      });
      gsap.to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.1, ease: 'power2.out' });
      gsap.to(dot, { scale: 1.5, duration: 0.1, ease: 'power2.out' });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: 'elastic.out(1.2, 0.5)' });
      gsap.to(dot, { scale: 1, duration: 0.25, ease: 'elastic.out(1.2, 0.5)' });
    };

    // Delegate hover events to all interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, label, [data-cursor="pointer"]';

    const handleDelegatedEnter = (e) => {
      if (e.target.closest(interactiveSelector)) {
        onEnterInteractive();
      }
    };
    const handleDelegatedLeave = (e) => {
      if (e.target.closest(interactiveSelector)) {
        onLeaveInteractive();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleDelegatedEnter);
    document.addEventListener('mouseout', handleDelegatedLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Fade in on first move
    const onFirstMove = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      window.removeEventListener('mousemove', onFirstMove);
    };
    window.addEventListener('mousemove', onFirstMove);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleDelegatedEnter);
      document.removeEventListener('mouseout', handleDelegatedLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Dot — fast follower */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: 'var(--washr-orange)',
          opacity: 0,
          transform: 'translate(-999px, -999px)',
          willChange: 'transform',
          mixBlendMode: 'normal',
        }}
      />
      {/* Ring — slow spring follower */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid var(--washr-orange)',
          opacity: 0,
          transform: 'translate(-999px, -999px)',
          willChange: 'transform',
          mixBlendMode: 'normal',
        }}
      />
    </>
  );
}
