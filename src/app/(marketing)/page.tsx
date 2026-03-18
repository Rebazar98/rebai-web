import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import SolutionBridge from "@/components/sections/solution-bridge";
import ServicesPreview from "@/components/sections/services-preview";
import UseCases from "@/components/sections/use-cases";
import WhyRebAI from "@/components/sections/why-rebai";
import CTABanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "RebAI — Automatización con IA para el sector técnico en Asturias",
  description:
    "Automatizamos la burocracia que frena a tu empresa en Asturias. Agentes de IA, análisis del BOPA y automatización de procesos para ingenierías, consultoras y cooperativas del Principado.",
};

export default function HomePage() {
  return (
    <>
      {/* Structured data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RebAI",
            url: "https://rebai.es",
            description:
              "Automatización de procesos con IA para el sector técnico y rural en Asturias.",
            areaServed: {
              "@type": "Place",
              name: "Principado de Asturias, España",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "hola@rebai.es",
              contactType: "customer service",
              availableLanguage: "Spanish",
            },
          }),
        }}
      />
      <Hero />
      <PainPoints />
      <SolutionBridge />
      <ServicesPreview />
      <UseCases />
      <WhyRebAI />
      <CTABanner />
    </>
  );
}
