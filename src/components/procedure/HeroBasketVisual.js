'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroBasketVisual() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-auto">
      {/* Soft Ambient Radial Backdrop Glow */}
      <div className="absolute inset-0 rounded-full bg-radial from-[#0E3A66]/15 via-[#0E3A66]/5 to-transparent blur-3xl scale-125" />
      <div className="absolute inset-0 rounded-full bg-radial from-[#F7941D]/15 via-transparent to-transparent blur-2xl translate-x-12 translate-y-12" />

      {/* Main Interactive Floating Group with Parallax & 3deg rotation animation */}
      <motion.div
        style={{
          x: mouseOffset.x,
          y: mouseOffset.y,
        }}
        animate={{
          rotate: [-3, 3, -3],
          y: [-12, 12, -12],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative z-10 w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
      >
        {/* Outer Orbiting Water Ribbon Layer (Behind Basket) */}
        <svg
          className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] pointer-events-none opacity-80"
          viewBox="0 0 400 400"
        >
          <defs>
            <linearGradient id="waterRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E3A66" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F7941D" stopOpacity="0.85" />
            </linearGradient>
            <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* EllipticalOrbit Water Flow Line */}
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="75"
            fill="none"
            stroke="url(#waterRibbonGrad)"
            strokeWidth="5"
            strokeDasharray="25 15 65 10 40 20"
            transform="rotate(-25 200 200)"
            filter="url(#ribbonGlow)"
          />

          {/* Traveling Orange Glow Particles */}
          <circle cx="90" cy="150" r="4" fill="#F7941D" className="animate-ping" />
          <circle cx="310" cy="250" r="5" fill="#F7941D" className="shadow-lg shadow-[#F7941D]/50" />
        </svg>

        {/* 3D-Style Visual Laundry Basket Structure */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl backdrop-blur-xl bg-white/70 border border-white/90 shadow-[0_30px_70px_rgba(14,58,102,0.18)] p-6 flex flex-col justify-end overflow-hidden group">
          {/* Subtle Top Glass Shine */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none" />

          {/* Freshly Folded Clothes Stacks */}
          <div className="relative z-10 space-y-2.5 mb-2">
            {/* Top Shirt Layer (Crisp White) */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="h-10 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-blue-50 border border-slate-200/80 shadow-md flex items-center justify-between px-4"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7941D] animate-pulse" />
                <span className="text-xs font-semibold text-[#0E3A66] tracking-wide">Clean Cotton Wash</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Folded
              </span>
            </motion.div>

            {/* Middle Sweater Layer (Soft Blue) */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="h-11 rounded-2xl bg-gradient-to-r from-blue-100 via-sky-50 to-blue-200/80 border border-blue-200 shadow-md flex items-center justify-between px-4"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-[#0E3A66]">Soft Cashmere Care</span>
              </div>
              <span className="text-[10px] font-medium text-blue-700 bg-white/80 px-2 py-0.5 rounded-full">
                Eco Wash
              </span>
            </motion.div>

            {/* Bottom Towel Layer (Pure White Soft Stack) */}
            <div className="h-12 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-200 border border-slate-300/70 shadow-inner flex items-center justify-between px-4">
              <span className="text-xs font-medium text-slate-600">Bedding & Linens</span>
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F7941D]" />
              </div>
            </div>
          </div>

          {/* Woven Basket Ribbed Bottom Design */}
          <div className="relative z-10 h-16 rounded-2xl bg-gradient-to-r from-slate-200/90 via-slate-100 to-slate-300/80 border border-slate-300/80 flex items-center justify-around px-3 shadow-inner">
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
            <div className="h-8 w-1 bg-slate-400/30 rounded-full" />
          </div>

          {/* Sparkling Fresh Floating Bubbles */}
          <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-blue-400/50 blur-[1px] animate-ping" />
          <div className="absolute top-12 left-6 w-4 h-4 rounded-full bg-[#F7941D]/40 blur-[1px] animate-bounce" />
        </div>

        {/* Counter Orbiting Secondary Water Ribbon */}
        <svg
          className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite_reverse] pointer-events-none opacity-60"
          viewBox="0 0 400 400"
        >
          <ellipse
            cx="200"
            cy="200"
            rx="185"
            ry="85"
            fill="none"
            stroke="url(#waterRibbonGrad)"
            strokeWidth="3"
            strokeDasharray="15 35 45 25"
            transform="rotate(35 200 200)"
          />
        </svg>

        {/* Floating Badge */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-4 -right-2 z-30 bg-white/90 backdrop-blur-md border border-[#0E3A66]/15 rounded-2xl px-4 py-2.5 shadow-xl flex items-center space-x-3"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0E3A66] to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
            ✦
          </div>
          <div>
            <p className="text-xs font-bold text-[#0E3A66]">100% Care Guaranteed</p>
            <p className="text-[10px] text-slate-500">Commercial-grade perfection</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
