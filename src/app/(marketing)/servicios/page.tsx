import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Bot, Banknote, ShieldCheck, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import CTABanner from "@/components/sections/cta-banner";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Automatización del BOPA, agentes de IA a medida, gestión de subvenciones IDEPA y cumplimiento normativo para empresas técnicas en Asturias.",
};

const iconMap = { FileText, Bot, Banknote, ShieldCheck } as const;

export default function ServiciosPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        {/* Header */}
        <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
            <SectionLabel className="mb-6">Nuestros servicios</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-6">
              Herramientas reales para el sector asturiano
            </h1>
            <p className="text-[#64748B] text-xl max-w-2xl mx-auto">
              Cada servicio está operativo y adaptado a la realidad del tejido
              empresarial técnico y rural del Principado de Asturias.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <AnimatedSection key={service.slug} delay={i * 80}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="group flex flex-col sm:flex-row items-start gap-6 bg-white rounded-[12px] border border-[#E2E8F0] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#1B2A4A] flex items-center justify-center shrink-0">
                        {Icon && <Icon size={24} className="text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h2 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-150">
                            {service.name}
                          </h2>
                          <div className="px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#16A34A] text-xs font-semibold font-mono">
                            {service.benefit}
                          </div>
                        </div>
                        <p className="text-[#64748B] text-base leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.slice(0, 3).map((f) => (
                            <span
                              key={f}
                              className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[#64748B] text-xs"
                            >
                              {f}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[#64748B] text-xs">
                              +{service.features.length - 3} más
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[#2563EB] text-sm font-semibold">
                          Ver detalle
                          <ChevronRight
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform duration-150"
                          />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <CTABanner />
    </>
  );
}
