'use client';

import React, { useEffect, useRef, useState } from 'react';

// --- CONFIGURATION ---
const TOTAL_FRAMES = 247; // 247 frames from the ezgif export
const FRAME_PREFIX = 'ezgif-frame-'; // e.g., ezgif-frame-001.jpg
const FRAME_EXTENSION = 'jpg';
const SCROLL_SPEED_MULTIPLIER = 500; // Total scroll height is 500vh

// Large futuristic text phrases that scroll upwards over the video
const LARGE_PARALLAX_TEXTS = [
  "C Y C L O N E",
  "P U R I T Y",
  "R E S T O R E",
  "P E R F E C T I O N",
  "D E L I V E R E D"
];

export default function FrameScrollSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Smooth interpolation tracking refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  // 1. Efficient Frame Sequence Preloader
  useEffect(() => {
    let loadedCount = 0;
    const imagesArray = [];
    let hasError = false;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Generates pad-left formatting (e.g., frame_001.jpg, frame_245.jpg)
      const formattedNum = String(i).padStart(3, '0');
      img.src = `/frames/${FRAME_PREFIX}${formattedNum}.${FRAME_EXTENSION}`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!hasError) {
          hasError = true;
          setUsingFallback(true);
          setIsLoaded(true);
          console.warn(
            `Unable to load /frames/${FRAME_PREFIX}${formattedNum}.${FRAME_EXTENSION}. Rendered futuristic gradient fallback. Make sure JPEGs are inside /public/frames/`
          );
        }
      };

      imagesArray.push(img);
    }

    imagesRef.current = imagesArray;

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // 2. Track window scrolling relative to our container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollHeight = rect.height - windowHeight;

      const currentScroll = -rect.top;
      let progress = currentScroll / totalScrollHeight;
      progress = Math.max(0, Math.min(1, progress)); // clamp 0 to 1

      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Render and Animation Loop (LERP)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const drawLoop = () => {
      // Linear Interpolation for liquid-smooth scrubbing (adjust 0.07 to change drag/inertia)
      const ease = 0.07;
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * ease;

      // Fit canvas to physical pixel dimensions
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);

      if (usingFallback) {
        // Futuristic vector/gradient fallback if images are missing
        const gradient = ctx.createRadialGradient(
          rect.width / 2,
          rect.height / 2,
          10,
          rect.width / 2,
          rect.height / 2,
          Math.max(rect.width, rect.height) * 0.6
        );
        const shift = currentProgressRef.current * 360;
        gradient.addColorStop(0, `hsla(${shift}, 75%, 20%, 1)`);
        gradient.addColorStop(0.5, 'var(--washr-blue-deep, #122840)');
        gradient.addColorStop(1, '#08121d');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, rect.width, rect.height);

        // Technical sweep lines
        ctx.strokeStyle = 'rgba(242, 140, 40, 0.2)'; // washr-orange-glow
        ctx.lineWidth = 1;
        ctx.beginPath();
        const sweepY = currentProgressRef.current * rect.height;
        ctx.moveTo(0, sweepY);
        ctx.lineTo(rect.width, sweepY);
        ctx.stroke();
      } else {
        // Map current progress to a frame index (0 - 244)
        const frameIndex = Math.min(
          Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1)),
          TOTAL_FRAMES - 1
        );
        const img = imagesRef.current[frameIndex];

        if (img && img.complete && img.naturalWidth !== 0) {
          // Object-cover style drawing calculation
          const imgWidth = img.naturalWidth;
          const imgHeight = img.naturalHeight;
          const ratio = Math.max(rect.width / imgWidth, rect.height / imgHeight);
          const newWidth = imgWidth * ratio;
          const newHeight = imgHeight * ratio;
          const x = (rect.width - newWidth) / 2;
          const y = (rect.height - newHeight) / 2;

          ctx.drawImage(img, x, y, newWidth, newHeight);
        }
      }

      // Parallax upward-scrolling text element sync
      const textLayer = document.getElementById('immersive-upward-text-layer');
      if (textLayer) {
        // Adjust these values to control the start and end position of the text scroll track
        const startY = window.innerHeight * 0.8; // Starts near the bottom viewport
        const endY = -(LARGE_PARALLAX_TEXTS.length * 280); // Sweeps completely off the top of the screen
        const calculatedY = startY + currentProgressRef.current * (endY - startY);

        textLayer.style.transform = `translate3d(0, ${calculatedY}px, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(drawLoop);
    };

    if (isLoaded) {
      drawLoop();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoaded, usingFallback]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[var(--washr-blue-deep,#122840)] select-none"
      style={{ height: `${SCROLL_SPEED_MULTIPLIER}vh` }} // Controls scroll speed mapping
    >
      {/* Loading overlay screen */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--washr-blue-deep,#122840)] text-white">
          <div className="font-mono text-sm tracking-widest text-[var(--washr-orange,#F28C28)] mb-3 uppercase">
            Buffering Immersive Stream...
          </div>
          <div className="w-64 h-1 bg-[rgba(255,255,255,0.15)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--washr-orange,#F28C28)] transition-all duration-100"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="font-mono text-xs mt-2 opacity-50">
            {loadingProgress}% READY
          </div>
        </div>
      )}

      {/* Sticky Fullscreen Wrapper */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">

        {/* Full-screen Canvas Video Loop */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />

        {/* Dynamic Dark Gradient Overlay to ensure text legibility */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[var(--washr-blue-deep,#122840)] via-transparent to-[var(--washr-blue-deep,#122840)] opacity-45 pointer-events-none z-10" /> */}

        {/* THE IMMERSIVE PARALLAX TEXT LAYER (Scrolls upward over the video canvas) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pointer-events-none">
          <div
            id="immersive-upward-text-layer"
            className="flex flex-col items-center text-center space-y-16 md:space-y-48 w-full will-change-transform"
          >
            {LARGE_PARALLAX_TEXTS.map((phrase, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <span className="font-mono text-xs md:text-sm text-[var(--washr-orange,#F28C28)] tracking-[0.2em] mb-4 uppercase opacity-100">
                  SYSTEM CYCLE 0{index + 1}
                </span>

                {/* Massive header text using mix-blend-difference to react colors dynamically with underlying video */}
                <h2
                  className="text-[11vw] md:text-[14vw] font-black text-white leading-none tracking-tighter select-none break-keep mix-blend-difference"
                  style={{
                    letterSpacing: '-0.08em',
                    textShadow: '0 4px 30px rgba(0,0,0,0.15)'
                  }}
                >
                  {phrase}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal Tech Scanline UI Layer to give an ultra-premium HUD feeling */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,40,64,0)_95%,rgba(242,140,40,0.03)_97%,rgba(18,40,64,0)_100%)] bg-[size:100%_20px] pointer-events-none z-30" />

        {/* Minimal Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-40 text-white font-mono text-[10px] tracking-widest opacity-60">
          <span className="mb-2">SCROLL DOWN TO REVEAL</span>
          <div className="h-12 w-[1px] bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-4 bg-[var(--washr-orange,#F28C28)] animate-bounce" />
          </div>
        </div> */}

      </div>
    </div>
  );
}