'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      ScrollTrigger.defaults({ toggleActions: 'play none none reverse' });
      return;
    }

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for frame updates
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // ResizeObserver to continuously track document height changes (e.g. async API loads)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return <>{children}</>;
}
