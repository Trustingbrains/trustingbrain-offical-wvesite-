import React, { useRef, useEffect } from 'react';

/**
 * WaterRippleCanvas simulates a real-time water wave ripple physics engine.
 * Reacts to mouse cursor movement, clicks, and periodic ambient drops.
 */
export default function WaterRippleCanvas({ className = '', dropRadius = 20, perturbance = 0.04, autoDrops = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Simulation buffer resolution (downscaled for fluid 60fps performance)
    const scale = 4;
    let width = Math.floor(canvas.offsetWidth / scale);
    let height = Math.floor(canvas.offsetHeight / scale);

    canvas.width = width;
    canvas.height = height;

    let size = width * height;
    let buffer1 = new Float32Array(size);
    let buffer2 = new Float32Array(size);
    let damping = 0.975;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = Math.floor(canvas.offsetWidth / scale);
      height = Math.floor(canvas.offsetHeight / scale);
      canvas.width = width;
      canvas.height = height;
      size = width * height;
      buffer1 = new Float32Array(size);
      buffer2 = new Float32Array(size);
    };

    window.addEventListener('resize', handleResize);

    // Drop creation
    const addDrop = (x, y, radius, strength) => {
      const startX = Math.max(1, Math.floor(x - radius));
      const endX = Math.min(width - 2, Math.floor(x + radius));
      const startY = Math.max(1, Math.floor(y - radius));
      const endY = Math.min(height - 2, Math.floor(y + radius));

      for (let j = startY; j <= endY; j++) {
        for (let i = startX; i <= endX; i++) {
          const distSq = (i - x) * (i - x) + (j - y) * (j - y);
          if (distSq < radius * radius) {
            const index = j * width + i;
            buffer1[index] += (1 - Math.sqrt(distSq) / radius) * strength;
          }
        }
      }
    };

    // Mouse movement listener on parent container
    const parent = canvas.parentElement;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / scale;
      const y = (e.clientY - rect.top) / scale;
      if (x >= 0 && x < width && y >= 0 && y < height) {
        addDrop(x, y, dropRadius / scale, 180);
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / scale;
      const y = (e.clientY - rect.top) / scale;
      if (x >= 0 && x < width && y >= 0 && y < height) {
        addDrop(x, y, (dropRadius * 2) / scale, 350);
      }
    };

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('click', handleClick);
    }

    // Auto rain drops
    let lastDropTime = 0;

    // Simulation loop
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const render = (time) => {
      if (autoDrops && time - lastDropTime > 1600) {
        lastDropTime = time;
        const rx = Math.random() * (width - 20) + 10;
        const ry = Math.random() * (height - 20) + 10;
        addDrop(rx, ry, (dropRadius * 1.5) / scale, 220);
      }

      // Ripple wave simulation equation
      for (let y = 1; y < height - 1; y++) {
        let row = y * width;
        for (let x = 1; x < width - 1; x++) {
          const idx = row + x;
          // Laplace operator: average of neighbors
          const val = (
            buffer1[idx - 1] +
            buffer1[idx + 1] +
            buffer1[idx - width] +
            buffer1[idx + width]
          ) * 0.5 - buffer2[idx];

          buffer2[idx] = val * damping;
        }
      }

      // Swap buffers
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      // Render ripples to image data with caustic glow & shimmer
      for (let y = 1; y < height - 1; y++) {
        let row = y * width;
        for (let x = 1; x < width - 1; x++) {
          const idx = row + x;
          const pixelIdx = idx * 4;

          // Compute surface normal gradient
          const dx = buffer1[idx + 1] - buffer1[idx - 1];
          const dy = buffer1[idx + width] - buffer1[idx - width];

          // Specular highlight
          const shading = Math.max(-80, Math.min(120, (dx - dy) * 2.5));

          if (shading !== 0) {
            // Neon violet/cyan water refraction tint
            data[pixelIdx] = Math.max(0, Math.min(255, 162 + shading));     // R
            data[pixelIdx + 1] = Math.max(0, Math.min(255, 52 + shading));   // G
            data[pixelIdx + 2] = Math.max(0, Math.min(255, 253 + shading));  // B
            data[pixelIdx + 3] = Math.min(180, Math.abs(shading) * 1.8);    // Alpha
          } else {
            data[pixelIdx + 3] = 0;
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('click', handleClick);
      }
    };
  }, [dropRadius, perturbance, autoDrops]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-75 z-0 ${className}`}
    />
  );
}
