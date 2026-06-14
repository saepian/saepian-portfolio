import { useEffect, useRef } from "react";

export default function Atmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Grid coordinates representation for the deforming mesh net
    interface MeshNode {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }

    let meshGrid: MeshNode[][] = [];
    const GRID_SIZE = 75; // pixels between grid points

    // Particles drifting through the mesh
    interface FlowParticle {
      x: number;
      y: number;
      size: number;
      speed: number;
      phase: number;
      color: string;
      seed: number;
    }

    let flowParticles: FlowParticle[] = [];
    const PARTICLE_COUNT = 30;

    const initMeshAndParticles = (w: number, h: number) => {
      meshGrid = [];
      const cols = Math.ceil(w / GRID_SIZE) + 1;
      const rows = Math.ceil(h / GRID_SIZE) + 1;

      for (let r = 0; r < rows; r++) {
        const rowNodes: MeshNode[] = [];
        for (let c = 0; c < cols; c++) {
          rowNodes.push({
            x: c * GRID_SIZE,
            y: r * GRID_SIZE,
            baseX: c * GRID_SIZE,
            baseY: r * GRID_SIZE,
            vx: 0,
            vy: 0,
          });
        }
        meshGrid.push(rowNodes);
      }

      flowParticles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        flowParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 3.2 + 1.2, // Slightly larger particles for high visibility
          speed: Math.random() * 0.8 + 0.3,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.45 ? "rgba(220, 38, 38, 0.6)" : "rgba(255, 255, 255, 0.45)", // Higher ambient opacity
          seed: Math.random() * 100,
        });
      }
    };

    // Fully robust resize handler with viewport fallbacks to prevent 0px canvas sizes
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      let w = rect.width;
      let h = rect.height;

      if (!w || !h) {
        w = window.innerWidth;
        h = window.innerHeight;
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      // Reset transforms before applying dpr scaling to prevent multiple compound scalings
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      initMeshAndParticles(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    // Immediate invocation on load for instant visualization
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Main drawing run loop
    const render = () => {
      try {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        if (w <= 0 || h <= 0) {
          animationFrameId = requestAnimationFrame(render);
          return;
        }

        ctx.clearRect(0, 0, w, h);

        // Increment time
        time += 0.005;

        // Mouse position interpolation for smooth lag chasing
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

        // Simulated virtual pointer coords so that it ALWAYS animates beautifully,
        // even when there is no cursor interaction or on touch screens!
        let activeX = mouseRef.current.x;
        let activeY = mouseRef.current.y;
        if (mouseRef.current.targetX < -500) {
          // Slow lazy organic figure-8 orbit near the screen center
          activeX = w / 2 + Math.sin(time * 0.4) * (w * 0.28);
          activeY = h / 2 + Math.cos(time * 0.25) * (h * 0.18);
        }

        // 1. Draw Mouse Ambient Radial Glow Blur (Vibrant space cloud red glow)
        const glowRad = 520;
        const radialGlow = ctx.createRadialGradient(
          activeX,
          activeY,
          0,
          activeX,
          activeY,
          glowRad
        );
        radialGlow.addColorStop(0, "rgba(220, 38, 38, 0.16)"); // Vibrant central core
        radialGlow.addColorStop(0.35, "rgba(220, 38, 38, 0.05)");
        radialGlow.addColorStop(0.7, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(activeX, activeY, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // 2. Undulating Interactive Fluid Ribbon Streams (High-Contrast Waves)
        const drawSineRibbon = (offsetY: number, amplitude: number, frequency: number, speed: number, strokeStyle: string, lineWidth: number) => {
          ctx.beginPath();
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = lineWidth;

          for (let x = 0; x <= w + 20; x += 10) {
            // Compound sine waves for harmonic natural complexity
            const wave1 = Math.sin(x * frequency + time * speed) * amplitude;
            const wave2 = Math.cos(x * (frequency * 0.45) - time * (speed * 0.7)) * (amplitude * 0.45);
            
            let y = offsetY + wave1 + wave2;

            // Push/deflect waves dynamically based on the active focal point
            const dx = x - activeX;
            const dy = y - activeY;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < 320) {
              const push = (320 - dist) * 0.42;
              y += (dy / dist) * push;
            }

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        };

        // Highly visible wave currents distributed across the screen
        // Red prime wave
        drawSineRibbon(h * 0.5, 110, 0.002, 1.4, "rgba(220, 38, 38, 0.38)", 2.5);
        // Bright translucent secondary wave
        drawSineRibbon(h * 0.42, 130, 0.0015, 0.9, "rgba(255, 255, 255, 0.12)", 1.2);
        // Hot crimson glowing wave
        drawSineRibbon(h * 0.58, 80, 0.003, 1.8, "rgba(239, 68, 68, 0.48)", 3.0);
        // Fast structural signal line
        drawSineRibbon(h * 0.48, 60, 0.0045, 2.5, "rgba(255, 255, 255, 0.06)", 0.8);

        // 3. Deformable Mesh Wireframe Network (Topographical Mesh Grid)
        if (meshGrid.length > 0) {
          const rows = meshGrid.length;
          const cols = meshGrid[0] ? meshGrid[0].length : 0;

          // Update mesh grid node positions
          for (let r = 0; r < rows; r++) {
            const row = meshGrid[r];
            if (!row) continue;
            for (let c = 0; c < cols; c++) {
              const node = row[c];
              if (!node) continue;
              
              // Loop ambient idle oscillation (breathing mesh)
              const ambientOscX = Math.sin(time * 0.8 + node.baseY * 0.01) * 3.5;
              const ambientOscY = Math.cos(time * 0.6 + node.baseX * 0.01) * 4.5;

              let targetX = node.baseX + ambientOscX;
              let targetY = node.baseY + ambientOscY;

              // Mouse/simulated dynamic magnetic push
              const dx = node.baseX - activeX;
              const dy = node.baseY - activeY;
              const dist = Math.hypot(dx, dy) || 1;

              if (dist < 340) {
                const force = (340 - dist) / 340;
                targetX += (dx / dist) * force * 58;
                targetY += (dy / dist) * force * 58;
              }

              // Physics spring movement integration
              node.vx += (targetX - node.x) * 0.04;
              node.vy += (targetY - node.y) * 0.04;
              node.vx *= 0.88; // friction
              node.vy *= 0.88;

              node.x += node.vx;
              node.y += node.vy;
            }
          }

          // Draw grid lines
          for (let r = 0; r < rows; r++) {
            const row = meshGrid[r];
            if (!row) continue;
            for (let c = 0; c < cols; c++) {
              const node = row[c];
              if (!node) continue;

              const drawLink = (targetNode: MeshNode | undefined) => {
                if (!targetNode) return;
                // Calculate opacity based on proximity to active point
                let opacity = 0.035; // Clearly visible baseline
                const centerNodeX = (node.x + targetNode.x) / 2;
                const centerNodeY = (node.y + targetNode.y) / 2;
                const mDist = Math.hypot(centerNodeX - activeX, centerNodeY - activeY) || 1;
                if (mDist < 280) {
                  opacity += (280 - mDist) / 280 * 0.22; // Highlight on mouse sweep is clean and glowing
                }

                // Blend colors gracefully
                ctx.strokeStyle = `rgba(220, 38, 38, ${opacity})`;
                ctx.lineWidth = mDist < 200 ? 0.8 : 0.5;
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(targetNode.x, targetNode.y);
                ctx.stroke();
              };

              // Connect to right neighbor
              if (c < cols - 1) {
                drawLink(row[c + 1]);
              }
              // Connect to bottom neighbor
              if (r < rows - 1) {
                const nextRow = meshGrid[r + 1];
                if (nextRow) {
                  drawLink(nextRow[c]);
                }
              }

              // Draw small structural junction dots at each node point
              let dotOpacity = 0.06;
              const mDist = Math.hypot(node.x - activeX, node.y - activeY) || 1;
              if (mDist < 250) {
                dotOpacity += (250 - mDist) / 250 * 0.35;
              }
              ctx.fillStyle = `rgba(255, 255, 255, ${dotOpacity})`;
              ctx.beginPath();
              ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
              ctx.fill();

              // Draw slightly larger hot crimson circle for highlighted node hotspots near mouse
              if (mDist < 160 && (r + c) % 3 === 0) {
                ctx.fillStyle = `rgba(220, 38, 38, ${(160 - mDist) / 160 * 0.65})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }

        // 4. Flow-guided Ambient Dust/Particles with glowing vector tails
        flowParticles.forEach((p) => {
          if (!p) return;
          // Move particle
          p.phase += p.speed * 0.01;
          p.x += Math.cos(p.phase + p.seed) * p.speed * 1.3;
          p.y -= p.speed * 0.65; // drifting upwards

          // Loop bounds wrapping
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;

          // Magnetized attraction trigger to active point
          const dx = p.x - activeX;
          const dy = p.y - activeY;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < 200) {
            const pull = (200 - dist) / 200;
            p.x += (dx / dist) * pull * 2.2;
            p.y += (dy / dist) * pull * 2.2;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color ? p.color : "rgba(220, 38, 38, 0.65)";
          ctx.fill();

          // High visibility speed trail vectors
          const baseColor = p.color || "";
          ctx.strokeStyle = baseColor.includes("255, 255, 255") ? "rgba(255, 255, 255, 0.12)" : "rgba(220, 38, 38, 0.22)";
          ctx.lineWidth = p.size * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - Math.cos(p.phase + p.seed) * p.size * 2.8, p.y + p.size * 1.8);
          ctx.stroke();
        });

        // 5. Subtle scanline coordinates at drawing level
        ctx.fillStyle = "rgba(220, 38, 38, 0.008)";
        for (let y = 0; y < h; y += 4) {
          ctx.fillRect(0, y, w, 1);
        }
      } catch (err) {
        console.error("Canvas drawing error:", err);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 noise-bg mix-blend-overlay pointer-events-none" />
    </div>
  );
}

