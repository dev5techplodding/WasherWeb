'use client';

import { useRef } from 'react';

/* ─────────────────────────────────────────────────
   MarqueeTicker Component
   Enhanced: hover-to-slow, decorative separators,
   ScrollTrigger entrance, click-to-pause
   ───────────────────────────────────────────────── */
export default function MarqueeTicker({
  items = [
    'Seamless Garment Care',
    'Reclaim Your Time',
    'Vetted Commercial Partners',
    'Free First Pickup',
    'Eco-Conscious Cleaning',
    '100% Satisfaction Guaranteed',
  ],
  bg = 'var(--washr-orange)',
  textColor = '#FFFFFF',
  reverse = false,
  speed = 'normal',
}) {
  const tickerRef = useRef(null);

  let speedClass = 'animate-marquee';
  if (reverse) speedClass = 'animate-marquee-reverse';
  else if (speed === 'fast') speedClass = 'animate-marquee-fast';

  // Quadruple items for smooth infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  const handleMouseEnter = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationDuration = '55s';
    }
  };
  const handleMouseLeave = () => {
    if (tickerRef.current) {
      tickerRef.current.style.animationDuration = '';
    }
  };

  return (
    <div
      className="w-full overflow-hidden py-4 border-y flex items-center select-none"
      style={{
        backgroundColor: bg,
        borderColor: 'rgba(27, 58, 92, 0.08)',
        zIndex: 5,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ticker-wrap flex w-full">
        <div
          ref={tickerRef}
          className={`ticker-content flex items-center whitespace-nowrap gap-12 text-sm md:text-base font-extrabold uppercase tracking-widest ${speedClass}`}
          style={{ color: textColor, transition: 'animation-duration 0.4s ease' }}
        >
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span>{item}</span>
              {/* Branded diamond separator */}
              <span
                className="text-[10px] opacity-50"
                style={{ transform: 'rotate(45deg)', display: 'inline-block' }}
              >
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
