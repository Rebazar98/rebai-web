import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import SolutionBridge from "@/components/sections/solution-bridge";
import ProductPreview from "@/components/sections/product-preview";
import ChatbotSection from "@/components/sections/chatbot-section";
import ServicesPreview from "@/components/sections/services-preview";
import Pricing from "@/components/sections/pricing";
import UseCases from "@/components/sections/use-cases";
import WhyRebAI from "@/components/sections/why-rebai";
import CTABanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "RebAI — Monitorización automática del BOPA de Asturias con IA",
  description:
    "Nunca más pierdas una ayuda o normativa del BOPA de Asturias. Alertas automáticas diarias para ingenierías, consultoras y cooperativas del Principado de Asturias.",
  keywords: [
    "BOPA Asturias automatización",
    "alertas BOPA Asturias automáticas",
    "monitorización boletín oficial Asturias IA",
    "subvenciones IDEPA Asturias automático",
    "software BOPA ingeniería asturiana",
    "automatización burocracia Principado de Asturias",
  ],
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
      <ProductPreview />
      <ChatbotSection />
      <ServicesPreview />
      <Pricing />
      <UseCases />
      <WhyRebAI />
      <CTABanner />
    </>
  );
}
