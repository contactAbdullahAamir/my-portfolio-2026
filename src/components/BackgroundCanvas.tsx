import React, { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  isDark: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    // Optimized star count for device tier (prevents battery drain & frame drops)
    const starCount = isMobile
      ? Math.min(Math.floor((width * height) / 20000), 45)
      : Math.min(Math.floor((width * height) / 12000), 90);

    const stars: Star[] = [];

    const starColorsDark = [
      '#FFFFFF',
      '#E0E7FF',
      '#BAE6FD',
      '#FDE68A',
      '#C7D2FE',
    ];

    const starColorsLight = [
      '#6366F1',
      '#0284C7',
      '#D97706',
      '#475569',
    ];

    for (let i = 0; i < starCount; i++) {
      const colors = isDark ? starColorsDark : starColorsLight;
      const color = colors[Math.floor(Math.random() * colors.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.6,
        baseAlpha: isDark ? Math.random() * 0.55 + 0.2 : Math.random() * 0.3 + 0.1,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        color,
      });
    }

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: isMobile ? 100 : 160,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };

    // Pause rendering loop when document is not visible (saves CPU/GPU battery)
    let isPageVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const maxConnectDist = isMobile ? 80 : 120;

    const render = () => {
      if (!isPageVisible) return;

      // Smooth mouse follow
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle celestial nebula ambient haze
      if (isDark) {
        const nebulaGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          isMobile ? 300 : 450
        );
        nebulaGrad.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
        nebulaGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.02)');
        nebulaGrad.addColorStop(1, 'rgba(7, 8, 13, 0)');
        ctx.fillStyle = nebulaGrad;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Gravitational lens pull if mouse is active
        if (mouse.active) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < mouse.radius) {
            const force = (1 - distToMouse / mouse.radius) * 0.4;
            s.x += (dx / distToMouse) * force;
            s.y += (dy / distToMouse) * force;
          }
        }

        s.twinklePhase += s.twinkleSpeed;
        const twinkle = Math.sin(s.twinklePhase) * 0.3;
        const currentAlpha = Math.max(0.1, Math.min(1, s.baseAlpha + twinkle));

        // Constellation lines (optimized: only for desktop or when mouse active)
        if (!isMobile && mouse.active) {
          for (let j = i + 1; j < stars.length; j++) {
            const s2 = stars[j];
            const dist = Math.hypot(s.x - s2.x, s.y - s2.y);

            if (dist < maxConnectDist) {
              const alpha = (1 - dist / maxConnectDist) * (isDark ? 0.08 : 0.04);
              ctx.strokeStyle = isDark
                ? `rgba(165, 180, 252, ${alpha})`
                : `rgba(79, 70, 229, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(s.x, s.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.stroke();
            }
          }
        }

        // Draw star
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    // Defer start slightly so initial DOM paint, layout, and fonts take precedence
    const startTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(render);
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
    />
  );
};
