import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import CapabilitiesShowcase from "@/components/sections/capabilities-showcase";
import PainPoints from "@/components/sections/pain-points";
import WhyTrazev from "@/components/sections/why-trazev";
import CTABanner from "@/components/sections/cta-banner";
import FAQSection from "@/components/sections/faq-section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IA y automatización para ayuntamientos y empresas",
  description:
    "TRAZEV ayuda a ayuntamientos y empresas privadas de toda España a redactar planes urbanísticos, atender al ciudadano, vigilar boletines oficiales y medir la satisfacción ciudadana con IA.",
  keywords: [
    "TRAZEV automatización",
    "Boletín Inteligente",
    "IA para ayuntamientos",
    "redacción de planes urbanísticos con IA",
    "asistente de atención al ciudadano",
    "satisfacción ciudadana ayuntamiento",
    "automatización administrativa para empresas",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TRAZEV",
            url: SITE.url,
            description:
              "TRAZEV ayuda a ayuntamientos y empresas privadas de toda España a redactar planes urbanísticos, atender al ciudadano, vigilar boletines oficiales y medir la satisfacción ciudadana con IA.",
            areaServed: {
              "@type": "Country",
              name: "España",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: SITE.email,
              contactType: "customer service",
              availableLanguage: "Spanish",
            },
          }),
        }}
      />
      <Hero />
      <TrustStrip />
      <CapabilitiesShowcase />
      <PainPoints />
      <WhyTrazev />
      <FAQSection />
      <CTABanner />
    </>
  );
}
