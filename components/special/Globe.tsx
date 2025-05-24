'use client'
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for canvas to be fully mounted
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || !canvasRef.current) return;

    let phi = 0;
    let animationId: number;

    try {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        // Base color is now green
        baseColor: [0.2, 0.8, 0.2],
        // Marker color is now violet
        markerColor: [0.6, 0, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [15.6928, -11.4467], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      globeRef.current = globe;
    } catch (error) {
      console.error('Failed to create globe:', error);
    }

    return () => {
      if (globeRef.current) {
        try {
          globeRef.current.destroy();
        } catch (error) {
          console.error('Failed to destroy globe:', error);
        }
        globeRef.current = null;
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isReady]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
