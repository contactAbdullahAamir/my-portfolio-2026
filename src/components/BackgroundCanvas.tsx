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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Cosmic starfield generation
    const starCount = Math.min(Math.floor((width * height) / 10000), 120);
    const stars: Star[] = [];

    const starColorsDark = [
      '#FFFFFF',
      '#E0E7FF', // light indigo
      '#BAE6FD', // light cyan
      '#FDE68A', // soft starlight gold
      '#C7D2FE', // soft lavender
    ];

    const starColorsLight = [
      '#6366F1', // indigo
      '#0284C7', // cyan
      '#D97706', // amber
      '#475569', // slate
    ];

    for (let i = 0; i < starCount; i++) {
      const colors = isDark ? starColorsDark : starColorsLight;
      const color = colors[Math.floor(Math.random() * colors.length)];
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: isDark ? Math.random() * 0.6 + 0.2 : Math.random() * 0.3 + 0.1,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        color,
      });
    }

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let frame = 0;

    const render = () => {
      frame++;
      // Smooth mouse follow (celestial lens)
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Celestial nebula ambient haze
      if (isDark) {
        // Subtle deep space radial glows
        const nebulaGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          450
        );
        nebulaGrad.addColorStop(0, 'rgba(99, 102, 241, 0.07)'); // Indigo core
        nebulaGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.03)'); // Cyan halo
        nebulaGrad.addColorStop(1, 'rgba(7, 8, 13, 0)');
        ctx.fillStyle = nebulaGrad;
        ctx.fillRect(0, 0, width, height);

        // Fixed secondary cosmic nebula in top right
        const cornerNebula = ctx.createRadialGradient(
          width * 0.85,
          height * 0.2,
          0,
          width * 0.85,
          height * 0.2,
          600
        );
        cornerNebula.addColorStop(0, 'rgba(147, 51, 234, 0.04)');
        cornerNebula.addColorStop(1, 'rgba(7, 8, 13, 0)');
        ctx.fillStyle = cornerNebula;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Solar observatory daylight halo
        const solarGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          400
        );
        solarGrad.addColorStop(0, 'rgba(79, 70, 229, 0.04)');
        solarGrad.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = solarGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Constellation lines near mouse
      const maxConnectDist = 130;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Cosmic slow drift
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Gravitational lens pull toward mouse
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouse.radius) {
          const force = (1 - distToMouse / mouse.radius) * 0.5;
          s.x += (dx / distToMouse) * force;
          s.y += (dy / distToMouse) * force;
        }

        // Twinkle calculation
        s.twinklePhase += s.twinkleSpeed;
        const twinkle = Math.sin(s.twinklePhase) * 0.35;
        const currentAlpha = Math.max(0.1, Math.min(1, s.baseAlpha + twinkle));

        // Connect constellation lines between nearby stars near the cursor
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dist = Math.hypot(s.x - s2.x, s.y - s2.y);

          if (dist < maxConnectDist) {
            // Stronger lines when near the celestial mouse pointer
            const mouseFactor = distToMouse < mouse.radius * 1.5 ? 1.5 : 0.4;
            const alpha = (1 - dist / maxConnectDist) * (isDark ? 0.12 : 0.06) * mouseFactor;

            ctx.strokeStyle = isDark
              ? `rgba(165, 180, 252, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }

        // Render star
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra stellar lens flare for larger stars
        if (s.size > 1.8 && isDark) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2, s.y);
          ctx.lineTo(s.x + s.size * 2, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2);
          ctx.lineTo(s.x, s.y + s.size * 2);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
    />
  );
};
