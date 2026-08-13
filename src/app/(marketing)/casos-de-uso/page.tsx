import type { Metadata } from "next";
import { Building2, Map, MessageCircle, Radar, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/shared/section-label";
import AnimatedSection from "@/components/shared/animated-section";
import CTABanner from "@/components/sections/cta-banner";
import { USE_CASES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casos de uso",
  description:
    "Escenarios representativos de cómo TRAZEV ayuda a ayuntamientos a reducir carga administrativa y mejorar la relación con la ciudadanía con IA.",
};

const iconMap = { Building2, Map, MessageCircle, Radar } as const;

export default function CasosDeUsoPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-24">
        <section className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
            <SectionLabel className="mb-6">Casos de uso</SectionLabel>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              Cómo se traduce TRAZEV en mejoras reales de operativa
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-[#64748B]">
              Escenarios representativos del tipo de trabajo donde el Redactor
              de Informes Urbanísticos, el Asistente de Atención al Ciudadano,
              BOPA Inteligente y el Radar de Satisfacción Municipal generan
              más impacto.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="space-y-12">
              {USE_CASES.map((useCase, i) => {
                const Icon = iconMap[useCase.icon as keyof typeof iconMap];
                return (
                  <AnimatedSection key={useCase.sector} delay={i * 80}>
                    <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-[12px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] lg:grid-cols-2">
                      <div className="bg-[#1B2A4A] p-10 text-white lg:p-12">
                        <div className="mb-8 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            {Icon && <Icon size={20} className="text-white" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold">
                              {useCase.sector}
                            </div>
                            <div className="text-xs text-white/50">
                              {useCase.location}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                            Situación antes
                          </div>
                          <p className="text-base leading-relaxed text-white/90">
                            {useCase.problem}
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                            Solución planteada
                          </div>
                          <p className="text-sm leading-relaxed text-white/80">
                            {useCase.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between bg-white p-10 lg:p-12">
                        <div>
                          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                            Resultado esperado
                          </div>
                          <p className="mb-8 text-base leading-relaxed text-[#0F172A]">
                            {useCase.result}
                          </p>
                        </div>

                        <div>
                          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2.5">
                            <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                            <span className="font-mono text-base font-bold text-[#2563EB]">
                              {useCase.metric}
                            </span>
                          </div>

                          <div className="border-t border-[#F1F5F9] pt-6">
                            <Link
                              href="/contacto"
                              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors duration-150 hover:text-[#1D4ED8]"
                            >
                              ¿Encaja con tu ayuntamiento o empresa? Hablamos
                              <ArrowRight
                                size={14}
                                className="transition-transform duration-150 group-hover:translate-x-0.5"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
