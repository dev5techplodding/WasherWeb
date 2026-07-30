'use client';

import { useEffect, useRef } from 'react';

export default function WaterCanvas({ density = 35, interactive = true, speed = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse interactive position
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particles array
    const particles = [];
    const colorChoices = ['rgba(14, 58, 102, ', 'rgba(247, 148, 29, ', 'rgba(180, 220, 255, ', 'rgba(59, 130, 246, '];

    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1.5,
        baseColor: colorChoices[Math.floor(Math.random() * colorChoices.length)],
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.6 * speed,
        vy: (Math.random() * -0.8 - 0.2) * speed, // slowly float upwards
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw subtle orbital water ribbon curves in background
      ctx.save();
      ctx.lineWidth = 1.5;
      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const ribbonColor = r === 1 ? 'rgba(247, 148, 29, 0.12)' : 'rgba(14, 58, 102, 0.08)';
        ctx.strokeStyle = ribbonColor;
        
        const offsetY = Math.sin(time + r * 1.5) * 30;
        const flex = Math.cos(time * 0.8 + r) * 20;

        ctx.moveTo(0, height * 0.3 + r * 150 + offsetY);
        ctx.bezierCurveTo(
          width * 0.3 + flex,
          height * 0.2 + offsetY * 1.5,
          width * 0.7 - flex,
          height * 0.5 - offsetY,
          width,
          height * 0.4 + r * 100 + flex
        );
        ctx.stroke();
      }
      ctx.restore();

      // Render & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Mouse attraction/repulsion subtle force
        if (interactive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
          }
        }

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Pulsing glow size and alpha
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
        const currentRadius = p.radius + Math.sin(p.pulse * 0.7) * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${Math.max(0.05, Math.min(0.8, currentAlpha))})`;
        ctx.fill();

        // Extra outer glow for orange particles
        if (p.baseColor.includes('247, 148, 29')) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, currentRadius * 2.2), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(247, 148, 29, ${Math.max(0.01, currentAlpha * 0.25)})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [density, interactive, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0"
    />
  );
}
