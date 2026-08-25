import Link from "next/link";
import { Check } from "lucide-react";

import AnimatedSection from "@/components/shared/animated-section";
import SectionLabel from "@/components/shared/section-label";
import { buildContactHref } from "@/lib/contact";

type PricingTier = {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  badge?: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
};

const TIERS: PricingTier[] = [
  {
    name: "Pro",
    description:
      "Para la persona que hoy carga con el seguimiento y necesita contexto claro para actuar antes.",
    price: "29 EUR/mes",
    priceNote: "Para empezar con criterio sin depender de revisiones manuales.",
    features: [
      "1 usuario con acceso completo al agente",
      "1 perfil de seguimiento ajustado a tu actividad",
      "Resumen claro de cada publicación que realmente te afecta",
      "Chat para preguntar impacto, requisitos y siguiente paso",
      "Criterios y fuentes ajustados a medida",
      "Alerta diaria por email para no llegar tarde",
      "Histórico y soporte por email",
    ],
    cta: "Quiero empezar con Pro",
    href: buildContactHref({ servicio: "bopa", tier: "basico" }),
    highlighted: false,
  },
  {
    name: "Equipo",
    description:
      "Para despachos, ingenierías y equipos pequeños que comparten seguimiento, criterio y decisiones.",
    price: "79 EUR/mes",
    priceNote: "Pensado para equipos que necesitan más uso, más perfiles y consulta compartida.",
    features: [
      "Hasta 5 usuarios para compartir seguimiento y consulta",
      "Hasta 5 perfiles de seguimiento por actividad o cliente",
      "Resúmenes útiles para priorizar sin repartir PDFs",
      "Agente compartido para resolver dudas y procesar publicaciones",
      "Criterios y fuentes ajustados a medida",
      "Mayor volumen de consultas y uso del chat",
      "Histórico completo, exportación y soporte prioritario",
    ],
    cta: "Quiero ver Equipo en acción",
    href: buildContactHref({ servicio: "bopa", tier: "profesional" }),
    highlighted: true,
  },
  {
    name: "Empresa",
    description:
      "Para organizaciones con varias áreas, criterios internos complejos e integraciones propias.",
    price: "A consultar",
    priceNote: "Cuando necesitas adaptar el seguimiento al funcionamiento real de tu organización.",
    features: [
      "Usuarios y perfiles de seguimiento ilimitados",
      "Resúmenes filtrados por actividad, equipo o criterio interno",
      "Agente y chat web para varios equipos y casos de uso",
      "Criterios y fuentes ajustados a medida",
      "API o webhook para conectar con tu sistema",
      "Onboarding personalizado y cuenta dedicada",
    ],
    cta: "Quiero hablar de mi caso",
    href: buildContactHref({ servicio: "bopa", tier: "empresa" }),
    highlighted: false,
  },
] as const;

export default function Pricing() {
  return (
    <section id="precios" className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <SectionLabel className="mb-6">Precios de Boletín Inteligente</SectionLabel>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Elige como empezar a dejar de revisar el boletín oficial a mano
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#64748B]">
              Boletín Inteligente detecta lo que afecta a tu actividad, lo resume y te
              ayuda a decidir el siguiente paso. La diferencia está en cuánta gente lo
              usa y cuánta operativa necesitas cubrir.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-[16px] border p-8 ${
                  tier.highlighted
                    ? "border-[#1B2A4A] bg-[#1B2A4A] shadow-[0_8px_32px_rgba(27,42,74,0.25)]"
                    : "border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                }`}
              >
                {tier.badge ? (
                  <div className="absolute left-1/2 top-[-12px] -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {tier.badge}
                    </span>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h3
                    className={`mb-1 text-xl font-bold ${
                      tier.highlighted ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      tier.highlighted ? "text-white/70" : "text-[#64748B]"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <div
                  className={`mb-8 border-b pb-6 ${
                    tier.highlighted ? "border-white/10" : "border-[#F1F5F9]"
                  }`}
                >
                  <p
                    className={`text-3xl font-bold tracking-tight ${
                      tier.highlighted ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-2 text-xs ${
                      tier.highlighted ? "text-white/60" : "text-[#64748B]"
                    }`}
                  >
                    {tier.priceNote}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted ? "bg-[#2563EB]/20" : "bg-[#EFF6FF]"
                        }`}
                      >
                        <Check
                          size={11}
                          className={tier.highlighted ? "text-[#60A5FA]" : "text-[#2563EB]"}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.highlighted ? "text-white/85" : "text-[#374151]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 ${
                    tier.highlighted
                      ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                      : "border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-[#94A3B8]">
            <span>Sin permanencia mínima</span>
            <span>Implantación sencilla</span>
            <span>Respuesta humana y contextual</span>
            <span>Criterios ajustados a tu actividad</span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="mt-10 text-center text-sm text-[#64748B]">
            ¿Buscas el Redactor de Informes Urbanísticos, el Asistente de
            Atención al Ciudadano o el Radar de Satisfacción Municipal? Son
            proyectos a medida de cada ayuntamiento:{" "}
            <Link
              href={buildContactHref()}
              className="font-semibold text-[#2563EB] hover:underline"
            >
              hablemos de tu caso
            </Link>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
