"use client"

import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Crée un timeout pour animer la page après 2000ms
    // const time = setTimeout(() => {
    //   animatePageIn();
    // }, 400);
    animatePageIn();

    // Nettoyage du timeout lorsqu'on démonte le composant ou lors d'une nouvelle exécution
    // return () => clearTimeout(time);
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen h-[calc(110vh)]  z-[999] bg-secondary  fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen h-[calc(110vh)] z-[999] bg-secondary  fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen h-[calc(110vh)] z-[999] bg-secondary  fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen h-[calc(110vh)] z-[999] bg-secondary  fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  )
}
