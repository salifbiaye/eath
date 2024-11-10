
import React, {useEffect, useRef} from 'react';
import { BentoGrid } from './magicui/bento-grid';
import OrbitingCirclesDemo from "@/app/_integrations/page";
import Globe from "@/components/magicui/globe";
import createGlobe from "cobe";

function BentoObjectif() {
  return (
    <div className={"min-h-screen w-screen"}>
      <OrbitingCirclesDemo />
    </div>
  );
}

export default BentoObjectif;
export const GlobeDark = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

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
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
export const GlobeWhite = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,  // Réduit l'obscurité pour rendre le globe plus lumineux
      diffuse: 2,  // Augmente la diffusion pour un effet plus lumineux
      mapSamples: 16000,
      mapBrightness: 10, // Augmente la luminosité de la carte
      baseColor: [1, 1, 1], // Couleur de base blanche
      markerColor: [0.1, 0.8, 1], // Couleur des marqueurs
      glowColor: [1, 1, 1], // Couleur de l'éclat
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Appelé à chaque frame d'animation.
        // `state` sera un objet vide, renvoyez les paramètres mis à jour.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
