"use client"

import {HeroSection} from "@/components/sections/landing/HeroSection";
import {ProblemsSection} from "@/components/sections/landing/ProblemsSection";
import {ObjectivesSection} from "@/components/sections/landing/ObjectifSection";
import {Solution} from "@/components/special/Solution";
import {ThreeDAiSection} from "@/components/special/ThreeDAiSection";
import {MultiplatformSection} from "@/components/sections/landing/MultiplatformSection";
import {AuthSection} from "@/components/sections/landing/auth-section";
import {ContentSection} from "@/components/sections/landing/content-section";
import TestimonialsSection from "@/components/sections/landing/testimonials-section";
import CTASection from "@/components/special/cta-section";
import {LinkApp} from "@/components/special/LinkApp";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <HeroSection />
      <ProblemsSection />
      <ObjectivesSection />
      <Solution />
      <ThreeDAiSection />
      <MultiplatformSection />
      <AuthSection />
      <ContentSection />
      <TestimonialsSection />
      <CTASection />
      <LinkApp />
    </main>
  )
}



