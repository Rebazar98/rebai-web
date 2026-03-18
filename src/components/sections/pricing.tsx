import Link from "next/link";
import { Check } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";

const TIERS = [
  {
    name: "Básico",
    description: "Para autónomos y despachos pequeños",
    features: [
      "1 perfil de alertas BOPA",
      "Resumen diario por email",
      "Histórico últimos 30 días",
      "Soporte por email",
    ],
    cta: "Solicitar info",
    href: "/contacto?tier=basico",
    highlighted: false,
  },
  {
    name: "Profesional",
    description: "Para ingenierías y consultoras técnicas",
    badge: "Más elegido",
    features: [
      "Hasta 5 perfiles de alertas",
      "Email + WhatsApp",
      "BOPA + Subvenciones IDEPA",
      "Exportación a PDF/Excel",
      "Histórico completo",
      "Soporte prioritario",
    ],
    cta: "Solicitar demo",
    href: "/contacto?tier=profesional&tipo=demo",
    highlighted: true,
  },
  {
    name: "Empresa",
    description: "Para cooperativas y empresas con varios técnicos",
    features: [
      "Perfiles ilimitados",
      "Email + WhatsApp + integración propia",
      "BOPA + IDEPA + BOE filtrado",
      "API/webhook para tu sistema",
      "Onboarding personalizado",
      "Gestor de cuenta dedicado",
    ],
    cta: "Contactar",
    href: "/contacto?tier=empresa",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="bg-[#F8FAFC] py-24 lg:py-32 border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel className="mb-6">Precios</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              Elige el plan que encaja con tu empresa
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Precios personalizados según tu caso. Solicita la info y
              te hacemos una propuesta a medida sin compromiso.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 100}>
              <div
                className={`relative flex flex-col h-full rounded-[16px] border p-8 ${
                  tier.highlighted
                    ? "bg-[#1B2A4A] border-[#1B2A4A] shadow-[0_8px_32px_rgba(27,42,74,0.25)]"
                    : "bg-white border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold shadow-sm">
                      ⭐ {tier.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      tier.highlighted ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      tier.highlighted ? "text-white/60" : "text-[#64748B]"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Price placeholder */}
                <div
                  className={`mb-8 pb-6 border-b ${
                    tier.highlighted ? "border-white/10" : "border-[#F1F5F9]"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      tier.highlighted ? "text-white/70" : "text-[#64748B]"
                    }`}
                  >
                    Precio según caso
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      tier.highlighted ? "text-white/40" : "text-[#94A3B8]"
                    }`}
                  >
                    Solicita una propuesta personalizada
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.highlighted
                            ? "bg-[#2563EB]/20"
                            : "bg-[#EFF6FF]"
                        }`}
                      >
                        <Check
                          size={11}
                          className={
                            tier.highlighted ? "text-[#60A5FA]" : "text-[#2563EB]"
                          }
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.highlighted ? "text-white/80" : "text-[#374151]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tier.href}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-150 ${
                    tier.highlighted
                      ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                      : "bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#2563EB] text-[#0F172A] hover:text-[#2563EB]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-center text-[#94A3B8] text-sm mt-8">
            Sin permanencia mínima · Sin sorpresas · Empresa asturiana
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
