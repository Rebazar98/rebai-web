import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Map,
  MessageCircle,
  Radar,
  Bot,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import CTABanner from "@/components/sections/cta-banner";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de TRAZEV para ayuntamientos y empresas: redacción de planes urbanísticos, atención al ciudadano, Boletín Inteligente y medición de satisfacción ciudadana con IA.",
};

const iconMap = { FileText, Map, MessageCircle, Radar, Bot, ShieldCheck } as const;

export default function ServiciosPage() {
  const principales = SERVICES.filter((service) => service.category === "principal");
  const adicionales = SERVICES.filter((service) => service.category === "adicional");

  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
            <SectionLabel className="mb-6">Nuestros servicios</SectionLabel>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              Servicios diseñados para ayuntamientos y empresas que quieren
              ganar tiempo, control y trazabilidad
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-[#64748B]">
              TRAZEV combina redacción de documentos urbanísticos, atención
              ciudadana, vigilancia normativa y medición de satisfacción con IA
              para que tu ayuntamiento o tu empresa tramite mejor, responda
              antes y dedique más tiempo al trabajo que sí aporta valor.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="space-y-8">
              {principales.map((service, i) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <AnimatedSection key={service.slug} delay={i * 80}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="group flex flex-col items-start gap-6 rounded-[12px] border border-[#E2E8F0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_8px_32px_rgba(0,0,0,0.08)] sm:flex-row"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1B2A4A]">
                        {Icon && <Icon size={24} className="text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                          <h2 className="text-xl font-bold text-[#0F172A] transition-colors duration-150 group-hover:text-[#2563EB]">
                            {service.name}
                          </h2>
                          <div className="rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-2.5 py-1 text-xs font-semibold text-[#16A34A]">
                            {service.benefit}
                          </div>
                        </div>
                        <p className="mb-4 text-base leading-relaxed text-[#64748B]">
                          {service.description}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs text-[#64748B]"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs text-[#64748B]">
                              +{service.features.length - 3} más
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                          Ver detalle
                          <ChevronRight
                            size={16}
                            className="transition-transform duration-150 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>

            {adicionales.length > 0 ? (
              <div className="mt-16 border-t border-[#E2E8F0] pt-12">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
                  Otros servicios
                </h2>
                <div className="space-y-4">
                  {adicionales.map((service, i) => {
                    const Icon = iconMap[service.icon as keyof typeof iconMap];
                    return (
                      <AnimatedSection key={service.slug} delay={i * 80}>
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="group flex items-center gap-5 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all duration-200 hover:border-[#BFDBFE] hover:bg-white"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B2A4A]">
                            {Icon && <Icon size={18} className="text-white" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold text-[#0F172A] transition-colors duration-150 group-hover:text-[#2563EB]">
                              {service.name}
                            </h3>
                            <p className="line-clamp-1 text-sm text-[#64748B]">
                              {service.tagline}
                            </p>
                          </div>
                          <ChevronRight
                            size={16}
                            className="shrink-0 text-[#94A3B8] transition-colors duration-150 group-hover:text-[#2563EB]"
                          />
                        </Link>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
      <CTABanner />
    </>
  );
}
